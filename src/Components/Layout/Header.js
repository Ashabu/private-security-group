import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='app-header'>
            <div className='app-header-left'>
                <span>Private &amp;	Security Group</span>
            </div>
            <div className='app-header-right'>
                <div className='app-navigation'>
                    <ul>
                        <li>
                            <Link to='/'>მთავარი</Link>
                        </li>
                        <li>
                            <Link to='/aboutUs'>ჩვენს შესახებ</Link>
                        </li>
                        <li>
                            <Link to='/services' >სერვისები</Link>
                        </li>
                        <li>
                            <Link to='/contact'>კონტაქტი</Link>
                        </li>
                    </ul>
                </div>
                <div className='app-lang'>
                    <ul>
                        <li>
                            <img style={{ width: 20, height: 15 }} src='../../Assets/Images/Flags/flag-ge.svg' />
                            <span>ქარ</span>
                        </li>
                        <li>
                            <img style={{ width: 20, height: 15 }} src='../../Assets/Images/Flags/flag-us.svg' />
                            <span>ENG</span>
                        </li>
                        <li>
                            <img style={{ width: 20, height: 15 }} src='../../Assets/Images/Flags/flag-ru.svg' />
                            <span>RU</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
