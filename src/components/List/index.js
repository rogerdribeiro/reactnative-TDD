import React, { Fragment } from "react";

import { View, Text, FlatList } from "react-native";
import Post from "../Post";
// import styles from './styles';

const List = ({ posts }) => {
  console.log(posts);

  return (
    <View>
      {posts.length > 0 ? (
        posts.map(item => <Post key={item.id} post={item} />)
      ) : (
        <Text>Nenhum post</Text>
      )}
    </View>
  );
};

export default List;
