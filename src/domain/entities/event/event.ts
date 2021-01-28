import { TypeEvent } from "../../kind";

export default interface Event {
  _id: string;
  type: TypeEvent;
  name: string;
  date: Date;
  duration: number;
  location: string;
}
