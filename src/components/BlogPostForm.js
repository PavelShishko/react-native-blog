import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({
  onSubmit,
  initialValues = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={{ paddingHorizontal: 10, flex: 1, paddingVertical: 30 }}>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        value={title}
        style={styles.titleInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(e) => setTitle(e)}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        value={content}
        style={styles.contentInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(e) => setContent(e)}
      />
      <TouchableOpacity onPress={() => onSubmit(title, content)}>
        <Text style={styles.saveBtnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  titleInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  },
  contentInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  },
  saveBtnText: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: "bold",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 60,
    alignSelf: "center",
  },
});

export default BlogPostForm;
