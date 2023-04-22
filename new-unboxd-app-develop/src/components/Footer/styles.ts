import Styled from 'styled-components';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

export const FooterWrapper = Styled.div`
    display: flex;
    font-family: ${Fonts.primary};
    font-size: 14px;
    opacity: 0.5;
    padding: 20px 0;
    .container {
        justify-content: center;
        min-height: max-content !important;
        .info {
            font-size: ${Sizes.small}px;
            font-weight: 100;
            line-height: ${Sizes.normal}px;
            text-align: center;
            a {
                text-decoration: underline;
            }
        }
    }
`;
