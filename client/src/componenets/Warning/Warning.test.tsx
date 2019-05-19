import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {Warning} from "./Warning";

configure({ adapter: new Adapter() });

describe("Warning:", () => {
    it("Warning render: ", () => {
        const component = shallow(<Warning reminder={123456789} />);
        expect(component).toMatchSnapshot();
    });
});
