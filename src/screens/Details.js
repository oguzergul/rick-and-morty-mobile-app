import React, {useEffect, useState} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import {CharactersApi} from "../api/characters";
import Container from "../components/Container";


const Details = ({route, navigation}) => {
    const {item} = route.params;
    const [state, setState] = useState({});

    const getSingleCharacter = async () => {
        const response = await CharactersApi.getSingleCharacter(item.id);
        const {name, location, status, image} = response.data || {}
        setState({name, location, status, image})
    };

    useEffect(() => { getSingleCharacter() }, [])

    return (
        <Container>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: state.image}}/>
                <Text style={styles.name}>{state.name}</Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10
    }

})
export default Details