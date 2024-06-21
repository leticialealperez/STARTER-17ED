import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { AssessmentsRoutes } from './routes/assessments.routes';
import { AuthRoutes } from './routes/auth.routes';
import { EnrollmentsRoutes } from './routes/enrollments.routes';
import { StudentsRoutes } from './routes/students.routes';


const app = express();
app.use(express.json());
app.use(cors());


// definição das rotas
app.get("/", (_, res) => {
    res.status(200).json({
        message: "Hello Growdever!",
        ok: true
    });
});

app.use("/students", StudentsRoutes.execute());
app.use("/auth", AuthRoutes.execute());
app.use("/assessments", AssessmentsRoutes.execute());
app.use("/enrollments", EnrollmentsRoutes.execute());


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} 🚀`)
})