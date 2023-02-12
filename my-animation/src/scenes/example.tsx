import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Layout, Rect} from '@motion-canvas/2d/lib/components';
import {makeRef, range, useRandom} from '@motion-canvas/core/lib/utils';
import {all, loop, sequence} from '@motion-canvas/core/lib/flow';

// use motion canvas to display a square that moves around the screen
export const ExampleScene = makeScene2D({
  name: 'ExampleScene',
  setup: ({canvas}) => {
    // create a reference to the square
    const squareRef = makeRef();

    // create a random number generator
    const random = useRandom();

    // create a sequence of animations
    const animations = sequence(
      // loop the sequence of animations
      loop(
        // animate the square to a random position
        squareRef.animateTo({
          x: random(0, canvas.width),
          y: random(0, canvas.height),
        }),
        // wait for 1 second
        all(range(0, 1000, 100).map((delay) => squareRef.wait(delay))),
      ),
    );

    // return the animations to be played
    return animations;
  }
});
