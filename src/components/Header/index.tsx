import * as s from "./styles";
import logoImage from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <s.HeaderContainer>
      <s.HeaderContent>
        <img src={logoImage} alt="" />
        <s.NewTransactionButton>Nova transação</s.NewTransactionButton>
      </s.HeaderContent>
    </s.HeaderContainer>
  );
};
