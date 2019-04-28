// @flow

import * as React from 'react';
import * as R from 'ramda';

import ReactDOM from 'react-dom';

// Utils
import * as serviceWorker from './utils/serviceWorker';

import Scene from './lib/Scene';

import circle from './lib/circle';
import cone from './lib/cone';
import cube from './lib/cube';
import dodecahedron from './lib/dodecahedron';
import sphere from './lib/sphere';
import tetrahedron from './lib/tetrahedron';
import torus from './lib/torus';

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
          object: circle(),
        }, {
          ...generateAnimateProps(),
          object: cone(),
        }, {
          ...generateAnimateProps(),
          object: cube(),
        }, {
          ...generateAnimateProps(),
          object: dodecahedron(),
        }, {
          ...generateAnimateProps(),
          object: sphere(),
        }, {
          ...generateAnimateProps(),
          object: tetrahedron(),
        }, {
          ...generateAnimateProps(),
          object: torus(),
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
