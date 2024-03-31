import React, { useState } from 'react';
import {
  TextInput as DefaultTextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  Image,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  error?: string | undefined;
  secureTextEntry?: boolean;
}

const TextInput: React.FC<CustomTextInputProps> = (
  { value, onChangeText, placeholder, error, secureTextEntry, keyboardType }
) => {
  const [focused, setFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry || false);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <>
      <View style={[styles.container, focused ? styles.focused : {}, error ? styles.error : {}]}>
        <DefaultTextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {secureTextEntry && (
          <TouchableOpacity style={styles.iconContainer} onPress={toggleSecureEntry}>
            <Image
              source={ 
                isSecure ?
                  require(`./../../assets/images/view.png`)
                  : require(`./../../assets/images/hide.png`) }
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        )}
      </View>
      {
        error && <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#949494',
    marginTop: 15,
  },
  focused: {
    borderColor: '#397d49',
  },
  error: {
    borderColor: '#c7324f',
  },
  errorContainer: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  errorText: {
    color: '#c7324f',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    height: 40,
  },
  iconContainer: {
    padding: 10,
  },
});

export default TextInput;
