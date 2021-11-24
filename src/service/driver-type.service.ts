import { DriverType, IDriverType } from "../models/driver-type.model";

export class DriverTypeService {

  public async findAll(): Promise<IDriverType[]> {
    return DriverType.find({}).exec();
  }

  public async save(test: IDriverType): Promise<IDriverType> {
    const newDriverType = new DriverType(test);
    return newDriverType.save();
  }
}