import { Driver, IDriver } from "../models/driver.model";
import { StatusEnum } from "../enums/status.enum";
import { NotFoundException } from "../middlewares/error.handler";
import { Request } from "express";
import Services from "./services";

export class DriverService {

  public async findAll(req: Request): Promise<IDriver[]> {
    const services = await Services.getInstance();

    return Driver.find(services.driverFilters.buildFilters(req.query))
    .populate({
      path: "vehicleType",
      select: "name",
    })
    .populate({
      path: "deliveryAreas",
      select: "name",
    })
    .exec();
  }

  public async save(driver: IDriver): Promise<IDriver> {
    const newDriver = new Driver(driver);
    return newDriver.save();
  }

  public async changeStatus(id: string, status: StatusEnum): Promise<IDriver> {
    let driver: IDriver | null = await Driver.findOne({ _id: id }).exec();
    if (!driver) throw new NotFoundException('Not found');
    driver.status = status;
    return driver.save();
  }
}