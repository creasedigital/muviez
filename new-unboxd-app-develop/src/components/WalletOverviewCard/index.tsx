import { WalletBalanceBig } from './styles';
import { ReactComponent as RequestIcon } from '../../assets/img/icons/request.svg';
import { formatNumber } from '../../utils/helpers';
import { Link, useRouteMatch } from 'react-router-dom';

interface IWalletOverviewCardProps {
  balance: number;
  isLoading?: boolean;
}

export const WalletOverviewCard = ({
  balance,
  isLoading,
}: IWalletOverviewCardProps) => {
  const { url } = useRouteMatch();
  return (
    <WalletBalanceBig>
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="circle-3" />
      <div className="left">
        <span>Wallet Balance</span>

        {isLoading ? (
          <small>loading...</small>
        ) : (
          <p>NGN {formatNumber(balance)}</p>
        )}
      </div>

      <div className="right">
        <Link to={`${url}/request-payout`}>
          <span>Request payout</span>
          <RequestIcon />
        </Link>
      </div>
    </WalletBalanceBig>
  );
};
