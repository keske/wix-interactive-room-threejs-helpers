// @flow

import * as THREE from 'three';

type Props = {
  color: string,
  size: number,
};

export default ({
  color = '#FFF',
  size = 20,
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.BoxGeometry(size, size, size),
    new THREE.MeshBasicMaterial({
      color,
    }),
  )
);
