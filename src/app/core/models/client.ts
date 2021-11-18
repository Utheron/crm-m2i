import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  state = StateClient.INACTIVE;
  tva = 20;
  id!: number;
  name!: string;
  totalCaHt!: number;
  comment!: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  public totalTTC(): number {
    return this.totalCaHt * (1 + this.tva / 100);
  }
}
