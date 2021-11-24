import {DB} from "../db/db";
import {DriverService} from "./driver.service";
import {DriverTypeService} from "./driver-type.service";
import {DeliveryAreaService} from "./delivery-area.service";
import {DriverFilter} from "../filters/driver.filter";

export default class Services {
  protected constructor() {}
  public driverService: DriverService;
  public driverTypeService: DriverTypeService;
  public deliveryAreaService: DeliveryAreaService;
  public driverFilters: DriverFilter;
  private db: DB;
  private static services: Services;

  static async getInstance(): Promise<Services> {
    if (!Services.services) {
      try {
        Services.services = new Services();
        const db = new DB();
        await db.init();
        Services.services.db = db;
        Services.services.driverFilters = new DriverFilter();
        Services.services.driverService = new DriverService();
        Services.services.driverTypeService = new DriverTypeService();
        Services.services.deliveryAreaService = new DeliveryAreaService();
      } catch (e) {
        throw e;
      }
    }

    return Services.services;
  }
}