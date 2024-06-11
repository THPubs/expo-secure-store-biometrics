import {Image, StyleSheet, Platform, Button} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <Button title={'Store Data Securely'} onPress={() => {
        console.log('Storing Data Securely...');

        SecureStore.setItem(
          'session',
          JSON.stringify('Secret dataß'),
          {
            requireAuthentication: true,
          },
        );
      }}></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
