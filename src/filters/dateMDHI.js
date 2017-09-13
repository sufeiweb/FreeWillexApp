/**
 * Created by User on 2017/9/11.
 */
export const dateMDHI = (res) => {
  'use strict'
  let date = new Date(res)
  let m = date.getMonth() + 1
  let d = date.getDate()
  let H = date.getHours()
  let i = date.getMinutes()
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  if (H < 10) {
    H = '0' + H
  }
  if (i < 10) {
    i = '0' + i
  }
  // <!-- 获取时间格式 01-03 10:13:48 -->
  let t = m + '-' + d + ' ' + H + ':' + i
  // <!-- 获取时间格式 2017-01-03 -->
  // var t = Y + '-' + m + '-' + d;
  return t
}
