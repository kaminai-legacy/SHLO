import {restURL} from "../../api/baseURL";

const _ = require('lodash');
const {FILTER_TAGS} = require('../../constants/consts');

const prepareData = (data) => {
    const dataToPrepare = _.cloneDeep(data);
    if (!(dataToPrepare['Active'] === true && dataToPrepare['Closed'] === true)) {

        if (dataToPrepare['Active'] === true) {

            dataToPrepare['hasWinner'] = false;

        }
        if (dataToPrepare['Closed'] === true) {

            dataToPrepare['hasWinner'] = true;

        }
    }
    for (let key in dataToPrepare) {
        if (dataToPrepare.hasOwnProperty(key)) {
            if (FILTER_TAGS['label'].includes(key)) {
                dataToPrepare[FILTER_TAGS['originalName'][key]] = dataToPrepare[key];
            }
        }
    }

    const NeededFields = _.pick(dataToPrepare, FILTER_TAGS['toSend']);

    const contestFilter = {};
    for (let key in NeededFields) {
        if (NeededFields.hasOwnProperty(key)) {
            if (NeededFields[key].hasOwnProperty('value')) {
                if (FILTER_TAGS['categoriesAssociation'].hasOwnProperty(NeededFields[key]['value'])) {
                    contestFilter[key] = FILTER_TAGS['categoriesAssociation'][NeededFields[key]['value']];
                } else {
                    contestFilter[key] = NeededFields[key]['value'];
                }

            } else {
                contestFilter[key] = NeededFields[key];
            }
        }
    }
    const dataOnServer = _.cloneDeep(contestFilter);
    for (let key in dataOnServer) {
        if (dataOnServer.hasOwnProperty(key)) {

            if (_.isString(dataOnServer[key]) && (key !== 'id')) {

                dataOnServer[key] = dataOnServer[key].replace(/ /g, '_').replace(/&/g, 'and');

            }
        }
    }

    if (dataOnServer['typeOfIndustry'] === "All_Industries") {
        delete dataOnServer['typeOfIndustry']
    }
    if (dataOnServer['typeOfContest'] === "All_Categories") {
        delete dataOnServer['typeOfContest']
    }

    let url = `${restURL}/contestFilter/?`;
    for (let key in dataOnServer) {
        if (dataOnServer.hasOwnProperty(key)) {
            if (url === `${restURL}/contestFilter/?`) {
                url = `${url}${key}=${dataOnServer[key]}`
            } else {
                url = `${url}&${key}=${dataOnServer[key]}`
            }
        }
    }

    return url

};
export default prepareData;