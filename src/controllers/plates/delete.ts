import { plateService } from '../../services/plate-service';
import { Plate } from '../../services/common/plate';
import { resFail, resSuccess } from '../common/response-body';

import { Request, Response } from 'express';

export function deletePlate(req: Request, res: Response, next) {
    let id = req.params.id;
    plateService.delete(id)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}