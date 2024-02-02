import React, { useState } from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import packageJson from "./package.json";

// Demos
import AR from "./src/screens/demos/AR";
import ThreeD from "./src/screens/demos/ThreeD";
import VR from "./src/screens/demos/VR";
// Discord Issues
import CheethKeeth01252022 from "./src/screens/discord_issues/CheethKeeth_01252022";
import CheethKeeth12202021 from "./src/screens/discord_issues/CheethKeeth_12202021";
import OGSnowE01292022 from "./src/screens/discord_issues/OGSnowE_01292022";
import VV12202021 from "./src/screens/discord_issues/VV_12202021";
// PLOP DISCORD ISSUE IMPORT

// GitHub Issues
import Issue24 from "./src/screens/github_issues/Issue24";
import Issue31 from "./src/screens/github_issues/Issue31";
import Issue41 from "./src/screens/github_issues/Issue41";
import Issue58 from "./src/screens/github_issues/Issue58";
import Issue62 from "./src/screens/github_issues/Issue62";
import Issue74 from "./src/screens/github_issues/Issue74";
import Issue75 from "./src/screens/github_issues/Issue75";
// PLOP GITHB ISSUE IMPORT

// Tests
import Viro360Image from "./src/screens/viro_tests/Viro360Image";
import Viro360Video from "./src/screens/viro_tests/Viro360Video";
import Viro3DObject from "./src/screens/viro_tests/Viro3DObject";
import ViroAmbientLight from "./src/screens/viro_tests/ViroAmbientLight";
import ViroAnimatedImage from "./src/screens/viro_tests/ViroAnimatedImage";
import ViroARImageMarker from "./src/screens/viro_tests/ViroARImageMarker";
import ViroARPlane from "./src/screens/viro_tests/ViroARPlane";
import ViroARPlaneSelector from "./src/screens/viro_tests/ViroARPlaneSelector";
import ViroBox from "./src/screens/viro_tests/ViroBox";
import ViroButton from "./src/screens/viro_tests/ViroButton";
import ViroController from "./src/screens/viro_tests/ViroController";
import ViroDirectionalLight from "./src/screens/viro_tests/ViroDirectionalLight";
import ViroFlexView from "./src/screens/viro_tests/ViroFlexView";
import ViroGeometry from "./src/screens/viro_tests/ViroGeometry";
import ViroImage from "./src/screens/viro_tests/ViroImage";
import ViroLightingEnvironment from "./src/screens/viro_tests/ViroLightingEnvironment";
import ViroMaterials from "./src/screens/viro_tests/ViroMaterials";
import ViroMaterialVideo from "./src/screens/viro_tests/ViroMaterialVideo";
import ViroOmniLight from "./src/screens/viro_tests/ViroOmniLight";
import ViroOrbitCamera from "./src/screens/viro_tests/ViroOrbitCamera";
import ViroParticleEmitter from "./src/screens/viro_tests/ViroParticleEmitter";
import ViroPolygon from "./src/screens/viro_tests/ViroPolygon";
import ViroPolyline from "./src/screens/viro_tests/ViroPolyline";
import ViroPortal from "./src/screens/viro_tests/ViroPortal";
import ViroQuad from "./src/screens/viro_tests/ViroQuad";
import ViroSkyBox from "./src/screens/viro_tests/ViroSkyBox";
import ViroSound from "./src/screens/viro_tests/ViroSound";
import ViroSoundField from "./src/screens/viro_tests/ViroSoundField";
import ViroSpatialSound from "./src/screens/viro_tests/ViroSpatialSound";
import ViroSphere from "./src/screens/viro_tests/ViroSphere";
import ViroSpinner from "./src/screens/viro_tests/ViroSpinner";
import ViroSpotLight from "./src/screens/viro_tests/ViroSpotLight";
import ViroText from "./src/screens/viro_tests/ViroText";
import ViroVideo from "./src/screens/viro_tests/ViroVideo";
// import ViroARObjectMarker from './src/screens/viro_tests/ViroARObjectMarker';

const viro_tests = [
  "Viro360Image",
  "Viro360Video",
  "Viro3DObject",
  "ViroAnimatedImage",
  // Is this not working due to GVR removed? what should this look like?
  "ViroAmbientLight",
  "ViroARImageMarker",
  // TODO: Couldn't get a good scan of an object marker to work with AR Scanner
  // https://developer.apple.com/documentation/arkit/content_anchors/scanning_and_detecting_3d_objects?preferredLanguage=occ
  // 'ViroARObjectMarker',
  "ViroARPlane",
  "ViroARPlaneSelector",
  "ViroBox",
  "ViroButton",
  // TODO: Need VR camera to test this
  "ViroController",
  // TODO: Need VR camera to test this
  "ViroDirectionalLight",
  "ViroFlexView",
  "ViroGeometry",
  "ViroLightingEnvironment",
  "ViroImage",
  // TODO: Viro materials doesn't seem to be working.
  // The current lead is that metro is not resolving an asset embedded in the material.
  // I think what is happening is the asset resolver for the .obj files is using the
  // absolute path on my computer, and not the resolved path in the bundle.
  "ViroMaterials",
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  "ViroMaterialVideo",
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  "ViroOmniLight",
  "ViroOrbitCamera",
  "ViroParticleEmitter",
  "ViroPolygon",
  "ViroPolyline",
  "ViroPortal",
  "ViroQuad",
  "ViroSkyBox",
  // TODO: Sound doesn't seem to be working.
  "ViroSound",
  // TODO: Crash with Unrecognized selector sent to instance
  "ViroSoundField",
  // TODO: Crash with Unrecognized selector sent to instance
  "ViroSpatialSound",
  "ViroSphere",
  "ViroSpinner",
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  "ViroSpotLight",
  "ViroText",
  // TODO: Crash with Unrecognized selector sent to instance
  "ViroVideo",
];

