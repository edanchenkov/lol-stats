import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="search-container">
                <label htmlFor="exampleEmailInput">Summor name</label>
                <input className="u-full-width" type="text"
                       placeholder="Faker"/>
                <input className="button-primary" type="submit" value="Submit"/>
            </div>
        );
    }
}


export default Search;
