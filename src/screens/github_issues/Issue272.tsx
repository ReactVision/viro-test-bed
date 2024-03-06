import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroCamera,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro";
import React from "react";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = () => {
  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  const handleEvent = (name: string, ...args: any[]) => {
    // console.log(name, args);
    console.log(name, args);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroCamera position={[0, 0, 0]} active={true} />
      <ViroText
        style={styles.helloWorldTextStyle}
        text={"onClickState"}
        scale={[0.5, 0.5, 0.2]}
        position={[0, 0, -2]}
        onClickState={(...args) => handleEvent("onClickState", ...args)}
      />
      <ViroText
        style={styles.helloWorldTextStyle}
        text={"onClickState & onClick"}
        scale={[0.5, 0.5, 0.2]}
        position={[0, -0.5, -2]}
        onClickState={(...args) => handleEvent("onClickState", ...args)}
        onClick={(...args) => handleEvent("onClick", ...args)}
      />
      <ViroText
        style={styles.helloWorldTextStyle}
        text={"onClick"}
        scale={[0.5, 0.5, 0.2]}
        position={[0, 0.5, -2]}
        onClick={(...args) => handleEvent("onClick", ...args)}
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
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
