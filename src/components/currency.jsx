import React from "react";

import "../assets/style/currency.css";

export default class Currency extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="currency">
                {this.props.symbol}
                {this.props.rate * this.props.euro}
            </div>
        );
    }
}
