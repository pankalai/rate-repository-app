import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const { apollo_uri } = Constants.expoConfig.extra;

const httpLink = new HttpLink({
  uri: apollo_uri,
});

const createApolloClient = (authStorage) => {  
  const authLink = setContext(async (_, { headers }) => {    
    try {      
      const accessToken = await authStorage.getAccessToken();      
      return {        
        headers: {          
          ...headers,          
          Authorization: accessToken ? `Bearer ${accessToken}` : '',        
        },      
      };    
    } catch (e) {      
      console.log(e);      
      return {        
        headers,      
      };    
    }  
  });  
  return new ApolloClient({    
    link: authLink.concat(httpLink),    
    cache: new InMemoryCache(),  
  });
};

export default createApolloClient;
