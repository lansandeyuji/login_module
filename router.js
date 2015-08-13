/**
 * Created by mooshroom on 2015/3/1.
 */
require(['mmRouter'], function () {
    //首页
    avalon.router.get('/', function () {
        require(['regCheckOut','loginJS'], function () {
            include.url = "./plugins/strawberry/stb.html";
        })

    });



    avalon.history.start();
    avalon.scan();
})