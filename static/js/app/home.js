require(["jquery", "jquery.poshytip", "diandian", "bootstrap" ], function ($) {
    //菜单提示框
    $('[data-toggle="tooltip"]').tooltip({
        delay: 10,
    });

    var mp3List = [
        {name : 'My Love - Westlife', url : 'upload/music/my-love.mp3'},
        {name : 'Echo - All of me', url : 'upload/music/All-of-me.mp3'},
        {name : '郁可唯 - 时间煮雨', url : 'upload/music/shijianzhuyu.mp3'},
    ]
    var music = document.getElementById('audio');
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
    setTimeout(function () {
        playing(music);
    }, 5000);



    setInterval(function () {
        if(player.index == mp3List.length) {
            player.index = 0;
        }
        if (player.current >= player.duration) {
            playing(music);
            /*m.setAttribute("src", mp3List[player.index].url);
            m.currentTime = 0;
            m.play();
            m.oncanplay = function () {
                player.duration = parseInt(m.duration);
            }
            player.index++*/
        }
        player.current = music.currentTime;
    },1000);


});