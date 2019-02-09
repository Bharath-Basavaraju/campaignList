import React from "react";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import BusProxyLibrary from "bus_proxy";
import * as actions from "./actions/interactionActions";
import { dialogMessageReducer } from "./reducers/dialogMessageReducer";
import DialogMessage from "./dialogMessage";
import Logger from "redux-logger"
import createSagaMiddleware from 'redux-saga'
import dialogueSagas from './sagas/dialogueSagas'
import {srOperationSuccess} from "./actions/interactionActions";
import {srOperationFailure} from "./actions/interactionActions";


const sagaMiddleware = createSagaMiddleware();
let store = createStore(dialogMessageReducer, applyMiddleware(sagaMiddleware, Logger));
sagaMiddleware.run(dialogueSagas);

BusProxyLibrary({
    "message.MessageSuccessful": [
        function (event, messageObject) {
            store.dispatch(actions.messageSendSuccessful(messageObject.interactionId, messageObject));
        }
    ],
    "interaction.InteractionActive": [
        function (event, interactionId) {
            store.dispatch(actions.interactionActive(interactionId))
        }
    ],
    "interaction.InteractionLeave": [
        function (event, interactionObj){
            store.dispatch(actions.interactionRemoved(interactionObj.interactionId))
        }
    ],
    "interaction.InteractionDisposed": [
        function(event, interactionId){
            store.dispatch(actions.interactionRemoved(interactionId))
        }
    ],
    "smartresponse.srOperationRequested": [
        function(event){
            store.dispatch((actions.srOperationRequested()))
        }
    ],
    "smartresponse.srSuccess": [
        function(event) {
            store.dispatch(srOperationSuccess())
        }
    ],
    "smartresponse.srFailure": [
        function(event) {
            store.dispatch(srOperationFailure())
        }
    ]
}, [
    "smartresponse.addSR"
]);

export default class DialogMessageComponent extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <DialogMessage {...this.props}/>
            </Provider>
        );
    }
}