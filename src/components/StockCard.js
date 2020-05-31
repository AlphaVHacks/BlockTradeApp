import React from 'react';
import '../css/StockCard.css';

class StockCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.stockData);

    let stockData = this.props.stockData;
    let symbol;
    let price;
    let change;
    let changePercent;
    let displayCurrency = 'USD';

    let open;
    let high;
    let low;
    let vol;

    console.log(stockData);

    if (stockData.altCurrency) {
      const quoteData = stockData.quote["Global Quote"];
      const objKeys = Object.keys(quoteData);

      // get quote data (initially in USD)
      symbol = quoteData[objKeys[0]];
      price = quoteData[objKeys[4]];
      change = quoteData[objKeys[8]];
      changePercent = quoteData[objKeys[9]];

      open = quoteData[objKeys[1]];
      high = quoteData[objKeys[2]];
      low = quoteData[objKeys[3]];
      vol = quoteData[objKeys[5]];

      // perform conversion from usd to alt currency
      const { currency, exchangeRate } = stockData.altCurrency;
      price = price / exchangeRate;
      change = change / exchangeRate;
      open = open / exchangeRate;
      high = high / exchangeRate;
      low = low / exchangeRate;
      displayCurrency = currency;

      // round to 2 significant figures
      price = parseFloat(price.toPrecision(4));
      change = parseFloat(change.toPrecision(4));

    } else {
      stockData = stockData["Global Quote"];
      const objKeys = Object.keys(stockData);

      symbol = stockData[objKeys[0]];
      price = stockData[objKeys[4]];
      change = stockData[objKeys[8]];
      changePercent = stockData[objKeys[9]];

      open = stockData[objKeys[1]];
      high = stockData[objKeys[2]];
      low = stockData[objKeys[3]];
      vol = stockData[objKeys[5]];

      // round USD to cents
      price = Math.round(price * 100) / 100;
      change = Math.round(change * 100) / 100;
      open = Math.round(open * 100) / 100;
      high = Math.round(high * 100) / 100;
      low = Math.round(low * 100) / 100;
    }

    // determine styling
    const color = change > 0 ? '#4BB543' : '#F32013';

    return (
      <div className="StockCard">
        <div className="CardContent">
          <p style={{ marginTop: '10px', fontWeight: 'bold', marginBottom: '0px' }}>
            {`${symbol}`}
          </p>
          <p className="Currency" style={{
            fontSize: "12px",
            color: "rgba(0,0,0,0.5)"
          }}>
            ({displayCurrency})
        </p>

          <div className="CardPrices">
            <p className="CardFocus">
              <span className="CardLabel">Price: </span>
              {`${price} \t`}
              <span style={{
                color: color,
                fontSize: "12px",
              }}>
                {change} ({changePercent})
          </span>
            </p>
            <p>
              <span className="CardLabel">OPEN: </span>
              {open}
            </p>
            <p>
              <span className="CardLabel">HIGH: </span>
              {high}
            </p>
            <p>
              <span className="CardLabel">LOW: </span>
              {low}
            </p>
            <p>
              <span className="CardLabel">VOL: </span>
              {vol}
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default StockCard;