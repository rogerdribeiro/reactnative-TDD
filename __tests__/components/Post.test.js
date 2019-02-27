import React from "react";
import { Text, Button } from "react-native";
import { shallow } from "enzyme";
import sinon from "sinon";
import Post from "../../src/components/Post";
const post = {
  id: 1,
  title: "titulo 1",
  description: "descrição"
};

describe("Testing Post", () => {
  it("should delete post", () => {
    const deltePostSpy = sinon.spy();

    const wrapper = shallow(<Post post={post} onDelete={deltePostSpy} />);
    wrapper.find(Button).simulate("press");

    expect(deltePostSpy.withArgs(post.id).calledOnce).toBe(true);
  });
});
