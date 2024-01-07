import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Post()
  Add(@Body() body: UserDto) {
    return this.usersServices.Add(body);
  }

  @Get()
  FindAllUsers() {
    return this.usersServices.FindAll();
  }

  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return this.usersServices.FindOne(id);
  }

  @Put('/:userId')
  UpdateUser(@Param('userId') userId: string, @Body() body: UserDto) {
    return this.usersServices.Update(userId, body);
  }

  @Delete('/:id')
  DeleteUser(@Param('id') id: string) {
    return this.usersServices.Delete(id);
  }

  @Post('/search')
  Search(@Query('key') key: string) {
    return this.usersServices.SearchUsers(key);
  }

  @Post('/faker')
  Faker(){
    return this.usersServices.Faker()
  }
}
