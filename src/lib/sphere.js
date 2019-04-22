// @flow

import * as THREE from 'three';

type Props = {
  color: string,
  radius: number,
  widthSegments: number,
  heightSegments: number,
};

export default ({
  color = '#FFF',
  radius = 10,
  widthSegments = 32,
  heightSegments = 32,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.SphereBufferGeometry(
      radius,
      widthSegments,
      heightSegments,
    ),
    new THREE.MeshBasicMaterial({
      color,
    }),
  )
);
