import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TournamentModule } from './tournaments/tournament.module';
import { AuthModule } from './auth/auth.module';
import { ProtectMiddleware } from './common/middleware/protect.middleware';

@Module({
  imports: [TournamentModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProtectMiddleware)
      .forRoutes('tournament');
  }
}
