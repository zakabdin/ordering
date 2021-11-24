import { Application, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import Services from "./service/services";
import { DriverTypeController } from "./controllers/driver-type.controller";
import { DeliveryAreaController } from "./controllers/delivery-area.controller";
import { DriverController } from "./controllers/driver.controller";
import { handleError } from './middlewares/error.handler';

class App {
  public app: Application;
  private _services: Services;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setControllers() {
    const driverTypeController = new DriverTypeController(this._services.driverTypeService);
    this.app.use("/api/v1/driver-types", driverTypeController.router);

    const deliveryAreaController = new DeliveryAreaController(this._services.deliveryAreaService);
    this.app.use("/api/v1/driver-areas", deliveryAreaController.router);

    const driverController = new DriverController(this._services.driverService);
    this.app.use("/api/v1/drivers", driverController.router);
  }

  private initAfterRouteMiddlewares() {
    this.app.use((err: any, req: any, res: Response, next: NextFunction) => {
      handleError(err, res);
    });
  }

  public set services(value: Services) {
    this._services = value;
    this.setControllers();
    this.initAfterRouteMiddlewares();
  }

}

export default new App();