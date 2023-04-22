import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../../../layout';
import {
  WalletContainer,
  FormContainer,
  GoBack,
  ChooseBankList,
  ListItem,
} from './styles';
import { BTN, Spinner } from '../../../../components/Button/styles';
import PriceInput from '../../../../components/Input/price';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { getBanks, getUserBanks } from './redux/actions';
import { formatNumber } from '../../../../utils/helpers';
import { Button, Input, Select } from '../../../../components';
import { ReactComponent as BackArrowIcon } from '../../../../assets/img/icons/backArrow.svg';
import { UserBankAccount } from '../../../../typings/appState';
import * as services from '../../services';
import { Notify } from '../../../../utils/notify';
import { NumberFormatValues } from 'react-number-format';
import { useHistory } from 'react-router';
import toast from 'react-hot-toast';
import { Bold } from '../../../../commons/UtilityStyles/Text';
import ResendOtp from './ResendOtp';

interface BankAccountInterface {
  value: string;
  text: string;
}

const maskEmail = (email: string) => {
  const firstTwo = email.substring(0, 2);
  const domain = email.split('@')[1];

  return `${firstTwo}****@${domain}`;
};

const WalletPayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const {
    data: { balance },
  } = useSelector((state: GlobalStoreState) => state.wallet);
  const { banks, userBanks } = useSelector(
    (state: GlobalStoreState) => state.wallet
  );

  useEffect(() => {
    dispatch(getBanks());
    dispatch(getUserBanks());
  }, [dispatch]);

  useEffect(() => {
    if (banks) setBanksArray(banks);
  }, [banks]);

  const [loading, setLoading] = useState(false);
  const [bankAdded, setBankAdded] = useState(false);
  const [values, setValues] = useState({
    bankAccountId: '',
    accountNumber: '',
    accountName: '',
    bankCode: '',
    email: credentials ? credentials.email : '',
    amount: 0,
    otp: '',
    userId: '',
  });

  const [step, setStep] = useState<number>(1);
  const [banksArray, setBanksArray] = useState<BankAccountInterface[]>([]);

  useEffect(() => {
    dispatch(getUserBanks());
    setBankAdded(false);
  }, [dispatch, bankAdded]);

  const chooseBank = (bank: UserBankAccount) => {
    setValues({ ...values, ...bank, bankAccountId: bank._id });
    setStep(2);
  };

  const handleGoBack = () => {
    if (step === 9) {
      setStep(1);
      setValues({ ...values, accountName: '', accountNumber: '' });
    } else {
      setStep(step - 1);
    }
  };

  const addAccount = () => {
    setStep(9);
  };

  const handleBankChange = (e: any) => {
    setValues({ ...values, bankCode: e.target.value });
  };

  const handleAccountNumberChange = async (e: any) => {
    setValues({ ...values, accountNumber: e });
    if (e.length === 10) {
      const payload = {
        bankCode: values.bankCode,
        accountNumber: e,
      };
      const response = await services.getAccountName(payload);
      setValues({
        ...values,
        accountName: response.data.account_name,
        accountNumber: e,
      });
    }
  };

  const changePrice = ({ value }: NumberFormatValues) =>
    setValues({ ...values, amount: +value });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const sendOtp = async () => {
    const payload = { email: values.email };
    const res = await services.sendOtp(payload);
    Notify.top(res.message);
  };

  const _handleSubmit = async (event: React.SyntheticEvent, step: number) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (step === 2) {
        sendOtp();
        setStep(3);
        setLoading(false);
      } else if (step === 3) {
        const payload = { ...values };
        const result = await services.payout(payload);
        if (result.success) {
          toast.success('Payout Successful');
        }
        if (result.pending) {
          toast.loading('Withdrawal is processing');
        }
        setLoading(false);
        history.push('/wallet');
      } else if (step === 9) {
        const payload = {
          bankCode: values.bankCode,
          accountNumber: values.accountNumber,
          accountName: values.accountName,
        };

        const result = await services.createBankAccount(payload);
        if (result === 'success') {
          toast.success('Account Added Successfully');
          setLoading(false);
          setBankAdded(true);
          setStep(1);
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout hideWalletSection>
      <WalletContainer>
        <header className="breadCrumb">
          {step >= 2 && (
            <GoBack onClick={handleGoBack}>
              <BackArrowIcon />
            </GoBack>
          )}{' '}
          Wallet <span>/ Request payout</span>
        </header>
        <FormContainer>
          {step === 1 && (
            <ChooseBankList>
              <h2>Which bank do you want to send the money to?</h2>
              <h3>Recent Accounts</h3>
              <ul>
                {userBanks?.length > 0
                  ? userBanks?.map((item) => (
                      <ListItem onClick={() => chooseBank(item)}>
                        <span className="icon">
                          {item.bankName.slice(0, 2).toUpperCase()}
                        </span>
                        <div className="account">
                          <p>{item.accountName}</p>
                          <p>{item.accountNumber}</p>
                          <p>{item.bankName}</p>
                        </div>
                      </ListItem>
                    ))
                  : 'You have no bank accounts yet'}
              </ul>
              <BTN onClick={addAccount}>Add An Account</BTN>
            </ChooseBankList>
          )}
          <form onSubmit={(event) => _handleSubmit(event, step)}>
            {step === 2 && (
              <>
                <h3>How much do you want to withdraw?</h3>
                <PriceInput
                  label="Amount"
                  value={values.amount}
                  onChange={changePrice}
                />
                <p className="walletBalance">
                  Wallet Balance NGN {formatNumber(balance)}
                </p>
              </>
            )}
            {step === 3 && (
              <>
                <h3>Is It really you?</h3>
                <p className="verifyText">
                  We sent a code to <Bold>{maskEmail(values.email)}</Bold>{' '}
                  <br />
                  Please enter it here for verification
                </p>
                <Input
                  type="text"
                  name="otp"
                  label="Enter OTP"
                  onChange={handleChange}
                />
              </>
            )}
            {step === 9 && (
              <>
                <h3>Add an Account</h3>
                <Select
                  id="banks"
                  items={banksArray}
                  label="Select Bank"
                  handleChange={handleBankChange}
                  required
                />
                <Input
                  type="text"
                  name="accountNumber"
                  label="Enter Account Number"
                  maxLength={10}
                  onChange={(e) => handleAccountNumberChange(e.target.value)}
                  required
                />
                <span>
                  {values.accountNumber.length > 1 ||
                  values.accountNumber.length > 9
                    ? values.accountName || (
                        <Spinner>
                          <i
                            className="fa fa-spinner fa-spin"
                            aria-hidden="true"
                          ></i>
                        </Spinner>
                      )
                    : ''}
                </span>
              </>
            )}
            {(step === 2 || step === 3 || step === 9) && (
              <Button loading={loading} disabled={loading}>
                {step === 2
                  ? 'Request Payout'
                  : step === 3
                  ? 'Verify'
                  : 'Add Account'}
              </Button>
            )}

            {step === 3 && <ResendOtp sendOtp={sendOtp} />}
          </form>
        </FormContainer>
      </WalletContainer>
    </DashboardLayout>
  );
};

export default WalletPayout;
