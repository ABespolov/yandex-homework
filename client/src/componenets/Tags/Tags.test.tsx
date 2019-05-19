import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {Tags} from "./Tags";

configure({ adapter: new Adapter() });

describe("SingleLetterControls:", () => {
    it("Tags render: ", () => {
        const tags = [{tag: 'test1'}, {tag: 'test2'}];
        const component = shallow(<Tags tags={tags} />);
        expect(component).toMatchSnapshot();
    });
});
