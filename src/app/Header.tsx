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
                <AppBar title="MAVLink Online" />
            </div>
        );
    };
}