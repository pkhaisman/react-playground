import React from 'react';
import './Accordian.css';

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSectionIndex: null,
        }
    } 

    handleButtonClick = (section, index) => {
        console.log(section, index);
        this.setState({ currentSectionIndex: index });
    };

    render() {
        const buttons = this.props.sections.map((section, index) => {
            let pStyle = (this.state.currentSectionIndex === index) ? '' : 'hidden';

            return (        
                <li key={index}>
                    <button onClick={() => this.handleButtonClick(section, index)}>
                        {section.title}
                    </button>
                    <p className={pStyle}>
                        {section.content}
                    </p>
                </li>
            )
        });

        return (
            <ul>
                {buttons}
            </ul>
        )
    }
}

export default Accordian;