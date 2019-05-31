import React from 'react';

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSectionIndex: null,
            content: null
        }
    } 

    handleButtonClick = (section, index, currentSectionIndex) => {
        console.log(section, index, currentSectionIndex);
        this.setState({ currentSectionIndex: index });
    };

    render() {
        const buttons = this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(section, index, this.state.currentSectionIndex)}>
                    {section.title}
                </button>
                {(this.state.currentSectionIndex === index) && <p>{this.props.section.content}</p>}
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