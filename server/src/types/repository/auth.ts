import { SelectUser } from "@/db/schema/users";

export interface FindDuplicateUserRepoArgs {
  email: string;
  phone: string;
  username: string;
}

export interface FindDuplicateUserRepoResponse {
  isFound: boolean;
  user?: Pick<
    SelectUser,
    "id" | "name" | "email" | "phone" | "username" | "roleId"
  > | null;
}
