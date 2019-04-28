// @flow

import * as THREE from 'three';

type Props = {
  images: Array<string>,
  path: string,
  refractionRatio: number,
};

export default ({ images, path, refractionRatio }: Props = {}): * => {
  const envMap = new THREE.CubeTextureLoader().setPath(path).load(images);

  envMap.mapping = THREE.CubeRefractionMapping;

  return (
    new THREE.MeshBasicMaterial({
      envMap,
      refractionRatio,
    })
  );
};
