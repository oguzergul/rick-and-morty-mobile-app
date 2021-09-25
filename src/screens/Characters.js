import React, {useEffect, useReducer} from "react";
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import {CharactersApi} from "../api/characters";
import {combineReducer} from "../utils/combineReducer";
import CharacterCard from "../components/CharacterCard";
import Container from "../components/Container";


const initialState = {
    loading: true,
    characters: [],
    nextPage: null,
    page: 1,
    refreshing: false
};


const Characters = ({navigation}) => {

    const [state, setState] = useReducer(combineReducer, initialState);
    const {characters, nextPage, loading, page, refreshing} = state || {}


    const fetchCharacters = async ({_page = 1}) => {
        const response = await CharactersApi.getAllCharacters({
            page: _page
        });
        const {results = [], info: {next} = {}} = response?.data || {};
        return {results, next};
    };

    const initialPage = async () => {
        const {results, next} = await fetchCharacters({page: 1})
        setState({characters: results, nextPage: next, loading: false})
    }
    const showCharacterDetail = async (item) => {
        await navigation.navigate('Details', {item})
    }

    const renderItems = ({item}) => {
        return <CharacterCard onPress={() => showCharacterDetail(item)} item={item}/>;
    }

    const fetchCharactersMore = async () => {
        if (loading || !nextPage) {
            return
        }
        setState({loading: true});

        const pageNumber = page + 1;
        const {results, next} = await fetchCharacters({_page: pageNumber})
        const newCharacterList = [...characters, ...results]

        setState({characters: newCharacterList, nextPage: next, loading: false, page: pageNumber})
    }

    const footerComponent = () => <ActivityIndicator size="large" color="red"/>

    useEffect(() => {
        initialPage()
    }, [])

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={characters} renderItem={renderItems}
                keyExtractor={(item) => `${item.id}`}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading && footerComponent}
                onEndReached={fetchCharactersMore}
                refreshing={refreshing}
                onRefresh={initialPage}
            />
        </Container>)
}
export default Characters