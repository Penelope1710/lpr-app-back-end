import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(createUserDto: CreateUserDto) {
    const { password, passwordConfirmation } = createUserDto;

    if (password !== passwordConfirmation) {
      throw new BadRequestException(
        'Les mots de passe doivent être identiques',
      );
    }
    return this.usersService.create(createUserDto);
  }
}
