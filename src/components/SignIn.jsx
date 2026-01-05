import { View, Pressable, TextInput, StyleSheet } from 'react-native';
import { useNavigate } from "react-router";
import useSignIn from '../hooks/useSignIn';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    backgroundColor: theme.colors.itemBackground,
    padding: 15,
    rowGap: 15
  },
  inputBox: {
    backgroundColor: theme.colors.itemBackground,
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
  },
  error: {
    borderColor: theme.colors.error,
    color: theme.colors.error
  }
});

const validationSchema = yup.object().shape({  
    username: yup    
      .string()
      .required('Username is required'),  
    password: yup    
      .string()
      .required('Password is required'),
  });

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: { username: "", password: ""},
    validationSchema,
    onSubmit
  })

  const usernameHasError = formik.touched.username && formik.errors.username
  const passwordHasError = formik.touched.password && formik.errors.password

  return (
     <View style={styles.container}>
      <TextInput
        placeholder="Username"
        placeholderTextColor='gray'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[
          styles.inputBox, 
          usernameHasError && styles.error
        ]} 
      />
       {usernameHasError && (
          <Text style={styles.error}>{formik.errors.username}</Text>
        )}
      <TextInput
        secureTextEntry
        placeholder="Password"
        placeholderTextColor='gray'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={[
          styles.inputBox,
          passwordHasError && styles.error
        ]}
      />
        {passwordHasError && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color="textTertiary" fontWeight="bold" fontSize="subheading" style={{padding: 10}}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;