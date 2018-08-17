/**
 * require.js 遵循AMD原则
 *
 */
require.config({
    urlArgs: "v="+(new Date()).getTime(),
    //基路径，建议自己写的js代码位置。已有的库写好之后不会变动
    baseUrl: "/static/js",
    paths: {
        "common"    : "common",
        "util"      : "util",
        "css"       : "require/css.min",
        "jquery"    : ["http://libs.baidu.com/jquery/2.0.3/jquery", "jquery.min"],  //多种选择
        "bootstrap" : ["../plugins/bootstrap/js/bootstrap.min"],
        'jquery.poshytip' : 'jquery.poshytip/jquery.poshytip.min',
        'diandian' : 'other/canvas.diandian.bg',
    },
    shim: {
        "common": {
            // exports: "test",  //单个函数使用
            init: function () {
                return {
                    modal: modal,
                    success: success,
                }
            }
        },
        "jquery":{
            exports: "jquery"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        /*"underscore" : {
            exports : "_"
        },*/
        "jquery.poshytip" : {
            deps : ["jquery", "css!../js/jquery.poshytip/tip-twitter/tip-twitter.css"]
        },
        "diandian" : {
            deps : ["jquery"]
        },
    }
});


// require(["jquery", "angular"], function ($, angular) {
//     $("body").css({"backgroundColor": "red"});
// })