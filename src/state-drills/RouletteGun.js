import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    randomNumber = () => {
        let num = Math.ceil(Math.random() * 8)
        this.setState({
            chamber: num,
            spinningTheChamber: false
        });
    }

    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true
        });
        this.timeout = setTimeout(this.randomNumber, 2000);
    }  
    
    renderMessage() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props

        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!';
        } else {
            return 'you are safe!';
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        return (
            <div>
                <p>
                    {this.renderMessage()}
                </p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun