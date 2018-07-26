import * as React from 'react';
import './Progressbar.scss';

const Progressbar = (props) => {
    return (
            <React.Fragment>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={ { width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>5 / 10</div>
                </div>
            </React.Fragment>
    );
};

export default Progressbar;