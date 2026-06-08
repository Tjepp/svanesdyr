import styled from 'styled-components';
import { StyledMenuLinkWithIcon } from '..';

const SummerMenu = () => (
  <MenuContainer>
    <StyledMenuLinkWithIcon link="/sommerhund" text="Praktisk info" />
    <StyledMenuLinkWithIcon link="/sommerhund/aktivering" text="Hverdagsaktivering" />
    <StyledMenuLinkWithIcon link="/sommerhund/fitness" text="Fitness for alle" />
    <StyledMenuLinkWithIcon link="/sommerhund/hilseroligt" text="Hilse Pænt" />
    <StyledMenuLinkWithIcon link="/sommerhund/nosework" text="Nose Work" />
    <StyledMenuLinkWithIcon link="/sommerhund/frivillig" text="Frivillig Håndtering" />
    <StyledMenuLinkWithIcon link="/sommerhund/indkald" text="Indkald" />
    <StyledMenuLinkWithIcon link="/sommerhund/bliv" text="Bliv" />
    <StyledMenuLinkWithIcon link="/sommerhund/tricks" text="Tricks og Sjov" />
    <StyledMenuLinkWithIcon link="/sommerhund/roligeture" text="Rolige Gåture" />
    <StyledMenuLinkWithIcon link="/sommerhund/sommerleg" text="Sommerlegestuer" />
    <StyledMenuLinkWithIcon link="/" text="Tilbage til Svanes Dyr" />
  </MenuContainer>
);

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SummerMenu;
