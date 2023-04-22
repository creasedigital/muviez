import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardLayout } from '../../../../layout';
import { TabList, TabPanel, TabPanels, Tabs, WalletContainer } from './styles';
import { WalletOverviewCard } from '../../../../components/WalletOverviewCard';
import { TabPane, TabItem } from '../../../../components/Tabs';
import { GlobalStoreState } from '../../../../store/types';
import { getUserWallet } from './redux/actions';
import * as V from '../../../../utils/veem';

const Wallet = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const dispatch = useDispatch();

  const {
    data,
    isLoading,
  } = useSelector((state: GlobalStoreState) => state.wallet);

  useEffect(() => {
    dispatch(getUserWallet());
  }, [dispatch]);

  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
    // OTHER ACTIONS HERE
  };
  return (
    <DashboardLayout hideWalletSection>
      <WalletContainer>
        <WalletOverviewCard balance={data?.balance ?? '0.00'} isLoading={isLoading} />
        <Tabs>
          <TabList>
            <TabPane
              title="Contributions"
              isActive={currentTab === 0}
              onChangeTab={() => handleChangeTab(0)}
            />
            <TabPane
              title="Withdrawals"
              isActive={currentTab === 1}
              onChangeTab={() => handleChangeTab(1)}
            />
          </TabList>

          <TabPanels>
            {currentTab === 0 ? (
              <TabPanel>
                {data && data.contributions ? data.contributions?.map((item, index) => (
                  <React.Fragment key={index}>
                    <TabItem
                      date={item.date}
                      source={item.GivingType === "anonymous" ? "Anonymous" : V.isObjEmpty(item.Giver) ? item.GivingType : item.Giver.name}
                      amount={item.amount}
                      giftTitle={item.GiftName}
                    />
                  </React.Fragment>
                )) : 'You have no contributions yet'}
              </TabPanel>
            ) : (
              <TabPanel>
                {data && data.withdrawals ? data.withdrawals?.map((item, index) => (
                  <React.Fragment key={index}>
                    <TabItem
                      isWithDrawal
                      date={item.date}
                      bankName={item.bankName}
                      accountNumber={item.accountNumber}
                      amount={item.amount}
                      status={item.status}
                    />
                  </React.Fragment>
                )) : 'You have not requested any payout yet'}
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      </WalletContainer>
    </DashboardLayout>
  );
};

export default Wallet;
