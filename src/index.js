import React from "react";
import { View } from "react-native";
import List from "./components/List";

const posts = [
  {
    id: 1,
    title: "titulo 1",
    description: "descrição"
  },
  {
    id: 2,
    title: "titulo 1",
    description: "descrição"
  },
  {
    id: 3,
    title: "titulo 1",
    description: "descrição"
  }
];
const App = () => <List posts={posts} />;
export default App;
