import React from 'react';
import Reactable from 'reactable';

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

var headerStyle = {
  textAlign: 'centre',
  color: '#FF6A38',
}

var tableStyle = {
  color: '#5C868E'
}

class Events extends React.Component {
  constructor(props){
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount() {
  }
  renderTable() {
    const {posts, events} = this.props;
    var offset = new Date().getTimezoneOffset()*60*1000;
    console.log('posts and events', posts, events);
    let locObj = {}
    posts.forEach(function(post) {
      locObj[post.code] = post.caption;
    })
    let eventList = []
    Object.keys(events).forEach(function(id) {
      var _events = events[id]
      _events.forEach(function(e) {
        eventList.push({
          name: e.name,
          location: locObj[id],
          category: e.category,
          time: new Date(e.time),
          description: e.description,
        })
      })
    })
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

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  handleUpload(e) {
    e.preventDefault();
    console.log("something will be added");
    this.context.router.push('/upload');
  }
  render() {
    console.log(this.props)
    return (
      <div>
          <h1 style={headerStyle}> Current Events</h1>
          <div>
            {this.renderTable()}
          </div>
          <form onSubmit={this.handleUpload}>
            <button className ="submit"> Upload new events </button>
          </form>
      </div>
    );
  }
}


export default Events;
