import { DeliveryArea, IDeliveryArea } from "../models/delivery-area.model";

export class DeliveryAreaService {

  public async findAll(): Promise<IDeliveryArea[]> {
    return DeliveryArea.find({}).exec();
  }

  public async save(test: IDeliveryArea): Promise<IDeliveryArea> {
    const newDeliveryArea = new DeliveryArea(test);
    return newDeliveryArea.save();
  }
}