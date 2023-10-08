import styled from "styled-components";
import Row from 'react-bootstrap/Row';

// Styled component named StyledButton
export const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

export const LoaderContainer = styled(Row)`
/* From https://css.glass */
background: rgba(38, 34, 34, 0.1);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(38, 34, 34, 0.3);
`;

export const UserListGlass = styled(Row)`
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
background-color: rgba(225, 245, 205, 0.75);
border-radius: 12px;
border: 1px solid rgba(209, 213, 219, 0.3);

`;

export const UserListWrapperGlass = styled(Row)`
/* From https://css.glass */
background: rgba(255, 255, 255, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.6px);
-webkit-backdrop-filter: blur(7.6px);
border: 1px solid rgba(255, 255, 255, 0.71);
`;