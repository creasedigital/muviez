import { TabItemContainer, Badge, SpanText, Entry } from './styles';
import dayjs from 'dayjs';
import { formatNumber } from '../../utils/helpers';
import { ReactComponent as RequestIcon } from '../../assets/img/icons/request.svg';
import { ReactComponent as ReceivedIcon } from '../../assets/img/icons/received.svg';

interface ITabItemProps {
  source?: string;
  amount: number | string;
  date: Date | string;
  giftTitle?: string;
  isWithDrawal?: boolean;
  bankName?: string;
  accountNumber?: string;
  status?: string;
}

const TabItem = ({
  source,
  amount,
  date,
  giftTitle,
  isWithDrawal,
  bankName,
  accountNumber,
  status,
}: ITabItemProps) => {
  return (
    <TabItemContainer>
      <div className="left">
        {isWithDrawal ? (
          <RequestIcon />
        ) : (
          <ReceivedIcon style={{ transform: 'rotate(180deg)' }} />
        )}
        <div>
          <Entry>
            <SpanText>{isWithDrawal ? 'Paid' : 'Received'}</SpanText>{' '}
            <small>{isWithDrawal ? 'to' : 'from'}</small>{' '}
            <span>{isWithDrawal ? accountNumber : source}</span>
            {isWithDrawal ? <Badge error={status === "unsuccessful"}>{status ? status : 'pending'}</Badge> : ''}
          </Entry>
          <small>
            {isWithDrawal
              ? bankName
              : `for ${giftTitle}`}
          </small>
        </div>
      </div>
      <div className="right">
        <p>
          N
          {formatNumber(
            (typeof amount === 'string' ? parseInt(amount) : amount) || 0,
            0
          )}
        </p>
        <small>{dayjs(date).format('MMM D')}</small>
      </div>
    </TabItemContainer>
  );
};

export default TabItem;
