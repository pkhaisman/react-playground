import React from 'react';

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSectionIndex: null,
            content: null
        }
    } 

    handleButtonClick = (section, index) => {
        console.log(section, index);
        this.setState({ currentSectionIndex: index });
    };

    render() {
        const buttons = this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(section, index)}>
                    {section.title}
                </button>
                <p></p>
            </li>
        ));

        return (
            <ul>
                {buttons}
            </ul>
        )
    }
}

export default Accordian;