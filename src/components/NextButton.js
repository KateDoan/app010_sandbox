import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NextBtn = (props) => {
	return (
		<div className="col-xs-4 col-md-2 offset-md-5 fixed-bottom">
			<button
				onClick={props.next}
				className={'btn butt-nav next'}
				><span><FontAwesomeIcon icon={['fas', 'forward']} size="2x" /></span><p>Next</p>
			</button>
		</div>
	);
}

export default NextBtn;
