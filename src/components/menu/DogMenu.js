import styled from 'styled-components';
import { StyledMenuLinkWithIcon } from '..';

const DogMenu = () => (
  <MenuContainer>
    <StyledMenuLinkWithIcon link="/sommerhund" text="Sommerkurser 2026" />
    <StyledMenuLinkWithIcon link="/hundehold/hvalpehold" text="Hvalpehold" />
    <StyledMenuLinkWithIcon link="/hundehold/hvalpfortsat" text="Fortsætterhold" />
    <StyledMenuLinkWithIcon link="/hundehold/reaktivtilro" text="Reaktiv til Ro" />
    <StyledMenuLinkWithIcon link="/hundehold/coolhold" text="Helt-Cool" />
    <StyledMenuLinkWithIcon link="/hundehold/fortsatcool" text="Fortsat Helt-Cool" />
    <StyledMenuLinkWithIcon link="/hundehold/miljohold" text="Miljøhold" />
    <StyledMenuLinkWithIcon link="/hundehold/socialisering" text="Socialiseringshold" />
    <StyledMenuLinkWithIcon link="/hundehold/empowerment" text="Fit Empowerment" />
    <StyledMenuLinkWithIcon link="/hundehold/tryghundepleje" text="Tryg Hundefrisørtid" />
  </MenuContainer>
);

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DogMenu;
