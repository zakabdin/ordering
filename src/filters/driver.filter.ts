import { BaseFilter } from "./base.filter";
import { IDriver } from "../models/driver.model";
import { StatusEnum } from "../enums/status.enum";

export class DriverFilter extends BaseFilter<IDriver> {

  public vehicleType(value: string) {
    this.filters.vehicleType = { '_id': value };
  }

  public status(value: string) {
    this.filters.status = value as StatusEnum;
  }

  public deliveryAreas(values: string) {
    const areas: Array<string> = values.split(',');
    this.filters.deliveryAreas = { $in: areas }
    }
}