import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`)
    if (!token) {
      return null
    }
    return token.replace("Bearer ","")
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
        `${this.namespace}:token`,
        accessToken,
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;