import React from 'react';
import PropTypes from 'prop-types';

function Link(props){
	return (
        <a href={props.href} rel="noopener noreferrer" className="icon" target="_blank">
            <i className={props.className} aria-hidden="true"></i>
        </a>
	);
}


Link.propTypes = {
	className: PropTypes.string.isRequired
};
export default Link;