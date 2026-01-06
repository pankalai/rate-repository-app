import { useApolloClient } from '@apollo/client/react';
import { useReducer, useEffect } from 'react';
import AuthContext from "./AuthContext";
import useAuthStorage from '../hooks/useAuthStorage';
import useMe from '../hooks/useMe';


const signedReducer = (state, action) => {
    switch (action.type) {
      case 'SIGNIN':  return true;  
      case 'SIGNOUT': return false;
      default:        return state;
    }
}

const AuthProvider = ({ children }) => {
  const [signedIn, dispatch] = useReducer(signedReducer, false);
  const { me, loading } = useMe()

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  useEffect(() => {
    !me ? dispatch({ type: 'SIGNOUT' }) : dispatch({ type: 'SIGNIN' });
  }, [me]);

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore();
    dispatch({ type: 'SIGNOUT' });
  };

  const value = { signedIn, loading, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider