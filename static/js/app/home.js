require(['jquery', 'poshytip', 'diandian', 'bootstrap', 'async!BMap' ], function ($) {

    $(window).load(function(){
        //调整位置
        //justifyWindow();

        //定位
        getCurrentCity();

        //播放器
        //var music = document.getElementById('audio');
        var music = new Audio();
        music.volume = 0.3;
        playing(music);
    });
    $(window).resize(function() {
        justifyWindow()
    });
    function justifyWindow() {
        var h = $(window).height();
        if(h > 600) {
            $(".container").css("margin-top",parseInt(((h-600)/2))+"px");
        }
    }
    //地理位置定位
    function getCurrentCity() {
        var myCity = new BMap.LocalCity();
        myCity.get(LocationFunction);
    }
    function LocationFunction(result){
        var cityName = result.name;
        $('#current-city').text(cityName);
        //alert("当前定位城市:"+JSON.stringify(result));
    }

    //菜单提示框
    $('[data-toggle="tooltip"]').tooltip({
        delay: 10,
    });

    //mp3 播放器
    var mp3List = [
        {name : 'My Love - Westlife', url : 'upload/music/my-love.mp3'},
        {name : '郁可唯 - 时间煮雨', url : 'upload/music/shijianzhuyu.mp3'},
        {name : 'Echo - All of me', url : 'upload/music/All-of-me.mp3'},
    ]
    var player = {
        index : 0,
        duration : 0,
        current : 0,
    }
    function playing(obj) {
        obj.setAttribute("src", mp3List[player.index].url);
        obj.currentTime = 0;
        obj.play();
        obj.oncanplay = function () {
            player.duration = parseInt(obj.duration);
        }
        player.index++
    }
    setInterval(function () {
        if(player.index == mp3List.length) {
            player.index = 0;
        }
        if (player.current > player.duration - 1) {
            playing(music);
        }
        player.current = music.currentTime;
    },1000);

});