import React from 'react'
import ClickCounter2 from './clickCounter2.js'

export default class Container2 extends React.Component {
    constructor(props) {
        super(props)
        this.store = {}
        this.state = {
            sum: 0
        }
    }

    updateCounter(id) {

        let sumer = this.state.sum
        sumer++
        this.setState({ sum: sumer })
        this.getCounter(id)
    }

    getCounter(id) {

        if (this.store[id]) { this.store[id] += 1 }
        else {
            this.store[id] = 1
        }

        console.log(this.store)
        return this.getTotal()
    }

    getTotal() {
        return this.state.sum
    }


    render() {

        return (
            <div>
                <ClickCounter2 id="button1" value={this.store["button1"]} whenChanged={() => this.updateCounter('button1')} />
                <ClickCounter2 id="button2" value={this.store["button2"]} whenChanged={() => this.updateCounter('button2')} />
                <ClickCounter2 id="button3" value={this.store["button3"]} whenChanged={() => this.updateCounter('button3')} />
                <ClickCounter2 id="button4" value={this.store["button4"]} whenChanged={() => this.updateCounter('button4')} />
                <div>{this.getTotal()}</div>

            </div>
        )
    }
}