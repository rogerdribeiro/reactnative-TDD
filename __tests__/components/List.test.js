import React from "react";
import { Text } from "react-native";
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
    const wrapper = shallow(<List posts={posts} />);

    expect(wrapper.children()).toHaveLength(3);
  });

  it("should shows empty message ", () => {
    const wrapper = shallow(<List posts={[]} />);
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(true);

    wrapper.setProps({ posts });
    expect(wrapper.contains(<Text>Nenhum post</Text>)).toBe(false);
  });
});
