import React from "react";
import { Text, FlatList, Button } from "react-native";
import { shallow } from "enzyme";

import List from "../../src/components/List";

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

describe("Testing List", () => {
  it(" should renders as expected", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find(FlatList).exists()).toBe(false);

    wrapper.setState({ posts });
    expect(wrapper.find(FlatList).exists()).toBe(true);
  });

  it("should shows empty message ", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(true);

    wrapper.setState({ posts });
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(false);
  });

  it("should add new post", () => {
    const wrapper = shallow(<List />);
    wrapper.find(Button).simulate("press");
    expect(wrapper.state("posts").toHaveLength(1));
  });
});
