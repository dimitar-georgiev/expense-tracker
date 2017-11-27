/**
 * Created by Mitaka on 26-Nov-17.
 */
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};