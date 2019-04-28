// @flow

import * as THREE from 'three';

// Materails
import colorMaterial from './colorMaterial';
import refractionMatarial from './refractionMatarial';

type Props = {
  bevelEnabled?: boolean,
  bevelOffset?: number,
  bevelSegments?: number,
  bevelSize?: number,
  bevelThickness?: number,
  curveSegments?: number,
  font: *,
  color?: string,
  height?: number,
  images?: Array<string>,
  path?: string,
  refraction?: boolean,
  refractionRatio?: number,
  text?: string,
  size?: number,
};

export default ({
  bevelEnabled = true,
  bevelOffset = 0,
  bevelSegments = 5,
  bevelSize = 8,
  bevelThickness = 10,
  curveSegments = 12,
  font,
  height = 5,
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
  text = 'Text',
  size = 180,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.TextGeometry(text, {
      bevelEnabled,
      bevelOffset,
      bevelSegments,
      bevelSize,
      bevelThickness,
      curveSegments,
      font,
      height,
      size,
    }),
    refraction
      ? refractionMatarial({ images, path, refractionRatio })
      : colorMaterial({ color }),
  )
);
