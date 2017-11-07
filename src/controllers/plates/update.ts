import { plateService } from '../../services/plate-service';
import { Plate } from '../../services/common/plate';
import { resFail, resSuccess } from '../common/response-body';

import { Request, Response } from 'express';

export function update(req: Request, res: Response, next) {
    let id = req.params.id;
    let body: Plate = req.body;
    plateService.update(id, body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}