import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import rootReducer from './reducers';

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
