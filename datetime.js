/**
 * Created by heroxiao on 2017/9/26.
 */
/**
 * 格式化日期时间字符串输出
 * @param date Date类型
 * @param split 日期分隔符，默认为'-'
 * @returns {string}
 */
function formatDatetime(date,split='-') {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()


    return [year, month, day].map(formatNumber).join(split) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
 * 格式化日期字符串输出
 * @param date Date类型
 * @param split 日期分隔符，默认为'-'
 * @returns {string}
 */
function formatDate(date,split='-') {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return [year, month, day].map(formatNumber).join(split)
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * 两个date之间的时间差，返回X天X小时或者到期
 * @param start
 * @param end
 * @returns {*}
 */
function betweenTime(start, end) {
    let s = start.getTime()
    let e = end.getTime()
    let bt = e - s
    if (bt <= 0){
        return '已到期'
    }
    let day = parseInt(bt / (1000 * 60 * 60 * 24))
    let hour = parseInt((bt - day * 1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    if(day<=0&&hour<=0){
        return '已到期'
    }
    return day + '天' + hour + '小时'
}

/**
 * 该date与当前时间时间差
 * @param end
 * @returns {*}
 */
function remainingTime(end){
    end = (end.split(' ')[0] + ' 23:59:59').replace(/-/g, '/')
    return betweenTime(new Date(), new Date(end))
}

export default {
    formatDatetime,
    formatDate,
    remainingTime
}