import React, { Component } from 'react';
import { Grid, Cell } from 'react-foundation';
import logo from './skull.svg';
import 'foundation-sites/dist/css/foundation.min.css';
import './KraytBanner.css';

class KraytBanner extends Component {
  render() {
    return (
      <div className="KraytBanner">
        <Grid className="display">
          <Cell small={2} large={3} className="whiteSpace" />
          <Cell small={1} large={1}>
          <header className="Banner-header">
            <img src={logo} className="Banner-logo" alt="logo"/>
          </header>
          </Cell>
          <Cell small={2} large={2} className="rightSideBannerText">
            <h1 className="Banner-title">Krayt Coin</h1>
          </Cell>
          <Cell small={3} large={3} className="rightSideBannerText">
            <h1 className="Banner-title">The Market Will Decide Your Fate</h1>
          </Cell>
          <Cell small={2} large={3} className="whiteSpace" />
        </Grid>
      </div>
    );
  }
}

export default KraytBanner;
