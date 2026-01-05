import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';

// Fetch API
// import { useState, useEffect } from 'react';
// const useRepositories = () => {
  
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);
  
//   const fetchRepositories = async () => {
//     setLoading(true);

//     const response = await fetch('http://192.168.1.126:5000/api/repositories');
//     const json = await response.json();
    
//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

// GraphQL query
const useRepositories = () => {
  const { data, error, loading, refetch} = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' })

  return { repositories: data?.repositories ?? null, error, loading, refetch }
}


export default useRepositories;