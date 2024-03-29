import { Fragment } from "react";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import { Footer } from "../components/functional/Footer";
import { Avatar } from "../components/styled/Avatar";
import { Banner } from "../components/styled/Banner";
import { Button } from "../components/styled/Button";
import { ButtonCard } from "../components/styled/ButtonCard";
import { Card } from "../components/styled/Card";
import { Container } from "../components/styled/Container";
import { Divider } from "../components/styled/Divider";
import { Figure } from "../components/styled/Figure";
import { TitleCard } from "../components/styled/TitleCard";
import { Wrapper } from "../components/styled/Wrapper";
import { listaLinksHome } from "../data/links";

export function Home() {
  return (
    <Fragment>
      <Banner>
        <div>
          <h1>Example headline.</h1>
          <p>Some representative placeholder content for the first slide of the carousel.</p>
          <Button>Learn more</Button>
        </div>
      </Banner>

      <Container $display="block">
        <Container $display="flex" $justifyContent="center" $wrap $fluid>
          <Card>
            <Avatar $imageUrl="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp" />
            <TitleCard>Heading 1</TitleCard>
            <p>
              Some representative placeholder content for the three columns of text below the
              carousel. This is the first column.
            </p>
            <ButtonCard>Learn more</ButtonCard>
          </Card>
          <Card>
            <Avatar $imageUrl="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" />
            <TitleCard>Heading 2</TitleCard>
            <p>
              Another exciting bit of representative placeholder content. This time, we've moved on
              to the second column.
            </p>
            <ButtonCard>Learn more</ButtonCard>
          </Card>
          <Card>
            <Avatar $imageUrl="https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg" />
            <TitleCard>Heading 3</TitleCard>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <ButtonCard>Learn more</ButtonCard>
          </Card>
        </Container>
        <Divider />

        <Container
          $display="flex"
          $direction="row"
          $alignItems="center"
          $justifyContent="center"
          $wrap
        >
          <Wrapper>
            <h2>
              First featurette heading. <span>It'll blow your mind.</span>
            </h2>
            <p>
              Some great placeholder content for the first featurette here. Imagine some exciting
              prose here.
            </p>
          </Wrapper>
          <Figure $imageUrl={image1} />
        </Container>
        <Divider />

        <Container
          $display="flex"
          $direction="row"
          $alignItems="center"
          $justifyContent="space-evenly"
          $wrap
          $reverse
        >
          <Wrapper>
            <h2>
              Oh yeah, it's that good. <span>See for yourself.</span>
            </h2>
            <p>
              Another featurette? Of course. More placeholder content here to give you an idea of
              how this layout would work with some actual real-world content in place.
            </p>
          </Wrapper>
          <Figure $imageUrl={image2} />
        </Container>
        <Divider />

        <Container
          $display="flex"
          $direction="row"
          $alignItems="center"
          $justifyContent="center"
          $wrap
        >
          <Wrapper>
            <h2>
              And lastly, this one. <span>Checkmate.</span>
            </h2>
            <p>
              And yes, this is the last block of representative placeholder content. Again, not
              really intended to be actually read, simply here to give you a better view of what
              this would look like with some actual content. Your content.
            </p>
          </Wrapper>
          <Figure $imageUrl={image3} />
        </Container>
        <Divider />
      </Container>

      <Footer listaLinks={listaLinksHome} />
    </Fragment>
  );
}

// GERA IMAGENS RANDOMICAS - https://source.unsplash.com/random?wallpapers
