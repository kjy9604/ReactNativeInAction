import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', // 현재 state를 저장하는 값
      todos: [], // todo list
      type: 'All', // todo의 타입을 저장할 값 (All, Current, Active)
    };
    // 메서드 생성자 내 클래스에 바인딩, 클래스를 사용하고 있으면 메서드는 클래스에 자동으로 바인딩되지 않는다.
    this.submitTodo = this.submitTodo.bind(this);

    // toggleComplete, deleteTodo 메서드를 생성자 내 클래스에 바인딩
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {
    //console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    // inputValue가 비어있는지, 공백만 있는지 확인, 비어있으면 아무것도 하지 않고 반환
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      // inputValue가 비어있지 않으면 todo변수를 생성하고 title, todoIndex, complete 객체를 할당
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo]; // 새로운 todo를 기존 배열에 추가
    // todo의 state를 지정해 this.state.todos의 갱신된 배열과 일치하게 만들고, inputValue를 빈 문자열로 재지정
    this.setState({todos, inputValue: ''}),
      () => {
        // 상태가 설저외면 콜백 함수를 전달하는 옵션이 있다.
        // 여기서 setState의 콜백함수는 상태가 로그아웃되어 모든것이 작동하는지 확인한다.
        console.log('State: ', this.state);
      };
  }

  // deleteTodo는 todoIndex를 인수로 하며, todos를 필터링해 전달된 인덱스의 todo를 제외한 모든 todo들을 반환,
  // 그런 다음 state를 나머지 todos로 재지정
  deleteTodo(todoIndex) {
    let {todos} = this.state;
    todos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({todos});
  }

  // toggleComplete는 todoIndex를 인수로 하며, 주어진 인덱스의 todo를 만날 때까지 todos를 반복, complete 부울값을
  // 현재와 반대되게 바꾸고 todos의 state를 재지정
  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos});
  }

  setType(type) {
    this.setState({type});
  }

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }

  // ScrollView : ScrollView 플랫폼을 감싸는 것, 스크롤이 가능한 View 컴포넌트
  // 속성인 keyboardShouldPersistTaps = 'always'
  // ==> 키보드가 열려있으면 닫아서 UI가 onPress 이벤트를 모두 처리하게 한다.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
