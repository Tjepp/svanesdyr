import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Page, Banner, Column, Meta, Title, Text, Image } from '../components';
import ReactRouterPropTypes from '../ReactRouterPropTypes';
import Responsive from '../components/Responsive';
import { puppyCourse, coolCourse, recall } from '../assets';

class DogCourse extends PureComponent {
  onClick = path => {
    const { history } = this.props;
    history.push(`/${path}`);
  };

  render() {
    return (
      <Page>
        <Meta />
        <Banner text="Hundehold i Horsens" />
        <Background>
          <Row>
            <Column widthPercentage="62%">
              <Title text="Hundetræning i Horsens" />
              <Text text="Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske principper. Træningen foregår på hundens præmisser, hvor fokus er at sætte hunden op til succes igennem trinvis indlæring. Mit mål er altid at skabe en god relation mellem dig og din hund. Nøgleord for træningen er samarbejde, tillid og succes." />
              <Text
                text="Små hold med tid til dig og din hund! De mindre hold gør at jeg har tid til en
                individuel snak omkring samarbejdet og træningen med netop din hund. Målet er, at
                uanset niveau, alder eller størrelse så får alle deltagere udbytte af timen. Hele
                familien er velkommen til at deltage, så tag gerne børn og den bedre halvdel med til
                en hyggelig time."
              />
              <Text
                text="Vi ses én gang om ugen! Vi mødes hver uge i kursusets varighed, hvor der er afsat 60
                min. til gennemgang af dagens øvelser. For hvalpehold er der inkluderet tid til leg
                og socialisering i timen. I vil blive introduceret til klikkertræning. Der tilsendes
                desuden skriftlige guides på de gennemgåede øvelser, så det er let at træne videre
                hjemme."
              />
              <Text text="Materialeudgifter på 40 kr." color="#33CCCC" bold />
              <Text
                text="Skal betales 1. mødegang enten kontant eller på
                mobilepay. Beløbet dækker materialebrug under forløbet."
              />
            </Column>
            <Column>
              <Title text="Praktisk info om hundehold" />
              <Text text="Jeg har indgået et samarbejde med FOF Horsens, derfor foregår tilmelding og betaling igennem dem." />
              <Text text="Pris for deltagelse i Horsens:" color="#33CCCC" bold />
              <Text text="Hvalpehold: 755 kr." />
              <Text text="Helt-Cool kursus: 895 kr" />
              <Text text="Indkaldskursus: 910 kr." />
              <Text text="Uanset antal gange man deltager." />
              <Text text="Træningsbane:" bold />
              <Text text="Træningen foregår på en indhegnet udebane på adressen: Sorthøjvej 40, 8700 Horsens." />
              <Text text="Bemærk!" bold />
              <Text text="Det er påkrævet at hunden har basisvaccine og der er tegnet udvidet hundeforsikring før deltagelse." />
            </Column>
          </Row>
          <Row>
            <Column widthPercentage="100%">
              <Title text="Skema for kommende holdstart - MAJ 2019" />
            </Column>
          </Row>
          <Row>
            <Column widthPercentage="100%">
              <Title text="Udbud af hundehold i Horsens" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={puppyCourse} />
              <Title text="Hvalpehold (3-6 mdr.)" />
              <Text bold text="Max 6 deltagere" />
              <Text
                text="Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
                principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den enkelte i
                træningen."
              />
            </Column>
            <Column>
              <Image src={coolCourse} />
              <Title text="Helt-cool kursus (alle aldre)" />
              <Text bold text="Max 5 deltagere" />
              <Text
                text="Jeg benytter mig af belønningsbaserede træningsmetoder fra de indlæringspsykologiske
                principper. Jeg vægter gensidig samarbejde og glæde højt og jeg tager hensyn til den enkelte i
                træningen."
              />
            </Column>
            <Column>
              <Image src={recall} />
              <Title text="Indkaldskursus (alle aldre)" />
              <Text bold text="Max 4 deltagere" />
              <Text text="Ønsker du et indkald med fart og glæde? Hvor hunden vælger dig fremfor alt andet? Så er dette kursus til jer! Vi vil have fokus på motivation, belønningsteknikker, kontakt, stop-signal og forventningsopbygning." />
            </Column>
          </Row>
        </Background>
      </Page>
    );
  }
}

DogCourse.propTypes = {
  history: ReactRouterPropTypes.history
};

DogCourse.defaultProps = {
  history: ReactRouterPropTypes.history
};

export default DogCourse;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 0;
  `}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-self: center;
  ${Responsive.media.tablet`
    flex-direction: column;
    align-items: center;
    padding: 15px;
  `}
`;
