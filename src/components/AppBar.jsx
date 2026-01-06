import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme, { withAlpha} from '../theme';
import useAuth from '../hooks/useAuth';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: withAlpha(theme.colors.appBarBackground, 0.9),
  },
  scrollView: {

  }
});

const AppBar = () => {

  const { signedIn, signOut, loading } = useAuth();

  return (
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab to="/">Repositories</AppBarTab>
      { loading ? null : (
          signedIn 
          ? <AppBarTab pressFunction={signOut}>Sign out</AppBarTab>
          : <AppBarTab to="/signin">Sign in</AppBarTab>
        )
      }
    </ScrollView>
  </View>
  )
};

export default AppBar;
