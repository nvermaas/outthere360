import React  from 'react';
import { View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';
import MyGazeButton from '../components/MyGazeButton'

export default function NordicScene(props) {

        return (
            <View style={styles.panel}>
                <Text style={styles.info}>Drag the menu to the center screen. In VR mode, aim the RayCaster (the white dot) at the menu</Text>

                <MyGazeButton title="Lapland Forest" asset="lapland_bos.jpg"/>
                <MyGazeButton title="Saltfjallet National Park" asset="norway_saltfjallet.jpg"/>
                <MyGazeButton title="Arctic Circle Sweden" asset="lapland_tipi.jpg"/>

            </View>
        );
}
