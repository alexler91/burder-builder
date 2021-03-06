import React from 'react';

import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <div>Toolbar, SideDrawer, Backfrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;