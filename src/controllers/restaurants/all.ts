import { restaurantService } from '../../services/restaurant-service';
import { Restaurant } from '../../services/common/restaurant';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export class RestaurantQuery {

    limit: number;
    skip: number;

    constructor(query: any) {
        this.limit = query.limit ? parseInt(query.limit) : 0;
        this.skip = query.skip ? parseInt(query.skip) : 0;
    }
}

export function all(req: Request, res: Response, next) {
    let query: RestaurantQuery =
        new RestaurantQuery(req.query);
    restaurantService.all(query.skip, query.limit)
        .then(result => resSuccess<Restaurant[]>(res, result))
        .catch(err => resFail(res, 500, err));
}