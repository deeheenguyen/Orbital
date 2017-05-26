import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid.js';

class Homepage extends React.components{
  render (){
    return (
      <div class="container">
        <div class="row">
          <div class="span12">
            <form id="custom-search-form" class="form-search form-horizontal pull-right">
                <div class="input-append span12">
                    <input type="text" class="search-query" placeholder="Search"> </input>
                     <Link to={PhotoGrid}>
                       <button type="submit" class="btn">
                          <i class="icon-search"></i>
                      </button>
                    </Link>
                  </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Homepage;
