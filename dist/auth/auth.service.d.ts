import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
}
