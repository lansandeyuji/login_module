/**
 * Created by mooshroom on 2015/3/25.
 */
define('lfr', function () {
    return lfr = avalon.define({
        $id:'lfr',
        aIndex:0,//当前选中的标签索引
        tab: function (id) {//点击切换标签事件
            lfr.aIndex=id;
        },
        login_account:'',
        login_pwd:'',
        login_acctip:'',
        login_pwdtip:'',
        account:'',
        pwd:'',
        email:'',
        findEmail:'',
        nameTip:'用户名不能以数字开头',
        pwdTip:'密码6位以上',
        emailTip:'合法邮箱格式',
        findEmailTip:'合法邮箱格式',
        nameFlag:0,
        pwdFlag:0,
        emailFlag:0,
        findEmailFlag:0,
        loginAccFlag:0,
        loginPwdFlag:0,

        //验证登陆用户名
        verifyLoginName: function () {
           if(lfr.login_account=='')
           {
               lfr.login_acctip='用户名不能为空';
               lfr.loginAccFlag=1;
           }
            else{
               lfr.login_acctip='';
               lfr.loginAccFlag=0;
               return 1;
           }
        },
        //验证登陆密码
        verifyLoginPwd: function () {
            if(lfr.login_pwd=='')
            {
                lfr.login_pwdtip='密码不能为空';
                lfr.loginPwdFlag=1;
            }
            else{
                lfr.login_pwdtip='';
                lfr.loginPwdFlag=0;
                return 1;
            }
        },
        //验证注册账户
        verifyUsername: function (account) {
           var tip=regCheckOut.verifyUsername(account);
            if( tip==1){
                //添加对号
                lfr.nameFlag=1;
                return 1;
            }
            else{
                lfr.nameFlag=2;
                lfr.nameTip=tip;
            }
        },
        //验证注册账户密码
        verifyPassword: function (pwd) {
            var tip= regCheckOut.verifyPassword(pwd);
            if(tip==1){
                //添加对号
                lfr.pwdFlag=1;
                return 1;
            }
            else{
                lfr.pwdFlag=2;
                lfr.pwdTip=tip;
            }
        },
        //验证注册账户邮箱
        verifyEmail: function (em) {
            var tip= regCheckOut.verifyEmail(em);
            if(tip==1){
                //添加对号
                lfr.emailFlag=1;
                return 1;
            }
            else{
                lfr.emailFlag=2;
                lfr.emailTip=tip;
            }

        },
        //验证找回密码邮箱
        verifyFindEmail: function (em) {
            var tip= regCheckOut.verifyEmail(em);
            if(tip==1){
                //添加对号
                lfr.findEmailFlag=1;
                return 1;
            }
            else  {
                lfr.findEmailFlag=2;
                lfr.findEmailTip=tip;

            }

        },
        //    登录
        login: function () {
            if(lfr.verifyLoginName()==1&&lfr.verifyLoginPwd()==1)
            {
                lfr.loginFlag=0;
                $.call({
                    type: 'post',
                    i: 5,
                    data: {account: lfr.login_account, pwd: lfr.login_pwd},
                    success: function (data) {
                        if (data.c == 200) {
                            alert('成功');
                            door.logined = true;
                            setCookie("tsy", data.tsy);
                            setCookie("un", data.un);
                            setCookie("uid", data.uid);
                            door.locked = false;
                        }
                        //401   用户名或密码错误
                        else if (data.c == 401) {
                            alert('用户名或密码错误');
                        }
                        else {
                            alert('未知错误');
                        }
                    }
                });
            }
        },
        //注册
        reg: function () {
            if((lfr.verifyUsername(lfr.account)==1)&&(lfr.verifyPassword(lfr.pwd)==1)&&(lfr.verifyEmail(lfr.email)==1))
             {
               //发出请求
                $.call({
                    type: 'post',
                    i:8,
                    data: {username:lfr.account, pwd: lfr.pwd, email: lfr.email},
                    success: function (data) {
                        if (data.c == 200) {
                            alert('注册成功');
                        }
                        else {
                            alert('注册失败');
                        }
                    }
                });
            }
        },

        //发送验证码到邮箱
        reset: function () {
            if(lfr.verifyFindEmail(lfr.findEmail)==1 ){
                alert('稍后你将收到帐号激活的电子邮件');
                   $.call({
                    type:'post',
                    i: '22',
                    data: {Email: lfr.findEmail},
                    success: function(data){
                        if(data.c == 200){
                            alert('发送验证码到邮箱成功');
                        }
                        else{
                            alert(data.m);
//                            tip.on(data.m,0);
//                            setTimeout(function(){
//                                tip.on(data.m,0);
//                            },3000);
                        }
                    }
                });
            }

        }

    })
});
