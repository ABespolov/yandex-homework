import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {CurrentDate} from "./CurrentDate";

configure({ adapter: new Adapter() });

describe("Current date:", () => {
    it("Current date render: ", () => {
        const component = shallow(<CurrentDate created={12345678} />);
        expect(component).toMatchSnapshot();
    });
});
