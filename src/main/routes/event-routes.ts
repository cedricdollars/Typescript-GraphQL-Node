import { Express, Router, Request, Response, NextFunction } from "express";
import {
  LoadEventController,
  AddEventController,
  LoadAllEventController,
} from "../../presentation/controllers/event-controller";

export class EventRouter {
  private express: Express;
  constructor(express: Express) {
    this.express = express;
  }

  public getOneEvent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const result = await new LoadEventController().getOne(req.params._id);
    if (!result) {
      res.json({
        message: "Event not found!",
      });
    }
    res.send(result);
  };

  public addEvent = async (req: Request, res: Response, next: NextFunction) => {
    const result = await new AddEventController().save(req.body);
    res.status(200).json({
      message: "Save done",
    });
    console.log(result);
  };
  public getAllEvent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const result = await new LoadAllEventController().getAll();
    if (result.length < 0)
      res.json({
        message: "Empty Events",
      });
    return res.send(result);
  };

  public configApiEndPoints(url: string) {
    this.express.get(`${url}events/?`, this.getOneEvent);
    this.express.get(`${url}events`, this.getAllEvent);
    this.express.post(`${url}events`, this.addEvent);
  }
}
