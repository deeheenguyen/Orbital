import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid.js';
import React from 'react';

var textStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 0
}
class Homepage extends React.Component {
  render() {
    return (
      <div style ={textStyle}>
      <form>
          <label>
              Name:
                <input type="text" name="name" />
          </label>

             <li><Link to="/results">SEARCH</Link></li>
      </form>
      </div>
    );
  }
}

export default Homepage;
