// src/js/components/Form.jsx
import React from "react";
import { connect } from "react-redux";
import { changeLang, toggleTheme } from "../../actions/index";
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';

const mapDispatchToProps = dispatch => ({
    changeLang: lang => dispatch(changeLang(lang)),
    toggleTheme: () => dispatch(toggleTheme())
});

const mapStateToProps = state => {
    return {theme: state.theme.palette.type };
}

function GlobalToolMenu({theme, toggleTheme}) {
    
    return (
        <Box className="dark-mode-toggle-container">
          <Tooltip title="Toggle dark mode on/off">
            <IconButton onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton> 
          </Tooltip>
        </Box>
    )
}



// const GlobalToolMenu = connect(
//     null,
//     mapDispatchToProps, 
//     mapStateToProps
//   )(GlobalTools);
  
export default connect(mapStateToProps, mapDispatchToProps)(GlobalToolMenu);

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

