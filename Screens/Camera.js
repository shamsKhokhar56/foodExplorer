import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import axios from "axios";

// import { imageToBlob } from 'react-native-image-to-blob'

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [image, setImage] = useState();

  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  takePicture = () => {
    
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = async (photo) => {
    // console.log(photo.uri)
    setImage(photo.uri);
    // clear response for the new image
    setResponse(null);
    // const imageFile = await imageToBlob(image);
    const formData = new FormData();
    const fileName = photo.uri.split("/");
    const fName = fileName[fileName.length - 1];
    console.log("FILE NAME ==========>");
    console.log(fName);
    formData.append("backgroundImage", {
      uri: photo.uri,
      type: "image/jpg",
      name: fName,
    });
    // formData.append("", );
    console.log(formData);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.10.5:5000/predict/class",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Successful response", response.data, "done");
      setResponse(response.data)
      // setResponse(response.data.predicted_class)
    } catch (error) {
      console.log("Error response", JSON.stringify(error));
    } finally {
      setLoading(false)
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>The data is loading</Text>
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 0.1,
              width: "100%",
              backgroundColor: "#f4511e",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="arrow-back"
              size={34}
              color="white"
              style={{ margin: 15, justifyContent: "flex-start" }}
              onPress={() => navigation.goBack()}
            />
            <Text style={{ fontSize: 22, color: "white" }}>Camera</Text>
          </View>
        </Camera>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity stlye={styles.button} onPress={this.takePicture}>
          <Entypo name="circle" size={100} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    camera: {
        flex: 0.8,
    },
    buttonContainer: {
        flex: 0.2,
        backgroundColor: 'black',
        // height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})

export default CameraScreen;