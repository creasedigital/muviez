import React from 'react';
import { Button, Input, Logo } from '../../../../../components';
import CheckInput from '../../../../../components/Input/check';
import { PrePaymentForm, PrePaymentModal, Spacer } from '../styles';

type ComponentProps = {
  close: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  data: {
    amount: number | string;
    email: string;
    phone: string;
    name: string;
    anonymous: boolean;
  };
};

const PrePayment = ({ close, change, submit, data }: ComponentProps) => {
  return (
    <PrePaymentModal>
      <div className="container">
        <span onClick={close} className="close">
          Close
        </span>
        <div className="intro">
          <h3>Hello,</h3>
          <p>
            Thanks for contributing to my wishlist.
          </p>
        </div>
        <PrePaymentForm onSubmit={submit}>
          <p>Enter sender details</p>

          <Input
            onChange={change}
            name="name"
            value={data.name}
            label="Enter your name"
            type="text"
            required
          />

          <CheckInput
            onChange={change}
            name="anonymous"
            label="Send as Anonymous"
            type="checkbox"
            id="anonymous"
          />

          <Spacer />

          <Input
            onChange={change}
            name="email"
            value={data.email}
            label="Email address"
            type="email"
            required
          />

          <Input
            onChange={change}
            name="phone"
            value={data.phone}
            label="Phone Number"
            type="text"
            required
          />

          <Button type="submit">Contribute</Button>
        </PrePaymentForm>
        <Logo />
      </div>
    </PrePaymentModal>
  );
};

export default PrePayment;
