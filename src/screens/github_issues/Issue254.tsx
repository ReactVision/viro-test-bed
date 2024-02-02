import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
} from "@viro-community/react-viro";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * See https://github.com/NativeVision/viro/issues/254
 */
const HelloWorldSceneAR = () => {
  return (
    <ViroARScene>
      <ViroText
        text={"Hello World!"}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

export default () => {
  const ref = useRef<ViroARSceneNavigator>(null);
  const [takingScreenshot, setTakingScreenshot] = useState(false);
  // idle --> recording --> idle
  const [recording, setRecording] = useState(false);

  const handlePressTakeScreenshot = async () => {
    try {
      setTakingScreenshot(true);
      const result = await ref.current?.arSceneNavigator.takeScreenshot(
        "test",
        true
      );
      console.log("[254]", result);
    } catch (e) {
      console.error("[254]", e);
    } finally {
      setTakingScreenshot(false);
    }
  };

  const handlePressRecordVideo = async () => {
    if (recording) {
      try {
        const result = await ref.current?.arSceneNavigator.stopVideoRecording();
        setRecording(false);
        console.log("[254]", result);
      } catch (e) {
        console.error("[254]", e);
      }
    } else {
      try {
        setRecording(true);
        const result = await ref.current?.arSceneNavigator.startVideoRecording(
          "test",
          true,
          (e) => {
            // https://viro-community.readme.io/docs/viroconstants#section-video-recording-screenshot-errors
            console.error("[254]", e);
          }
        );
        console.log("[254]", result);
      } catch (e) {
        console.error("[254]", e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        ref={ref}
        autofocus={true}
        initialScene={{ scene: HelloWorldSceneAR }}
        style={styles.f1}
      />
      <View style={styles.floatingButtons}>
        <TouchableOpacity
          style={styles.button}
          disabled={takingScreenshot}
          onPress={handlePressTakeScreenshot}
        >
          <Text style={styles.buttonText}>
            {takingScreenshot ? "Taking" : "Take"} Screenshot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePressRecordVideo}
        >
          <Text style={styles.buttonText}>
            {recording ? "Stop Recording" : "Record Video"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  floatingButtons: {
    position: "absolute",
    bottom: 120,
    left: 30,
    right: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#00000088",
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
