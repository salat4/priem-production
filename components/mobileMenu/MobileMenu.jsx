import {
  MenuContainer,
  NavigationContainer,
  MenuList,
  MenuItem,
  MenuLink,
  MenuLinkSoc,
  LanguageChangeContainer,
  LanguageChangeButton,
  SocContainerItem,
} from "./MobileMenu.styled";
import LogoMobile from "../../images/Logo.png";
import {
  TEL_IRA,
  TEL_GLEB,
  INSTAGRAM,
  EMAIL_PRODUCTION,
} from "../../Constants/Constants";

export const MobileMenu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <MenuLink path="/works">Works</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink path="/about">About</MenuLink>
        </MenuItem>
      </MenuList>
      <SocContainerItem>
        <MenuList>
          <MenuItem>
            <MenuLinkSoc href={`tel:${TEL_IRA}`}>{TEL_IRA}</MenuLinkSoc>
          </MenuItem>
          <MenuItem>
            <MenuLinkSoc href={`tel:${TEL_GLEB}`}>{TEL_GLEB}</MenuLinkSoc>
          </MenuItem>

          <MenuItem>
            <MenuLinkSoc href={`mailto:${EMAIL_PRODUCTION}`}>
              {EMAIL_PRODUCTION}
            </MenuLinkSoc>
          </MenuItem>
          <MenuItem>
            <MenuLinkSoc target="_blank" href={`${INSTAGRAM}`}>
              INSTAGRAM
            </MenuLinkSoc>
          </MenuItem>
        </MenuList>
      </SocContainerItem>

      <div>
        <img src={LogoMobile} alt="Logo" width="200" />
      </div>
      <LanguageChangeContainer>
        <LanguageChangeButton>ENG</LanguageChangeButton>
        <LanguageChangeButton>RUS</LanguageChangeButton>
      </LanguageChangeContainer>
    </MenuContainer>
  );
};
