import { ComponentProps } from '../types';
import { PageMain } from '../styles';

const MarketingLayout: React.FC<ComponentProps> = ({ children }) => {
  return <PageMain>{children}</PageMain>;
};

export default MarketingLayout;
