import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 Company Name</SFooter>;
};

const SFooter = styled.footer`
  height: 30px;
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
