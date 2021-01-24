import { TypeEvent } from "../../kind";

export default interface Event {
  id: string;
  type: TypeEvent;
  name: string;
  date: Date;
  duration: number;
  location: string;
}
