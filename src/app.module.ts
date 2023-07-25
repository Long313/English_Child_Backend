import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UnitsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
