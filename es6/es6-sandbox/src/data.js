import moment from 'moment';
const myMoment = moment().format("MMM Do YY");
export function currentDate() {
    console.log(myMoment, '- from data.js')
}
