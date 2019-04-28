// @flow

import * as React from 'react';
import * as R from 'ramda';

import ReactDOM from 'react-dom';

// Utils
import * as serviceWorker from './utils/serviceWorker';

import Scene from './lib/Scene';

import cube from './lib/cube';
import sphere from './lib/sphere';
import tetrahedron from './lib/tetrahedron';
import torus from './lib/torus';

export default Scene;

export {
  cube,
  sphere,
  tetrahedron,
  torus,
};

/**
 * Demo
 */
R.pipe(
  () => ({
    generateAnimateProps: () => ({
      animate: {
        position: {
          x: Math.floor(Math.random() * 200),
          y: Math.floor(Math.random() * 200),
          z: Math.floor(Math.random() * 20),
        },
        rotation: {
          x: Math.floor(Math.random() * 360),
          y: Math.floor(Math.random() * 360),
          z: Math.floor(Math.random() * 360),
        },
      },
    }),
    root: document.getElementById('root'),
  }),
  ({ generateAnimateProps, root }) => {
    ReactDOM.render((
      R.pipe(
        ({ objects, styles }) => (
          <div style={styles.root}>
            {
              R.not(R.isEmpty(objects)) && (
                <Scene {...{ objects }}>
                  {
                    (/* { scene } */) => false
                  }
                </Scene>
              )
            }
          </div>
        ),
      )({
        objects: [{
          ...generateAnimateProps(),
          object: sphere(),
        }, {
          ...generateAnimateProps(),
          object: cube(),
        }, {
          ...generateAnimateProps(),
          object: torus(),
        }, {
          ...generateAnimateProps(),
          object: tetrahedron(),
        }],
        styles: {
          root: {
            backgroundColor: 'black',
            width: window.innerWidth,
            height: window.innerHeight,
          },
        },
      })
    ), root);

    serviceWorker.unregister();
  },
)();
