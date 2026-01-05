import { useQuery } from '@apollo/client/react';
import { GET_ME } from '../graphql/queries';


const useMe = () => {
  const { data, error, loading, refetch} = useQuery(GET_ME, { fetchPolicy: 'cache-and-network' })
  return { me: data?.me, error, loading, refetch }
}

export default useMe;