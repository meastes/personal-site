import blue from '@material-ui/core/colors/blue';
import {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import DetailedContent from './components/DetailedContent/DetailedContent';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import SelfAvatar from './components/SelfAvatar';

// Ensures JSS is inserted first to allow overriding JSS styles
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Hero />
      <MainContent avatar={<SelfAvatar />}>
        <Typography variant="display1" component="h1" gutterBottom>
          Mike Eastes
        </Typography>
        <Typography variant="button" component="h2" gutterBottom>
          Software Engineer
        </Typography>
        <DetailedContent />
      </MainContent>
    </MuiThemeProvider>
  </JssProvider>
);

export default App;
