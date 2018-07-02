import React, { Component } from 'react'
import { Transition, Container, TitleBar, Button, Sheet, Panel } from '@extjs/ext-react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import Accounts from './Accounts/Accounts';
import Funds from './Funds/Funds';
import NavMenu from './NavMenu';

Ext.require('Ext.panel.Resizer');

/**
 * The main application view and routes
 */

class Layout extends Component {

    state = {
        showAppMenu: false,
        isMenuMicro: false,
    }

    toggleAppMenu = () => {
        this.setState({ showAppMenu: !this.state.showAppMenu });
    }

    onHideAppMenu = () => {
        this.setState({ showAppMenu: false });
    }

    navigate = (path) => {
        this.setState({ showAppMenu: false });
        this.props.history.push(path);
    }

    handleMenuResize = (context) => {
        if (context.el.dom.offsetWidth <= 150 && !this.state.isMenuMicro) {this.setState({isMenuMicro: true})}
        else if(context.el.dom.offsetWidth > 150 && this.state.isMenuMicro) {this.setState({isMenuMicro: false})}
    }

    render() {
        const { showAppMenu, isMenuMicro } = this.state;
        const { location } = this.props;

        const navMenuDefaults = {
            onItemClick: this.navigate,
            selection: location.pathname
        }

        return (
            <Container fullscreen layout="fit">
                <TitleBar title="Investments App" docked="top">
                    {Ext.platformTags.phone && (
                        <Button align="left" iconCls="x-fa fa-bars" handler={this.toggleAppMenu} ripple={false}/>
                    )}
                </TitleBar>
                {Ext.platformTags.phone ? (
                    <Sheet displayed={showAppMenu} side="left" onHide={this.onHideAppMenu}>
                        <Panel scrollable title="ExtReact Boilerplate">
                            <NavMenu {...navMenuDefaults} width="250"/>
                        </Panel>
                    </Sheet>
                ) : (
                    <Panel 
                        scrollable shadow
                        docked="left" zIndex={2}
                        width={300}
                        resizable={{
                            split: true,
                            edges: 'east',
                            dynamic: true,
                            maxSize: [300, null],
                            minSize: [80, null]
                        }}
                        listeners={{
                            resize: this.handleMenuResize
                        }}
                    >
                        <NavMenu
                            {...navMenuDefaults}
                            micro={isMenuMicro}
                            userCls="nav-menu"
                        />
                    </Panel>
                )}
                <Transition type="fade">
                    <Switch>
                        <Route path="/" component={Dashboard} exact/>
                        <Route path="/accounts" component={Accounts}/>
                        <Route path="/funds" component={Funds}/>
                    </Switch>
                </Transition>
            </Container>
        );
    }
}

export default withRouter(Layout);