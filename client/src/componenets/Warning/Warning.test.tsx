import React from "react";
import {Warning} from "./Warning";
import {shallow, configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe("SingleLetterControls:", () => {
    it('Warning render: ', () => {
        const component = shallow(<Warning reminder={123456789} />);
        expect(component).toMatchSnapshot();
    });
});