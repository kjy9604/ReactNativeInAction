import React from 'react';

import Books from './src/Books';
import rootReducer from './src/reducers';

// react-redux 에서 Provider 래퍼(Provider wrapper) 가져오기
import {Provider} from 'react-redux';
// redux 에서 createStore 가져오기
import {createStore} from 'redux';

// rootReducer를 이용해서 store 객체 생성
const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      // Provider 컴포넌트로 감싼 Books 컴포넌트 반환.
      // provider 의 prop으로 store 전달
      <Provider store={store}>
        <Books />
      </Provider>
    );
  }
}
