import React from "react";
import { Link } from "react-router-dom";
import StockCard from "./StockCard";
import App from "./App";
const alpha = require("alphavantage")({ key: "AJC1VXSOOGI1OS2K" });

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { symbol: "", currency: "USD", stockData: null };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const symbol = this.state.symbol;
    const currency = this.state.currency;

    if (symbol !== "") {
      // get stock data in USD
      alpha.data
        .quote(symbol)
        .then((quoteData) => {
          // perform currency conversion if needed
          if (currency !== "USD") {
            alpha.forex.rate(currency, "USD").then((exchangeData) => {
              const exchangeRate = Number(
                exchangeData["Realtime Currency Exchange Rate"][
                  "5. Exchange Rate"
                ]
              );

              const stockDataWithAltCurrency = {
                altCurrency: { currency, exchangeRate },
                quote: quoteData,
              };

              this.setState({ stockData: stockDataWithAltCurrency });
            });
          } else {
            this.setState({ stockData: quoteData });
          }
        })
        .catch((err) => {
          this.setState({ stockData: "err" });
          console.log("Error: " + err);
        });
    }
  };

  onSymbolChange = (e) => {
    this.setState({ symbol: e.target.value });
  };

  onCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  render() {
    let stockData = this.state.stockData;
    let stockview;

    // no stock data
    if (stockData === "err") {
      stockview = <p>No such stock symbol.</p>;
    } else if (stockData !== null) {
      stockview = <StockCard stockData={stockData} />;
      return (
        <div>
          <div style={{ border: "black" }}>{stockview}</div>
          <div>
            <select
              style={{ width: "250px" }}
              className="form-control"
              id="currency"
              onChange={this.onCurrencyChange}
              value={this.state.currency}
            >
              <option value="USD">USD</option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="DAI">Dai</option>
              <option value="USDT">Tether</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-outline-primary">Buy</button>
          <br></br>
          <br></br>
          <button className="btn btn-outline-primary">Sell</button>
          {/* <App /> */}
        </div>
      );
    }

    return (
      <div className="Dashboard">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={this.onSubmit}
        >
          <div className="form-group">
            <label htmlFor="symbol">Symbol (ie. GOOGL)</label>
            <input
              style={{ width: "250px" }}
              type="symbol"
              className="form-control"
              id="symbol"
              onChange={this.onSymbolChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select
              style={{ width: "250px" }}
              className="form-control"
              id="currency"
              onChange={this.onCurrencyChange}
              value={this.state.currency}
            >
              <option value="USD">USD</option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="DAI">Dai</option>
              <option value="USDT">Tether</option>
            </select>
          </div>
          <button className="btn btn-outline-primary">Search</button>
          {/* <App /> */}
        </form>
        {stockview}
      </div>
    );
  }
}

export default Dashboard;
