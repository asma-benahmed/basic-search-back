import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [ CoursesModule, MongooseModule.forRoot('mongodb+srv://asmabena7med:c2etiNQ5PC9GsQ9F@cluster0.ttt4jvv.mongodb.net/basic-search?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
