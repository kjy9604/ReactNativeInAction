import {combineReducers} from 'redux';

import bookReducer from './bookReducer';

// 모든 리듀서를 포험하는 루트 리듀서를 만든다. 여기서는 하나의 리듀서만 포함
const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
