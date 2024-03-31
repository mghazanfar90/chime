import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginForm from './screens/login';
import Success from './screens/success';
import { AuthProvider, useAuth } from './context/auth-context';

const Stack = createNativeStackNavigator();

const Navigator = ():React.JSX.Element => {
  const { user } = useAuth();
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      { !user ? (
        <>
          <Stack.Screen name="Login" component={ LoginForm } />
        </>
      ) : (
        <>
          <Stack.Screen name="Success" component={ Success } />
        </>
      ) }
    </Stack.Navigator>
  )
}

const App = ():React.JSX.Element => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App;
