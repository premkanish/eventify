import React from 'react';

class HowItWorks extends React.Component {
  
  teamWrapStyle() {
    return {
      width : '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: '15px',
      paddingRight: '15px',
      textAlign: 'center'
    };
  }
  
  
  teamHeaderStyle() {
    return {
      paddingTop : '100px',
      paddingBottom : '40px',
      color: 'rgba(36, 63, 115, 0.91)'
    };
  }
  
  teamStyle() {
    return {
      padding: '25px'
    };
  }
  
  imageStyle() {
    return {
      borderRadius: '7px',
      paddingBottom: '20px',
      paddingTop: '10px'
    };
  }
  
  nameStyle() {
    return {
      fontSize: '3rem',
      fontWeight: '300',
      fontStyle: 'Thin',
      paddingBottom: '10px',
      marginBottom: '0',
      marginTop: '5px',
      color: '#454545'
    };
  }
  
  subNameStyle() {
    return {
      marginTop: '10px',
      fontSize: '1rem',
      fontWeight: '500',
      color: '#454545'
    };
  }
  
  
  render() {
    return (
      
      <div className='row'>
      
        <div className='meet-the-team' style={this.teamWrapStyle()}>
          
          <h2 className='center-align' style={this.teamHeaderStyle()}>
            
            How It Works!
            
          </h2>
          
          <div className='row center-align'>
            
            <div className='col l12' style={this.teamStyle()}>
            
              <h2 style={this.nameStyle()}> 1. Sign Up with Facebook! </h2>
              
              <img src='https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-08 at 4.01.38 PM.jpg' className='responsive-img' style={this.imageStyle()}/>
              
            </div>
            
            <div className='col l12' style={this.teamStyle()}>
            
              <h2 style={this.nameStyle()}> 2. Create an event! </h2>
              
              <img src='https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.39.00 PM.jpg' className='responsive-img' style={this.imageStyle()}/>
            
            </div>
            
            <div className='col l12' style={this.teamStyle()}>
            
              <h2 style={this.nameStyle()}> 3. Filter By Location! </h2>
              
              <img src='https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.38.27 PM.jpg' className='responsive-img' style={this.imageStyle()}/>
            
            </div>
            
            <div className='col l12' style={this.teamStyle()}>
            
              <h2 style={this.nameStyle()}> 4. Join an event! </h2>
              
              <img src='https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.16.55 PM.jpg' className='responsive-img' style={this.imageStyle()}/>
              
            </div>
            
            <div className='col l12' style={this.teamStyle()}>
            
              <h2 style={this.nameStyle()}> 5. Pay for an event  </h2>
              
              <img src='https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.16.34 PM.jpg' className='responsive-img' style={this.imageStyle()}/>
            
            </div>
            
            <div className='col l12' style={this.teamStyle()}>
            
              <h2 style={this.nameStyle()}> 6. Share on Facebook for your friends to join! </h2>
              
              <img src='https://eventify-photos.s3.amazonaws.com/Screen Shot 2016-02-10 at 3.18.56 PM.jpg' className='responsive-img' style={this.imageStyle()}/>
            
            </div>
            
          </div>
        
        </div>
      
      </div>
    
    );
  }
}

export default HowItWorks;