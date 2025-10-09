import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty({ message: "Password can't be empty." })
  @IsString({ message: 'Password needs to be a string.' })
  currentPassword: string;

  @IsNotEmpty({ message: "New password can't be empty." })
  @IsString({ message: 'New password needs to be a string.' })
  @MinLength(6, { message: 'Min length: 6.' })
  newPassword: string;
}
