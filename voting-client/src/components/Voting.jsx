import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className="voting">
      <h1>Okay, we get something now</h1>
      {this.getPair().map(entry =>
        <button key={entry}>
          <h2>{entry}</h2>
        </button>
      )}
    </div>;
  }
});