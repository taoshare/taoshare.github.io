require(['jquery', 'ejs', 'bootstrap'], function ($, ejs) {


    var html = ejs.renderFile('../../ejs/test.ejs',
        {"title":"Hello World!"}, function (err, data) {
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        });
    $("#div").html(html);

});