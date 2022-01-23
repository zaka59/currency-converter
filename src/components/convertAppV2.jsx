import React from "react";

import "../assets/style/app.css";
import Currency from "./currency.jsx";
import dataCurrencies from "../data/currencies.js";

export default class ConvertAppV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { euro: "1", currencies: [] };
        this.euroChange = this.euroChange.bind(this);
    }

    componentDidMount() {
        this.setState({ currencies: dataCurrencies });
    }

    euroChange(event) {
        this.setState({ euro: event.target.value });
    }

    render() {
        const labelInput=(
            <label for="input"> €</label>);
        const input = (
            <input
                type="text"
                id="input"
                min="0"
                ref="euro"
                placeholder="1"
                onChange={this.euroChange}
            />
        );
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
                {labelInput}
                {currencyComponents}{" "}
            </div>
        );
    }
}
