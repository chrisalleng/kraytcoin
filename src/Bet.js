import React, { Component } from 'react';
import { Grid, Cell} from 'react-foundation';
import 'foundation-sites/dist/css/foundation.min.css';
import './Bet.css';

class Bet extends Component {
  render() {
    return (
      <div>
        <Grid className="Bet-Main-Grid">
          <Cell small={5} large={5}>
            <Grid>
              <Cell small={6} large={6}>
                <div className="Bet-Info-Box Centered-Text">
                    <h4>Soontir Fel</h4>
                    <p>Ace of Legend</p>
                </div>
              </Cell>
              <Cell small={6} large={6}>
                <div className="Bet-Info-Box Centered-Text">
                  <div className="Centered-Text">
                      <div>
                        Doubled Price: 54
                      </div>
                  </div>
                  <form className="Centered-Text">
                    <label>
                      Your Bet
                      <input type="number" name="name" min="0" max="200" step="1" width="50%"/>
                    </label>
                  </form>
                </div>
              </Cell>
            </Grid>
          </Cell>
          <Cell small={7} large={7}>
            <div className="GraphGoesHere Centered-Text">

            </div>
            <div className="GraphLabelText Centered-Text">
              Current Community Prices
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Bet;