const demos = [
  { title: "AR Demo", id: "AR" },
  { title: "VR Demo", id: "VR" },
  { title: "3D Demo", id: "3D" },
];

const github_issues = [
  "24",
  "31",
  "41",
  "58",
  "62",
  "74",
  "75",
  // PLOP GITHB ISSUE NUMBER
];

const discord_issues = [
  {
    title: "OGSnow 1/29/2022",
    id: "OGSnowE01292022",
    link: "https://discord.com/channels/774471080713781259/774471080713781263/922512508751855647",
  },
  {
    title: "CheethKeeth 1/25/2022",
    id: "CheethKeeth_01252022",
    link: "https://discord.com/channels/774471080713781259/774471080713781263/922512508751855647",
  },
  {
    title: "CheethKeeth 12/20/2021",
    id: "CheethKeeth_12202021",
    link: "https://discord.com/channels/774471080713781259/774471080713781263/922512508751855647",
  },
  {
    title: "VV 12/20/2021",
    id: "VV_12202021",
    link: "https://discord.com/channels/774471080713781259/774471080713781263/922595857415688232",
  },
  // PLOP DISCORD ISSUE NUMBER
];

export default () => {
  const [view, setView] = useState("HOME");
  const [testsExpanded, setTestsExpanded] = useState(false);
  const [demosExpanded, setDemosExpanded] = useState(false);
  const [githubExpanded, setGithubExpanded] = useState(false);
  const [discordExpanded, setDiscordExpanded] = useState(false);

  const handleClickGitHubLink = (id: string) => {
    Linking.openURL(`https://github.com/ViroCommunity/viro/issues/${id}`);
  };

  const handleClickDiscordLink = (link: any) => {
    Linking.openURL(link);
  };

  const handlePressTests = () => {
    setTestsExpanded((cur) => !cur);
  };

  const handlePressDemos = () => {
    setDemosExpanded((cur) => !cur);
  };

  const handlePressGitHub = () => {
    setGithubExpanded((cur) => !cur);
  };

  const handlePressDiscord = () => {
    setDiscordExpanded((cur) => !cur);
  };

  const renderScene = () => {
    switch (view) {
      case "Viro360Image":
        return <Viro360Image />;
      case "Viro360Video":
        return <Viro360Video />;
      case "Viro3DObject":
        return <Viro3DObject />;
      case "ViroAnimatedImage":
        return <ViroAnimatedImage />;
      case "ViroAmbientLight":
        return <ViroAmbientLight />;
      case "ViroARImageMarker":
        return <ViroARImageMarker />;
      // case 'ViroARObjectMarker':
      //   return <ViroARObjectMarker />;
      case "ViroARPlane":
        return <ViroARPlane />;
      case "ViroARPlaneSelector":
        return <ViroARPlaneSelector />;
      case "ViroBox":
        return <ViroBox />;
      case "ViroButton":
        return <ViroButton />;
      case "ViroController":
        return <ViroController />;
      case "ViroDirectionalLight":
        return <ViroDirectionalLight />;
      case "ViroFlexView":
        return <ViroFlexView />;
      case "ViroGeometry":
        return <ViroGeometry />;
      case "ViroLightingEnvironment":
        return <ViroLightingEnvironment />;
      case "ViroImage":
        return <ViroImage />;
      case "ViroMaterials":
        return <ViroMaterials />;
      case "ViroMaterialVideo":
        return <ViroMaterialVideo />;
      case "ViroOmniLight":
        return <ViroOmniLight />;
      case "ViroOrbitCamera":
        return <ViroOrbitCamera />;
      case "ViroParticleEmitter":
        return <ViroParticleEmitter />;
      case "ViroPolygon":
        return <ViroPolygon />;
      case "ViroPolyline":
        return <ViroPolyline />;
      case "ViroPortal":
        return <ViroPortal />;
      case "ViroQuad":
        return <ViroQuad />;
      case "ViroSkyBox":
        return <ViroSkyBox />;
      case "ViroSound":
        return <ViroSound />;
      case "ViroSoundField":
        return <ViroSoundField />;
      case "ViroSpatialSound":
        return <ViroSpatialSound />;
      case "ViroSphere":
        return <ViroSphere />;
      case "ViroSpinner":
        return <ViroSpinner />;
      case "ViroSpotLight":
        return <ViroSpotLight />;
      case "ViroText":
        return <ViroText />;
      case "ViroVideo":
        return <ViroVideo />;

      // Demos
      case "AR":
        return <AR />;
      case "VR":
        return <VR />;
      case "3D":
        return <ThreeD />;

      // Discord Issues
      case "OGSnowE01292022":
        return <OGSnowE01292022 />;
      case "CheethKeeth_01252022":
        return <CheethKeeth01252022 />;
      case "CheethKeeth_12202021":
        return <CheethKeeth12202021 />;
      case "VV_12202021":
        return <VV12202021 />;
      // PLOP DISCORD ISSUE COMPONENT

      // GitHub Issues
      case "24":
        return <Issue24 />;
      case "31":
        return <Issue31 />;
      case "41":
        return <Issue41 />;
      case "58":
        return <Issue58 />;
      case "62":
        return <Issue62 />;
      case "74":
        return <Issue74 />;
      case "75":
        return <Issue75 />;
      case "75":
        return <Issue75 />;
      // PLOP GITHB ISSUE COMPONENT

      default:
        return (
          <ScrollView
            style={styles.home}
            contentContainerStyle={styles.content}
          >
            <View style={styles.header}>
              <Text style={styles.headerText}>Viro Test App</Text>
              <Text>
                Viro Version:{" "}
                {(
                  packageJson.dependencies[
                    "@viro-community/react-viro"
                  ] as string
                ).replace("^", "")}
              </Text>
            </View>
            <Pressable
              onPress={() =>
                Linking.openURL("https://github.com/robertjcolley")
              }
              style={styles.bobbyButton}
            >
              <Text style={styles.buttonText}>Built by Robert Colley</Text>
            </Pressable>
            {/* General Demos */}
            <View style={styles.header}>
              <Text style={styles.subheaderText} onPress={handlePressTests}>
                {testsExpanded ? "-" : "+"} Viro Tests
              </Text>
            </View>
            {testsExpanded
              ? viro_tests.map((demo) => (
                  <Pressable
                    key={demo}
                    onPress={() => setView(demo)}
                    style={styles.viroTestButton}
                  >
                    <Text style={styles.buttonText}>{demo}</Text>
                  </Pressable>
                ))
              : null}

            {/* General Demos */}
            <View style={styles.header}>
              <Text style={styles.subheaderText} onPress={handlePressDemos}>
                {demosExpanded ? "-" : "+"} Demos
              </Text>
            </View>
            {demosExpanded
              ? demos.map((demo) => (
                  <Pressable
                    key={demo.id}
                    onPress={() => setView(demo.id)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>{demo.title}</Text>
                  </Pressable>
                ))
              : null}

            {/* Issues from GitHub */}
            <View style={styles.header}>
              <Text style={styles.subheaderText} onPress={handlePressGitHub}>
                {githubExpanded ? "-" : "+"} GitHub Issues
              </Text>
            </View>
            {githubExpanded
              ? github_issues.map((issue) => (
                  <View key={issue} style={styles.issue}>
                    <Pressable
                      onPress={() => setView(issue)}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Issue #{issue}</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleClickGitHubLink(issue)}
                      style={styles.link}
                    >
                      <Text style={styles.buttonText}>GitHub Link</Text>
                    </Pressable>
                  </View>
                ))
              : null}

            {/* Discord Issues */}
            <View style={styles.header}>
              <Text style={styles.subheaderText} onPress={handlePressDiscord}>
                {discordExpanded ? "-" : "+"} Discord Issues
              </Text>
            </View>
            {discordExpanded
              ? discord_issues.map((issue) => (
                  <View key={issue.id} style={styles.issue}>
                    <Pressable
                      onPress={() => setView(issue.id)}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>{issue.title}</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleClickDiscordLink(issue.link)}
                      style={styles.discordLink}
                    >
                      <Text style={styles.buttonText}>Message</Text>
                    </Pressable>
                  </View>
                ))
              : null}
          </ScrollView>
        );
    }
  };

  return (
    <React.Fragment>
      {renderScene()}
      {view !== "HOME" ? (
        <Pressable onPress={() => setView("HOME")} style={styles.homeButton}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      ) : null}
    </React.Fragment>
  );
};

var styles = StyleSheet.create({
  home: {
    backgroundColor: "#fff",
    flex: 1,
  },
  content: {
    padding: 20,
  },
  issue: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 32,
  },
  subheaderText: {
    fontSize: 32,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  githubLink: {
    marginBottom: 10,
  },
  link: {
    backgroundColor: "#007AFF",
    marginBottom: 10,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  discordLink: {
    backgroundColor: "#5865F2",
    marginBottom: 10,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  f1: {
    flex: 1,
  },
  bobbyButton: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: "#025ced",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  viroTestButton: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: "#ff3f5f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  homeButton: {
    position: "absolute",
    bottom: 40,
    left: 40,
    right: 40,
    backgroundColor: "#00000088",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  button: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
  },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
