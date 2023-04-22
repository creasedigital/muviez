import Styled from 'styled-components';
import { Fonts, Sizes } from '../../constants';

export const ResetLinkWrapper = Styled.div`
    display: flex;
    font-family: ${Fonts.primary};
    font-size: 14px;
    opacity: 0.5;
    .container {
        justify-content: center;
        min-height: 0;
        height: ${Sizes.normal}px;
        .info {
            font-size: ${Sizes.normal}px;
            font-weight: 100;
            line-height: ${Sizes.normal}px;
            text-align: center;
            a {
                text-decoration: underline;
            }
        }
    }
`;
