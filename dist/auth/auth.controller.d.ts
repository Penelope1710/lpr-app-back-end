import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
}
