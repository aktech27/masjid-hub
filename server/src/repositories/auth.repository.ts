import { eq, or } from "drizzle-orm";

import db from "@/db";
import users from "@schema/users";
import {
  FindDuplicateUserRepoArgs,
  FindDuplicateUserRepoResponse,
} from "@/types/repository/auth";
import logger from "@config/logger";
import { OnboardUserServiceArgs } from "@/types/services/auth";

export const findDuplicateUser = async ({
  email,
  phone,
  username,
}: FindDuplicateUserRepoArgs): Promise<FindDuplicateUserRepoResponse> => {
  const result = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      phone: users.phone,
      username: users.username,
      roleId: users.roleId,
    })
    .from(users)
    .where(
      or(
        eq(users.email, email),
        eq(users.phone, phone),
        eq(users.username, username)
      )
    );
  logger.debug("Find Duplicate User :: Result %o", result);
  return {
    isFound: result.length > 0,
    user: result[0] ?? null,
  };
};

export const createNewUser = async (
  userDetails: OnboardUserServiceArgs & { password: string }
) => {
  const result = await db
    .insert(users)
    .values({
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phone,
      username: userDetails.username,
      password: userDetails.password,
      roleId: userDetails.role,
      createdAt: new Date(),
      isDeleted: false,
      deletedAt: null,
    })
    .returning();

  logger.debug("Create New User :: Result %o", result);
  return result;
};
