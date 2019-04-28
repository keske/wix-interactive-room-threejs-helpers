// @flow

import * as THREE from 'three';

type Props = {
  arc: number,
  color: string,
  radius: number,
  radialSegments: number,
  tube: number,
  tubularSegments: number,
};

export default ({
  arc = Math.PI * 2,
  color = '#FFF',
  radius = 10,
  radialSegments = 16,
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
    new THREE.MeshBasicMaterial({
      color,
    }),
  )
);
