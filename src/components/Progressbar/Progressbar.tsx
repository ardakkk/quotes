import * as React from 'react';
import './Progressbar.scss';

const Progressbar = (props) => {
    return (
            <React.Fragment>
                <div className="progress">
                    <div className="bar">
                        <span>4 / 10</span>
                    </div>
                </div>
            </React.Fragment>
    );
};

export default Progressbar;