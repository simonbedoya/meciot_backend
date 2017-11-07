import { restaurantService } from '../../services/restaurant-service';
import { Restaurant } from '../../services/common/restaurant';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function update(req: Request, res: Response, next) {
    let id = req.params.id;
    let body: Restaurant = req.body;

    restaurantService.update(id, body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}