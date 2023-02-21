import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateCourseDto extends mongoose.Document {
  @IsNotEmpty()
  title: String;
  @IsNotEmpty()
  description: String;
  @IsNotEmpty()
  level: String;
  @IsNotEmpty()
  price: Number;
}
