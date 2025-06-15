import { OnboardUserRequestBody } from "../http";

export type OnboardUserServiceArgs = OnboardUserRequestBody;

export interface OnboardUserServiceResponse {
  isSuccessful: boolean;
  error?: string;
  data?: any;
}
