$(document).ready(function(){
// $('h1').hide();
// $('h1#heading1').hide();
// $('.heading2').hide();

$('p span').css('color', 'red');

$('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color', 'blue');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:odd').css('background-color', 'grey');
$('ul#list li:nth-child(3n)').css('list-style', 'none');
$(':text').hide();
$('[href]').css('color', 'red');
$('a[href="http://youtube.com"]').css('color', 'green');
// $('*').hide();

$('#btn1').click(function(){
    alert('Button Clicked!');
});
/* 
$('#btn1').on('click', function(){
    alert('Button Clicked!');
}); */

    $('#btn1').on('click', function(){
        // $('.para3').hide();
        $('.para3').toggle();
    });
    $('#btn2').on('click', function(){
        $('.para3').show();
    });
/*  $('#btn1').hover(function(){
        $('.para3').toggle();
    }); */
/*  $('#btn1').click(function(e){
        // alert(e.currentTarget.id);
        // alert(e.currentTarget.innerHTML);
        // alert(e.currentTarget.outerHTML);
        // alert(e.currentTarget.className);
    }); */
    $(document).on('mousemove', function(e){
        $('#coords').html(`Coords: Y: ${e.clientY} X: ${e.clientX}`);
    })

    $('input').focus(function(){
        // alert('Focus');
        $(this).css('background', 'pink');
    });
    $('input').blur(function(){
        $(this).css('background', 'white');
    });
    $('p.para4').css({color:'white', background:'red'});
    // $('p.para5').addClass('myClass');
    $('#btn4').click(function(){
        $('p.para5').toggleClass('myClass');
    });
    $('.para4').appendTo('.para5');
    $('.para4').prependTo('.para5')

    $('#newItem').keyup(function(e){
        var code = e.which;
        if(code === 13){
            e.preventDefault();
            $('ul').append(`<li> ${e.target.value} </li>`);
        };
    });
    
    var myArr = ['Burak', 'Sahin', 'Dila', 'Nic'];
    $.each(myArr, function(i, val){
        $('#users').append(`<li> ${val} </li>`);
    })
});