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
  () => (
    document.getElementById('root')
  ),
  (root) => {
    ReactDOM.render((
      R.pipe(
        ({ objects, styles }) => (
          <div style={styles.root}>
            {
              R.not(R.isEmpty(objects)) && (
                <div style={styles.scene}>
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
                </div>
              )
            }
          </div>
        ),
      )({
        objects: [{
          animate: {
            position: {
              x: 50,
              y: 50,
              z: 20,
            },
            rotation: {
              x: 10,
              y: 10,
              z: 10,
            },
          },
          object: sphere(),
          render: {
            type: 'sphere',
          },
        }, {
          animate: {
            position: {
              x: 100,
              y: 100,
              z: 10,
            },
            rotation: {
              x: 10,
              y: 10,
              z: 10,
            },
          },
          object: cube(),
          render: {
            type: 'cube',
          },
        }, {
          animate: {
            position: {
              x: 70,
              y: 70,
              z: 20,
            },
            rotation: {
              x: 10,
              y: 10,
              z: 10,
            },
          },
          object: lens(),
          render: {
            type: 'lens',
          },
        }],
        styles: {
          root: {
            position: 'absolute',
            zIndex: 1,

            backgroundColor: 'black',
            width: window.innerWidth,
            height: window.innerHeight,
          },
          scene: {
            position: 'absolute',
            zIndex: 10,
          },
        },
      })
    ), root);

    serviceWorker.unregister();
  },
)();
