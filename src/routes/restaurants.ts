import { Router } from 'express';
import {
    all, allLocation, insert, update, deleteRes
    , allTable, tableAvailable, tableUpdate
} from '../controllers/restaurants/index';
import { verifyAuth } from '../middlewares/auth';

const router: Router = Router();

router.use(verifyAuth);

router.get('/', all);
router.get('/point', allLocation);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', deleteRes);
router.get('/:id/tables', allTable);
router.get('/:id/tables/available', tableAvailable);
router.put('/:id/tables', tableUpdate);

export default router;