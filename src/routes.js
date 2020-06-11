import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'

const options = {
    activeTintColor: '#fff',
    inactiveTintColor: '#696969',
    tabStyle: {
        backgroundColor: '#333',
        marginTop: -1,
    }
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={options}>
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" size={25} color={color} />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="search" size={25} color={color} />
                    }}
                />

                <Tab.Screen 
                    name="Library"
                    component={Library}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="library-books" size={25} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}