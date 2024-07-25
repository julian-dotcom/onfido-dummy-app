import Onfido, {OnfidoCaptureType, OnfidoTheme} from '@onfido/react-native-sdk';
import React from 'react';

import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

const TEST_TOKEN = 'test-token';

function App(): React.JSX.Element {
  const startSDK = React.useCallback(async (token?: string) => {
    if (token) {
      Onfido.start({
        sdkToken: token,
        disableNFC: false,
        theme: OnfidoTheme.AUTOMATIC,
        flowSteps: {
          welcome: true,
          captureFace: {
            type: OnfidoCaptureType.VIDEO,
          },
          captureDocument: {},
        },
      }).catch(e => console.error(Object.entries(e)));
    }
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Button title="ONFIDO" onPress={() => startSDK(TEST_TOKEN)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
