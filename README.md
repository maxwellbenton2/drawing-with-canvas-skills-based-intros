## Objectives

1. Explore an implementation of p5
2. Work with existing code to improve a simple game
3. Make use of the [p5 documentation][p5-home]!

## Take a moment...

...to familiarize yourself with the existing code and functionality. Once you start the server, you will see that we have a rectangular container and a ball that bounces within:

![](https://curriculum-content.s3.amazonaws.com/KWK/demobingbong.gif)

We have three main code components in this application:
  - The ball -- `Ball.js`
  - The border -- `Border.js`
  - The sketch -- `mySketch.js`

`mySketch.js` controls the higher level activities, while `Ball.js` and `Border.js` contain information needed to control their own behavior. You will see that we have abstracted the responsibility of _how_ to draw into both `Ball.js` and `Border.js`. This simplifies our life as programmers and keeps `mySketch.js`'s responsibilities
simple. Instead of controlling every detail, `mySketch.js` can trust that when it calls the other object's `draw` methods, that they will know what to do.

Although there is more starter code in this project than you may be used to, we only need to make minimal changes to have a big impact. We will start you off with defined feature to make, then point you in the direction of adding more if you are interested in exploring p5 further.

## Deliverable

- If possible, work in pairs
- While the mouse is held down, an 'inner border' should be drawn. This inner border should work just like the outer border, and the ball should bounce off of it
- Take a look at the _TODO_ in `mySketchjs` for an idea on how to get started

## Going Forward

Once you have a working solution, we encourage you to use your imagination and make the application your own. Here are some ideas off the top of our heads:
- Increase the amount of balls!
- Make it so your mouse has to avoid the balls, or else...
- Replace the ball with the **chrome boi** asset provided in `/assets/chrome-boi.png`
- use the (already imported!) `p5 collide` library to have particles explode when a ball collides with a boundary! [Documentation][p5-collide]

[p5-collide]: "https://github.com/bmoren/p5.collide2D"
[p5-home]: "https://p5js.org/"
[dl-p5]: "https://p5js.org/download/"
