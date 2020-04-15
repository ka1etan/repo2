import React from 'react'


export default class ClickCounter2 extends React.Component {
    
    render() {
        //const { value, whenChanged } = this.props
        return (
            <div>
                <button id={this.props.id} onClick={() => this.props.whenChanged()}>{this.props.id}</button>
                <label>{this.props.value}</label>
            </div>
        )
    }
}