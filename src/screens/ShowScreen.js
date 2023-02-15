import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.showView}>
      <Text style={styles.titleText}>{blogPost.title}</Text>
      <Text style={styles.contentText}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ paddingRight: 10 }}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  showView: {
    marginTop: 40,
    margin: 10,
    padding: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  titleText: {
    textDecorationLine: "underline",
    fontSize: 32,
    fontWeight: "900",
  },
  contentText: {
    fontSize: 18,
  },
});

export default ShowScreen;
