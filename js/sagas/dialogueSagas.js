import {  call, put, takeEvery} from 'redux-saga/effects'
import BusProxyLibrary from "bus_proxy";
import {SMART_RESPONSE_ADD_REQUESTED} from "../utils/actionNames";
import {smartResponseAddProcessed} from "../actions/interactionActions";

function* smartResponseAddRequested(action) {
    yield call(
        BusProxyLibrary().getMethod,
        "smartresponse.addSR",
        {srText: action.smartResponseText, srTags: action.smartResponseTag},
        (data) => {}
    );
    yield put(smartResponseAddProcessed(action.messageId));
}

function* smartResponseSagas() {
    yield takeEvery(SMART_RESPONSE_ADD_REQUESTED, smartResponseAddRequested);
}

export default smartResponseSagas;