import { Injectable, NestMiddleware } from '@nestjs/common';
import admin from 'firebase-admin';
import { Request, Response } from 'express';
import { error } from 'console';

@Injectable()
export class ProtectMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        const sessionCookie = req.cookies.session || '';
        admin.auth().verifySessionCookie(sessionCookie, true).then(() => {
            next();
        }).catch((error) => {
            res.status(401).send('Unauthorised Request');
        })
    }
}