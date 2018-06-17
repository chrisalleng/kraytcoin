import React from 'react';
import ReactDOM from 'react-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import KraytBanner from './KraytBanner';
import BetHolder from './BetHolder';
import registerServiceWorker from './registerServiceWorker';



class Page extends React.Component {
  render() {
    return (
      <div>
          <KraytBanner />
          <BetHolder />
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
  );
registerServiceWorker();