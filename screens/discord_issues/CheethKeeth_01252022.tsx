import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  // ViroConstants,
  ViroARSceneNavigator,
  ViroImage,
  ViroARImageMarker,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = (props: any) => {
  const [text, setText] = useState('Initializing AR...');
  console.log({props});
  console.log(props.sceneNavigator.viroAppProps.target);
  console.log(props.sceneNavigator.viroAppProps.image);

  function onInitialized(state: any, reason: any) {
    // if (state === ViroConstants.TRACKING_NORMAL) {
    //   setText('Hello World!');
    // } else if (state === ViroConstants.TRACKING_NONE) {
    //   // Handle loss of tracking
    // }
  }

  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: {uri: props.sceneNavigator.viroAppProps.image},
      // source: require('../../assets/image_marker.png'),
      orientation: 'Up',
      // physicalWidth: 0.32, // real world width in meters
      physicalWidth: 0.1, // real world width in meters
    },
  });

  function testing(event: any) {
    setText('found target!');
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroARImageMarker target={'targetOne'} onAnchorFound={testing}>
        <ViroImage
          position={[0, 0, 0]}
          rotation={[-90, 0, 0]}
          height={0.25}
          width={0.25}
          source={{uri: props.arSceneNavigator.viroAppProps.image}}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export const ARRenderer = (props: any) => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR as any,
      }}
      viroAppProps={{image: props.image, target: props.target}}
      style={styles.f1}
    />
  );
};

export const CheethKeeth01252022 = () => {
  return (
    <ARRenderer
      target={
        'https://rg5u4bnnhiev.usemoralis.com:2053/server/files/ChcGzqdYfNPhLyCYGN1gtkVXIUwrMLtxUTtPIonA/6dcd81400ff98ff53a85ddf29852492f_qr-code.png'
      }
      image={
        'https://gateway.pinata.cloud/ipfs/QmWmvTJmJU3pozR9ZHFmQC2DNDwi2XJtf3QGyYiiagFSWb'
      }
    />
  );
};

var styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
