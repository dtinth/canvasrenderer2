canvasrenderer2
===============

This is a newer version of my original [canvasrenderer](http://blog.dt.in.th/2010/02/canvasrenderer/) script (Python).

This one is written in JavaScript, for using with node.js.

In this newer version you can use [CoffeeScript](http://jashkenas.github.com/coffee-script/) to write your scripts, as well as using other
node.js' modules to do stuff.



Installation
------------

Install [CoffeeScript](http://jashkenas.github.com/coffee-script/) and [node-canvas](https://github.com/learnboost/node-canvas), then download
this and make a symlink to this script.



Usage
-----

    canvasrenderer script.js

For CoffeeScript use:

    canvasrenderer script.coffee



API
---

I know that this API is ugly and hackish, but is made in order to be compatible with the old version.

__newFile__(_width_, _height_): create a new canvas with width _w_ and height _h_.

__saveFile__(_name_): save file to a file called _name_.png


### Variables

__canvas__: the canvas

__ctx__: the 2d context













