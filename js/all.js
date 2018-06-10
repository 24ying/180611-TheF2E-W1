$(document).ready(function () {
    //  新增任務
    $('.task-add').click(function (e) { 
        event.preventDefault();
        $('.add-event').slideDown(100).find('.i-pen-add').addClass('i-pen-green');
        $('.task-add').hide();   
    });
    $('.save').click(function (e) { 
        e.preventDefault();
        $('.add-event').hide();
        $('.task-add').show();
    });
    $('.cancel').click(function (e) { 
        e.preventDefault();
        $('.add-event').hide();
        $('.task-add').show();
    });

    //  換頁
    $('#Home').click(function (e) { 
        e.preventDefault();
        $('.task-add').show();
        $('.task').show();
        $('.task-done').show();
        $('.task-left').show();
        $('.task-completed').hide();
        $(this).parent().find('li').siblings().removeClass('page-select');
        $(this).addClass('page-select');
    });
    $('#InProgress').click(function (e) { 
        e.preventDefault();
        $('.task-add').hide();
        $('.add-event').hide();
        $('.task').show();
        $('.task-done').hide();
        $('.task-left').show();
        $('.task-completed').hide();
        $(this).parent().find('li').siblings().removeClass('page-select');
        $(this).addClass('page-select');

    });
    $('#Completed').click(function (e) { 
        e.preventDefault();
        $('.task-add').hide();
        $('.add-event').hide();
        $('.task').hide();
        $('.task-done').show();
        $('.task-left').hide();
        $('.task-completed').show();
        $(this).addClass('Completed-page');
        $(this).parent().find('li').siblings().removeClass('page-select');
        $(this).addClass('page-select');
    });

    // 打勾
    $('.for-task').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('for-task-click');
        $(this).parent().toggleClass('task-done');
        $(this).parent().find('.click-hide').toggleClass('hide');
    });
    
    // 星星mark
    $('.i-star').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('hide');
        $(this).parent().find('.i-star-yellow').toggleClass('hide');
        $(this).parent().parent().toggleClass('marked-color');
    });
    $('.i-star-add').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('hide');
        $(this).parent().find('.i-star-add-yellow').toggleClass('hide');
        $(this).parent().parent().parent().toggleClass('marked-color');
    });
    $('.i-star-yellow').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('hide');
        $(this).parent().find('.i-star').toggleClass('hide');
        $(this).parent().parent().removeClass('marked-color');
    });
    $('.i-star-add-yellow').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('hide');
        $(this).parent().find('.i-star-add').toggleClass('hide');
        $(this).parent().parent().parent().removeClass('marked-color');
    });


});