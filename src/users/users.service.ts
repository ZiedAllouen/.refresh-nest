import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  Add(body: UserDto) {
    return this.userModel.create(body);
  }
  FindAll() {
    return this.userModel.find();
  }

  FindOne(id: string) {
    return this.userModel.findById({ _id: id });
  }
  Update(userId: string, body: UserDto) {
    return this.userModel.findByIdAndUpdate(
      { _id: userId },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.userModel.findOneAndDelete({ _id: id });
  }

  SearchUsers(key: string) {
    const keyWord = key
      ? {
          $or: [
            { fullName: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.userModel.find(keyWord);
  }

  Faker() {
    for (let index = 0; index < 30; index++) {
      const fakeUser = {
        fullName: faker.name.fullName(),
        email: faker.internet.email(),
        age: 26,
        country: faker.location.city(),
      };
      this.userModel.create(fakeUser);
    }
    return 'users created successfully'
  }
}
