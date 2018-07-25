import Grid from '@material-ui/core/Grid';
import * as React from 'react'


const Layout = (props) => {
    return (
        <Grid container={true} spacing={16}>
            <Grid item={true} xs={12} xl={12}>
                { props.children }
            </Grid>
        </Grid>
    );
};

export default Layout;