import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

// SCardは色々なところで使うので、大きさの概念はもたせない
// 呼ぶ側のコンポーネントで指定する
const SCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 2px #ddd;
  padding: 16px;
`;
