'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from '@public/icons/Icons';
import { SVGProps } from 'react';

interface MenuListItemProps {
  label: string;
  link: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const MenuListItem = (props: MenuListItemProps) => {
  const { label, link, icon: Icon } = props;
  const pathname = usePathname();
  const isActiveLink = pathname === link;

  return (
    <Link
      href={link}
      className={`menu_list_item
      ${isActiveLink ? 'active' : ''}`}
    >
      <div className="label-wrapper">
        {isActiveLink ? <Icon color="#FFFFFF" /> : <Icon color="#9197B3" />}
        <div className="label">
          {label}
          {label !== 'Dashboard' ? (
            isActiveLink ? (
              <ArrowRight color="#FFFFFF" />
            ) : (
              <ArrowRight color="#9197B3" />
            )
          ) : (
            ''
          )}
        </div>
      </div>
    </Link>
  );
};
