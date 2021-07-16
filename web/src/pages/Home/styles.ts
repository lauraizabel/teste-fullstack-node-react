import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e2e4e1;
  min-height: calc(100vh - 80px);
`;

export const WrapperDescription = styled.div`
  padding-bottom: 24px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding-top: 64px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #babbb9;
  h3 {
    color: #364147;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const WrapperList = styled.div`
  width: 90%;
  margin: 24px auto;
  display: flex;
  justify-content: space-between;
`;
