import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow } from '..';
import TestimonialImage from './TestimonialImage';
import { TestiCoolTwo, TestiCoolSix, TestiReactiveOne, TestiReactiveTwo } from '../../assets';

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
      <TestimonialImage src={TestiReactiveOne} alt="Billede fra kunde til udtalelse om reaktiv hundetræning" />
      <TextContainer>
        <TitleColor text=" ”Jeg er blevet mere rolig og kan læse Riley bedre. Jeg lægger meget mere mærke til de små fremskridt og det, der går godt, i stedet for kun at fokusere på udfordringerne. Det har gjort en stor forskel for både Riley og jeg.” " />
        <Text>
          Jeg blev overrasket over at jeg ikke står alene – der er andre, der har de samme
          udfordringer og oplevelser med deres hunde, som jeg har med Riley. Der var en aften, hvor
          Riley hoppede meget op ad mig, og det stressede mig lidt. Da du spurgte til den
          afsluttende evaluering, hvad der var gået godt, kunne jeg faktisk slet ikke komme i tanke
          om noget. Her fik jeg rigtig god feedback fra både dig og en af de andre deltagere, som
          gjorde mig opmærksom på, at Riley faktisk havde klaret nogle af opgaverne rigtig fint. Det
          gav mig mere ro. Jeg synes derfor, det er rigtig rart, at vi også kan støtte hinanden ved
          at fremhæve de gode ting, vi ser hos hinandens hunde.
        </Text>
        <Text>
          Jeg synes, det er rigtig godt, at vi kun er fire deltagere, fordi der er tid til os alle.
          Du er god til at se os hver især og hjælpe med vores individuelle udfordringer.
        </Text>
        <Text>
          Jeg vil anbefale holdet til alle med en reaktiv eller let stresset hund. Det er et trygt
          og velstruktureret forløb, hvor der er fokus på ro, forståelse og gode rammer, som
          virkelig hjælper både hund og ejer.
        </Text>
        <Text>Pernille og Riley</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <TestimonialImage src={TestiReactiveTwo} alt="Billede fra kunde til udtalelse om reaktiv hundetræning" />
      <TextContainer>
        <TitleColor text=" ”Jeg kan mærke forskel på min hund! Bella er mere rolig, tager mere kontakt til os og jeg har fået flere redskaber med hjem til at få mere ro på” " />
        <Text>
          Jeg var virkelig spændt på at starte, da min pige er meget utryg både overfor hunde og
          mennesker. Jeg tænkte om det overhovedet ville hjælpe både hende og mig. Men efter jeg er
          startet, føler jeg det virkelig har været det hele værd, fordi Sabrina har givet mig og
          Bella mere selvtillid og tro på dette her nok skal komme med tiden.
        </Text>
        <Text>
          Jeg synes det er fedt vi kun er Max 4 deltager og at Sabrina har de øvelser hun har med
          til os. Især det med at vi skal komme lidt tættere på de andre deltager på hundenes
          præmisser. Holdet har fungeret super godt. Det er virkeligt fedt at få den snak sammen
          sidst på timen, fordi hvis der er noget så snakker vi det i gennem og dejligt lige og få
          en snak om hvad der er gået godt og måske “ skidt “.
        </Text>
        <Text>
          Vil virkelig anbefale dette hold til alle, der har en hund som min eller nogle der har
          brug for ekstra ro til sin hund og ejer. Jeg og min pige har lært rigtigt meget.
        </Text>
        <Text>Malene og Bella</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <TestimonialImage src={TestiCoolSix} alt="Billede fra kunde til udtalelse om reaktiv hundetræning" />
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
          Vi har fået redskaberne og viden til at træne ro i flere forskellige situationer og fået
          lov til at afprøve dette under trygge rammer. Der har været ro til at vores hund kan få
          noget ud af træningen, når vi er så få. Jeg tænkte, at det måske ikke var nødvendigt med
          et helt kursus i bare at træne ro - men sådan har jeg det bestemt ikke længere! Det er
          tydeligt, hvor stort et arbejde, der ligger i ro-træning og hvor meget det hjælper at gå
          på holdet.
        </Text>
        <Text>
          Vi kan helt klart også mærke, at vi har fået udbyttet af træningen, vi har følt os set og
          hørte og virkelig følt, at vi har kunnet bruge Sabrinas feedback. Det er rigtig dejligt,
          at der er tid til det på holdet! Sabrina er rigtig god til at forklare øvelserne og give
          konkret feedback i træningssituationen. Jeg vil bare sige, at det har været en rigtig
          behagelig træning.
        </Text>
        <Text>Emilia og Toughie</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <TestimonialImage src={TestiCoolTwo} alt="Billede fra kunde til udtalelse om reaktiv hundetræning" />
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
