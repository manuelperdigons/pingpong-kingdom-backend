import { Test, TestingModule } from '@nestjs/testing';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';

describe('AppController', () => {
  let appController: TournamentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TournamentController],
      providers: [TournamentService],
    }).compile();

    appController = app.get<TournamentController>(TournamentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
