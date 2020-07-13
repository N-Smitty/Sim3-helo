import { createStore} from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
const store = createStore(reducer)

export default store