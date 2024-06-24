import { Router } from 'express';
import githubController from '../controllers/githubController';

const router = Router();

router.get('/search', githubController);

export default router;
