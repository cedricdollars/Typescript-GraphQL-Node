import Events from "../event/event";

export interface User {
  readonly id: string;
  firstname: string;
  lastname: string;
  email: string;
  pseudo?: string;
  password: string;
  events: Events[];
}
