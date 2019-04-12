// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  Image,
  List,
  Slide,
  Text,
  Layout,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#1F2229',
    secondary: '#F6B93A',
    tertiary: '#62DAF9',
    quaternary: '#CECECE',
  },
  {
    primary: 'Maison Neue',
    secondary: 'Helvetica',
  }
);

const images = {
  react_logo: require('./static/react.svg'),
  ceiss: require('./static/ceiss.png'),
  gatsby: require('./static/gatsbyjs-icon.svg'),
  nextjs: require('./static/nextjs.svg'),
  reaction: require('./static/reaction-commerce.png')
};

theme.screen.components.listItem.fontSize = '2rem';
theme.screen.components.listItem.marginBottom = '2rem';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React.js Aplatanao
          </Heading>
          <Heading size={6} lineHeight={1} textColor="white">
            Enrique Ortiz
          </Heading>
          <Image width={'25%'} src={images.react_logo}/>
        </Slide>
        <Slide transition={['fade']} bgColor="#181B1D">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              ¿Quién soy yo?
          </Heading>
          <List textFont={'Poppins'}>
            <ListItem>Software Engineering Student @INTEC</ListItem>
            <ListItem>Colaborador de CEISS INTEC</ListItem>
            <ListItem textColor='tertiary'>Front-End Dev (React y su ecosistema)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              Manin, ¿Qué es React?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              Manin, ¿Qué es React?
          </Heading>
          <Heading size={6} lineHeight={1} textColor="white">
            In a Nutshell: 8fi9
          </Heading>
        </Slide>
        <Slide transition={['fade']} align={'flex-start center'} bgColor="primary" textColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="secondary">
              React te permite hacer
          </Heading>
          <List textFont={'Poppins'}>
            <ListItem>Single Page Apps (SAPs)</ListItem>
            <ListItem>Progressive Web Apps (PWAs)</ListItem>
            <ListItem>Static Sites (Blogs, etc)</ListItem>
            <ListItem>Blah, blah, blah...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="#111213" textColor="tertiary">
          <Layout style={{alignItems: 'center'}}>
            <Image width={'20%'} src={images.gatsby}></Image>
            <Image width={'30%'} src={images.nextjs}></Image>
            <Image width={'20%'} src={images.reaction}></Image>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="secondary">
              Men, eso suena a una bazooka.
          </Heading>
          <Heading size={5} lineHeight={1} textColor="tertiary">
              ¿Por qué usar React?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="secondary">
              Hagamos un App en vivo: 
          </Heading>
          <Heading size={5} lineHeight={1} textColor="tertiary">
              El AlfApp 🔥
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} lineHeight={1} textColor="secondary">
              El App:
          </Heading>
          <List textFont={'Poppins'}>
            <ListItem>Un mensaje: "la calle bota ..."</ListItem>
            <ListItem>Un botón para alternar entre 'fuego fuego' y '🔥🔥'</ListItem>
            <ListItem>Un GIF del alfa corriendo.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              live coding!
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}  caps lineHeight={1} textColor="secondary">
              ¡Eso es todo!
          </Heading>
          <Text textColor={'white'} textFont={'Helvetica'}>Github 👨🏻‍💻- @Evalir</Text>
          <Text textColor={'white'} textFont={'Helvetica'}>Twitter 🚀- @hievalir</Text>
          <Text textColor={'white'} textFont={'Helvetica'}>Instagram 🔥- @henry.codes</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}  caps lineHeight={1} textColor="secondary">
              ¿Preguntas?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
