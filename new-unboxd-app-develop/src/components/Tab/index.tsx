import shortid from 'shortid';
import { TabItem, TabWrapper } from './styles';

type ComponentProps = {
  active: number;
  tabs: string[];
  change: (tabIndex: number) => void;
};

const Tab = ({ active, tabs, change }: ComponentProps) => {
  return (
    <TabWrapper>
      {tabs.map((tab, index) => (
        <TabItem
          onClick={() => change(index)}
          key={shortid.generate()}
          active={active === index}
        >
          {tab}
        </TabItem>
      ))}
    </TabWrapper>
  );
};

export default Tab;
