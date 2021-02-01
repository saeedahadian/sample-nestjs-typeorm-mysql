import { Module, Global } from '@nestjs/common';
import { AppConfigModule } from './configs/app/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule } from './configs/database/mysql/config.module';
import { DatabaseConfigService } from './configs/database/mysql/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Global()
@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: (databaseConfigService: any) => ({
        type: databaseConfigService.type,
        host: databaseConfigService.host,
        port: databaseConfigService.port,
        username: databaseConfigService.username,
        password: databaseConfigService.password,
        database: databaseConfigService.name,
        entities: [User],
        synchronize: databaseConfigService.synchronzie,
      }),
      inject: [DatabaseConfigService],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
