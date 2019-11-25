import React from 'react';


function SearchResults(props) {
  return (
    <div className="SearchResults">

        <h1>
          {props.artistResult}
        </h1>
       { console.log(props)}


      
    </div>
  );
}

export default SearchResults;