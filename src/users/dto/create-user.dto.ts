import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'Le prénom doit contenir au moins 2 caractères' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: "L'adresse doit contenir au moins 2 caractères" })
  address: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Le code postal doit contenir au moins 2 caractères',
  })
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'La ville doit contenir au moins 2 caractères' })
  city: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/)
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  @Matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  email: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/, {
    message:
      'Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  passwordConfirmation: string;
}
