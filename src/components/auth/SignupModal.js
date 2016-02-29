/**
 *    
 *    Sign-up Modal
 *    
 *    Optional :
 *    
 *    @props {Boolean} this.props.menuItem 
 *    if the sign-up button is part of LeftNav,
 *    return a MenuItem instead of FlatButton.
 *    
 */

import React from 'react';

//Material UI
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';

//Components
import LoginFBBtn from './LoginFBBtn';


const contentStyle = {
  width: '50%',
  maxWidth: '450px',
  textAlign: 'center'

};

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  color: '#db436c'
};

class SignupModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    
    if (this.props.menuItem) {
      return (
        <div>
        
          <MenuItem 
            style={{color: '#53b3cb'}}  
            onTouchTap={() => this.handleOpen()}
          >
            Sign Up
            <Dialog
              title="Eventify"
              modal={false}
              open={this.state.open}
              contentStyle={contentStyle}
              titleStyle={titleStyle}
              onRequestClose={() => this.handleClose()}>
              <LoginFBBtn />
              {/* keep this code here for future local authentication implementation
              OR
              <SignupForm />*/}
            </Dialog>
          </MenuItem>
          

        </div>
      );
    }

    return (
      <div>
        <FlatButton
          label="Sign Up"
          onClick={() => this.handleOpen()}
          style={{color: '#53b3cb'}} />
        <Dialog
          title="Eventify"
          modal={false}
          open={this.state.open}
          contentStyle={contentStyle}
          titleStyle={titleStyle}
          onRequestClose={this.handleClose}>
          <LoginFBBtn />
          {/* keep this code here for future local authentication implementation
          OR
          <SignupForm />*/}
        </Dialog>
      </div>
    );
  }
}

export default SignupModal;
