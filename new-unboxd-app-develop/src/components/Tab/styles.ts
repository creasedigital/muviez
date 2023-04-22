import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const TabWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 1rem 0 2rem;
`;

export const TabItem = styled.button<{ active: boolean }>`
  width: 100%;
  background-color: transparent;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  border-bottom: 1px solid ${Colors.black};
  opacity: ${({ active }) => (active ? '1' : '0.4')};
`;
