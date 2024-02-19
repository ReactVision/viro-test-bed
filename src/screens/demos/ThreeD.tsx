import {
  Viro3DSceneNavigator,
  ViroScene,
  ViroText,
} from "@viro-community/react-viro";
import React from "react";
import { StyleSheet, View } from "react-native";
import { handleTrackingUpdated } from "../../utils/handleTrackingUpdated";

const HelloWorldSceneAR = () => {
  return (
    <ViroScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroText
        text="Hello World!"
        width={2}
        height={2}
        position={[0, 0, 2]}
        style={styles.helloWorldTextStyle}
      />
    </ViroScene>
  );
};

export default () => {
  const handleExitViro = () => {
    console.log("EXIT VIRO");
  };

  return (
    <Viro3DSceneNavigator
      // autofocus={true}
      hdrEnabled={false}
      pbrEnabled={false}
      bloomEnabled={false}
      shadowsEnabled={false}
      multisamplingEnabled={false}
      debug={false}
      onExitViro={handleExitViro}
      initialScene={{
        scene: HelloWorldSceneAR as any,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
