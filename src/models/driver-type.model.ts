import { StatusEnum } from "../enums/status.enum";
import { Document, model } from "mongoose";
import mongoose from "mongoose";

export interface IDriverType extends Document {
  name: string
  status: StatusEnum
}

const DriverTypeSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Field is required'] },
  status: { type: String, enum: StatusEnum, required: [true, 'Field is required'], default: StatusEnum.ACTIVE }
}, {
  timestamps: true
});

export const DriverType = model<IDriverType>('DriverType', DriverTypeSchema);