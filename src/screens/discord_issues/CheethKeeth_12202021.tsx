import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroImage,
} from "@viro-community/react-viro";
import React from "react";
import { StyleSheet } from "react-native";
import { handleTrackingUpdated } from "../../utils/handleTrackingUpdated";

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("../../../assets/cokecan.arobject"),
    type: "Object",
  },
});

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene onTrackingUpdated={handleTrackingUpdated}>
      <ViroImage
        position={[0, 0, -2]}
        height={1}
        width={1}
        source={require("../../../assets/grid.jpeg")}
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
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
