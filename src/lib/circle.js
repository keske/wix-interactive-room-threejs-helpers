// @flow

import * as THREE from 'three';

// Materails
import colorMaterial from './colorMaterial';
import refractionMatarial from './refractionMatarial';

type Props = {
  color?: string,
  images?: Array<string>,
  path?: string,
  radius?: number,
  refraction?: boolean,
  refractionRatio?: number,
  segments?: number,
};

export default ({
  color = '#FFF',
  images = [
    'back.png',
    'back.png',
    'left.png',
    'right.png',
    'top.png',
    'bottom.png',
  ],
  path = 'http://localhost:3030/cube/',
  radius = 10,
  refraction = true,
  refractionRatio = 0.95,
  segments = 32,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.CircleGeometry(
      radius,
      segments,
    ),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
