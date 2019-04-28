// @flow

import * as THREE from 'three';

// Materails
import colorMaterial from './colorMaterial';
import refractionMatarial from './refractionMatarial';

type Props = {
  color?: string,
  height?: number,
  images?: Array<string>,
  path?: string,
  radius?: number,
  radialSegments?: number,
  refraction?: boolean,
  refractionRatio?: number,
};

export default ({
  color = '#FFF',
  height = 20,
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
  radialSegments = 32,
  refraction = true,
  refractionRatio = 0.95,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.ConeGeometry(
      radius,
      height,
      radialSegments,
    ),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
