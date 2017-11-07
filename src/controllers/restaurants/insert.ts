import { restaurantService } from '../../services/restaurant-service';
import { Restaurant } from '../../services/common/restaurant';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export interface InsertBody {
    tablesNumber: number;
    restaurant: Restaurant;
}

export function insert(req: Request, res: Response) {
    let body: InsertBody = req.body;
    restaurantService
        .insertWithTables(body.restaurant, body.tablesNumber)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}