import { SidebarLogo } from '@public/icons/Icons';
import Link from 'next/link';
import { MenuListItem } from './components/MenuListItem';
import { MENU } from '@/constants';
import { USER } from '@/constants';
import './Sidebar.scss';
import Image from 'next/image';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="logo_wrapper">
          <Link href="/dashboard">
            <SidebarLogo />
            <span className="logo_text">
              Dashboard <span className="logo_mask">v.01</span>
            </span>
          </Link>
        </div>

        <nav className="menu_list">
          {MENU.map(({ label, link, icon }, index) => (
            <MenuListItem key={index} label={label} link={link} icon={icon} />
          ))}
        </nav>
      </div>
      <div className="user_wrapper">
        <Image src={USER.photo} alt={USER.name} />
        <div className="user-info">
          <p>{USER.name}</p>
          <p>{USER.position}</p>
        </div>
      </div>
    </div>
  );
};
