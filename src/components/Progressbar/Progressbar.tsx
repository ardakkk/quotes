import * as React from 'react';
import './Progressbar.scss';

const Progressbar = (props) => {
    const { maxCount, count } = props;
    const width = (count * 100) / maxCount;  
    return (
            <React.Fragment>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={ { width: `${width}%`}}>{ `${ count} / ${ maxCount }` }</div>
                </div>
            </React.Fragment>
    );
};

export default Progressbar;