import React  from 'react';
import { View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';

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



export default function SingleView(props) {

    Environment.setBackgroundImage(props.url)
    return(<View style={styles.panel}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
    );
}
