/* tslint:disable */

declare var Object: any;
export interface TodoInterface {
  text?: string;
  id?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Todo implements TodoInterface {
  text: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  constructor(instance?: TodoInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Todo`.
   */
  public static getModelName() {
    return "Todo";
  }
}
