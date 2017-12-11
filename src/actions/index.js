import { createAction, handleActions } from 'redux-actions';

//Action
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//++++++++++++++++++++++++++++++++++++++++++++++++++

//Reducer

const initialState = 0;
/*第二引数で設定する初期値を
 予めconst initialState = 0とすることで、
 (state = 0, action)の代わりの役目を果たしています。
 */
export default handleActions({
  INCREMENT: (state, action) => {
    return state + 1;
  },
  DECREMENT: (state, action) => {
    return state -1;
  }
}, initialState);