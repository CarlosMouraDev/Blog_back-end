import { Controller } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(private readonly configService: ConfigModule) {}
}
