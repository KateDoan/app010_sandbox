import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Loading = () => {
    return(
        <div className="col-12">
            <span><FontAwesomeIcon 
            			icon={['fas', 'spinner']} 
            			size="3x" 
            			pulse={true}
            			fw={true}
            		/>
            </span>
            <p>Loading . . .</p>
        </div>
    );
};