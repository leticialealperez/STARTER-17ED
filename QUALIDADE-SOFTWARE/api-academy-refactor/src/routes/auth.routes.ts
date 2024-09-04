import { Router } from 'express';
import { AuthController } from '../controllers';
import { LoginMiddleware } from '../middlewares';

export class AuthRoutes {
  public static execute(): Router {
    const router = Router();
    const controller = new AuthController();

    router.post(
      '/login',
      [
        LoginMiddleware.validateMissingFields,
        LoginMiddleware.validateFieldTypes,
      ],
      controller.login,
    );

    return router;
  }
}
