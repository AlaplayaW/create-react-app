import React, {Component} from "react";
import Film from "./Film"

class Character extends Component {
    render() {
        return (
        <div style={{ border: "solid"}}>
            <h1>hello world</h1>
            <Film filmName={this.props.film} real={this.props.real} />

        </div>
        )
    }
}
export default Character;