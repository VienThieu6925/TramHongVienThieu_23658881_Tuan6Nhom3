import type { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { store } from './store';

import HomeScreen from './screens/HomeScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import CategoryScreen from './screens/CategoryScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import AccountScreen from './screens/AccountScreen';

import CustomTabBar from './components/CustomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenRoute = HomeScreen as ComponentType<any>;
const BookDetailScreenRoute = BookDetailScreen as ComponentType<any>;
const CheckoutScreenRoute = CheckoutScreen as ComponentType<any>;
const CategoryScreenRoute = CategoryScreen as ComponentType<any>;
const CartScreenRoute = CartScreen as ComponentType<any>;
const AccountScreenRoute = AccountScreen as ComponentType<any>;

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenRoute}
      />

      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreenRoute}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreenRoute}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
      />

      <Tab.Screen
        name="Category"
        component={CategoryScreenRoute}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreenRoute}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreenRoute}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}
