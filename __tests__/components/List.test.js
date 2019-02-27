import React from "react";
import { Text, FlatList, Button, AsyncStorage } from "react-native";
import { shallow } from "enzyme";
import sinon from "sinon";

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
    wrapper.find({ id: "new" }).simulate("press");
    expect(wrapper.state("posts")).toHaveLength(1);
  });

  it("should delete post", () => {
    const wrapper = shallow(<List />);
    wrapper.setState({ posts });
    wrapper.instance().deletePost(1);

    expect(wrapper.state("posts")).toEqual(posts.filter(post => post.id !== 1));
  });

  it("should save posts", () => {
    sinon.spy(AsyncStorage, "setItem");
    const wrapper = shallow(<List />);
    wrapper.setState({ posts });
    wrapper.find({ id: "save" }).simulate("press");

    expect(AsyncStorage.setItem.calledOnce).toBe(true);
    expect(AsyncStorage.setItem.args[0][1]).toBe(JSON.stringify(posts));
  });

  it("should load post on init", () => {
    sinon.stub(AsyncStorage, "getItem").returns(JSON.stringify(posts));
    const wrapper = shallow(<List />);

    expect(AsyncStorage.getItem.calledOnce).toBe(true);
    expect(AsyncStorage.getItem.returnValues[0]).toBe(JSON.stringify(posts));
  });
});
