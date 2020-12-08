import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../config.env` });

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.CLIENT_EMAIL,
    projectId: process.env.PROJECT_ID,
  }),
});

const db = admin.firestore();

@Injectable()
export class TournamentService {
  async findAll() {
    const allUsers = await db.collection('tournaments').get();
    return allUsers.docs.map((doc) => doc.data());
  }
  async create(body) {
    const newUser = await db.collection('tournaments').add(body);
    return (await newUser.get()).data();
  }
}
