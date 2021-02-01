import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAllUsers(): Promise<any> {
    const users = await this.usersService.findAll();

    return {
      statusCode: HttpStatus.OK,
      users,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async createNewUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<any> {
    const newUser = await this.usersService.create(createUserDto);

    return {
      statusCode: HttpStatus.CREATED,
      newUser,
    };
  }
}
