import { Router } from 'express';
import { StudentsController } from '../controllers/students.controller';
import { CreateStudentMiddleware } from '../middlewares/students/create-student.middleware';


export class StudentsRoutes {

    public static execute(): Router {
       const router = Router();

       // definições de rotas para students
       router.post("/", [CreateStudentMiddleware.validate], StudentsController.create);
       router.get("/", StudentsController.list);
       router.get("/:id", StudentsController.get);
       router.put("/", StudentsController.update);
       router.delete("/", StudentsController.delete);

       return router;
    }

}