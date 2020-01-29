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
        //let obj = {}
        if (this.state.store[id]) {
            this.state.store[id] += newVal

            //obj[id]+=newVal
        } else {
            this.state.store[id] = newVal
            //obj[id] = newVal
        }
        //let newStore = Object.assign(this.state.store, {id: newVal})
        //obj[id]=4
        newVal = this.state.store
        let newStore = Object.assign(this.state.store, newVal)
        // this.state or this.state.store - are still as they were
        // eslint-disable-next-line

        console.log("Newstore: " + JSON.stringify(newStore))
        this.state = Object.assign(this.state.store, newStore)

        this.setState(this.state)
        //console.log(JSON.stringify(this.state.store))
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
        for (let id in this.state.store)
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