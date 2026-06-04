import styled from 'styled-components';
import { StyledMenuLinkWithIcon } from '..';

const SummerMenu = () => (
  <MenuContainer>
    <StyledMenuLinkWithIcon link="/sommerhund/indkald" text="Indkald" />
    <StyledMenuLinkWithIcon link="/sommerhund/fitness" text="Fitness for alle" />
  </MenuContainer>
);

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SummerMenu;
