import { styled } from 'styled-components';

const FirstBlockContainer = styled.main`
  display: flex;
  height: 351px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  font-size: 48px;
  beckground-color: light-grey;
`;

export function FirstBlock() {
  return <FirstBlockContainer></FirstBlockContainer>;
}
