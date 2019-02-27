import React, { Component } from "react";
import { View, Text, FlatList, Button, AsyncStorage } from "react-native";
import Post from "../Post";

export default class List extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const posts = JSON.parse(
      (await AsyncStorage.getItem("@TestRN:posts")) || []
    );
    this.setState({ posts });
  }

  renderPosts = () => (
    <FlatList
      data={this.state.posts}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <Post post={item} onDelete={this.deletePost} />}
    />
  );

  addPost = () => {
    const novoPost = { id: 1, title: "post 1", description: "descricao 1" };
    this.setState({ posts: [...this.state.posts, novoPost] });
  };

  deletePost = id => {
    this.setState({ posts: this.state.posts.filter(post => post.id !== id) });
  };
  savePosts = async () => {
    await AsyncStorage.setItem(
      "@TestRN:posts",
      JSON.stringify(this.state.posts)
    );
  };

  render() {
    const { posts } = this.state;
    return (
      <View>
        {posts.length > 0 ? this.renderPosts() : <Text>Nenhum post</Text>}
        <Button id="new" title="Add post" onPress={this.addPost} />
        <Button id="save" title="save post" onPress={this.savePosts} />
      </View>
    );
  }
}
