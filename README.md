FireLoop Todo Example App
============

The example in this repository was created using the [FireLoop CLI](http://fireloop.io) tool. So you will need to install it before cloning this repo.

## How to locally setup this example

### With Npm

````sh
$ npm install -g @mean-expert/fireloop@1.0.0-beta.1.3
$ git clone git@github.com:mean-expert-official/fireloop-todo-example.git
$ cd fireloop-todo-example/fireloop && npm run setup
````

### With Yarn

````sh
$ yarn global add @mean-expert/fireloop@1.0.0-beta.1.3
$ git clone git@github.com:mean-expert-official/fireloop-todo-example.git
$ cd fireloop-todo-example/fireloop && yarn ysetup
````


## How to locally serve this example
Use the space key to select both; Server and Client applications to be served.
````sh
$ cd fireloop-todo-example
$ fireloop serve

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │      Let's serve an      │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What application do you want to serve? (Press <space> to select, <a> to toggle all, <i> to inverse selection)
❯◯ webapp
 ◯ server
````

Open your browser in [127.0.0.1:4200](http://127.0.0.1:4200) and you should see the following result:

[Click here if gif does't load -sigh- [Shame on you @GitHub]](https://goo.gl/YRiKnz)




![FireLoop Stats](https://goo.gl/YRiKnz)


## IDE

### Intellij IDEA

to import this project in [Idea](https://www.jetbrains.com/idea/) you need to do it [before the first `npm install`](https://github.com/mean-expert-official/fireloop-todo-example/issues/5).

