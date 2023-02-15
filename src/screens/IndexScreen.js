import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context, Provider } from "../context/BlogContext";
import BlogPost from "../components/BlogPost";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const indexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <BlogPost
              title={item.title}
              id={item.id}
              deleteBlogPost={deleteBlogPost}
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

indexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ paddingRight: 10 }}
        onPress={() => navigation.navigate("Create")}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default indexScreen;
