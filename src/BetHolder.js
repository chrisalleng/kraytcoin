import React, { Component } from 'react';
import { Grid, Cell} from 'react-foundation';
import Bet from './Bet';
import 'foundation-sites/dist/css/foundation.min.css';
import './BetHolder.css';
import './KraytBanner.css';

class BetHolder extends Component {
  render() {
    return (
      <div className="BetHolder-Container">
        <Grid className="BetHolder-Grid">
          <Cell small={3} large={3} className="BetHolder-WhiteSpace" />
          <Cell small={6} large={6} className="BetHolder-Pane">
            <Bet />
          </Cell>
          <Cell small={3} large={3} className="BetHolder-WhiteSpace" />
        </Grid>
      </div>
    );
  }
}

export default BetHolder;