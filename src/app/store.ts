import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import authReducer from "../app/authSlice"
import guardianReducer from "../app/guardianSlice"
import patientReducer from "../app/patientSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  guardian: guardianReducer,
  patient: patientReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "guardian", "patient"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const resetStore = () => {
  persistor.purge(); 
};