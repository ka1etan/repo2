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
        console.log(`id=${id}\n${this.state}`)
        let newVal = 1
        let tmp = 0
        
        if (this.state.store[id]) {
            tmp = this.state.store[id]
            newVal = this.state.store[id] +1
        } 
        
        let storeUpdate = {} 
        storeUpdate[id] = newVal  
        let newStore = Object.assign(this.state.store, storeUpdate)
        let newState = Object.assign(this.state, {store: newStore})
        this.setState(newState)
        console.log(newState)
        
        localStorage.counter = Number(localStorage.counter) + (this.state.store[id] - tmp)
        
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
   
    storageCheck(){
        //localStorage.removeItem("counter")

        if (typeof (Storage) !== undefined) {
            
            if (localStorage.counter) {
                
    
            } else { localStorage.counter = this.getTotal() }
            
            
    
        } else {
            alert("Your browser doesnt support local storage feature")
        }
        console.log("local storage: "+localStorage.counter)
        
    }

    getLocalStorage(){
        this.storageCheck()
        return localStorage.counter
    }


    render() {

        return (
            <div>
                <ClickCounter2 id="button1" value={this.getCounter("button1")} whenChanged={() => this.updateCounter('button1')} />
                <ClickCounter2 id="button2" value={this.getCounter("button2")} whenChanged={() => this.updateCounter('button2')} />
                <ClickCounter2 id="button3" value={this.getCounter("button3")} whenChanged={() => this.updateCounter('button3')} />
                <ClickCounter2 id="button4" value={this.getCounter("button4")} whenChanged={() => this.updateCounter('button4')} />
                <div>{this.getTotal()}</div>
                <div>{this.getLocalStorage()}</div>

            </div>
        )
    }
}