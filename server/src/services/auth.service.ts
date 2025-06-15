import {
  OnboardUserServiceArgs,
  OnboardUserServiceResponse,
} from "@/types/services/auth";
import logger from "@config/logger";
import {
  createNewUser,
  findDuplicateUser,
} from "@/repositories/auth.repository";
import { generateRandomPassword, hashPassword } from "@utils/passwordUtility";

export const onboardUserService = async (
  userDetails: OnboardUserServiceArgs
): Promise<OnboardUserServiceResponse> => {
  try {
    const duplicateUser = await findDuplicateUser({
      email: userDetails.email,
      phone: userDetails.phone,
      username: userDetails.username,
    });

    if (duplicateUser && duplicateUser.isFound) {
      logger.debug("Duplicate User found :: %o", duplicateUser.user);
      return {
        isSuccessful: false,
        error: "User already exists",
        data: duplicateUser.user,
      };
    }

    logger.debug("Proceeding to create user");
    const password = await hashPassword(generateRandomPassword());
    const newUser = await createNewUser({
      ...userDetails,
      password,
    });
    logger.debug("User created successfully :: %o", newUser);

    return {
      isSuccessful: true,
      data: newUser,
    };
  } catch (error: unknown) {
    logger.error("Service :: User Onboard %o", error);
    return {
      isSuccessful: false,
      error: "Failed to Onboard user",
    };
  }
};
