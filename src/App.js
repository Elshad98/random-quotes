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
                <a href="#" className="icon vk" target="_blank">
                	<i className="fa fa-vk" aria-hidden="true"></i>
               	</a>
                <a href="#" className="icon twitter" target="_blank">
                	<i className="fa fa-twitter" aria-hidden="true"></i>
                </a> 
                <a href="#" className="icon facebook" target="_blank">
                	<i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <button href="#" className="new-quote">New quote</button>
            </div>
      </main>
    );
  }
}

export default App;
