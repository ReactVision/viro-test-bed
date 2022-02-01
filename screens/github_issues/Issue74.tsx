import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroSound,
  ViroSpatialSound,
  ViroSoundField,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
// import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={() => console.log('tracking updated')}>
      {/* <ViroSound
        // source={require('../../assets/test.mp3')}
        source={require('../../assets/mono.wav')}
        loop={true}
        onError={e => console.log('ViroSound', e)}
        paused={false}
        volume={1}
        onFinish={() => console.log('ViroSound finished')}
      /> */}
      {/* <ViroSpatialSound
        // source={require('../../assets/test.mp3')}
        source={require('../../assets/mono.wav')}
        loop={true}
        onError={e => console.log('ViroSpatialSound', e)}
        paused={false}
        volume={1}
        position={[0, 0, -3]}
        onFinish={() => console.log('ViroSpatialSound finished')}
      /> */}
      <ViroSoundField
        // source={require('../../assets/test.mp3')}
        source={require('../../assets/mono.wav')}
        loop={true}
        onError={e => console.log('ViroSoundField', e)}
        paused={false}
        volume={1}
        position={[0, 0, -3]}
        onFinish={() => console.log('ViroSoundField finished')}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
