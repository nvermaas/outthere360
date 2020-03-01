import React  from 'react';
import { View, Text, StyleSheet, Environment } from 'react-360';
import my_styles from '../styles'

// show a single image
export default function SingleView(props) {
    const styles = StyleSheet.create(my_styles);
    Environment.setBackgroundImage(props.url)

    return(<View style={styles.panel}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
    );
}
