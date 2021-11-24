import { Document, model } from "mongoose";
import mongoose from "mongoose";

export interface IDeliveryArea extends Document {
  name: string
}

const DeliveryAreaSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Field is required'] },
}, {
  timestamps: true
});

export const DeliveryArea = model<IDeliveryArea>('DeliveryArea', DeliveryAreaSchema);