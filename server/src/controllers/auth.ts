import logger from "@config/logger";
import { OnboardUserRequest, OnboardUserResponse } from "@/types/http";
import * as authServices from "@services/auth.service";

export const onboardUserController = async (
  req: OnboardUserRequest,
  res: OnboardUserResponse
): Promise<void> => {
  try {
    const { name, username, email, phone, role } = req.body;
    const serviceResp = await authServices.onboardUserService({
      email,
      phone,
      username,
      name,
      role,
    });

    logger.debug("Controller :: User Board Service response %o", serviceResp);

    if (!serviceResp.isSuccessful) {
      res
        .status(422)
        .json({ message: "Unable to onboard user", error: serviceResp.error });
      return;
    }

    res
      .status(200)
      .json({ message: "User Created Successfully", data: serviceResp.data });
    return;
  } catch (error: unknown) {
    logger.error("Controller :: User Onboard", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    res
      .status(500)
      .json({ message: "Internal Server Error", error: errorMessage });
    return;
  }
};
