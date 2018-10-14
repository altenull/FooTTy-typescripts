import configure from './configure';
import {createHashHistory} from 'history'

const history = createHashHistory();
const initialState = window.initialReduxState;

export default configure(history, initialState);