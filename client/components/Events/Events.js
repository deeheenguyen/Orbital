import React from 'react';
import Reactable from 'reactable';
import firebase, { auth, database } from '../../actions/database.js';

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

var headerStyle = {
  textAlign: 'centre',
  color: '#FF6A38',
}

var tableStyle = {
  color: '#5C868E',
}

var suggestLoginSignupStyle = {
  fontSize: "1.5rem"
}

class Events extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events: this.props.events,
      posts: this.props.posts,
      user: null
    }
    this.handleUpload = this.handleUpload.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
          this.setState({ user });
      } else {
        this.setState({
          user: null
        });
      }
    });
    database.ref('/events').on('value', (snap) => {
      const updatedEvents = snap.val();
      this.setState({
        events: updatedEvents
      });
    });
  }
  handleLogin(event) {
    event.preventDefault();
    this.context.router.push('/login');
  }
  handleRegister(event) {
    event.preventDefault();
    this.context.router.push('/register');
  }
  handleUpload(e) {
    e.preventDefault();
    this.context.router.push('/upload');
  }
  renderTable() {
    var { posts, events } = this.state;
    var offset = new Date().getTimezoneOffset()*60*1000;
    console.log('posts and events', posts, events);
    let locObj = {}
    posts.forEach(function(post) {
      locObj[post.code] = post.caption;
    })
    let eventList = []
    if (events !== null) {
      Object.keys(events).forEach(function(id) {
        var _events = events[id]
        Object.values(_events).forEach(function(e) {
          eventList.push({
            name: e.name,
            location: locObj[id],
            category: e.category,
            time: new Date(e.time),
            description: e.description,
          })
        })
      })
    }
    return (
      <Table className="table" style={tableStyle}
        filterable={['name', 'location', 'category', 'time', 'description']}
        noDataText="No matching records found"
        itemsPerPage={5}
        currentPage={0}
        sortable={true}
        data={eventList}>
        <Thead>
          <Th column="name">Name</Th>
          <Th column="location">Location</Th>
          <Th column="category">Category</Th>
          <Th column="time">Time</Th>
          <Th column="description">Description</Th>
        </Thead>
      </Table>
    )
  }
  render() {
    const { user } = this.state
    console.log(this.props)
    return (
      <div>
          <h1 style={headerStyle}> Current Events</h1>
          <div>
            {this.renderTable()}
          </div>
          <form onSubmit={this.handleUpload}>
            { user?
              <button type="submit" className="button"> Upload new events </button>
            :
              <p style={suggestLoginSignupStyle}>
                  <button className="suggest-login-signup-btn" onClick={this.handleLogin}>Log in</button>
                  or
                  <button className="suggest-login-signup-btn" onClick={this.handleRegister}>Register</button>
                  to add your event!
              </p>
            }
          </form>
      </div>
    );
  }
}


export default Events;
