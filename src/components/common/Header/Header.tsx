'use client';
import './Header.scss';
import Link from 'next/link';

import { useState } from 'react';
import { MENU } from '@/constants';
import { MenuListItem } from '../Sidebar/components/MenuListItem';
import { SidebarLogo } from '@public/icons/Icons';

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const BurgerHandler = () => {
    setIsShowMenu((prev) => {
      return !prev;
    });
  };
  return (
    <header>
      <div className="logo_wrapper">
        <div className="logo_wrapper_nav">
          <Link href="/dashboard">
            <SidebarLogo />
            <span className="logo_text">
              Dashboard <span className="logo_mask">v.01</span>
            </span>
          </Link>

          <div
            className={`header__burger ${isShowMenu ? 'active' : ''}`}
            onClick={BurgerHandler}
          >
            <span />
          </div>
        </div>
      </div>

      {isShowMenu && (
        <>
          <nav className="header__menu">
            {MENU.map(({ label, link, icon }, index) => (
              <MenuListItem key={index} label={label} link={link} icon={icon} />
            ))}
          </nav>
        </>
      )}
    </header>
  );
};
