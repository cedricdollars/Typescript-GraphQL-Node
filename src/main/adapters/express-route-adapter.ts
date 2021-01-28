import { Controller } from "@/presentation/protocols/controller";
import { Request, Response } from "koa";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
    };
  };
};
