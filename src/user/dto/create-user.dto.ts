import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: "Name can't be empty." })
  @IsString({ message: 'Name needs to be a string.' })
  name: string;

  @IsEmail({}, { message: 'Invalid email.' })
  email: string;

  @IsNotEmpty({ message: "Password can't be empty." })
  @IsString({ message: 'Password needs to be a string.' })
  password: string;
}
