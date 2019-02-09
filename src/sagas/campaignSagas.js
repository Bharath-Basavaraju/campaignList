import * as actionNames from "../utils/actionNames";
import { call, put, takeEvery, select , take} from "redux-saga/effects";
import * as campaignActions from "../actions/campaignActions";

import * as constants from "../utils/constants"


function* clearChannel(){
    let spinChannel =  yield select(getSpinChannel);
    let stopChannel = yield select(getStopSpinChannel);
    if(spinChannel) {
        spinChannel.close();
    }
    if(stopChannel) {
        stopChannel.close();
    }
    yield put(slotActions.spinningStopped());
}

function* campaignSagas(){
   
    //yield takeEvery(actionNames.STOP_SPINNING, clearChannel);
}

export default campaignSagas;