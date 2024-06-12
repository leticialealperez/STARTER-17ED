import cors from 'cors';
import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());

// definição das rotas

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} 🚀`)
});
