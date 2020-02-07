import React from 'react'
import Panel from './panel.js'
import Timer from './timer.js'

export default class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            timerId: 0,
            timerName: ''
        }
        this.matrix = []
        this.names = {}
        //this.namesIndex = 0
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ timerName: event.target.value });
    }

    addTimer() {
        //alert("add timer")
        let counter = this.state.timerId
        // this.namesIndex++
        counter++
        this.matrix.push(counter)
        this.names[counter] = this.state.timerName
        this.setState({ timerId: counter })
        console.log(JSON.stringify(this.state))
        console.log(this.matrix)
        console.log(JSON.stringify(this.names))
        this.setState({ timerName: "" })
    }

    remove() {
        alert("remove")
    }

    render() {

        //const id = this.namesIndex
        const handler = this.matrix
        const renderTimer = handler.map((id) => {

            return (
                <div key={id} id={id}>
                    <Timer timerName={this.names[id]}
                        display="timeDisplay"
                        play="play" pause="pause" resume="resume" stop="stop"
                        checkBox="check"
                        pauseClick={() => this.pause()}
                        resumeClick={() => this.resume()} stopClick={() => this.stop()}
                        playlabel="Play" pauselabel="Pause" resumelabel="Resume" stoplabel="Stop"
                    />
                </div>
            )
        })

        return (
            <div>
                <Panel timerName="timerName" add="addTimer" remove="removeTimer" addlabel="Add Timer"
                    removelabel="Remove" addTimerClick={() => this.addTimer()} removeClick={() => this.remove()}
                    value={this.state.timerName} onChange={this.handleChange} />
                <div >{renderTimer}</div>
            </div>
        )
    }
}