// src/js/components/Form.jsx
import React, { Component, useState} from "react";
import { connect } from "react-redux";
import { changeLang, toggleTheme } from "../../actions/index";
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';

function mapDispatchToProps(dispatch) {
  return {
    changeLang: lang => dispatch(changeLang(lang)),
    toggleTheme: theme => dispatch(toggleTheme(theme))
  };
}

function GlobalTools() {

    const [lang, setlang] = useState("FR");

    return (
        <Box className="dark-mode-toggle-container">
          <Tooltip title="Toggle dark mode on/off">
            <IconButton onClick={toggleTheme}>
              {this.state.theme.palette.type === 'dark' ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton> 
          </Tooltip>
        </Box>
    )
}





const GlobalToolMenu = connect(
    null,
    mapDispatchToProps
  )(GlobalTools);
  
export default GlobalToolMenu;

// class ConnectedForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const { title } = this.state;
//     this.props.addArticle({ title });
//     this.setState({ title: "" });
//   }
  
// }

