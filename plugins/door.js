/**
 * Created by luodan on 2015-02-11.
 */

//验证是否为登陆状态

define("door", function () {
    return door = {
        locked: true,//门禁状态
        logined: false,//用户登录状态

        //登录判断开始
        comeIn: function (fn) {

            //执行动作配置
            var active = {
                haveLogin:fn.haveLogin,
                notLogin:fn.notLogin
            };

            //判断是刷新还是跳转
            if (door.locked == true) {

                //判断为刷新，使用请求验证登录
                require(['mmRequest'], function () {
                    
                    avalon.ajax({
                        url: apiURL + '2&tsy=' + tsy,
                        type: 'post',
                        dataType: 'json',
                        success: function (data) {
                            door.locked = false;
                            if (data.un == null) {

                                door.logined = false;

                                //执行未登录的预定动作
                                active.notLogin();
                                return 0;
                            }
                            else {
                                door.logined = true;

                                //执行已经登录的预定动作
                                active.haveLogin();
                                return 1;

                            }
                        }
                    });
                });
            }
            else {
                //判断为跳转，使用内存抓取验证登录
                if (door.logined == true) {

                    //判断为已经登录，执行已登录动作
                    active.haveLogin();
                    return 1;
                }
                else {

                    //执行未登录动作
                    active.notLogin();
                    return 0;
                }
            }
        }
    }
});


