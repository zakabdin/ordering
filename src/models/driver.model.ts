import { IDeliveryArea } from "./delivery-area.model";
import * as mongoose from "mongoose";
import { Document, model } from "mongoose";
import { IDriverType } from "./driver-type.model";
import {StatusEnum} from "../enums/status.enum";

export interface IDriver extends Document {
  vehicleColor: string
  vehicleType: IDriverType['_id']
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  deliveryAreas: Array<IDeliveryArea['_id']>
  status: StatusEnum
}

const DriverSchema = new mongoose.Schema({
  vehicleColor: { type: String, required: [true, 'Field is required'] },
  vehicleType: { type: mongoose.Schema.Types.ObjectId, ref: 'DriverType' },
  email: { type: String, required: [true, 'Field is required'] },
  phone: { type: String, required: [true, 'Field is required'] },
  deliveryAreas: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryArea'
    }
  ],
  status: { type: String, enum: StatusEnum, required: [true, 'Field is required'], default: StatusEnum.ACTIVE },
  name: {
    first: { type: String, required: [true, 'Field is required'] },
    last: { type: String, required: [true, 'Field is required'] }
  }
}, {
  timestamps: true
});

export const Driver = model<IDriver>('Driver', DriverSchema);