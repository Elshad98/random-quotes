import React from 'react';
import PropTypes from 'prop-types';

function Link(props){
	return (
		 <a href="www.exaple.com" className="icon" target="_blank">
            <i className={props.className} aria-hidden="true"></i>
        </a>
	);
}


Link.propTypes = {
	className: PropTypes.string.isRequired
};
export default Link;