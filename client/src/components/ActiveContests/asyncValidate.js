const _ = require('lodash');
const {FILTER_TAGS} = require('../../constants/consts');

const prepareData = (data) => {
    const dataToPrepare = _.cloneDeep(data);
    if (!(dataToPrepare['Active'] === true && dataToPrepare['Closed'] === true)) {

        if (dataToPrepare['Active'] === true) {

            dataToPrepare['hasWinner'] = dataToPrepare['Closed'] === true;

        }
    }
    for (let key in dataToPrepare){
        if(dataToPrepare.hasOwnProperty(key)){
            if(FILTER_TAGS['label'].includes(key)){
                dataToPrepare
            }
        }
    }
    return data
};
export default prepareData;