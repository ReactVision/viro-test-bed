import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroVideo,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';
// import {handleTrackingUpdated} from '../../utils/handleTrackingUpdated';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={() => console.log('tracking updated')}>
      <ViroVideo
        source={require('../../assets/360Test.mp4')}
        loop={true}
        position={[0, 2, -5]}
        scale={[2, 2, 0]}
        onBufferStart={() => console.log('buffer start')}
        onBufferEnd={() => console.log('buffer end')}
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
