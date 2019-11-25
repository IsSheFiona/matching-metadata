import React from 'react';
import database from '../database.js'
import SearchResults from './SearchResults.js'

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {artist: '',
                    title: '',
                    isrc: '',
                    duration: null,
                    artistResult: '',
                    titleResult: '',
                    isrcResult: '',
                    durationResult: null};
  
      this.handleArtistChange = this.handleArtistChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleISRCChange = this.handleISRCChange.bind(this);
      this.handleDurationChange = this.handleDurationChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleArtistChange(event) {
      this.setState({artist: event.target.value});
    }
    handleTitleChange(event) {
      this.setState({title: event.target.value});
    }
    handleISRCChange(event) {
      this.setState({isrc: event.target.value});
    }
    handleDurationChange(event) {
      this.setState({duration: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      console.log(this.state)
      for (let i=0; i < database.length; i++)
        if (this.state.isrc === database[i].ISRC) 
        {this.setState({artistResult: database[i].artist,
                        titleResult: database[i].title,
                        isrcResult: database[i].ISRC,
                        durationResult: database[i].duration})
        console.log(database[i].artist)}
      event.preventDefault();
    }
  
    render() {
      return (
        <>
        <form className="Form" onSubmit={this.handleSubmit}>
          <label>
            Artist:
            <input type="text" value={this.state.artist} onChange={this.handleArtistChange} />
          </label>
          <label>
              Title:
              <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
              ISRC:
              <input type="text" value={this.state.isrc} onChange={this.handleISRCChange} />
          </label>
          <label>
              Duration:
              <input type="number" value={this.state.duration} onChange={this.handleDurationChange} />
          </label>
          <input type="submit" value="Submit" className="button"/>
        </form>
        <SearchResults artistResult={this.state.artistResult} />
        </>
      );
    }
  }

export default SearchForm;