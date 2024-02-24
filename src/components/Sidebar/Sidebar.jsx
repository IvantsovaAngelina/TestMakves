import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.jpeg';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class SidebarCopy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
    const { isOpened } = this.state;
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const sidebarStyle = isOpened ? { width: '250px' } : {};

    return (
        <div className={ containerClassnames } style={ sidebarStyle }> 
            <div className='logoSidebar'>
                <img
                    src={ logo }
                    className='logoTensorFlow'
                    alt="TensorFlow logo"
                />
                <span className={isOpened?'textLogoOpen': 'textLogo'}>TensorFlow</span>
                <button className={isOpened ? 'btnToggleOpen' : 'btnToggle'} onClick={ this.toggleSidebar }>
                    <FontAwesomeIcon className={ isOpened ? 'iconToggleOpen' : 'iconToggle' } icon={ isOpened ? 'angle-left' : 'angle-right' } />
                </button>
            </div>
            <div className='menubar'>
                <div className='routes'>
                    {
                        routes.map((route) => (
                            <div className='divRoutes' key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='iconRoutes' icon={ route.icon } />
                                <span className={isOpened ? 'menubarTextOpen' : 'menubarText'} onClick={ this.toggleSidebar }>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div  className='bottomRoutes'>
                    {
                        bottomRoutes.map((route) => (
                            <div className='divBottomRoutes' key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='iconBottomRoutes' icon={ route.icon } />
                                <span className={isOpened ? 'menubarTextOpen' : 'menubarText'} onClick={ this.toggleSidebar }>{ route.title }</span>
                            </div>
                        ))
                    }
                </div> 
            </div>
            <div className='profile'>
                <img
                    src={ avatar }
                    className='picProfile'
                    alt="Profile pic"
                />
                <div className={isOpened?'textProfileOpen': 'textProfile'}>
                    <span className='typeProfile'>Account User</span>
                    <span className='nameProfile'>Mary T.</span>
                </div>
                
            </div>
        </div>
    );
}
}
