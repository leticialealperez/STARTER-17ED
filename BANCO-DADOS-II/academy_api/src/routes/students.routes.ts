import { Router } from 'express';
import { AddressesController } from '../controllers/addresses.controller';
import { StudentsController } from '../controllers/students.controller';
import { AuthMiddleware } from '../middlewares/auth/auth.middleware';
import { CreateStudentMiddleware } from '../middlewares/students/create-student.middleware';


export class StudentsRoutes {

    public static execute(): Router {
       const router = Router();

       // definições de rotas para students
       router.post("/", [CreateStudentMiddleware.validate], StudentsController.create);
       router.get("/", StudentsController.list);
       router.get("/:studenId", StudentsController.get);
       router.put("/:studenId", StudentsController.update);
       router.delete("/:studenId", StudentsController.delete);

       router.post("/addresses", [AuthMiddleware.validate], AddressesController.create);

       return router;
    }

}