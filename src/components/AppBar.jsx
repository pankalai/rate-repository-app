import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme, { withAlpha} from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingTop: Constants.statusBarHeight+20,
    paddingBottom: 10,
    justifyContent: 'left',
    backgroundColor: withAlpha(theme.colors.appBarBackground, 0.8),
    fontSize: theme.fontWeights.bold
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <AppBarTab>Repositories</AppBarTab>
  </View>
  )
};

export default AppBar;
