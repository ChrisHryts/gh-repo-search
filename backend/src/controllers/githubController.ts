import { Request, Response } from 'express';
import githubService from '../services/githubService';

const githubController = async (req: Request, res: Response) => {
  const { query, page, language } = req.query;

  try {
    const data = await githubService(query as string, Number(page) || 1, language as string);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export default githubController;
