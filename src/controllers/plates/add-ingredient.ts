import { plateService } from '../../services/plate-service';
import { Plate } from '../../services/common/plate';
import { resFail, resSuccess } from '../common/response-body';

import { Request, Response } from 'express';

export interface IngredientBody {
    name: string;
}

export function addIngredient(req: Request, res: Response, next) {
    let body: IngredientBody = req.body;
    let id = req.params.id;

    plateService.addIngredient(id, body.name)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}