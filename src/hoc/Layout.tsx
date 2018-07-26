import * as React from 'react'


const Layout = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12">{ props.children }</div>
            </div>
        </div>
    );
};

export default Layout;