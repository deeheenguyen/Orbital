import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';

function mapStateToProps(state) {
	console.log('Posts from state', state.posts);
	console.log('Comments from state', state.comments);
	return {
		posts: state.posts.posts,
		comments: state.comments.comments
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;