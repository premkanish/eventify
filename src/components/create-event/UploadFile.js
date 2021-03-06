import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropzone from 'react-dropzone';
import { uploadImage } from '../../redux/actions/';
import FlatButton from 'material-ui/lib/flat-button';


class UploadFile extends Component {

  constructor(props) {
    super(props);
    this.state = { rejected: false };
  }

  upload(files) {
    let file = files[0];

    this.props.uploadImage(file);

    this.setState({
      rejected: false,
      file: file,
      accepted: true
    });
  }

  // File will be rejected if it's the wrong type
  reject() {
    this.setState({rejected: true});
  }

  remove(e) {
    e.preventDefault();
    this.setState({
      accepted: false,
      file: null
    });
  }


  render() {

    return (
      <div>
        {!this.state.accepted ?
          <Dropzone
            onDropAccepted={this.upload.bind(this)}
            onDropRejected={this.reject.bind(this)}
            style = {{
              width: 200,
              height: 200,
              margin: '20px auto',
              borderWidth: '4px',
              borderColor: '#767b91',
              borderStyle: 'dashed',
              borderRadius: '5px',
              padding: '20px'
            }}
            activeStyle = {{
              borderStyle: 'solid',
              backgroundColor: '#eee'
            }}
            rejectStyle = {{
              borderStyle: 'solid',
              backgroundColor: '#ffdddd'
            }}
            multiple={false}
            accept="image/jpeg, image/png, image/bmp, image/gif">
            { this.state.rejected ?
              <div className="center-align">Invalid file type. Please use jpeg, bmp, gif or png.</div> :
              <div className="center-align">Drag and drop an image here or click to select a file to upload</div> }
          </Dropzone>
        : <FlatButton
            onClick={this.remove.bind(this)}
            style={{color: '#db436c'}}>
            Remove image
          </FlatButton>}
        {this.state.file ?
          <div>
            <h6>Image to upload:</h6>
            <div>
              <img src={this.state.file.preview} style={{maxWidth: '200px'}} />
            </div>
          </div>
        : null}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({uploadImage}, dispatch);
}

function mapStateToProps(state) {
  return {
    currentImg: state.events.currentImg
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);
