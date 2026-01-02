import { View, Pressable, TextInput, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    backgroundColor: '#ffffff',
    padding: 15,
    rowGap: 15
  },
  inputBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    height: 40,
    borderRadius: 5,
    borderColor: 'gray'
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    borderRadius: 5
  }
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: { username: "", password: ""},
    onSubmit
  })
  return (
     <View style={styles.container}>
      <TextInput
        secureTextEntry
        placeholder="Username"
        placeholderTextColor='gray'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.inputBox}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        placeholderTextColor='gray'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={styles.inputBox}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color="textTertiary" fontWeight="bold" fontSize="subheading" style={{padding: 10}}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;