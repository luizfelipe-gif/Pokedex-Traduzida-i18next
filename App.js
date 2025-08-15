import {View, StatusBar}              from 'react-native';
import {NavigationContainer}          from '@react-navigation/native';
import {createNativeStackNavigator}   from '@react-navigation/native-stack';
import {useTranslation}               from "react-i18next";
import "./translate/i18n";
import Home from './components/Home';
import Detail from './components/Detail';
import styles from './assets/styles';
import store from './store';
import { Provider } from 'react-redux';
import "intl-pluralrules";

const Stack = createNativeStackNavigator();

export default function App() {
  const {t} = useTranslation();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="transparent" barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={t("Home")} component={Home} />
            <Stack.Screen name={t("Detail")} component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}