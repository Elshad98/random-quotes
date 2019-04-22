import React from 'react';
import PropTypes from 'prop-types';

function QuoteText(props){
	return (
		<div className={props.className}>
            <i className={props.icon} aria-hidden="true"></i>
            <span>{props.quoteText}</span>
        </div>
	);
}

export default QuoteText;