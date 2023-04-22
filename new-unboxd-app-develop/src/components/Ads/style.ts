import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, Sizes } from '../../constants';

export const Ad = Styled.div<{ valentine?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.lightgreen};
    position: relative;

    img {
        position: relative;
        left: -25%;
        align-self: flex-end;
    }

    ${({ valentine }) =>
      valentine &&
      css`
        background: ${Colors.valentine};
        color: ${Colors.white};
        padding: 1rem 0;
        p {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
        }

        @media (min-width: 768px) {
            p {
                font-size: 24px;
            }
        }
      `}

    @media (min-width: 375px) {
        img {
            left: -20%;
        }   
    }
    
    @media (min-width: 425px) {
        img {
            left: -15%;
        }   
    }

    @media (min-width: 768px) {
        img {
            left: -5%;
        }   
    }
`;

export const Text = Styled.p`
    display: flex;
    justify-content: center;
    font-size: ${Sizes.small}px;
    color: ${Colors.black};
    position: relative;
    left: -35%;
    flex: 0 0 70%;
    
    @media (min-width: 375px) {
        font-size: ${Sizes.normal}px;
        left: -30%;
        flex: 0 0 85%;
    }

    @media (min-width: 425px) {
        font-size: ${Sizes.normal}px;
        left: -25%;
    }

    @media (min-width: 768px) {
        font-size: ${Sizes.twenty}px;
        left: -5%;
        flex: unset;
    }
`;

export const Anchor = Styled(Link)`
    color: ${Colors.green};
    font-weight: 700;
    text-decoration: underline;
`;

export const LinkOut = Styled.a`
    color: ${Colors.valentine};
    background: ${Colors.white};
    border-radius: 60px;
    font-weight: 700;
    max-width: 180px;
    padding: 5px 10px;
    display: block;
    margin: 0.5rem auto 0;

    @media (min-width: 768px) {
        margin-left: 2rem;
        min-width: 100px;
        display: unset;
    }
`;