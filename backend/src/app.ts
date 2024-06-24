import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import githubRoutes from './routes/githubRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/github', githubRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
