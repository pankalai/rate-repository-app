import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme, { withAlpha} from '../theme';

import { useApolloClient } from '@apollo/client/react';
import useAuthStorage from '../hooks/useAuthStorage';
import useMe from '../hooks/useMe';

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

  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { me, loading } = useMe()

  const loggedIn = !!me;

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore();
  }

  return (
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab to="/">Repositories</AppBarTab>
      { loading ? null : (
          loggedIn 
          ? <AppBarTab pressFunction={signOut}>Sign out</AppBarTab>
          : <AppBarTab to="/signin">Sign in</AppBarTab>
        )
      }
    </ScrollView>
  </View>
  )
};

export default AppBar;
