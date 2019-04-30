// @flow

import * as THREE from 'three';

// Materails
import colorMaterial from './colorMaterial';
import refractionMatarial from './refractionMatarial';

type Props = {
  arc?: number,
  color?: string,
  images?: Array<string>,
  path?: string,
  radius?: number,
  refraction?: boolean,
  refractionRatio?: number,
  radialSegments?: number,
  tube?: number,
  tubularSegments?: number,
};

export default ({
  arc = Math.PI * 2,
  color = '#FFF',
  images = [
    'back.png',
    'back.png',
    'left.png',
    'right.png',
    'top.png',
    'bottom.png',
  ],
  path = (
    process.env.REACT_APP_STAGE === 'production'
      ? 'http://134.209.218.211:3070/cube/'
      : 'http://localhost:3070/cube/'
  ),
  radius = 10,
  radialSegments = 16,
  refraction = true,
  refractionRatio = 0.95,
  tube = 3,
  tubularSegments = 100,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.TorusBufferGeometry(
      radius,
      tube,
      radialSegments,
      tubularSegments,
      arc,
    ),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
