// @flow

import * as THREE from 'three';

// Materails
import colorMaterial from './colorMaterial';
import refractionMatarial from './refractionMatarial';

type Props = {
  color: string,
  detail?: number,
  images?: Array<string>,
  path?: string,
  radius?: number,
  refraction?: boolean,
  refractionRatio?: number,
};

export default ({
  color = '#FFF',
  detail = 0,
  images = [
    'back.png',
    'back.png',
    'left.png',
    'right.png',
    'top.png',
    'bottom.png',
  ],
  path = 'http://localhost:4444/wix/common/',
  radius = 10,
  refraction = true,
  refractionRatio = 0.95,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.TetrahedronGeometry(radius, detail),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
