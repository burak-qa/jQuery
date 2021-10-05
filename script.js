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
// $(':text').hide();
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
    });

    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function(){
            $('#btnFadeOut').text('Its Gone');
        });
    });
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000, function(){
            $('#btnFadeIn').text('Its Gone');
        });
    });
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000);
    });

    $('#btnSlideUp').click(function(){
        $('#box1').slideUp(3000);
    });
    $('#btnSlideDown').click(function(){
        $('#box1').slideDown(3000);
    });
    $('#btnSlideTog').click(function(){
        $('#box1').slideToggle(1000)
    });
    $('#btnStop').click(function(){
        $('#box1').stop();
    });  
    $('#moveRight').click(function(){
        $('#box2').animate({
            left:500,
            height: '300px',
            opacity: '0.5'
        });
    });
    $('#moveLeft').click(function(){
        $('#box2').animate({
            left:0,
            height: '100px',
            with: '100px',
            opacity: '1'
        });
    });
    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left:0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    });
});