import React from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { CampaignReducer } from  './reducers/campaignReducer';
import campaignSagas from './sagas/campaignSagas';
import CampaignContainerComponent from './view/campaignContainer';
import * as actions from './actions/campaignActions';
import { Container, Header, Icon } from 'semantic-ui-react';

const sagaMiddleware = CreateSagaMiddleware();
let store = createStore(CampaignReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(campaignSagas);
const title = "All Campaigns",
    errorMsg = "Sorry, we are trying to get back. Try after sometime !";

export default class CampaignComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render(){
        return(
            this.state.hasError ?
                <h3>{errorMsg}</h3>
            :   
                <Container>
                    <Header size='small'> 
                        <Icon name='mail' size='tiny' />
                        All Campaigns
                    </Header>
                    <Provider store={store}>
                        <CampaignContainerComponent {...this.props} />
                    </Provider>
                </Container>
        )
    }
}