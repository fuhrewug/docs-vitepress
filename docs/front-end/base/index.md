## 基础

## Date对象

- Date 对象用于处理日期与时间。创建 Date 对象： new Date()
```javascript
//以下四种方法同样可以创建 Date 对象：
// 如果没有提供参数，那么新创建的 Date 对象表示实例化时刻的日期和时间
var d = new Date();
// 若milliseconds为 1000，则创建出来的时间对象为 Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间) 。即自1970年1月1日 08:00:00,后经过1000毫秒 。注意这里的时间格式为 GMT+0800
var d = new Date(milliseconds); // 参数为毫秒
//dateString 参数表示日期的字符串值
var d = new Date(dateString);
//以下分别表示年、月、日、时、分、秒、毫秒
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
```

- 常用方法
```javascript
//静态方法
Date.now() //方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。目前是13位，除以1000就是秒

//实例方法
Date.prototype.getFullYear() // 返回当前时间对象的年份
Date.prototype.getMonth() // 返回当前时间对象的月份
Date.prototype.getHours() // 返回当前时间对象的小时
Date.prototype.getMinutes() // 返回当前时间对象的分钟
Date.prototype.getSeconds() // 返回当前时间对象的秒
Date.prototype.getTime() // 返回当前时间对象的时间戳
```
---
## Map对象
阿斯顿撒旦

---

## Blob对象

---

## 文件系统 File对象

---
