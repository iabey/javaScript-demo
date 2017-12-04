/**
 * Created by AngelaMa on 2017/1/4.
 */
$(function(){
    $('#subject').click(function(){
        $(this).addClass('divCurrent').next('.content').css("display","block");
    });
    $('#controlDOMSubmit').click(function(){
        //获取信息
        var name = $('#controlDOM-Name').val();
        var sex = $('#controlDOMSex').is(':checked')?'man':'female';
        var sexJS = (controlDOMSex.checked)?"man":"female"; //js
        //显示信息
        $('#showDOM').html(name+'</br>'+sex);
    });
    $('.controlCSS').click(function(){
        //切换css样式
        $(this).toggleClass('controlToggleCss').html("haha  , it's too funny");
    })
    /*隔行变色*/
    TableChangeColor();
})

/*隔行变色*/
function TableChangeColor(){
    /*js*/
    /*var table=document.getElementById('TableChangeColor');
    for(var i=0;i<table.rows.length;i++){
        if(i%2){
            table.rows[i].className='trOdd';
        }
    }*/
    /*JQuery*/
    $('#TableChangeColor tr:nth-child(even)').addClass('trOdd');

}