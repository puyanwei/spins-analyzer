import styled from "styled-components";

export const ChartStyle = styled.div<{ width?: number }>`
  display: block;
  margin: 3rem auto;
  width: ${({ width = 30 }): number => width}rem;
`;
