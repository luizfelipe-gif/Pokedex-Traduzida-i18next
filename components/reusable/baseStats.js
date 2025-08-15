import { Text, View, ScrollView } from "react-native";
import styles from "../../assets/styles";
import { ProgressBar, Colors } from 'react-native-paper';
import './../../translate/i18n';
import { useTranslation } from 'react-i18next';

export default function Stats(props) {
    const {t, i18n} = useTranslation();
    const { item } = props;
    
    return (
        <ScrollView>
            {
                item.stats.map((stat, idx) => {
                    return (
                        <View key={idx} style={{ flexDirection: "row", marginBottom: 20 }}>
                            <Text style={styles.stats__title}>{t(stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1))}</Text>
                            <Text style={styles.stats__text}>{stat.base_stat}</Text>
                            <View style={{ width: 130, alignContent: "center", paddingTop: 10 }}>
                                <ProgressBar progress={stat.base_stat / 100} color={Colors.grey800} />
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}