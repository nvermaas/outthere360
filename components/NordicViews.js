import React  from 'react';
import { View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';
import MyGazeButton from './MyGazeButton'

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 600,
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        padding: 10,
        backgroundColor: '#A17A3A',
        borderColor: '#639dda',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function NordicViews(props) {

        return (
            <View style={styles.panel}>
                <Text style={styles.info}>Drag the menu to the center screen. In VR mode, aim the RayCaster (the white dot) at the menu</Text>

                <MyGazeButton title="Lapland Forest" asset="lapland_bos.jpg"/>
                <MyGazeButton title="Saltfjallet National Park" asset="norway_saltfjallet.jpg"/>
                <MyGazeButton title="Arctic Circle Sweden" asset="lapland_tipi.jpg"/>
                <MyGazeButton title="USA Canyonlands" asset="usa_needles.jpg"/>

            </View>
        );
}
