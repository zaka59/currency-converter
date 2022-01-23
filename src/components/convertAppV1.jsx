import React from "react";

import "../assets/style/app.css";
import Currency from "./currency.jsx";
import dataCurrencies from "../data/currencies.js";

export default class ConvertAppV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { euro: "1", currencies: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ currencies: dataCurrencies });
    }

    handleClick() {
        this.setState({ euro: this.refs.euro.value });
    }

    render() {
        const input = <input type="text" min="0" ref="euro" placeholder="1" />;
        const button = <button onClick={this.handleClick}>OK</button>;
        const currencyComponents = this.state.currencies.map((currency) => (
            <Currency
                {...currency}
                {...this.props}
                euro={parseFloat(this.state.euro)}
                key={currency.code}
            ></Currency>
        ));
        return (
            <div className="app">
                {input}
                {button}
                {currencyComponents}{" "}
            </div>
        );
    }
}
