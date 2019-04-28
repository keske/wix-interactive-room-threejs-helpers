// @flow

import * as React from 'react';
import * as R from 'ramda';
import * as THREE from 'three';

import ReactDOM from 'react-dom';

// Utils
import * as serviceWorker from './utils/serviceWorker';

import Scene from './lib/Scene';

import circle from './lib/circle';
import cone from './lib/cone';
import cube from './lib/cube';
import dodecahedron from './lib/dodecahedron';
import knot from './lib/knot';
import octahedron from './lib/octahedron';
import sphere from './lib/sphere';
import text from './lib/text';
import tetrahedron from './lib/tetrahedron';
import torus from './lib/torus';

/**
 * Demo
 */
R.pipeP(
  // Kinda hack to load font and correct render an 3D text on scene
  async () => (
    new Promise((resolve) => {
      new THREE.FontLoader()
        .load('http://localhost:3030/font.json', (font) => {
          resolve(font);
        });
    })
  ),
  async (font) => ({
    font,
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
  ({ font, generateAnimateProps, root }) => {
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
          object: knot(),
        }, {
          ...generateAnimateProps(),
          object: octahedron(),
        }, {
          ...generateAnimateProps(),
          object: sphere(),
        }, {
          ...generateAnimateProps(),
          object: tetrahedron(),
        }, {
          ...generateAnimateProps(),
          object: text({ font }),
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
