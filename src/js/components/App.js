import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Window from './window/Window';
import SampleTree from './tree/SampleTree';
import RemoteRender from './modeler/RemoteRender';

import ToolMenu from './tool/ToolMenu';
import GlobalToolMenu from "./globaltools/GlobalToolMenu"

import { connect } from "react-redux";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    const thistheme = {
      theme: {
        palette: {
          type: this.props.themeType
        }
      }
    }
    return (
      <ThemeProvider theme={createMuiTheme(thistheme.theme)}>
        <CssBaseline />
        {/* Full screen modeler */}
        <RemoteRender />
        {/* Top buttons (tools) */}
        <ToolMenu className="tool-menu" />
        {/* Top right corner (dark theme) */}
        <GlobalToolMenu/>
        {/* Tree */}
        <Window title="Tree" rndConfig={{ default: { width: 200, height: 200, x: 10, y: 10 } }}>
          <SampleTree />
        </Window>
        
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeType: state.theme.palette.type
  };
}

export default connect(mapStateToProps)(App);
