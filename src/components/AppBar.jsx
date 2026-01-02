import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme, { withAlpha} from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: withAlpha(theme.colors.appBarBackground, 0.8),
  },
  scrollView: {

  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/signin">Sign in</AppBarTab>
    </ScrollView>
  </View>
  )
};

export default AppBar;
