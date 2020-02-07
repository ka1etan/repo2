import React from 'react'


export default class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            elapsed: "00:00:00.000",
            playstate: false,
            pausestate: true,
            resumestate: true,
            stopstate: true
        }

        this.begin = 0
        this.durationUntilLastPause = 0
        this.isStarted = false
        this.isPaused = false
        this.minutes = 0
        this.seconds = 0
        this.miliseconds = 0
        this.hours = 0
        //this.testTime = 0
        this.states()
    }

    startTimer() {
        this.timerHandle = setInterval(function () {
            let cdate2 = new Date()
            let cdate2epoch = cdate2.getTime()
            this.hours = Math.floor((((cdate2epoch - this.begin) / 1000) / 60 / 60) % 24)
            this.seconds = Math.floor(((cdate2epoch - this.begin) / 1000) % 60)
            this.minutes = Math.floor(((cdate2epoch - this.begin) / 1000 / 60) % 60)
            this.miliseconds = Math.floor((cdate2epoch - this.begin) % 1000)
            let elapsed = this.hours.toString().padStart(2, '0')
                + ":" + this.minutes.toString().padStart(2, '0')
                + ":" + this.seconds.toString().padStart(2, '0')
                + "." + this.miliseconds.toString().padStart(3, '0')
            //let tmp = this.testTime++
            this.setState({ elapsed: elapsed })
        }.bind(this), 200);
    }

    play() {
        this.begin = new Date()
        this.isStarted = true
        this.tmp = this.startTimer()
        //alert("play z timera") 
        this.states()
    }

    pause() {
        clearInterval(this.timerHandle)
        this.isStarted = false
        this.isPaused = true
        this.durationUntilLastPause = this.seconds * 1000 + this.miliseconds + this.minutes * 1000 * 60
        this.states()
    }

    resume() {

        this.isStarted = true
        this.isPaused = false
        this.begin = - this.durationUntilLastPause + new Date().getTime()
        this.tmp = this.startTimer()
        this.states()
    }

    stop() {
        if (!this.isStarted && this.isPaused) {
            clearInterval(this.timerHandle)
            this.setState({ elapsed: "00:00:00.00" })
            this.isStarted = false
            this.isPaused = false
            this.durationUntilLastPause = 0
            this.states()
        }
        clearInterval(this.timerHandle)
        this.setState({ elapsed: "00:00:00.00" })
        this.isStarted = false
        this.isPaused = false
        this.durationUntilLastPause = 0
        this.states()
    }

    states() {
        if (this.isStarted === true) {
            this.setState({ playstate: true })
            this.setState({ resumestate: true })
            this.setState({ pausestate: false })
            this.setState({ stopstate: false })

        } else if (this.begin === 0 || this.durationUntilLastPause === 0) {
            this.setState({ stopstate: true })
            this.setState({ resumestate: true })
            this.setState({ pausestate: true })
            this.setState({ playstate: false })
        }

        else {
            this.setState({ resumestate: false })
            this.setState({ pausestate: false })
        }
    }

    render() {

        return (
            <div>
                <br></br>
                <label id={this.props.timerName}>{this.props.timerName}</label>
                <br></br>
                <br></br>
                <label id={this.props.display}>{this.state.elapsed}</label>
                <br></br>
                <button id={this.props.play} playlabel={this.props.playlabel} onClick={() => this.play()} disabled={this.state.playstate}>{this.props.playlabel}</button>
                <button id={this.props.pause} pauselabel={this.props.pauselabel} onClick={() => this.pause()} disabled={this.state.pausestate}>{this.props.pauselabel}</button>
                <button id={this.props.resume} resumelabel={this.props.resumelabel} onClick={() => this.resume()} disabled={this.state.resumestate}>{this.props.resumelabel}</button>
                <button id={this.props.stop} stoplabel={this.props.stoplabel} onClick={() => this.stop()} disabled={this.state.stopstate}>{this.props.stoplabel}</button>
                <input type="checkbox" id={this.props.checkBox}></input>
            </div>
        )
    }
}