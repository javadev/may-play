import React, { Component } from 'react';
import { ReactClass } from 'react-core-decorators';
import classnames from 'classnames';
import { Link } from 'react-router';

import CSSModules from 'utils/css-modules';

import styles from './Header.scss';

@ReactClass
@CSSModules(styles)
class Header extends Component {
    render() {
        const {
            loggedIn
        } = this.props;

        return (
            <header styleName="app-header">
                <Link
                        styleName="logo link"
                        to="/">
                    May Play    
                    {
                        DEBUG &&
                            <i styleName={classnames('debug-online-status', loggedIn && 'online')}/>
                    }
                </Link>

                {
                    !loggedIn ?
                        <section styleName="sign-area">
                            <Link
                                    styleName="link"
                                    to="login">
                                Login
                            </Link>
                            <Link
                                    styleName="link"
                                    to="signup">
                                Sign up
                            </Link>
                        </section> :
                            
                        <section styleName="account-area">
                            <Link
                                    styleName="link"
                                    to="logout">
                                Logout
                            </Link>
                        </section>
                }
            </header>
        );
    }
}

export default Header;