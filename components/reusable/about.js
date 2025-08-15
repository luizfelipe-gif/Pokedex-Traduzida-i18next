import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "../../assets/styles";
import './../../translate/i18n';
import { useTranslation } from 'react-i18next';

export default function About(props) {
    const {t, i18n} = useTranslation();
    const { item } = props;
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        function getAbility() {
            let arr = [];
            for (let i = 0; i < item.abilities.length; i++) {
                arr.push(item.abilities[i].ability.name);
            }
            return setAbilities(arr);
        }
        getAbility();
    }, []);

    return (
        <View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t("Species")}</Text>
                <Text style={styles.about__text}>{item.species}</Text>
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t("Height")}</Text>
                <Text style={styles.about__text}>{item.height} cm</Text>
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t("Weight")}</Text>
                <Text style={styles.about__text}>{item.weight} Kg</Text>
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>{t("Abilities")}</Text>
                <Text style={styles.about__text}>{abilities.join(', ')}</Text>
            </View>
        </View>
    );
}