$(document).ready(function () {
    $('.header_user').on('click', function () {
        $('.header_user-menu').slideToggle()
    });

    $('.header_burger').on('click', function () {
        $('body').toggleClass('leftpanel-opened')
    });

    $('.aside_mobile_bg, .aside-opener').on('click', function () {
        $('body').removeClass('leftpanel-opened')
    });

    $('.rightpanel-opener').on('click', function () {
        $('.main_section').toggleClass('rightpanel-opened')
    });

    $('.rightpanel-mobilebg').on('click', function () {
        $('.main_section').removeClass('rightpanel-opened')
    });

    $('.aside_list-list .checkbox').on('change', function () {
        $(this).parent().toggleClass('checked');
    });

    $('.aside_list-title-opener').on('click', function () {
        $(this).parent().children('.aside_list-list').slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('.category_page-images').masonry({
        itemSelector: '.category_page-img',
        columnWidth: '.category_page-img-grid',
        horizontalOrder: true,
    })

    $('.catalog2-star').on('click', function () {
        $(this).toggleClass('selected');
    });

    $('.catalog2-star').on({
        mouseenter: function () {
            $('a.catalog2_item_icon').on('click', function () {
                return false;
            });
        },
        mouseleave: function () {
            $('a.catalog2_item_icon').off('click');
        }
    });

    $('.catalog2_item_menu label.checkbox').on('click', function () {
        if ($(this).children('input').prop('checked')) {
            $(this).children('input').prop('checked', false);
            $(this).closest('.catalog2_item').removeClass('selected');

        } else {
            $(this).children('input').prop('checked', true);
            $(this).closest('.catalog2_item').addClass('selected')
            $('.catalog2_item').addClass('menuvisible')
            $('.catalog2_page').addClass('catalog2_page_panelvisible')
        }

        if ($('.catalog2_item.selected').length < 1) {
            $('.catalog2_item').removeClass('menuvisible');
            $('.catalog2_page').removeClass('catalog2_page_panelvisible')
        };
    });

    $('.catalog2_item_menu-opener').on('click', function () {
        $(this).toggleClass('opened');
        $(this).parent().toggleClass('menuopened');
        $(this).parent().children('.catalog2_menu').slideToggle();
    });

    $('.workflow_fields_list li').on('click', function () {
        $(this).toggleClass('selected');
    });

    $('.trafficdashboard_top_buttons ul').on('click', function () {
        $(this).toggleClass('opened');
    });

    $('.trafficdashboard_top_buttons ul li').on('click', function () {
        $('.trafficdashboard_top_buttons ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('.dimagepagepanelgroup-opener').on('click', function () {
        $(this).closest('.dimagepagepanel-group').children('.dimagepagepanel-group-content').slideToggle();
        $(this).closest('.dimagepagepanel-group').toggleClass('opened');
    });
    /*
    $('.aside-opener').on('click', function () {
        $('aside').toggleClass('small');
        $('.main_section').toggleClass('main_section-leftpanelsmall');
    });

    $('aside').hover(
        function () {
            $(this).addClass('hovered');            
        },
        function () {
            $(this).removeClass('hovered');           
        });
    */
    $('.popup-filelist ul li').on('click', function () {
        $(this).toggleClass('selected');
    });
    /*
        $('.header_main ul li a').on('click', function () {
            $(this).closest('li').children('.header_main_menu').slideToggle();
        })
        */

    $('.companybiling_rightpanel_group-title').on('click', function () {
        $(this).closest('.companybiling_rightpanel-group').children('.companybiling_rightpanel-group-content').slideToggle();
    })

    $('#datepicker').datepicker({
        firstDay: 1,
        showOtherMonths: true
    });

    $('.datepicker2').datepicker({
        firstDay: 1,
        showOtherMonths: true,
        dateFormat: "mm dd yy",
    });

    $('.todolist_newtask_table-status').on('click', function () {
        $(this).children('.todolist_newtask_table-status-menu').slideToggle();
    });

    $('.notifications_main_head-search').on('click', function () {
        $(this).addClass('mobileinput')
    });

    $('.notifications_main_head-search button').on('click', function () {
        $('.notifications_main_head-search').removeClass('mobileinput')
    });

    $('.notifications-leftpanel-opener').on('click', function () {
        $('.notifications_left').fadeToggle('0')
    });

    $('#support_menu_opener').on('click', function () {
        $('#notifications_menu').slideUp();
        $('#folder_menu').slideUp();
        $('#support_menu').slideToggle();
    });

    $('#notifications_menu_opener').on('click', function () {
        $('#support_menu').slideUp();
        $('#folder_menu').slideUp();
        $('#notifications_menu').slideToggle();
    });

    $('#folder_menu_opener').on('click', function () {
        $('#support_menu').slideUp();
        $('#notifications_menu').slideUp();
        $('#folder_menu').slideToggle();

    });

    $('.todolist_newtask_table_project').hover(
        function () {
            $(this).children('.todolist_newtask_table_project-preview').fadeIn(100);
        },
        function () {
            $(this).children('.todolist_newtask_table_project-preview').fadeOut(100);
        }
    );

    $('.workflow_company_nav a').hover(
        function () {
            WorkflowCompanyNav = $(this).attr('href');
            $(WorkflowCompanyNav).fadeIn()
        },
        function () {
            $(WorkflowCompanyNav).fadeOut();

        }
    );
    
    $('.dimagepage_main_img_comment').on('click', function () {        
        $(this).toggleClass('active');  
    });
    
     $('.dimagepagepanel_tabs a').on('click', function () {        
        $('.dimagepage_main_img_comments').fadeOut();  
    });
    
     $('#commentsvisible').on('click', function () {        
        $('.dimagepage_main_img_comments').fadeIn();  
    });
    
     $('.workflow_company_group-title_menu_opener').on('click', function () {        
        $(this).parent().children('.workflow_company_group-title_menu').slideToggle();  
    });
    
    
    
    

});


$(window).on('load resize', function () {
    $('.main-content').css('min-height', $(window).height() - $('header').height() - 1 + 'px');
    $('.min-height').css('min-height', $(window).height() - $('header').height() - 1 + 'px');
});