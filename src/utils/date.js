import moment from 'moment'

export function dateFormat(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern);
}
export function nowYear() {
    return moment().year()
}
export function nowMonth() {
    return moment().month() + 1
}