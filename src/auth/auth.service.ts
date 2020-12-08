import { Injectable, Body, Response } from '@nestjs/common';
import admin from 'firebase-admin';
import { error } from 'console';

const db = admin.firestore();

@Injectable()
export class AuthService {
    async logIn(@Body() body, @Response() res) {
        // token should be given by client side as a header by getIdToken function
        const token = body.idToken.toString();
        this.createToken(body, res, token);
    }
    async signup(@Body() body, @Response() res) {
        await admin.auth().createUser({
            email: body.email,
            emailVerified: false,
            phoneNumber: body.phoneNumber,
            password: body.password,
            displayName: body.displayName,
            photoURL: body.photoURL,
            disabled: false,
        }).then(async (user) => {
            const token = body.idToken.toString();
            // token should be given by client side as a header by getIdToken function
            await this.createToken(body, res, token);
        }).catch((error) => {
            res.status(404).send('Error creating user');
        });
    }
    async logOut(@Response() res) {
        res.clearCookie('session');
        res.redirect('/login');
    }
    async createToken(@Body() body, @Response() res, token) {
        const expiresIn = 60 * 60 * 24 * 1000;
        await admin.auth().createSessionCookie(token, { expiresIn: expiresIn }).then((sessionCookie) => {
            const options = { maxAge: expiresIn, httpOnly: true };
            res.cookie('session', sessionCookie, options);
            res.status(201).send('User logged in');
        }).catch((error) => {
            console.log(error);
            res.status(401).send('Unauthorised Request');
        })
    }
}