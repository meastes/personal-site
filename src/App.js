import blue from '@material-ui/core/colors/blue';
import {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';
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
        <h1>Mike Eastes</h1>
        <h2>Software Engineer</h2>
        <DetailedContent />
      </MainContent>
    </MuiThemeProvider>
  </JssProvider>
);

export default App;
