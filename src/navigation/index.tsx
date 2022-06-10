import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const AppNavigationContainer = (): JSX.Element => (
  <NavigationContainer>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User</Text>
    </View>
  </NavigationContainer>
)

export default AppNavigationContainer
