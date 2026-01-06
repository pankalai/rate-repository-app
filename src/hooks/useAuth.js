import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
		throw new Error('useAuth must be used within a CountProvider')
	}
	return context
};

export default useAuth;

