import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Post()
  Add() {
    return 'Add';
  }

  @Get()
  FindAllUsers() {
    return 'FindAllUsers';
  }

  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return id;
  }

  @Put('/:userId')
  UpdateUser(@Param('userId') userId: string) {
    return userId;
  }

  @Delete('/:id')
  DeleteUser(@Param('id') id: string) {
    return id;
  }

  @Post('/search')
  Search(@Query('key') key: string) {
    return key;
  }
}
