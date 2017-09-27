/**
 * Created by heroxiao on 2017/9/27.
 */

/**
 * 图片预加载处理
 * @param arry 为字符串或者数组
 * @returns {{done: (function(*=))}}
 */
function preloadImages(arry){
    let images=[]
    arry = Array.isArray(arry)?arry:[arry]
    let endFunc=(ay)=>{
        console.log('全部预加载完成')
    }
    let count=0
    let loadedCount=()=>{
        count++
        if(count===arry.length){
            endFunc(arry)
        }
    }
    arry.forEach((item,index)=>{
        images[index] = new Image()
        images[index].src=item
        images[index].onload=()=>{
            loadedCount()
        }
        images[index].onerror = () => {
            loadedCount()
        }
    })
    return {
        done:(cb)=>{
            endFunc = cb || endFunc
        }
    }
}

export default {
    preloadImages
}