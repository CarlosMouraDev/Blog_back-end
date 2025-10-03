import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: number) {
    return 'testing ' + id;
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
