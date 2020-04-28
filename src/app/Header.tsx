import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
export default class HeaderAppBar extends React.Component {
    constructor(props: { value: number, open: boolean }) {
        super(props);
        this.state = { value: 1, open: false };
    }
    render() {
        return (
            <div>
                <Drawer>
                    <MenuItem> <a href="/">Home </a></MenuItem>
                    <MenuItem> <a href="/services">Services </a></MenuItem>
                    <MenuItem> <a href="/about">About </a></MenuItem>
                    <MenuItem> <a href="/contact">Contact </a></MenuItem>
                    <MenuItem> <a href="/FAQ">FAQ </a></MenuItem>
                </Drawer>
                <AppBar
                    title="My React App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more">
                </AppBar>
            </div>
        );
    };
}