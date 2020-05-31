import React from 'react';
import { Link } from 'react-router-dom';
import StockCard from './StockCard';
const alpha = require('alphavantage')({ key: 'AJC1VXSOOGI1OS2K' });

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { symbol: '', stockData: null };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const symbol = this.state.symbol;
    if (symbol !== "") {

      alpha.data.quote(symbol)
        .then(data => {
          this.setState({ stockData: data });
        })
        .catch(err => {
          this.setState({ stockData: 'err' });
          console.log('Error: ' + err)
        });
    }
  }

  onSymbolChange = (e) => {
    this.setState({ symbol: e.target.value });
  }

  render() {

    let stockData = this.state.stockData;
    let stockview;

    // no stock data
    if (stockData === 'err') {
      stockview = <p>No such stock symbol.</p>
    } else if (stockData !== null) {
      stockview = <StockCard stockData={stockData} />
    }

    return (
      <div className="Dashboard">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="symbol">Symbol (ie. GOOGL)</label>
            <input type="symbol" className="form-control" id="symbol" onChange={this.onSymbolChange} />
          </div>
          <button className="btn btn-outline-primary">Search</button>
        </form>
        {stockview}
      </div>
    );
  }
}

export default Dashboard;