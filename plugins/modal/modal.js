/**
 * Created by mooshroom on 2015/3/12.
 */
var modal = avalon.define({
    $id: "modal",
    url: "",
    toggle: false

    //*获取全局变量*/
    , wh: ""//屏幕高度
    , ww: ""//屏幕宽度
    , mw: "0"//模态框宽度
    , mh: "0"//模态框高度
    , x: ""//&top
    , y: "",//&left
    mx: "",//鼠标X坐标
    my: ""//鼠标Y坐标

    //获取鼠标位置
    , mousePos: function (ev) {
        ev = ev || window.event;
        var mousePos = modal.mouseCoords(ev);
        modal.mx = mousePos.x;
        modal.my = mousePos.y;

//        console.log(mousePos.x + ',' + mousePos.y)

    },
    mouseCoords: function (ev) {
        if (ev.pageX || ev.pageY) {
            return {x: ev.pageX, y: ev.pageY};
        }
        return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    }

    //*模态框弹出*/
    , getIn: function (mwo) {
        modal.mousePos();
        modal.x=modal.mx;
        modal.y=modal.my;
        modal.toggle = true;
        window.setTimeout(function () {

            var o = mwo || 600;//默认模态框宽度

            //设置屏幕
            modal.wh = window.innerHeight || window.screen.availHeight;
            modal.ww = window.innerWidth || window.screen.availWidth;
            modal.x = (modal.ww - o) / 2;
            modal.y = 100;
            modal.mw = o;
            modal.mh = "auto";

        }, 1)
        document.body.style.overflowY = "hidden"


    }
    //*模态框关闭*/
    , getOut: function () {

        modal.mousePos();
        if(modal.mx<modal.x||modal.mx>(modal.x+modal.mw)){
            modal.y = "-400";//鼠标Y坐标&left
            window.setTimeout(function () {
                modal.mw = "0";//模态框宽度
                modal.mh = "0";//模态框高度
                modal.toggle = false;
                history.go(-1);
            }, 100)
            document.body.style.overflowY = "auto"
        }


    }

})
