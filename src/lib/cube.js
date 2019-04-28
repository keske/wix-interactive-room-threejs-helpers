// @flow

import * as THREE from 'three';

// Materails
import colorMaterial from './colorMaterial';
import refractionMatarial from './refractionMatarial';

type Props = {
  color?: string,
  images?: Array<string>,
  path?: string,
  refraction?: boolean,
  refractionRatio?: number,
  size?: number,
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
  refraction = true,
  refractionRatio = 0.95,
  size = 20,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.BoxGeometry(size, size, size),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
