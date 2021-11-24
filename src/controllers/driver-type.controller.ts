import { NextFunction, Request, Response, Router } from "express";
import { DriverTypeService } from "../service/driver-type.service";

export class DriverTypeController {
  public router = Router();

  constructor(private driverTypeService: DriverTypeService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/")
      .get(this.findAll)
      .post(this.create);
  }

  public findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const driverTypes = await this.driverTypeService.findAll();
      res.send(driverTypes);
    } catch (err) {
      next(err)
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const driverType = await this.driverTypeService.save(req.body);
      res.send(driverType);
    } catch (err) {
      next(err)
    }
  }
}