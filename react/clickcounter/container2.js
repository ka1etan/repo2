import React from 'react'
import ClickCounter2 from './clickCounter2.js'

export default class Container2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            store: {}
        }
    }


    updateCounter(id)
    {
        let newVal = 1
        if (this.state.store[id]) newVal = this.state.store[id]+1

        let newStore = Object.assign(this.state.store, {id: newVal})

        // this.state or this.state.store - are still as they were

        this.state = Object.assign(this.state, {store: newStore})

        this.setState(this.state)
    }

    getCounter(id)
    {
        if (this.state.store[id])
        {
            return this.state.store[id]
        }
        else
        {
            return 0
        }
    }

    getTotal()
    {
        let sum = 0
        for (id in this.state.store)
        {
            sum += this.state.store[id]
        }
        return sum
    }


    render() {

        return (
            <div>
                <ClickCounter2 id="button1" value={this.getCounter("button1")} whenChanged={() => this.updateCounter('button1')} />
                <ClickCounter2 id="button2" value={this.getCounter("button2")} whenChanged={() => this.updateCounter('button2')} />
                <ClickCounter2 id="button3" value={this.getCounter("button3")} whenChanged={() => this.updateCounter('button3')} />
                <ClickCounter2 id="button4" value={this.getCounter("button4")} whenChanged={() => this.updateCounter('button4')} />
                <div>{this.getTotal()}</div>

            </div>
        )
    }
}