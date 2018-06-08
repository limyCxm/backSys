/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}



/**
 * 存储sessionStorage
 */
export const setSession = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getSession = name => {
	if (!name) return;
	return window.sessionStorage.getItem(name);
}

// 获取当天日期

export const formatDate =  (date) => {  
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    return y + '-' + m + '-' + d;  
}; 

//获取上月的今天

export const  lastMonthDate = () => {
    var Nowdate = new Date();
    var vYear = Nowdate.getFullYear();
    var vMon = Nowdate.getMonth() + 1;
    var vDay = Nowdate.getDate();
　　//每个月的最后一天日期（为了使用月份便于查找，数组第一位设为0）
    var daysInMonth = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);
    if(vMon==1){
        vYear = Nowdate.getFullYear()-1;
        vMon = 12;
    }else{
        vMon = vMon -1;
    }
　　//若是闰年，二月最后一天是29号
    if(vYear%4 == 0 && vYear%100 != 0  || vYear%400 == 0 ){
        daysInMonth[2]= 29;
    }
    if(daysInMonth[vMon] < vDay){
        vDay = daysInMonth[vMon];
    }
    if(vDay<10){
        vDay="0"+vDay;
    }
    if(vMon<10){
        vMon="0"+vMon;
    }
    var date =vYear+"-"+ vMon +"-"+vDay;
    return date;
}
