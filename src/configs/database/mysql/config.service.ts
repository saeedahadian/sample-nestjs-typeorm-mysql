import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  public get type(): string {
    return this.configService.get<string>('database.type');
  }

  public get host(): string {
    return this.configService.get<string>('database.host');
  }

  public get port(): number {
    return this.configService.get<number>('database.port');
  }

  public get username(): string {
    return this.configService.get<string>('database.username');
  }

  public get password(): string {
    return this.configService.get<string>('database.password');
  }

  public get name(): string {
    return this.configService.get<string>('database.name');
  }

  public get entities(): string[] {
    return [this.configService.get<string>('database.entities')];
  }

  public get synchronzie(): boolean {
    return this.configService.get<boolean>('database.synchronzie');
  }
}
