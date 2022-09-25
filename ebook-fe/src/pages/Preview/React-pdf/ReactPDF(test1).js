import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Pdf from './Tigra.pdf'

export default class index extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };
  onDocumentLoadSuccess=({numPages})=>{
    this.setState({numPages});
  };
  render() {
    const{pageNumber}=this.state;
    return null
  }
}
