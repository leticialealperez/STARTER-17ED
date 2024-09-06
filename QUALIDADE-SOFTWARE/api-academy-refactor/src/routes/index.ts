import { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from '../docs/swagger.json';
import { AssessmentsRoutes } from './assessments.routes';
import { AuthRoutes } from './auth.routes';
import { ClassesRoutes } from './classes.routes';
import { EnrollmentsRoutes } from './enrollments.routes';
import { StudentsRoutes } from './students.routes';

export function makeRoutes(app: Express) {
  app.get('/', (_, res) => {
    res.status(200).json({
      message: 'Hello Growdever!',
      ok: true,
    });
  });

  app.use('/docs', swaggerUI.serve);
  app.get('/docs', swaggerUI.setup(swaggerDoc));

  app.use('/students', StudentsRoutes.execute());
  app.use('/auth', AuthRoutes.execute());
  app.use('/assessments', AssessmentsRoutes.execute());
  app.use('/classes', ClassesRoutes.execute());
  app.use('/enrollments', EnrollmentsRoutes.execute());
}
