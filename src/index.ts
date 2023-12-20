import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import roleRoutes from './routes/RoleRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use(roleRoutes);

app.listen(port, () => {
  console.log(`[server] app listening at http://localhost:${port}`);
});
