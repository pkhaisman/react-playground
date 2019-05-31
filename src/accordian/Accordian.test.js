import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordian from './Accordian';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
    {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]

describe('Accordian Component', () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian sections={sections} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})