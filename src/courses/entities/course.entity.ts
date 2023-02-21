import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: String, required: true },
  price: { type: Number, required: true },
});
