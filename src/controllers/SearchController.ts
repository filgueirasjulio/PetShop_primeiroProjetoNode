import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { activeMenuObject } from '../helpers/activeMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if (!query) {
        res.redirect('/');
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: activeMenuObject(''),
        list,
        query
    });
}