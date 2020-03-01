import React  from 'react';
import { View,Text, StyleSheet, asset, Environment } from 'react-360';
import Entity from 'Entity';

export default function MyEntity(props) {

    // set the default background for this scene
    Environment.setBackgroundImage(asset("outthere360.jpg"))

    return (
            // to reference a GLTF2 model
            <Entity source={{gltf2: asset('scene.gltf')}} />
        );
}
