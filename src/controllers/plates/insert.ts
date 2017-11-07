import { plateService } from '../../services/plate-service';
import { Plate } from '../../services/common/plate';
import { resFail, resSuccess } from '../common/response-body';

import { Request, Response } from 'express';

export function insert(req: Request, res: Response, next) {
    let body: Plate = req.body;
    plateService.insert(body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));

}