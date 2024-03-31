import React from "react";
import { StatusBar, View, Dimensions, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from "../../context/auth-context";

const windowWidth = Dimensions.get('window').width;

const Success: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { setUser } = useAuth();

  const logOut = () => {
    setUser(null);
  }

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: '#61c089',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      },
    ]}>
      <StatusBar barStyle="light-content" backgroundColor="#61c089" />
      <View style={ styles.imageContainer }>
        <Image
          source={ require('./../../assets/images/success.png') }
          style={ styles.image }
          resizeMode="contain"
        /> 
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => logOut()}
        >
          <Text
            style={styles.buttonText}
          >Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    height: 60,
  },
  button: {
    flex: 1,
    backgroundColor: "#6ee095",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#313734",
    fontWeight: "bold",
  },
});

export default Success;