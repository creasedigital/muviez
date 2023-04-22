export interface LayoutProps
  extends React.PropsWithChildren<unknown>,
    HeaderProps {
      loading?: boolean,
    }

export interface HeaderProps {
  pageTitle?: string | React.ReactNode;
  showBack?: boolean;
  navItems?: Array<React.FC<any>>;
  isHome?: boolean;
  hideWalletSection?: boolean;
}
