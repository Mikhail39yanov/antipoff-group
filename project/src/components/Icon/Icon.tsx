import styles from './icon.module.scss';
import classNames from 'classnames';
import { IconAnon, IconLike, IconLogoutMobile } from '../Icons';

type TIconSize = 120 | 14 | 16 | 18 | 50 | 30;

interface IIconProps {
  size: TIconSize;
  mobileSize?: TIconSize;
  name?: EIcons;
  className?: string;
}

export enum EIcons {
  IconLogoutMobile = 'IconLogoutMobile',
  IconAnon = 'IconAnon',
  IconLike = 'IconLike',
}

export function Icon(props: IIconProps) {
  const { size = 18, name, mobileSize = 18, className = '' } = props;

  const classes = classNames(styles[`s${size}`], className, { [styles[`m${mobileSize}`]]: mobileSize });

  switch (name) {
    case EIcons.IconLogoutMobile:
      return <IconLogoutMobile className={classes} />;

    case EIcons.IconAnon:
      return <IconAnon className={classes} />;

    case EIcons.IconLike:
      return <IconLike className={classes} />;

    default:
      break;
  }

  return <div></div>;
}
