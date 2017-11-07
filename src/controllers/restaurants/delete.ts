import { restaurantService } from '../../services/restaurant-service';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function deleteRes(req: Request, res: Response, next) {
    let id = req.params.id;
    restaurantService.delete(id)
        .then(result => resSuccess(res, true))
        .catch(err => resFail(res, 500, err))
}
