import React from "react";
import styled from "styled-components";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: #FFFFFF;
  padding-right: 20px;
  border-radius: 20px;
`;

const statusColor = (status = 'unknown') => {
    return (
        {
            Alive: {backgroundColor: 'green'},
            Dead: {backgroundColor: 'red'},
            unknown: {backgroundColor: 'orange'}
        }[status] || 'unknown'
    )
}


const CharacterCard = ({item, onPress}) => {
    const {image, name, status, gender, location} = item || {};
    return (
        <Card onPress={onPress}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.information}>
                <Text style={styles.primary}>{name}</Text>
                <Text style={styles.secondary}>{status}</Text>
                <Text style={styles.secondary}>{gender}</Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={[styles.status, statusColor(status)]}/>
                <Text style={styles.name}>{name}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 141,
        height: 141,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        overflow: 'hidden'
    },
    information: {
        paddingTop: 10,
        marginLeft: 20,
    },
    primary: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0C1A30'
    },
    secondary: {
        fontSize: 16,
        marginTop: 5,
        color: '#838589'
    },
    statusContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 141,
        height: 'auto',
        position: 'absolute',
        left: 0, bottom: 0,
        backgroundColor: 'rgba(196,196,196,0.7)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 20
    },
    name: {
        marginLeft: 8,
        color: 'white'
    },
    status: {
        height: 20,
        width: 20,
        borderRadius: 100,
    }
})
export default CharacterCard