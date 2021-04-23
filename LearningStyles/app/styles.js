import {StyleSheet} from 'react-native';

// 밝은색과 어두운색 테마에 사용할 색상을 정의하는 상수
export const Colors = {
  dark: 'black',
  light: 'white',
};

// 기본컨테이너의 스타일을 지정할 자바스크립트 객체
const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

// 기본상자 스타일을 지정할 자바스크립트 객체
const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

// 밝은색 테마에 사용할 스타일시트 만들기
const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    backgroundColor: Colors.dark,
  },
});

// 어두운색 테마에 사용할 스타일시트 만들기
const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    backgroundColor: Colors.light,
  },
});

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
