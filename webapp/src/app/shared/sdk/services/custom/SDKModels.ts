/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Todo } from '../../models/Todo';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Todo: Todo,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
