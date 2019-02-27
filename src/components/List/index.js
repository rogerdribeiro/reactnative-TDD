import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";
import Post from "../Post";

export default class List extends Component {
  state = {
    posts: [
      //{ id: 1, title: "post 1", description: "descricao 1" }
    ]
  };

  renderPosts = () => (
    <FlatList
      data={this.state.posts}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <Post post={item} />}
    />
  );

  render() {
    const { posts } = this.state;
    return (
      <View>
        {posts.length > 0 ? this.renderPosts() : <Text>Nenhum post</Text>}
      </View>
    );
  }
}
