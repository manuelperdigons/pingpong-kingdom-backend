import { Module } from '@nestjs/common';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';

@Module({
    imports: [],
    controllers: [TournamentController],
    providers: [TournamentService],
})
export class TournamentModule { }