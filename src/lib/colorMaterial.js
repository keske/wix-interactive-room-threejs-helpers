// @flow

import * as THREE from 'three';

type Props = {
  color: string,
};

export default ({ color }: Props = {}): * => (
  new THREE.MeshBasicMaterial({ color })
);
