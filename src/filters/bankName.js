/**
 * Created by User on 2017/9/11.
 */
export const bankName = (str) => {
  'use strict'
  switch (str) {
    case 'PINGAN':
      return '平安银行'
      break
    case 'BCM':
      return '交通银行'
      break
    case 'BOC':
      return '中国银行'
      break
    case 'ICBC':
      return '中国工商银行'
      break
    case 'CCB':
      return '中国建设银行'
      break
    case 'ABC':
      return '中国农业银行'
      break
    case 'CMB':
      return '招商银行'
      break
    case 'PSBC':
      return '中国邮政储蓄银行'
      break
    case 'CIB':
      return '兴业银行'
      break
    case 'CEB':
      return '中国光大银行'
      break
    case 'CNCB':
      return '中国中信银行'
      break
  }
}
