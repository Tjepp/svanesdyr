import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow, Image } from '../../components';
import {
  TestiPupOne,
  TestiPupTwo,
  TestiPupThree,
  TestiPupFour,
  TestiPupFive,
  TestiPupSix,
  TestiPupSeven,
  TestiPupEight,
  TestiPupNine,
  TestiPupTen,
  TestiPupEleven,
  TestiPupTwelve,
  TestiPupThirteen,
} from '../../assets';

const DogPuppyTestimonials = () => (
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
      <Image src={TestiPupTen} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg elsker, at vi ikke er flere på holdet. Det giver tid til hjælp og støtte til den enkelte og mig ro i forhold til at min hund er i trygge rammer” " />
        <Text>
          Jeg har lært utroligt meget om, hvordan hunde reagerer/tænker, takket være et fantastisk hold med en fantastisk engageret underviser, 
          der med masser af kærlighed til hundene hjælper os alle på vej. Især samspillet mellem hvalpene, at se hvordan min hund på kun få gange gik fra at være bange overfor de andre hunde til at være aktivt opsøgende. 
          Jeg har ikke haft hund tidligere, så det er en stor ny verden der har åbnet sig for mig.
        </Text>
        <Text>Annette og Mickie</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupThirteen} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg var nervøs for at jeg ikke ville få indført træningen i hverdagen, men det har kun gjort det nemmere at være hvalpeejer og træningen bliver brugt flere gange om dagen” " />
        <Text>
          Vi er fan af mindre hold og gør at træningen nok har gjort det nemmere at føle man får noget ud af det. Man har samtidig følt man kunne spørge dig til råds om andre ting og kun fået gode svar som har hjulpet. 
        </Text>
        <Text>
          Jeg har fået gode råd til at ændre uønsket adfærd - gode råd man nemt kan indføre i hverdagen. Jeg har fået “Ro” i en hverdag med en hvalp gr. 
          Tips til uønsket adfærd, viden om opførsel bl.a. ift overstimulering og bedre og mere rolige gåture med råd fra erfaren træner. Man ved hvordan man skal arbejde/ håndtere det med tips fra dig.
        </Text>
        <Text>
          Har allerede anbefalet dig til en og har kun snakket godt om dine hold. Du virker engageret, og Karlo elsker at komme ude ved dig.
        </Text>
        <Text>Cecilie Iversen, Karlo</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupEleven} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi har virkelig følt os set, og har fået en masse gode værktøjer vi har taget med os” " />
        <Text>
          Vi havde tidligere været på et hold ved en anden træner i byen, hvor der ikke var tid til den enkelte hund og hvor vores hvalp blev fejlbedømt fra starten. 
          Ved deltagelse hos svanes dyr oplevede vi god tid til hver enkel hvalp, og øvelserne blev tilpasset til vores hvalp så hun kunne være godt med hele tiden.
        </Text>
        <Text>
          Vi har fået en roligere hund og bedre kontakt med hunden. 
          At se vores hund kunne trives med andre hunde har været fantastisk, og at lære at kunne aflæse hendes signaler i leg. Vi har kun en masse ros herfra.
        </Text>
        <Text>Dennis og Kirstine og Carla</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupTwelve} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg syntes det har været super rart med det flotte tilsendte materiale, så man kan være forberedt inden træningsaften!” " />
        <Text>
          Der er mange ting, som har været fantastisk ved at deltage. Du kommer med små fif til os, som passer til hver enkel hund. 
          Du er super god til at forklare og vise, hvordan vi skal gøre øvelserne og hvad vi skal opnå med dem. Men også at bruge øvelsespapirerne og især videoerne til træning herhjemme.
        </Text>
        <Text>
          Jeg er gået fra at få et helt lille ny væsen og en ny race, som man ikke kender, til i dag at have fået hans fortrolighed og lært ham meget bedre at kende. 
          Jeg kan hjælpe ham med ikke at blive overgearet og stresset. Og ved hvor vigtig, det er at give Aslan ro helst inden han kører helt op i gear, så han ikke bliver en stresset hund.
          At det er ok, at give ham pauser (i hans tilfælde er det ved at blive lukket for sig selv uden at jeg får dårlig samvittighed eller snuse aktiviteter). Hvis jeg ikke havde gået på dit kursus, så var han blevet aktiveret for meget...
        </Text>
        <Text>Susanne Klein og Aslan</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupThree} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Det har været den bedste investering i samarbejdet med vores hund” " />
        <Text>
          Den største forandring er sket i samarbejdet med min hvalp. Jeg har mere kontakt med min
          hund og har fået super gode forslag til mental stimulering og tips til motivation og
          belønning af ham.
        </Text>
        <Text>
          Jeg har fået en ny måde at læse vores hund på, og det mest fantastiske var at min søn med
          autisme har kunnet deltage. Sabrina er vildt dygtig og kommer rundt til alle på holdet.
        </Text>
        <Text>Jeg vil anbefale ALLE med en hvalp at deltage.</Text>
        <Text>Anja, Silas og Ozzy</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupFour} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Massiv usikkerhed er ændret til positiv udvikling, da jeg har bedre forståelse for min hund og noget konstruktivt at arbejde videre med hjemme” " />
        <Text>
          Jeg vidste intet om moderne hunde-opdragelse med den positive tilgang, men vidste noget
          fra pighalsbåndenes tid, hvor man var myndig og afstraffende i nuet. Det betyder at jeg
          har skullet udskifte hele min tankegang og det har hvalpeholdet hjulpet enormt meget med,
          både fordi vi kunne spørge til råds om de udfordringer vi stod med og fordi jeg kunne se
          at den positive tilgang jo virker ;-)
        </Text>
        <Text>
          Allerførste gang vi brugte klikker og hunden skulle søge kontakt - det var en fantastisk
          aha oplevelse og første gang at jeg fik fornemmelse af gensidig kommunikation med hunden -
          og fik håb om at det måske nok skal gå godt med hund alligevel.
        </Text>
        <Text>Malene og Simba</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupFive} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Min eneste indvending var prisen for holdstart, dette var et af de dyreste steder jeg stødte på, men den må jeg sige virkelig har ændret sig! Kvalitet og pris går hånd i hånd” " />
        <Text>
          Jeg har fået større forståelse af min hunds signaler og en bedre kommunikation mellem mig
          og min hund. Især de gode råd man får med på vejen og kan spørge ind både før, under og
          efter holdet har været fantastisk.
        </Text>
        <Text>
          Den positive effekt det har på ens hvalp at gå hos Sabrina er kun en anbefaling værdig!
        </Text>
        <Text>Michelle Kjær og Kenzo</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupSix} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg blev overrasket over tilgangen til at have hund. Klikker og ros. Der er overhovedet ingen råb eller skældud” " />
        <Text>
          Min deltagelse på hvalpeholdet har givet mig en stor viden omkring det at have en hund.
          Det har desuden givet mig nogle rigtig gode redskaber til opdragelse. Det mest fantastiske
          har været succeserne og følelsen af at lykkedes.
        </Text>
        <Text>
          Jeg har fået en hund der gerne vil lære og lege, og jeg har fået lyst til at lære mere!
          Jeg regnede kun med at skulle på ét træningsforløbet og så ellers bare have en
          familie/hygge hund. Men der skal helt klart nydes flere hold og mere læring.
        </Text>
        <Text>Merete og Alfred</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupNine} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg frygtede at vi til træning lukkede alle hundene sammen i en pærevælling, men der er rigtig godt styr på hundenes leg!” " />
        <Text>
          Jeg gik tidligere på et hold med 10 hvalpe, og jeg synes helt klart det er en fordel at vi kun var 4 her. Det har jeg fået meget mere ud af.
        </Text>
        <Text>
          Det bedste er at der er rigtig godt styr på hundenes leg og der ikke er mange hunde der leger på en gang. Jeg synes det er så meget bedre end det andet sted jeg gik. Det er meget mere personligt, jeg har fået god sparring med Sabrina, også om vores anden hund derhjemme.
        </Text>
        <Text>Mathilde og Karla</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupEight} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi har haft god sparring og en livline i træneren!” " />
        <Text>
          Vi gik til hvalpetræning et andet sted med vores forrige hund og det var ikke særlig godt. Men allerede efter første gang hvalpetræning vidste vi, at vi var i de bedste hænder.
        </Text>
        <Text>
          Vi har fået god kontakt til vores hund og har fået et fantastisk samarbejde med Ludwig. Ikke mindst ved vi, hvordan vi får hans opmærksomhed ved forstyrrelser.. 
        </Text>
        <Text>Det har været helt fantastisk og vi har glædet os hver gang. Vi anbefaler stedet til alle vi møder, som har hvalp.</Text>
        <Text>Heidi Mønster og Ludwig</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupSeven} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg fik øjnene op for hvor simpelt det kan være at træne, at det ikke behøves at være kompliceret” " />
        <Text>
          Inden vi startede frygtede jeg at der ville være for mange komplicerede opgaver og at vi
          ikke ville kunne finde ud af det... Frygten er blevet bragt til skamme. Det var let og
          forståeligt, og jeg fik en masse nyt læringsmateriale.
        </Text>
        <Text>
          Holdet var super dejlig intimt, vi har været så få, så der har været god opmærksomhed på
          den enkelte. Jeg har fået en gladere hund og en større forståelse af min hund.
        </Text>
        <Text>Sandra og Pixie</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupOne} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Vi har fået virkelig gode øvelser som vi kan bruge i hverdagen” " />
        <Text>
          Vi vil anbefale alle der skal have hvalp at deltage på Sabrinas hold, ikke bare for at
          lærer øvelserne men at prøve at arbejde sammen med sin hund er en super følelse!
        </Text>
        <Text>
          Vi har fået bedre indsigt i hvordan en hund lærer så man kan bruge det på de udfordringer
          man har. Vi blev overrasket over hvor mange trin der skal til for at opbygge en øvelse og
          hvor mange godbidder der skal bruges, men vi har fået en hund som gerne vil lytte og lære,
          et godt samarbejde med ham og værktøjerer til at arbejde videre selv.
        </Text>
        <Text>Det har været en mega god oplevelse!</Text>
        <Text>Ellen, Thomas og Njord</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupTwo} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Det mest fantastiske var at der var tid til leg med andre hvalpe” " />
        <Text>
          Det bedste ved hvalpeholdet er at der ikke var mange på holdet og tid og guidning i leg
          med andre hvalpe.
        </Text>
        <Text>
          Jeg har fået bevidsthed om mit eget kropssprog i forhold til hunden og ikke mindst viden
          om hundenes indbyrdes sprog. Jeg vil anbefale alle der kunne have brug for træning at
          deltage på hvalpeholdet. Vi blev selv anbefalet Sabrina fremfor andre.
        </Text>
        <Text>Rikke og Santa’s</Text>
      </TextContainer>
    </FlexedRow>

  </Carousel>
);

export default DogPuppyTestimonials;
