/**
 * Created by heroxiao on 2017/9/27.
 */

/**
 * 获取url中的查询字符串
 * @param key 键值
 * @returns {{String}}
 */
function getQueryString(key) {
    // 获取URL中?之后的字符
    let str = location.search;
    str = str.substring(1,str.length);
    let arr = str.split("&");
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        let tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1])
    }
    return obj[key];
}

export default {
    getQueryString
}