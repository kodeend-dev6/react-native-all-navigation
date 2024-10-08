/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Contact: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000750',
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 10,
          paddingVertical: 2,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#7f8c8d',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Valid names for Ionicons
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
