import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <h2>Class props</h2>
                <p>Type : {this.props.typeDog} </p>
                <img src={this.props.imgLink} alt="Hình đẹp" />
            </div>
        )
    }
}
