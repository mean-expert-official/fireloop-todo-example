import { ModelRegister } from '@mean-expert/model-register/index';
/**
 * @module Todo
 * @description
 *  Write a useful Todo Model description
 **/
class Todo {
  // shared class reference
  private static model: any;
  // register hooks here
  private static hooks: any = {
    beforeSave: { name: 'before save', type: 'operation' }
  };
  // register remote methods here
  private static remotes: any = {
    myRemote: {
      accepts : { arg: 'id', type: 'string', required: true },
      returns : { arg: 'result', type: 'object' },
      http    : { path: '/:id/my-remote', verb: 'get' }
    }
  };
  /**
   * @method constructor
   * @description
   * Register model hooks and methods.
   */
  constructor(reference: any) {
    new ModelRegister(Todo, reference);
  }
  // Example Operation Hook
  static beforeSave(ctx: any, next: Function): void {
    console.log('Todo: Before Save');
    next();
  }
  // Example Remote Method
  static myRemote(id: string, next: Function): void {
    next(null, `My Remote Example: ${id}`);
  }
}
// End of Todo Model
declare var module: { exports: any };
module.exports = Todo;
