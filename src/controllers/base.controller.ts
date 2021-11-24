import { Router } from "express";

export abstract class BaseController {
  public router = Router();

  protected constructor() {
    this.setRoutes()
  }

  abstract setRoutes(): void;
}
