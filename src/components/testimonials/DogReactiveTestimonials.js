import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow, Image } from '..';
import {
  TestiCoolTwo,
  TestiCoolSix,
} from '../../assets';

const DogReactiveTestimonials = () => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    autoPlay
    infiniteLoop
    preventMovementUntilSwipeScrollTolerance
    swipeScrollTolerance={30}
  >

    <FlexedRow>
      <Image src={TestiCoolSix} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi har fået mere tro på, at vores mål kan lykkes og vi fået værktøjer, vi kan bruge fremadrettet” " />
        <Text>
          Vi var bekymret for at det ville være for stor en mundfuld for Freddie, der ikke er fan af
          andre hunde i snor og om der ville være “plads” til vores udfordringer. Men der er blevet
          taget det rigtige hensyn til ham hele vejen, så man har været tryg ved at komme og træne.
          Sabrina er meget dygtig til at kigge på den enkelte hund og inkorporere dens udfordringer
          på holdet.
        </Text>
        <Text>
          Vi er blevet meget mere opmærksomme på vores kropssprogs indvirkning på hundens adfærd og
          har fået en hund, der er mere tryg i nærheden af andre hunde, og som har mere selvtillid.
        </Text>
        <Text>Nicklas, Anna og Freddie</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <TextContainer>
        <TitleColor text=" ”Vi ved nu hvad vi skal gøre i de situationer, hvor vores hund er reaktiv og han er klart også blevet mindre reaktiv generelt set. Tak for det!” " />
        <Text>
          Vi har fået redskaberne og viden til at træne ro i flere forskellige situationer og fået lov til at afprøve dette under trygge rammer. 
          Der har været ro til at vores hund kan få noget ud af træningen, når vi er så få. 
          Jeg tænkte, at det måske ikke var nødvendigt med et helt kursus i bare at træne ro - men sådan har jeg det bestemt ikke længere! 
          Det er tydeligt, hvor stort et arbejde, der ligger i ro-træning og hvor meget det hjælper at gå på holdet.
        </Text>
        <Text>
          Vi kan helt klart også mærke, at vi har fået udbyttet af træningen, vi har følt os set og hørte og virkelig følt, at vi har kunnet bruge Sabrinas feedback. 
          Det er rigtig dejligt, at der er tid til det på holdet! Sabrina er rigtig god til at forklare øvelserne og give konkret feedback i træningssituationen. 
          Jeg vil bare sige, at det har været en rigtig behagelig træning.
        </Text>
        <Text>Emilia og Toughie</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiCoolTwo} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi fik øjnene op for at selv angste hunde godt kan med andre” " />
        <Text>
          Inden start var jeg bekymret for at passe ind. Da jeg har angst selv, var det en stor
          fordel at blive bekræftiget i at det jeg gør er rigtigt. Og at se uanset str på hunden så
          rammer stort set alle ejere samme problematikker.
        </Text>
        <Text>
          Der er sket meget udviklingsmæssigt med vores lille bandit, den største forandring er
          bedre samværd mellem os og andre. Vi har nydt at komme til træning og prøve noget nyt.
        </Text>
        <Text>Jette Nancke og Dion</Text>
      </TextContainer>
    </FlexedRow>

  </Carousel>
);

export default DogReactiveTestimonials;
