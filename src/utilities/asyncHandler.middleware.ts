import { Request as ExpressRequest, Response, NextFunction } from "express";

// interface ExpressRequest<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = qs.ParsedQs, Locals extends Record<string, any>

type ExtendedRequest<
  P = Record<string, any>,
  ResBody = any,
  ReqBody = any,
  ReqQuery = qs.ParsedQs,
> = ExpressRequest<P, ResBody, ReqBody, ReqQuery>;

/**
 * Wraps an async express route handler or middleware with a try-catch block.
 * Use this to avoid having to write try-catch blocks in every async route handler/middleware.
 *
 * @param fn An async express route handler or middleware
 * @returns A new async express route handler or middleware that catches any errors thrown by the original handler/middleware
 */
export default function asyncHandler<T>(
  fn: (req: ExtendedRequest<T>, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: ExtendedRequest<T>, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
