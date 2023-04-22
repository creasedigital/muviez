import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

export const InputField = styled.div<{ row?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 20px;
  margin: 10px 0;
  background: ${(props) => props.theme.appPrimaryColor};
  border-radius: 18px;
  height: 64px;
  min-height: 64px;
  overflow: hidden;

  .input-icon {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    input {
      flex: 3.5;
      margin-top: 0.5rem;
      background: ${(props) => props.theme.appPrimaryColor};
      color: ${(props) => props.theme.contentColor} !important;
      -webkit-text-fill-color: ${(props) =>
        props.theme.contentColor} !important;
      font-size: 16px;
      font-family: ${Fonts.secondary};
      font-weight: 300;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }
      &:disabled {
        opacity: 0.5;
      }
    }
    .icon-area {
      font-size: 10px;
      color: ${Colors.yellow};
      flex: 1;
      margin-left: auto;
      display: block;
      text-align: right;
      cursor: pointer;
      font-weight: ${Sizes.BoldWeight};
    }
  }

  ${({ row }) =>
    row &&
    css`
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      label {
        color: ${Colors.white};
        order: 0;
        right: -90px;

        > :not(:before) {
          color: black;
        }
      }

      input {
        width: unset;
        margin-top: 0;

        &.styled-checkbox {
          position: absolute;
          opacity: 0;

          & + label {
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            padding: 0;
            color: ${Colors.navy};
          }

          // Box.
          & + label:before {
            content: '';
            margin-right: 40px;
            display: inline-block;
            vertical-align: middle;
            min-width: 33px;
            width: 33px;
            height: 33px;
            background: ${Colors.grey};
            border-radius: 50%;
          }

          // Box hover
          &:hover + label:before {
            background: ${Colors.realGreen};
          }

          // Box focus
          &:focus + label:before {
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
          }

          // Box checked
          &:checked + label:before {
            background: ${Colors.realGreen};
          }

          // Disabled state label.
          &:disabled + label {
            color: #b8b8b8;
            cursor: auto;
          }

          // Disabled box.
          &:disabled + label:before {
            box-shadow: none;
            background: #ddd;
          }

          // Checkmark. Could be replaced with an image
          &:checked + label:after {
            content: '';
            position: absolute;
            left: 11px;
            top: 19px;
            background: white;
            width: 2px;
            height: 2px;
            box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
              4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
            transform: rotate(45deg);
          }
        }
      }
    `}

  @media (min-width: 320px) {
    ${({ row }) =>
      row &&
      css`
        label {
          right: -125px;
        }
      `}
  }

  @media (min-width: 360px) {
    ${({ row }) =>
      row &&
      css`
        label {
          right: -140px;
        }
      `}
  }

  @media (min-width: 425px) {
    ${({ row }) =>
      row &&
      css`
        label {
          right: -180px;
        }
      `}
  }

  @media (min-width: 432px) {
    ${({ row }) =>
      row &&
      css`
        input {
          &.styled-checkbox {
            &:checked + label:after {
              top: 16.5px;
            }
          }
        }
      `}
  }
`;

export const Label = styled.label`
  color: ${Colors.yellow};
  font-size: calc(${Sizes.normal - 4}px);
`;
