export * from "./utilities/asyncHandler.middleware";
export * from "./utilities/customError.exception";

declare global {
  namespace Express {
    interface Request {
      context: {
        [key: string]: any;
      };
    }
  }
}
