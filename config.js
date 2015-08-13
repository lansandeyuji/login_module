/**
 * Created by mooshroom on 2015/3/1.
 */
require.config({
    paths: {
         loginJS:'../../plugins/strawberry/stb.js',
        regCheckOut:'../../plugins/regCheckOut.js'
    }
});

// 预先定义好的TSY，方便操作接口的时候直接调用
//tsy = getCookie("tsy");
var tsy;
function setTsy(){
    tsy = getCookie("tsy");
}
setTsy();

//接口地址
var apiURL = 'https://api.tansuyun.cn/index.php?ak=afjoJof2FEji2092jfej4fi&sk=fawjojoF*30jf4390343&i=';

//getCookie用于取cookie中的数据
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//setCookie用于将数据存于cookie中
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//开放的权限下的登录验证之后的操作
var openAccessDoing = {
    haveLogin: function () {

        //登录成功之后的导航调整
        nav.haveLogin()

    },
    notLogin: function () {

    }
};

//严格的权限下的登录验证之后的操作
var seriousAccessDoing = {
    haveLogin: function () {
        //登录成功之后的导航调整
        nav.haveLogin()
    },
    notLogin: function () {
        window.location.href = '#!/login';
        tip.on('您尚未登录或登录已失效，请登录后再执行本次操作！（如果没有出现登录框，请刷新即可出现登录框！）',0,15000);
    }
};