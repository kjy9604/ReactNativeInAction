import uuidV4 from 'uuid/v4';
import {ADD_BOOK, REMOVE_BOOK} from '../actions';

// 초기상태 만들기
const initialState = {
  books: [{name: 'East of Eden', author: 'John Steinbeck', id: uuidV4()}],
};

// state 인수의 기본 값을 initialState로 지정, 두번째 인수로 action을 추가
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      // 삭제할 도서의 index 찾기
      const index = state.books.findIndex(book => book.id === action.book.id);
      return {
        // 기존 books 배열에서 삭제할 도서의 index 를 제외하고 나머지 항목을 포함한 새 배열을 반환
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1),
        ],
      };
    default:
      return state;
  }

  // state를 반환
  return state;
};

export default bookReducer;
