import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//ReactとReduxのつなぎ込み
import { Provider, connect } from 'react-redux';
import Counter from './component/Counter'; //Component

// import counter from './reducers'; //reducer
import counter from './actions'; //reducerをアクションファイル内に一纏め

import { increment, decrement } from './actions'; //actions

//Reducerを引数にstoreを生成
const store = createStore(counter);
const rootEl = document.getElementById('root');

const appState = (state) => {
  return {value: state}
}
const appDispatchState = (dispatch) => {
  return {
    onIncrement: ()=> dispatch(increment()),
    onDecrement: ()=> dispatch(decrement())
  }
}
const AppContainer = connect(
  appState,
  appDispatchState
)(Counter) 

const render = ()=> ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  rootEl
);

render();