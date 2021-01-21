import { TypeEvent } from "../../kind";

export default interface Event {
  type: TypeEvent;
  name: string;
  date: Date;
  duration: number;
  location: string;
}
