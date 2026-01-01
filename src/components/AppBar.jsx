import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme, { withAlpha} from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'left',
    backgroundColor: withAlpha(theme.colors.appBarBackground, 0.4),
    fontSize: theme.fontWeights.bold
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <AppBarTab>Repositories</AppBarTab>
    <AppBarTab>Users</AppBarTab>
  </View>
  )
};

export default AppBar;