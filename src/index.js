// @flow

import * as React from 'react';
import * as R from 'ramda';

import ReactDOM from 'react-dom';

// Utils
import * as serviceWorker from './utils/serviceWorker';

import Scene from './lib/Scene';

import cube from './lib/cube';
import lens from './lib/lens';
import sphere from './lib/sphere';

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
                <Scene
                  {...{
                    acceleration: {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                    mouse: {
                      x: 0,
                      y: 0,
                    },
                    objects,
                    screen: {
                      width: window.innerWidth,
                      height: window.innerHeight,
                    },
                  }}
                >
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
          object: lens(),
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
