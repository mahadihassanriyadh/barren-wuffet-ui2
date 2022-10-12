import { API } from "../../api/api";
import { getPools } from "./pools";

export class DummyAPI implements API {
  getPools = getPools;
}
