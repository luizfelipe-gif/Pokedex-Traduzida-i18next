import React, { useEffect } from "react"
import { Text,Image, View, Button, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "../assets/styles"
import { fetchPokemons } from "../store/action"
import PokemonCard from "./reusable/card"
import './../translate/i18n';
import { useTranslation } from 'react-i18next';

export default function Home(props) {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    const next = useSelector(state => state.next)

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const fetchData = async () => {
          await dispatch(fetchPokemons(next));
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('./../assets/logo.webp')} style={styles.logo}></Image>
            <Button
                title={i18n.language === 'pt' ? t('🇬🇧 Change to English') : '🇧🇷 Mudar pra Português'}
                onPress={toggleLanguage}
                color={"gray"}
            />
            <FlatList
                style={{ flex: 1 }}
                data={pokemons}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => String(pokemon.id)}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                contentContainerStyle={styles.flatListContentContainer}
                ListFooterComponent={
                    next ? (
                        <View style={{ padding: 5, marginTop: 10 }}>
                            <Button title={t("Show More")} color={"gray"} onPress={() => dispatch(fetchPokemons(next))}/>
                        </View>
                    ) : null
                }
            />
        </View>
    )
}