import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  height: 30px;
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

// 既存のコンポーネントを拡張する場合は括弧で囲む
const SLink = styled(Link)`
  margin: 0 8px;
`;
