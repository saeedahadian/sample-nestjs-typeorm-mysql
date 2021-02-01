import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  public get name(): string {
    return this.configService.get<string>('app.name');
  }

  public get env(): string {
    return this.configService.get<string>('app.env');
  }

  public get host(): string {
    return this.configService.get<string>('app.host');
  }

  public get port(): number {
    return this.configService.get<number>('app.port');
  }
}
