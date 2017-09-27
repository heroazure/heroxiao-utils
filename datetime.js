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

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export default {
    formatDatetime
}