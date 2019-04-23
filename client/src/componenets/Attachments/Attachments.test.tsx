import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {Attachments} from "./Attachments";

configure({ adapter: new Adapter() });

describe("Attachments:", () => {
    it("Attachments render: ", () => {
        const items = [{type: 'link', url: 'link1'}];
        const component = shallow(<Attachments attachments={items}/>);
        expect(component).toMatchSnapshot();
    });
});
