import React from 'react';
import PropTypes from 'prop-types';

function Link(props){
	return (
		 <a href="#" className="icon" target="_blank">
            <i className={props.className} aria-hidden="true"></i>
        </a>
	);
}

export default Link;