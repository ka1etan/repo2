import React from 'react'
import ReactDOM from 'react-dom'

class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    countClick(callback) {
        let count = this.state.counter
        count++
        this.setState({ counter: count})
        callback()
    }

    render() {
        const { value, whenChanged } = this.props
        return (
            <div>
                <button id={value} onClick={() => this.countClick(whenChanged)}>{value}</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

class Container2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sum: 0
        }
    }

    clickHandler() {
        let sumer = this.state.sum
        sumer++
        this.setState({ sum: sumer })
    }

    render() {
        return (
            <div>
                <ClickCounter value="button1" whenChanged={() => this.clickHandler()} />
                <ClickCounter value="button2" whenChanged={() => this.clickHandler()} />
                <ClickCounter value="button3" whenChanged={() => this.clickHandler()} />
                <ClickCounter value="button4" whenChanged={() => this.clickHandler()} />
                <p>{this.state.sum}</p>
            </div>
        )
    }
}

ReactDOM.render(<Container2 />, document.getElementById('root'))