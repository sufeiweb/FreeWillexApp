exports.install = function(Vue,options){
/**
 * 发送事件
 * @param key
 * @param value
 */
Vue.prototype.sendEvent = function (key, value) {
    let event = new Event(key);
    event.newValue = value;
    window.dispatchEvent(event);
  };

  /**
   * 文本拷贝
   * @param objId
   * @param tipInfo
   */
  Vue.prototype.copy = function (objId, tipInfo) {
    let Url = $("#" + objId);
    Url.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
  };

    /**
   * 错误提示
   * @num 错误码
   * @str 错误提示文本
   */
  Vue.prototype.showError = function (num, str) {
    let _this = this;
    this.$store.state.ErrorMessage = str;
    if (num === 200) {
      this.$store.dispatch('errorShow');
      setTimeout(function () {
        _this.$store.dispatch('errorHide');
      }, 2000)
    } else {
      this.$store.dispatch('errorShow1');
      setTimeout(function () {
        _this.$store.dispatch('errorHide1');
      }, 2000)
    }
    if (num === 404) {
      this.$router.push('/error404')
    }
    if (num === 502) {
      this.$router.push('/error502')
    }
  };
 
  /**
   * 生成二维码
   * @param obj 装二维码的位置dom
   * @param str 生产二维码的内容
   * @constructor
   */
  Vue.prototype.QRC = function (obj, str) {
    let qRode = new QRCode(obj, {width: 150, height: 150});
    let Obj=document.getElementById(obj);
    Obj.innerHTML=' ';
    qRode.clear();
    qRode.makeCode(str)
  };

  /**
   * 判断密码强度
   */
  Vue.prototype.passWord = function (pwd, className1, className2) {
    let strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    let mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    let enoughRegex = new RegExp("(?=.{6,}).*", "g");
    let enoughFlag = enoughRegex.test(pwd);
    let mediumFlag = mediumRegex.test(pwd);
    let strongFlag = strongRegex.test(pwd);
    if(enoughFlag){
        return {
            color:'#c00',
            texts:'低'
        }
    }else{
        return {
            color:'#cfd0d2',
            texts:' '
        }
    }
    if(mediumFlag){
        return {
            color:'#01aaef',
            texts:'中'
        }
    }
    if(strongFlag){
        return {
            color:'#0c0',
            texts:'高'
        }
    }
  }
/**
 * 计算价格转换
 * currencyNum 需要转换的币种
 * currencyPrice 需要转换币种兑CNY/btc的当前价格
 * legalCurrencyPrice 结算币种兑cny/btc的当前价格
 * legalCurrency 结算币种
 */
  Vue.prototype.compulation = function (currencyNum, currencyPrice, legalCurrencyPrice, legalCurrency) {
    // console.log(ltcNum, ltcPrice, currencyPrice, currency)
    if (legalCurrency === 'CNY') {
      return (currencyNum * (currencyPrice ? currencyPrice : 1) / (legalCurrencyPrice ? legalCurrencyPrice : 1)).toFixed(2);
    } else {
      return (currencyNum * (currencyPrice ? currencyPrice : 1) / (legalCurrencyPrice ? legalCurrencyPrice : 1)).toFixed(8);
    }
  };

  /**
   * 过滤HTML标签
   * @param str
   * @returns {*}
   */
  Vue.prototype.removeHTMLTag = function (str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/ /ig, '');//去掉
    return str;
  }

    /**
   * 输入框只能输入数字
   * @param str
   * @returns {*}
   */
  Vue.prototype.onlyNumber = function (str) {
    if (isNaN(str)) {
      return false;
    } else {
      return str;
    }
  }

}