import React from 'react';
import { CreateWishlist } from '../../components/Ads';
import ContributorHeader from './ContributorHeader';
import { ContributorContainer } from './styles';
import { IContributorProps } from './types';

const ContributorLayout: React.FC<IContributorProps> = ({ children }) => {
  return (
    <>
      <CreateWishlist />
      <ContributorHeader />
      <ContributorContainer>
        {children}
      </ContributorContainer>
    </>
  );
}

export default ContributorLayout;