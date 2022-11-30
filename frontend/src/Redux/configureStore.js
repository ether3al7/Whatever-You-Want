// import { getDefaultMiddleware } from '@reduxjs/toolkit/'
import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { Api } from '../services/Api'
import {Token} from './token'
import {User} from './user' 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            // [Api.reducerPath]: Api.reducer,
            
        }),
        // applyMiddleware(thunk,
        //     Api.middleware),
        applyMiddleware(thunk),
        
    
    );
   

    return store;
}