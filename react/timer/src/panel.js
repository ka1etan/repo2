import React from 'react'

export default class Panel extends React.Component {

    render() {

        return (
            <div>
                <input maxLength="10" size="10" id={this.props.timerName} value={this.props.value} onChange={this.props.onChange}></input>
                <button id={this.props.add} addlabel={this.props.addlabel} onClick={() => this.props.addTimerClick()}>{this.props.addlabel}</button>
                <button id={this.props.remove} removelabel={this.props.removeLabel} onClick={() => this.props.removeClick()}>{this.props.removelabel}</button>
            </div>
        )
    }
}