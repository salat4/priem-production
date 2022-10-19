import MobileMenu from "../MobileMenu";
import {
  HeaderSection,
  HeaderContainer,
  // Logo,
  BurgerMenuButton,
} from "./Header.styled";
import { ContainerStretch } from "../../stylesheet/Container.styled";
import BurgerMenu from "../../images/burger-menu.svg";
import { useState } from "react";

export const Header = () => {
  const [first, setFirst] = useState(false);

  return (
    <>
      <HeaderSection>
        <ContainerStretch>
          <HeaderContainer>
            {/* <div>
            <Logo />
          </div> */}
            {/* <div> */}
            <BurgerMenuButton onClick={() => setFirst(!first)}>
              <img src={BurgerMenu} alt="Menu" width="30" />
            </BurgerMenuButton>
            {/* </div> */}
          </HeaderContainer>
        </ContainerStretch>
      </HeaderSection>
      {first && <MobileMenu />}
    </>
  );
};
