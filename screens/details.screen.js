import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

export const Details = ({ details, onClear }) => {
    const{ name, stack, displayName, email } = details;
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Zuri Assignment</Text>
            <Text style={styles.text}> Your name is {name}</Text>
            <Text style={styles.text}> Your stack is {stack}</Text>
            <Text style={styles.text}> Your display name is {displayName}</Text>
            <Text style={styles.text}> Your email is {email}</Text>

        <Button
            style={styles.button} 
            title= "Back" 
            onPress={() => onClear()} 
            color="maroon"
            mode="contained"
            >
            Back
        </Button>          
        </SafeAreaView>
    )
}          



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        margin: 24,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 15,
    }
})