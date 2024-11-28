import { Tasks } from "./tasks";

export class User {
  id!: number;
  name!: string;
  username!: string;
  email!: string;
  tasks: Tasks[] = [];
}
