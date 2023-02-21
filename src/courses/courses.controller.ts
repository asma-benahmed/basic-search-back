import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async addProduct(
    @Body('title') courseTitle: string,
    @Body('description') courseDesc: string,
    @Body('level') courseLevel: string,
    @Body('price') coursePrice: number,
  ) {
    const generatedId = await this.coursesService.insertCourse(
      courseTitle,
      courseDesc,
      courseLevel,
      coursePrice,
    );
    return { id: generatedId };
  }

  @Get()
  async getCourses(): Promise<any> {
    const courses = await this.coursesService.getAll();
    return courses;
  }

  @Get('search/:search_query')
  async filterCourses(@Param() search_query): Promise<any> {
    const courses = await this.coursesService.filterData(search_query);
    return courses;
  }

  @Get('getById/:id')
  async findById(@Param() data): Promise<any> {
    const course = await this.coursesService.findById(data);
    return course;
  }
}
