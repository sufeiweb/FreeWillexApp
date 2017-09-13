exports.install = function (Vue, optios) {

// Vue.prototype.$URL_API = 'https://zhmobile.firstcoinex.com/fwex/web/';
  var $URL_API = 'https://kaifamobile.firstcoinex.com/fwex/web/';
// Vue.prototype.$URL_API = 'http://192.168.1.48:8089/fwex/web/';
// var $API = 'https://zhmobile.firstcoinex.com:9092/';
  var $API = 'https://kaifamobile.firstcoinex.com:9092/';

  // 登录接口
  Vue.prototype.Login = function (userName, userPsd) {
    this.$http({
      url: $URL_API + 'auth/login',
      method: 'POST',
      data: {
        loginUser: userName,
        loginPwd: md5(userPsd)
      },
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;charset=UTF-8",
        "source": 'WEB'
      }
    }).then((res) => {
      if(res.data.code===200){
        localStorage.setItem('token', res.data.data);
        localStorage.setItem('userPsd', md5(userPsd));
        localStorage.setItem('userName', userName);
        localStorage.setItem('commodity', 'BTCCNY');
        this.$store.state.token = res.data.data;
      }
    }).catch((req) => {
      console.log(req)
    })
  }
}
