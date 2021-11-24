import { Request, Response, Router, NextFunction } from "express";
import { DeliveryAreaService } from "../service/delivery-area.service";

export class DeliveryAreaController {
  public router = Router();

  constructor(private deliveryAreaService: DeliveryAreaService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/")
      .get(this.findAll)
      .post(this.create);
  }

  public findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deliveryAreas = await this.deliveryAreaService.findAll();
      res.send(deliveryAreas);
    } catch (err) {
      next(err)
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deliveryArea = await this.deliveryAreaService.save(req.body);
      res.send(deliveryArea);
    } catch (err) {
      next(err)
    }
  }
}