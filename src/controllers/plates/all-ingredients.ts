import { plateService } from '../../services/plate-service';
import { Plate } from '../../services/common/plate';
import { resFail, resSuccess } from '../common/response-body';

import { Request, Response } from 'express';

export function allByIngredients(req: Request, res: Response, next) {

    let ingredients: string[] = req.query.ingredients ?
        req.query.ingredients.split(",") : null;

    plateService.allByIngredients(ingredients)
        .then(result => resSuccess<Plate[]>(res, result))
        .catch(err => resFail(res, 500, err));

}