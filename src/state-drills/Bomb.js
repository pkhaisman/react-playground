import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    checkIfEven() {
        if (this.state.count >= 8) {
            clearInterval(this.interval);
            return 'BOOM';
        } else if (this.state.count % 2 === 0) {
            return 'tick';
        }
        return 'tock';
    }

    componentDidMount() {
        console.log('componentDidMound');
        // add one to count every second
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        console.log(this.state.count);
        return (
            <div>
                <p>{this.checkIfEven()}</p>
            </div>
        )
    }
}

export default Bomb;