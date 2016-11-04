import { Model } from '@mean-expert/model/index';
/**
 * @module Todo
 * @description
 * Write a useful Todo Model description
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    myRemote: {
      accepts : { arg: 'id', type: 'string', required: true },
      returns : { arg: 'result', type: 'object' },
      http    : { path: '/:id/my-remote', verb: 'get' }
    }
  }
})

class Todo {
  /**
   * @method constructor
   * @description
   * Register model hooks and methods.
   */
  constructor(app: any) {}
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

module.exports = Todo;
