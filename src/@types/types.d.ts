type StackNavigationProp = import('@react-navigation/stack').StackNavigationProp<allAnyTypes, allAnyTypes>

interface IsNavigationRequiredProps {
  navigation: StackNavigationProp
}

interface UserData {
  email: string;
  password: string;
  token: string;
}
