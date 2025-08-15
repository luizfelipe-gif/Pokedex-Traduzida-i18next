import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../../assets/styles";
import { useNavigation } from "@react-navigation/native";
import { pokemonColors } from "../../store/action";
import './../../translate/i18n';
import { useTranslation } from 'react-i18next';

export default function PokemonCard(props) {
    const {t, i18n} = useTranslation();
    const navigation = useNavigation();
    const { pokemon } = props;
    const pokemonColor = pokemonColors[pokemon.type];
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(t("Detail"), pokemon)}>
            <View style={styles.card}>
                <View style={styles.card__spacing}>
                    <View style={bgStyles}>
                        <Image
                            style={styles.card__imagePokemon}
                            source={{ uri: pokemon.imgUrl }}
                        />
                        <Text style={styles.card__name}>{pokemon.name}</Text>
                        {
                            pokemon.types.map((type, idx) => {
                                return (
                                    <View key={idx} style={styles.card__typeContainer}>
                                        <Text style={styles.card__typeText}>{t(type.type.name)}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};