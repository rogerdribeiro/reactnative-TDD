import React, { Component } from "react";
import { View, Text, FlatList, Button } from "react-native";
import Post from "../Post";

export default class List extends Component {
  state = {
    posts: []
  };

  renderPosts = () => (
    <FlatList
      data={this.state.posts}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <Post post={item} />}
    />
  );

  addPost = () => {
    const novoPost = { id: 1, title: "post 1", description: "descricao 1" };
    this.setState({ posts: [...this.state.posts, novoPost] });
  };
  deletePost = id => {
    this.setState({ posts: this.state.posts.filter(post => post.id !== id) });
  };

  render() {
    const { posts } = this.state;
    return (
      <View>
        {posts.length > 0 ? this.renderPosts() : <Text>Nenhum post</Text>}
        <Button title="Add post" onPress={this.addPost} />
      </View>
    );
  }
}
