import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow, Image } from '../../components';
import {
  TestiCoolOne,
  TestiCoolTwo,
  TestiCoolThree,
  TestiCoolFour,
  TestiCoolFive,
  TestiCoolSix,
  TestiCoolSeven,
  TestiCoolEight,
} from '../../assets';

const DogCoolTestimonials = () => (
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
      <Image src={TestiCoolThree} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg var lidt imod at vi skulle bruge klikker. Men for pokker hvor det virker!” " />
        <Text>
          Jeg er blevet mere sikker og tydelig når jeg går tur og møder andre hunde, jeg har fået
          nogle gode redskaber til at holde Kenzos opmærksomhed på mig. Det var en overraskelse hvor
          stor effekt klikkeren har. Jeg har fået øjnene op for hvor meget min hund faktisk elsker
          at arbejde og træne med mig.
        </Text>
        <Text>
          Alle der har en glad, social hund, som mener den skal snakke med alle, synes jeg skal tage
          kurset. Da Sabrina er god til at formidle enkelte øvelser, som rent faktisk virker. Og som
          de fleste kan være med på.
        </Text>
        <Text>Jeanette Schouborg og Kenzo</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiCoolEight} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg var bekymret for at der ikke var nogen mærkbar virkning af træningen, men fandt ud af at selv en lille indsats har virkning!” " />
        <Text>
          Inden start var jeg bekymret for at kurset nok ikke gjorde en større forskel og at det kræver MEGET arbejde for at lykkes med at få hunden til at gøre, hvad jeg ønsker. Nu tænker jeg at også en mindre indsats har virkning!
        </Text>
        <Text>
          Jeg blev overrasket over hvor hurtigt du kunne få kontakt og lære den noget nyt. Hunden er kvik og vil helt klart gerne. Min kontakt med hunden er forbedret og vi kan nu gå tur uden at trække. Lidt gør den fortsat, men vi er hurtigt på sporet igen. Tak for dygtig og målrettet træning.
        </Text>
        <Text>Jane Bach og T- Rex</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiCoolFive} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Det er ikke første gang vi går til træning og jeg var lidt spændt på om det ville give pote den her gang. Nu tænker jeg; ØV jeg ikke fandt det her sted først. Det er fantastisk!” " />
        <Text>
          Jeg har fået langt mere forståelse for min egne ”fejl” når jeg træner og hvorfor tidligere
          træning har givet bagslag. Det var så fedt at få forklaret helt simpelt hvordan tingene
          hænger sammen.
        </Text>
        <Text>
          Det med at der kun er 4 hunde og dermed masser af tid er godt. Fokus er på nærvær med
          hunden, der er ro og fred og der findes ikke dumme spørgsmål. Alt bliver besvaret
          professionelt og ofte med et smil på læben.
        </Text>
        <Text>
          Inden tilmelding var jeg bekymret for hvordan det hele skulle gå. Nu vil jeg sige Tak,
          bare tak.
        </Text>
        <Text>Camilla og Fenja</Text>
      </TextContainer>
    </FlexedRow>

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
      <Image src={TestiCoolFour} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi frygtede vi ikke ville lære noget nyt, men vi tog fejl” " />
        <Text>
          Vi vidste ikke om det passede til vores hund da han ikke var decideret overgearet/glad og
          stresset. Men vi har lært hvordan han motiveres på gåture, hvordan vi undgår
          overstimulering (og klappen går ned) og ikke mindst hvordan vi møder fremmede mere
          hensigtsmæssigt.
        </Text>
        <Text>
          Da vi prøvede Sidde eller gå-legen gik det op for mig at min hund holder bedre kontakt når
          der er fart over feltet end at vi sidder og kigger. Harry kan bedre lige når vi
          løber/leger/larmer.
        </Text>
        <Text>
          Jeg ved nu hvordan jeg kan gøre gåturen bedre for alle fordi jeg kender min hund bedre, og
          dét er en stor forandring.
        </Text>
        <Text>- HarryBerryyy!</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiCoolOne} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi var bekymret for om vores hund kunne lærer det vi ønskede, men vi blev overrasket” " />
        <Text>
          Det mest fantastiske ved at deltage på helt cool har været den effektive hjælp til
          håndtering af problematikker. Vi har fået roligere gåture, en rolig hund ved gæster i
          hjemmet og en bedre relation til hunden.
        </Text>
        <Text>
          Det har været helt fantastisk at deltage og vi glæder os til at forsætte på nyt hold.
        </Text>
        <Text>Sarah og Kasper (Molly)</Text>
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

    <FlexedRow>
      <Image src={TestiCoolSeven} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi har fået gode redskaber til at hjælpe vores hund med at slappe mere af i situationer hvor hun bliver overgearet” " />
        <Text>
          Vi har fået hjælp til at få vores hund rolig i situationer hvor det er nødvendigt, f.eks.
          på gåture. Selvom vi har været en del fraværende har vi stadig lært nye og spændende
          øvelser, som vi har kunnet træne herhjemme med hjælp fra de skriftlige guides.
        </Text>
        <Text>
          Jeg syntes det bedste ved Sabrinas kurser er at hun ser hver individuelle hund og hun
          giver sig tid til at komme med ekstra råd og guiding. Jeg anbefaler alle som vil træne
          deres hund med positiv indlæring at deltage.
        </Text>
        <Text>Nina Guldbrand og Aya</Text>
      </TextContainer>
    </FlexedRow>
  </Carousel>
);

export default DogCoolTestimonials;
