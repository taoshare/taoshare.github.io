/**
 * require.js 遵循AMD原则
 *
 */
require.config({
    urlArgs: "v="+(new Date()).getTime(),
    //基路径，建议自己写的js代码位置。已有的库写好之后不会变动
    baseUrl: "/static/js",
    paths: {
        common      : 'common',
        util        : 'util',
        jquery      : ['http://libs.baidu.com/jquery/2.0.3/jquery', 'jquery.min'],  //多种选择
        bootstrap   : ['../plugins/bootstrap/js/bootstrap.min'],
        poshytip    : 'jquery.poshytip/jquery.poshytip.min',
        diandian    : 'other/canvas.diandian.bg',
        css         : "require/css.min",
        async       : 'requirejs-plugins/src/async',
        BMap        : 'http://api.map.baidu.com/api?v=2.0&ak=Piq8pCLp2Y6i9IDzzzeLZHnaN4N7HZjp',
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
            exports: "$"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "underscore" : {
            exports : "_"
        },
        "poshytip" : {
            deps : ["jquery", "css!../js/jquery.poshytip/tip-twitter/tip-twitter.css"]
        },
        "diandian" : {
            deps : ["jquery"]
        },
        'BMap': {
            deps: ['jquery'],
            exports: 'BMap'
        },
    }
});


// require(["jquery", "angular"], function ($, angular) {
//     $("body").css({"backgroundColor": "red"});
// })