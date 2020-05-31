import React from 'react';
class StockCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stockData = this.props.stockData["Global Quote"];
    const objKeys = Object.keys(stockData);

    // get data
    const symbol = stockData[objKeys[0]];
    let price = stockData[objKeys[4]];
    let change = stockData[objKeys[8]];
    const changePercent = stockData[objKeys[9]];

    // round currency
    price = Math.round(price * 100) / 100;
    change = Math.round(change * 100) / 100;

    // determine styling
    const color = change > 0 ? '#4BB543' : '#F32013';

    return (
      <div className="StockCard">
        <p style={{ margin: '10px' }}>
          {`${symbol}: $${price}, `}
          <span style={{ color: color }}>${change} ({changePercent})</span>
        </p>
      </div>
    );
  }
}

export default StockCard;