import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const BlogPost = ({ title, id, deleteBlogPost }) => {
  return (
    <View style={styles.blogPost}>
      <Text style={styles.postTitle}>{title}</Text>
      <TouchableOpacity onPress={() => deleteBlogPost(id)}>
        <AntDesign name="delete" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blogPost: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderColor: "gray",
    borderTopWidth: 1,
  },
  postTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
});

export default BlogPost;
