import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';

function mapStateToProps(state) {
	return {
		posts: state.posts.posts,
		comments: state.comments.comments,
		events: state.events.events,

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
