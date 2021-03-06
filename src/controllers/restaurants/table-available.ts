import {restaurantService} from '../../services/restaurant-service';
import {Table} from '../../services/common/restaurant';
import {resFail, resSuccess} from '../common/response-body';

import {Response, Request} from 'express';

export function tableAvailable(req: Request, res: Response, next) {
    let id = req.params.id;
    restaurantService.tablesByAvailable(id)
        .then(result => resSuccess<Table[]>(res, result))
        .catch(err => resFail(res, 500, err));
}