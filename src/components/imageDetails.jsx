import React from "react";

import "../assets/style/murImages.css";

export default class ImageWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterValue: "" };
        this.filterValueChanged = this.filterValueChanged.bind(this);
    }

    filterValueChanged(event) {
        this.setState({ filterValue: event.target.value });
        this.props.filterChanged(event.target.value);
    }

    render() {
        const input = (
            <input
                id="filtre"
                type="text"
                placeholder="filtre image..."
                value={this.state.filterValue}
                onChange={this.filterValueChanged}
            />
        );
        const image = <img src={this.props.image} alt={this.props.texte} />;
        const legende = <div className="legende"> {this.props.texte} </div>;
        return (
            <div id="details">
                {" "}
                {image} {legende} {input}
            </div>
        );
    }
}
