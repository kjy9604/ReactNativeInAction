import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {addBook, removeBook} from './actions';

import {connect} from 'react-redux';

// name author 필드를 포함하는 initialState 객체 만들기
const initialState = {
  name: '',
  author: '',
};

class Books extends React.Component<{}> {
  // 컴포넌트 state에 initialState 변수의 값을 지정
  state = initialState;

  // key 와 value, 두 개의 인수를 사용하는 updateInput 메소드 만들기
  // spread 연산자를 이용해서 state 를 업데이트
  // spread 연산자는 기존의 state 키-값 쌍들을 새 state에 저장한 후,
  // 새로운 키-값 쌍을 새 state 에 추가
  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  // dispatchAddBook 을 호출
  // connect 함수의 props 로 참조 가능
  addBook = () => {
    this.props.dispatchAddBook(this.state);
    this.setState(initialState);
  };

  // removeBook 이라는 새 클래스 메소드를 만들고, mapDispatchToProps 의
  // 새 키로 this.props.dispatchRemoveBook 을 호출
  removeBook = book => {
    this.props.dispatchRemoveBook(book);
  };

  render() {
    // connect 함수가 books 배열을 반환하므로 이 배열의 props로 참조할 수 있다.
    const {books} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.booksContainer}>
          {
            // 배열을 매핑해서 각 도서의 이름과 저자를 표시
            books.map((book, index) => (
              <View style={styles.book} key={index}>
                <Text style={styles.name}>{book.name}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text onPress={() => this.removeBook(book)}>Remove</Text>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.name}
              onChangeText={value => this.updateInput('name', value)}
              style={styles.input}
              placeholder="Book name"
            />
            <TextInput
              value={this.state.author}
              onChangeText={value => this.updateInput('author', value)}
              style={styles.input}
              placeholder="Author name"
            />
          </View>

          <TouchableOpacity onPress={this.addBook}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  book: {
    padding: 20,
  },
  name: {
    fontSize: 18,
  },
  author: {
    fontSize: 14,
    color: '#999',
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28,
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

// 리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환
// 이 키는 books의 배열을 포함하고 있다.
const mapStateToProps = state => ({
  books: state.bookReducer.books,
});

const mapDispatchToProps = {
  dispatchAddBook: book => addBook(book),
  dispatchRemoveBook: book => removeBook(book),
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
