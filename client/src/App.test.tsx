import React from 'react';
import { mount, ReactWrapper } from "enzyme";
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';

describe("<App /> suite", () => {
  it("renders correctly", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Dashboard).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
