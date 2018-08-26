import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import Content from './components/Content';
import Hero from './components/Hero';
import SelfAvatar from './components/SelfAvatar';

// Ensures JSS is inserted first to allow overriding JSS styles
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

class App extends React.Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div>
          <Hero />
          <Content>
            <SelfAvatar />
          </Content>
        </div>
      </JssProvider>
    );
  }
}

export default App;
