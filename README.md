FireLoop Todo Example App
============

The example in this repository was created using the [FireLoop CLI](http://fireloop.io) tool. So you will need to install it before cloning this repo.

#### How to locally setup this example

````sh
$ npm install -g @mean-expert/fireloop
$ git clone git@github.com:mean-expert-official/fireloop-todo-example.git
$ cd fireloop-todo-example && npm install
````
#### How to locally serve this example
Use the space key to select both; Server and Client applications to be served.
````sh
$ cd fireloop-todo-example
$ fireloop serve
I:fireloop_todo jcasarrubias$ fireloop serve

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

![](https://storage.googleapis.com/mean-expert-images/fireloop-todo-app.gif)