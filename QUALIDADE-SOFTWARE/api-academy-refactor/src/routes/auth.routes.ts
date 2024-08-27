import { Router } from 'express';
import { AuthController } from '../controllers';
import { LoginMiddleware } from '../middlewares';

export class AuthRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      '/login',
      [
        LoginMiddleware.validateMissingFields,
        LoginMiddleware.validateFieldTypes,
      ],
      AuthController.login,
    );

    return router;
  }
}
