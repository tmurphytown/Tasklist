import { Router } from 'express';
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/TaskController';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default router;