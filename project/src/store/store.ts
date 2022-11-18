import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReduce } from './rootReducer'

export const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)))
// export const store = configureStore({ reducer: rootReducer })
