import {Map} from "immutable";
import * as helperFnc from "../utils/helperFunction";
import * as ActionNames from '../utils/actionNames';
import * as constants from '../utils/constants';
import { Container, Header, Icon, Button } from 'semantic-ui-react';


const initialState = Map({
    
});

export function CampaignReducer(state = initialState, action){
    switch(action.type){
        case ActionNames.ON_ADD_CAMPAIGN: {
            let campName = action.campaignName;
            let comments = action.comments;
            let pause = false;
            let UID =  new Date().getUTCMilliseconds();
            return state.set("UID", {name: campName, comments: "comments", pause: pause }  );
        }
    }
    return state;
}