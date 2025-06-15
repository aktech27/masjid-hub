import { Request, Response } from "express";

export type TypedRequest<B = {}, P = {}, Q = {}> = Request<P, any, B, Q>;
export type TypedResponse<T> = Response<T>;

export interface GenericResponseBody {
  message: string;
  warning?: string;
  data?: any;
  error?: any;
}
