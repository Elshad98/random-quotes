import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main className="quote-box">
            <div className="quote-text">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <span>Not everything that can be counted counts, and not everything that counts can be counted.</span>
            </div>
            <div className="quote-author">- Albert Einstein</div>
            <div className="buttons">
                <a href="#"><i className="fa fa-vk" aria-hidden="true"></i></a>
            </div>
      </main>
    );
  }
}

export default App;
