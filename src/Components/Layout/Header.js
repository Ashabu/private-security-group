import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const { setLang, Langs } = useContext(AppContext)


    return (
        <div className='app-header'>
            <div className={openMenu ? 'menu-btn open' : 'menu-btn'} onClick={() => setOpenMenu(!openMenu)}>
                <div className='burger'></div>
            </div>
            <div className={openMenu ? 'dropdown open' : 'dropdown'}>
                <div className='dropwdown-list'>
                    <ul>
                        <li>
                            <Link to='/'>{Langs.home}</Link>
                        </li>
                        <li>
                            <Link to='/aboutUs'>{Langs.aboutus}</Link>
                        </li>
                        <li>
                            <Link to='/services' >{Langs.services}</Link>
                        </li>
                        <li>
                            <Link to='/contact'>{Langs.contact}</Link>
                        </li>
                    </ul>
                    <ul className = 'langs'>
                        <li onClick={() => setLang('ka')}>
                            <img  src='../../Assets/Images/Flags/flag-ge.svg' />
                            <span>ქარ</span>
                        </li>
                        <li onClick={() => setLang('en')}>
                            <img  src='../../Assets/Images/Flags/flag-us.svg' />
                            <span>ENG</span>
                        </li>
                        <li onClick={() => setLang('ru')}>
                            <img  src='../../Assets/Images/Flags/flag-ru.svg' />
                            <span>RU</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='app-header-left'>
                <span>Private &amp;	Security Group</span>
            </div>
            <div className='app-header-right'>
                <div className='app-navigation'>
                    <ul>
                        <li>
                            <Link to='/'>{Langs.home}</Link>
                        </li>
                        <li>
                            <Link to='/aboutUs'>{Langs.aboutus}</Link>
                        </li>
                        <li>
                            <Link to='/services' >{Langs.services}</Link>
                        </li>
                        <li>
                            <Link to='/contact'>{Langs.contact}</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className='app-lang'>
                    <ul>
                        <li onClick={() => setLang('ka')}>
                            <img style={{ width: 20, height: 15 }} src='../../Assets/Images/Flags/flag-ge.svg' />
                            <span>ქარ</span>
                        </li>
                        <li onClick={() => setLang('en')}>
                            <img style={{ width: 20, height: 15 }} src='../../Assets/Images/Flags/flag-us.svg' />
                            <span>ENG</span>
                        </li>
                        <li onClick={() => setLang('ru')}>
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
