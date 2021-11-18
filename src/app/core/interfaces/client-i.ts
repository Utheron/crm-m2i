import { StateClient } from "../enums/state-client";

export interface ClientI {
  id: number;
  name: string;
  tva: number;
  state: StateClient;
  totalCaHt: number;
  comment: string;

  totalTTC(): number;
}
