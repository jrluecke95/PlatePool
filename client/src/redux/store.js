import { combineReducers, createStore } from 'redux'
import { userReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  user: userReducer
})

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// issue is here
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const  persistor = persistStore(store)

export { store, persistor };