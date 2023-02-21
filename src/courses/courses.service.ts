import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<CreateCourseDto>,
  ) {}

  async insertCourse(
    title: string,
    desc: string,
    level: string,
    price: number,
  ) {
    try {
      const newCourse = new this.courseModel({
        title,
        description: desc,
        level,
        price,
      });
      const result = await newCourse.save();
      return result.id as string;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    const result = await this.courseModel.find();
    return result;
  }

  async findById(data: any) {
    try {
      const result = await this.courseModel.findById(data.id);
      return result;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async filterData(data: any) {
    try {
      const result = await this.courseModel.find({
        title: { $regex: data.search_query.replace('%', ' '), $options: 'i' },
      });
      return {
        result,
      };
    } catch (error) {
      return error;
    }
  }
}
