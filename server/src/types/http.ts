import { TypedRequest, TypedResponse, GenericResponseBody } from ".";
import { SelectUser } from "@schema/users";

export interface OnboardUserRequestBody {
  name: string;
  username: string;
  email: string;
  phone: string;
  role: number;
}

export interface OnboardUserSuccessResponseBody extends GenericResponseBody {
  data: Omit<SelectUser, "password">[];
}

export interface OnboardUserErrorResponseBody extends GenericResponseBody {
  error: any;
}

export type OnboardUserRequest = TypedRequest<OnboardUserRequestBody>;
export type OnboardUserResponse = TypedResponse<
  OnboardUserSuccessResponseBody | OnboardUserErrorResponseBody
>;
