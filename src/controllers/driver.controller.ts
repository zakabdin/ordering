import { Request, Response, Router, NextFunction } from "express";
import { DriverService } from "../service/driver.service";

export class DriverController {
  public router = Router();

  constructor(private driverService: DriverService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/")
      .get(this.findAll)
      .post(this.create);
    this.router.route('/status/:id').put(this.changeStatus);
  }

  public findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const drivers = await this.driverService.findAll(req);
      res.send(drivers);
    } catch (err) {
      next(err)
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const driver = await this.driverService.save(req.body);
      res.send(driver);
    } catch (err) {
      next(err)
    }
  }

  public changeStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const driver = await this.driverService.changeStatus(req.params.id, req.body.status);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  }
}