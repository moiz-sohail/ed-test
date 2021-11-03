import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ColorValue } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LearnPage from '../screens/LearnPage';
import React from 'react';

const Tab = createBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={LearnPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }:{
            size?: number,
            color?: ColorValue | number,
          }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={LearnPage}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }:{
            size?: number,
            color?: ColorValue | number,
          }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LearnPage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }:{
            size?: number,
            color?: ColorValue | number,
          }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavTabs;