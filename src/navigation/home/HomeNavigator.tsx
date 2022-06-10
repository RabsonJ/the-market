import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = function () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const HomeNavigator = function () {
  const HomeStack: any = createNativeStackNavigator()
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
