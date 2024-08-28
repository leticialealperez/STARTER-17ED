import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './docs/swagger.json';
import {
  AssessmentsRoutes,
  AuthRoutes,
  ClassesRoutes,
  EnrollmentsRoutes,
  StudentsRoutes,
} from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'Hello Growdever!',
    ok: true,
  });
});

app.use('/docs', swaggerUI.serve);
app.get('/docs', swaggerUI.setup(swaggerDoc)); // UI

app.use('/students', StudentsRoutes.execute());
app.use('/auth', AuthRoutes.execute());
app.use('/assessments', AssessmentsRoutes.execute());
app.use('/classes', ClassesRoutes.execute());
app.use('/enrollments', EnrollmentsRoutes.execute());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} 🚀`);
});
