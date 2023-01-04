# Nomad_React_Typescript

### Installation

#### app 과 함께 설치

```
npx create-react-app my-app --template typescript
```

#### 진행된 프로젝트에서 설치

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

#### 라이브러리 및 페키지를 위한 type definition 설치

```
npm i --save-dev @types/라이브러리 및 패키지 이름
```

- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 여러 type definition 정보가 있는 Github 참고

### Grammar

#### interface

- 객체 데이터를 typescript 에게 type 을 설명
- typescript 와 코드가 실행되기 전에 type 확인, 반면 propTypes 는 코드 실행 후 에러

#### default props & optional props

- optional props : | (or 연산자) 대신 key 값 뒤에 ? 사용
- default props : 기본값 명시 ?? 사용 (++ 이때 js 기능으로 인수 값에 기본값을 할당해주는 방식도 가능)

#### event 에 type 을 추가하는 법

- 이벤트 핸들러 함수의 파라미터로 event 를 적는데 해당 type 을 같이 적어줘야 함
- (event: React.FormEvent<HTMLFormElement>) : React.이벤트타입<태그타입>

#### type definition 확장

ex) styled-component

- src 에 style.d.ts 파일 생성하여 type definition 에 덮어쓰기 할 것임
- [API Reference - styled-components](https://styled-components.com/docs/api) 의 typescript 부분 참고하여 파일에 복붙
- 해당 파일에 작성한 DefaultTheme 을 토대로 index.tsx 에 ThemeProvider 추가하고 theme 추가
- prop 로 theme 내려받아 스타일 설정
