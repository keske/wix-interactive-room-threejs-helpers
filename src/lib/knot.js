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
  radialSegments?: number,
  refraction?: boolean,
  refractionRatio?: number,
  tube?: number,
  tubularSegments?: number,
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
    new THREE.TorusKnotGeometry(
      radius,
      tube,
      tubularSegments,
      radialSegments,
    ),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
