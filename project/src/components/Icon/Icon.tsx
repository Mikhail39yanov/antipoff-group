import styles from './icon.module.scss';
import classNames from 'classnames';
import { LogoutMobile } from '../Icons/LogoutMobile';

type TIconSize = 14 | 16 | 18 | 50 | 30;

interface IIconProps {
  size: TIconSize;
  mobileSize?: TIconSize;
  name?: EIcons;
  className?: string;
}

export enum EIcons {
  LogoutMobile = 'LogoutMobile',
}

export function Icon(props: IIconProps) {
  const { size = 18, name, mobileSize = 18, className = '' } = props;

  const classes = classNames(styles[`s${size}`], className, { [styles[`m${mobileSize}`]]: mobileSize });

  switch (name) {
    case EIcons.LogoutMobile:
      return <LogoutMobile className={classes} />;

    default:
      break;
  }

  return <div></div>;
}
