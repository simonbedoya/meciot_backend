import { restaurantService } from '../../services/restaurant-service';
import { resFail, resSuccess } from '../common/response-body';
import {tableIO} from "../../services/table-io-service";

import { Response, Request } from 'express';

export interface TableUpdateBody {
    table: number;
    available: boolean;
}

export function tableUpdate(req: Request, res: Response, next) {
    let body: TableUpdateBody = req.body;
    let id = req.params.id;
    restaurantService
        .tableUpdate(id, body.table, body.available)
        .then(result => {
            tableIO.changeAvailable(req.params.id, body.table, body.available);
            resSuccess(res)})
        .catch(err => resFail(res, 500, err))
}