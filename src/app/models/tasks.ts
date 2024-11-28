import { User } from "./user";

export class Tasks {

  id!: number;
  name!: string;
  description!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  user!: User;

}
