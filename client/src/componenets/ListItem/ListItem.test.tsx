import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {ListItem} from "./ListItem";

configure({ adapter: new Adapter() });

describe("ListItem:", () => {
    it("ListItem render: ", () => {
        const items = {text: 'text', checked: false};
        const component = shallow(<ListItem item={items} isChecked={false} />);
        expect(component).toMatchSnapshot();
    });
});
