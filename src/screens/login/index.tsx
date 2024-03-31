import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import TextInput from '../../components/text-input';
import { mockApiLogin } from '../../mock/login';
import { useAuth } from '../../context/auth-context';
import GenericBottomSheet from '../../components/bottom-sheet';

const windowWidth = Dimensions.get('window').width;

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [isError, setError] = useState(false);
  const insets = useSafeAreaInsets();
  const { setUser } = useAuth();
  
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    Keyboard.dismiss();
    try {
      const userData = await mockApiLogin(data);
      setUser(userData);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: '#ffffff',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      },
    ]}>
      <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
      <View style={ styles.mainContainer }>
        <View style={ styles.logoContainer }>
          <Image
            source={ require('./../../assets/images/logo.png') }
            style={ styles.image }
            resizeMode='contain'
          />
        </View>
        <View style={styles.content}>
          <Controller
            control={ control }
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={ onBlur }
                onChangeText={ (value) => onChange(value) }
                value={ value }
                placeholder='Email'
                error={ errors?.email?.message }
                testID='email-field'
              />
            )}
            name='email'
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            defaultValue=''
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder='Password'
                secureTextEntry
                error={ errors?.password?.message }
                testID='password-field'
              />
            )}
            name='password'
            rules={{
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters',
              },
            }}
            defaultValue=''
          />
          <View style={styles.textContainer}>
            <Text style={styles.helpText}>Need help?</Text>
            <Text style={styles.disclaimer}>
              By Clicking "Log in", you agree to receive SMS text message from chime to verify your identity
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !isValid ? { backgroundColor: '#edf9f2' } : {}]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}>
          <Text
            style={[styles.buttonText, !isValid ? { color: '#a1aba6' } : {}]}
          >Log in</Text>
        </TouchableOpacity>
      </View>
      {isError && <GenericBottomSheet isOpen={isError} onClose={() => setError(false)}>
        <View>
          <Text style={styles.errorHeading}>Yikes!</Text>
          <Text style={styles.errorText}>Email and Password combination do not match our records.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.errorButton]}
              onPress={() => setError(false)}>
              <Text
                style={[styles.buttonText, styles.errorButtonText]}
              >Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </GenericBottomSheet>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    padding: windowWidth * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: windowWidth * 0.18,
    height: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 30,
  },
  helpText: {
    color: '#357b46',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimer: {
    marginTop: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    height: 60,
  },
  button: {
    flex: 1,
    backgroundColor: '#6ee095',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#313734',
    fontWeight: 'bold',
  },
  errorHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
  },
  errorButton: {
    backgroundColor: '#c8324c',
    borderRadius: 50,
  },
  errorButtonText: {
    color: '#ffffff'
  },
});

export default LoginForm;