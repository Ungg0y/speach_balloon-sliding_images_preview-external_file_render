var proceedNextSelection = function() {
    if(selectLevel == 1) {
        selectLevel = 2;
        if(scenarioClicked == 'Scenario #1') {
            selection = mcafee1;
        } else if(scenarioClicked == 'Scenario #2') {
            selection = mcafee2;
        } else if(scenarioClicked == 'Scenario #3') {
            selection = mcafee3;
        }
//        selection = mcafee;
        $(mainSelection).fadeOut(function(){
            $(mainSelection).empty();
            setMultipleSelectionSection(mainSelection);
            $(mainSelection).delay(800).fadeIn();
        });
    } else if(selectLevel == 2) {
        exitSelection(mainSelection, '#initial-choice');
    }
};
var exitSelection = function(elemOut, elemIn) {
    $('#continue-part2-btn').addClass('red');
    $(elemOut).slideUp();
    $(elemIn).delay(800).slideDown(function(){
        var index = availableScenario.indexOf(scenarioClicked);
        $(('.btn-scenario[data-number="' + scenarioNumber + '"][data-scenario="' + choice + '"]')).removeClass('gray').removeClass('red').addClass('red');
        $(('.btn-scenario[data-number="' + scenarioNumber + '"][data-scenario="' + choice + '"]')).attr('data-finish', 'true');
        
        if($('.btn-scenario-1[data-finish="true"]').length == 1) {
            $('.scenario-1-building').removeClass('gray').removeClass('selected').addClass('selected');
        }
        if($('.btn-scenario-2[data-finish="true"]').length == 1) {
            $('.scenario-2-building').removeClass('gray').removeClass('selected').addClass('selected');
        }
        if($('.btn-scenario-3[data-finish="true"]').length == 1) {
            $('.scenario-3-building').removeClass('gray').removeClass('selected').addClass('selected');
        }
        scenarioBtn.each(function(){
            $(this).off();
            if($(this).hasClass('gray')){
                $(this).removeClass('gray').addClass('transparent');
            }
        });
        if (index > -1) {
          availableScenario.splice(index, 1);
        }

        if(availableScenario.length > 0){
            $('#scenario-text-notification').text('Click the remaining ' + ((availableScenario.length > 1) ? ('scenarios ' + availableScenario[0] + ' and ' + availableScenario[1]) : 'scenarios ' + availableScenario[0]) + ' to learn more.');
        } else {
            $('#goto-next-page').show();
            $('#scenario-text-notification').text('');
            if(self != top) {
                parent.page2Finish = true;
                parent.showNextPageBtn();
            }
//            playAudio('PPTSlide3Congrats.mp3');
        }
        
        $(elemOut).empty();
    });
};
var setMakeSalesUserData = function(obj){
    var str = '';
    /*if(obj.parent().attr('data-correct') == 'yes')
    {
        $(mainSelection).find('.multiple-selection-user-selected').text('This is a good persona to target.');
    }
    else
    {
        $(mainSelection).find('.multiple-selection-user-selected').text('There are better personas to target.');
    }
    if((obj.find('.user-job-title').text()) == 'Great JOB') {
        str += '<h2>' + obj.find('.user-job-title').text() + '</h2>';
    } else {
        str += '<p>' + obj.find('.user-job-title').text() + '</p>';
    }*/
    
    if(obj.parent().attr('data-correct') == 'yes' && obj.parent().hasClass('active') == true) {
        str += '<h2>You got it Right!</h2>';
    } else if (obj.parent().attr('data-correct') == 'yes' && obj.parent().hasClass('active') == false) {
        str += '<h2>Incorrect Choice!</h2>';
    } else if(obj.parent().attr('data-correct') == 'no' && obj.parent().hasClass('active') == false) {
        str += '<h2>You got it Right!</h2>';
    } else if (obj.parent().attr('data-correct') == 'no' && obj.parent().hasClass('active') == true) {
        str += '<h2>Incorrect Choice!</h2>';
    }
    if(obj.parent().attr('data-correct') == 'yes') {
        $(mainSelection).find('.multiple-selection-user-data-holder').css({opacity: 1});
        $(mainSelection).find('.multiple-selection-invited').text('Should be invited');
    } else if (obj.parent().attr('data-correct') == 'no'){
        $(mainSelection).find('.multiple-selection-user-data-holder').css({opacity: 1});
        $(mainSelection).find('.multiple-selection-invited').text('Should not be invited');
    } else {
        $(mainSelection).find('.multiple-selection-user-data-holder').css({opacity: 0});
        $(mainSelection).find('.multiple-selection-invited').text('');
    }
    $(mainSelection).find('.multiple-selection-user-selected').text(obj.find('.user-job-title').text());
    $(mainSelection).find('.multiple-selection-user-job-title').empty().html(str);
    $(mainSelection).find('.multiple-selection-user-name').text(obj.find('.user-name').text());
    $(mainSelection).find('#make-sale-user-data').html(obj.find('.user-data').html());
}

var resetMultipleSelection = function(){
    var objElem = $(mainSelection).find('.make-sale-user-icon-wrap').eq(0).find('.make-sale-user-hl-user-data').eq(0);
    minMakeSaleIconWidth = parseInt($(mainSelection).find('.make-sale-user-icon-wrap.make-sale-user-icon-small').width()) + ($(window).width() <= 767 ? 8 : 4);
    iconsHolderPosition = (($(mainSelection).find('.multiple-selection-users').width() / 2) - ((parseInt($('.make-sale-user-icon-wrap.make-sale-user-icon-big').width()) + 4) / 2)) + (selection.length * 2); // 250 width for big icon plus 4 for border thickness divided by 2
    userIndex = 1;
    animationFinihed = true;
    $(mainSelection).find('.multiple-selection-user-icons-holder').css({left: (iconsHolderPosition + 'px')});
    $(mainSelection).find('.multiple-selection-user-arrow-left').css({opacity: 0.5});
    $(mainSelection).find('.multiple-selection-user-arrow-right').css({opacity: 1});
    $(mainSelection).find('.make-sale-user-icon-wrap').each(function(index){
        if(index > 0)
        {
            $(mainSelection).find('.make-sale-user-icon-wrap').eq(index).removeClass('make-sale-user-icon-big').removeClass('make-sale-user-icon-small').addClass('make-sale-user-icon-small');
        }
    });
    $(mainSelection).find('.make-sale-user-icon-wrap').eq(0).removeClass('make-sale-user-icon-big').removeClass('make-sale-user-icon-small').addClass('make-sale-user-icon-big');
    setMakeSalesUserData(objElem);
    
    if($(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).find('.make-sale-user-icon-box').hasClass('active')){
        $(mainSelection).find('.multiple-selection-user-job-title').prepend('<p class="no-margin-bottom">You chose this one</p>');
    } else {
        $(mainSelection).find('.multiple-selection-user-job-title').prepend('<p class="no-margin-bottom">You didn’t Choose this one</p>');
    }
//    $(mainSelection).find('.multiple-selection-user-name').css({bottom: (($(mainSelection).find('.multiple-selection-user-icons-holder').height() + 20) + 'px')});
}
var setButtonInstruction = function(obj){
    if(obj.hasClass('inactive'))
    {
        $(mainSelection).find('#mulitiple-selection-hl-user-fit').text('Is this persona a good fit?');
        $(mainSelection).find('#mulitiple-selection-hl-user-fit-instruction').html('The Engage button will add this persona to your mobilization team.');
    }
    else
    {
        $(mainSelection).find('#mulitiple-selection-hl-user-fit').text('Change your mind?');
        $(mainSelection).find('#mulitiple-selection-hl-user-fit-instruction').html('The Remove button will remove this persona from your mobilization team.');
    }
}

var setRedBanner = function() {
    var usersHeight = $(mainSelection).find('.multiple-selection-users').height();
    var multipleSelection = $(document).height();

    if($(window).width() > 991) {
        $(mainSelection).find('.multiple-selection-red-banner').css({height: ((multipleSelection - usersHeight) + 'px')});
    } else {
        $(mainSelection).find('.multiple-selection-red-banner').attr('style', '');
    }
};
var setMultipleSelection = function(){
    minMakeSaleIconWidth = parseInt($(mainSelection).find('.make-sale-user-icon-wrap.make-sale-user-icon-small').width()) + 4; // border thickness 2px
    iconsHolderPosition = (($(mainSelection).find('.multiple-selection-users').width() / 2) - ((parseInt($('.make-sale-user-icon-wrap.make-sale-user-icon-big').width()) + 4) / 2)) + (selection.length * 2);//127; // 250 width for big icon plus 4 for border thickness divided by 2
    userIndex = 1;
    animationFinihed = true;
    audio = $("#audio")[0];

    $(mainSelection).find('.mulitiple-selection-user-icon-box').each(function(){
        $(this).off().on('click', function(){
            if($(this).hasClass('inactive')){
                $(this).removeClass('inactive').addClass('active');
                $(this).css({backgroundImage: 'url(../img/' + $(this).attr('data-image').trim() + '-selected.' + $(this).attr('data-extension') +')'});
                $(mainSelection).find(('.make-sale-user-icon-box[data-user="' + $(this).attr('data-user') + '"]')).removeClass('active').removeClass('inactive');
                $(mainSelection).find(('.make-sale-user-icon-box[data-user="' + $(this).attr('data-user') + '"]')).addClass('active');
                $(mainSelection).find('.mulitiple-selection-wrap').show();
            } else{
                $(this).removeClass('active').addClass('inactive');
                $(this).css({backgroundImage: 'url(../img/' + $(this).attr('data-image').trim() + '-gray.' + $(this).attr('data-extension') +')'});
                $(this).parent().removeClass('remove').addClass('engage');
                $(mainSelection).find(('.make-sale-user-icon-box[data-user="' + $(this).attr('data-user') + '"]')).removeClass('active').removeClass('inactive');
                $(mainSelection).find(('.make-sale-user-icon-box[data-user="' + $(this).attr('data-user') + '"]')).addClass('inactive');
                if($(mainSelection).find('.mulitiple-selection-user-icon-box.active').length <= 0) {
                    $(mainSelection).find('.mulitiple-selection-wrap').hide();
                }
            }
            setButtonInstruction($(this));
        });
    });
    $(mainSelection).find('.multiple-selection-next-btn').off().on('click', function(){
        proceedNextSelection();
    });
    $(mainSelection).find('.multiple-selection-page-btn').off().on('click', function(){
        $(mainSelection).find('.multiple-selection').hide();
        $(mainSelection).find('.multiple-selection-main').fadeIn();
        $(mainSelection).find('.mulitiple-selection-user-icon-box').removeClass('tap');
        $(mainSelection).find('.mulitiple-selection-user-icon-box').find('.button-wrap').hide();
        $(mainSelection).find('#mulitiple-selection-hl-user-info-wrap').hide();
    });
    $(mainSelection).find('.mulitiple-selection-btn').off().on('click', function(){
        var userBoxes = $('.mulitiple-selection-user-icon-box').length;
        var userBoxesSelected = $('.mulitiple-selection-user-icon-box.active').length;
        var correctBoxes = $('.mulitiple-selection-user-icon-box[data-correct="yes"]').length;
        var correct = 0;
        var incorrect = 0;
        $(mainSelection).find('.multiple-selection').fadeIn();
        $(mainSelection).find('.multiple-selection-main').hide();
        resetMultipleSelection();
        $.each($('.mulitiple-selection-user-icon-box'), function(){
            if($(this).hasClass('active') && ($(this).attr('data-correct') == 'yes')) {
                correct++;
            }
        });
        $.each($('.mulitiple-selection-user-icon-box'), function(){
            if($(this).hasClass('active') && ($(this).attr('data-correct') == 'no')) {
                incorrect++;
            }
        });
        $(mainSelection).find('.mulitiple-selection-user-icon-box').each(function(){
            var checkCross = $(mainSelection).find(('.make-sale-user-icon-box[data-user="' + $(this).attr('data-user') + '"]')).find('.mulitiple-selection-user-icon-correct-incorrect');
            
            checkCross.removeClass('mulitiple-selection-user-check').removeClass('mulitiple-selection-user-cross');
            if($(this).attr('data-correct') == 'yes' && $(this).hasClass('active') == true) {
                checkCross.addClass('mulitiple-selection-user-check').attr('src', '../img/green-check.svg');
            } else if ($(this).attr('data-correct') == 'yes' && $(this).hasClass('active') == false) {
                checkCross.addClass('mulitiple-selection-user-cross').attr('src', '../img/red-cross.svg');
            } else if($(this).attr('data-correct') == 'no' && $(this).hasClass('active') == false) {
                checkCross.addClass('mulitiple-selection-user-check').attr('src', '../img/green-check.svg');
            } else if ($(this).attr('data-correct') == 'no' && $(this).hasClass('active') == true) {
                checkCross.addClass('mulitiple-selection-user-cross').attr('src', '../img/red-cross.svg');
            }
        });
        /*if(correct == correctBoxes && incorrect == 0){
            $('.multiple-selection-next-btn').show();
        } else {
            $('.multiple-selection-next-btn').hide();
        }*/
    });
    $(mainSelection).find('.multiple-selection-user-arrow-right').off().on('click', function(){
        var left = parseInt(($(mainSelection).find('.multiple-selection-user-icons-holder').css('left')).replace('px','')) + ($(window).width() <= 767 ? 8 : 4); // 4 is the additional number to center the icon while moving because of the addiontinal empty "make-sale-user-icon-wrap"
        var objElem = null;
        
        if(animationFinihed)
        {
            animationFinihed = false;
            if(userIndex >= 1 && userIndex <= selection.length)
            {
                $(mainSelection).find('.multiple-selection-user-icons-holder').animate({left: (left - minMakeSaleIconWidth + 'px')});
                left = left - minMakeSaleIconWidth;
                iconsHolderPosition = parseInt(($('.multiple-selection-user-icons-holder').css('left')).replace('px',''));
                userIndex++;
                $(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 2)).removeClass('make-sale-user-icon-big').removeClass('make-sale-user-icon-small').addClass('make-sale-user-icon-small');
                $(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).removeClass('make-sale-user-icon-big').removeClass('make-sale-user-icon-small').addClass('make-sale-user-icon-big');
                setTimeout(function(){
                    animationFinihed = true;
                }, 500);
            }
            if(userIndex == (selection.length + 1))
            {
                $(this).css({opacity: 0.5});
                animationFinihed = true;
            }
            
            objElem = $(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).find('.make-sale-user-hl-user-data').eq(0);
            
            setMakeSalesUserData(objElem);
            if($(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).find('.make-sale-user-icon-box').hasClass('active')){
                $(mainSelection).find('.multiple-selection-user-job-title').prepend('<p class="no-margin-bottom">You chose this one</p>');
            } else {
                $(mainSelection).find('.multiple-selection-user-job-title').prepend('<p class="no-margin-bottom">You didn’t Choose this one</p>');
            }
            $(mainSelection).find('.multiple-selection-user-arrow-left').css({opacity: 1});
        }
    });
    $(mainSelection).find('.multiple-selection-user-arrow-left').off().on('click', function(){
        var left = parseInt(($(mainSelection).find('.multiple-selection-user-icons-holder').css('left')).replace('px','')) - ($(window).width() <= 767 ? 8 : 4); // 4 is the additional number to center the icon while moving because of the addiontinal empty "make-sale-user-icon-wrap"
        var objElem = null;
        
        if(animationFinihed)
        {
            animationFinihed = false;
            if(userIndex >= 2 && userIndex <= (selection.length + 1))
            {
                $(mainSelection).find('.multiple-selection-user-icons-holder').animate({left: (left + minMakeSaleIconWidth + 'px')});
                left = left + minMakeSaleIconWidth;
                iconsHolderPosition = parseInt(($(mainSelection).find('.multiple-selection-user-icons-holder').css('left')).replace('px',''));
                userIndex--;
                $(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex)).removeClass('make-sale-user-icon-big').removeClass('make-sale-user-icon-small').addClass('make-sale-user-icon-small');
                $(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).removeClass('make-sale-user-icon-big').removeClass('make-sale-user-icon-small').addClass('make-sale-user-icon-big');
                setTimeout(function(){
                    animationFinihed = true;
                }, 500);
            }
            if(userIndex == 1)
            {
                $(this).css({opacity: 0.5});
                animationFinihed = true;
            }
            
            objElem = $(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).find('.make-sale-user-hl-user-data').eq(0);
            setMakeSalesUserData(objElem);
            if($(mainSelection).find('.make-sale-user-icon-wrap').eq((userIndex - 1)).find('.make-sale-user-icon-box').hasClass('active')){
                $(mainSelection).find('.multiple-selection-user-job-title').prepend('<p class="no-margin-bottom">You chose this one</p>');
            } else {
                $(mainSelection).find('.multiple-selection-user-job-title').prepend('<p class="no-margin-bottom">You didn’t Choose this one</p>');
            }
            $(mainSelection).find('.multiple-selection-user-arrow-right').css({opacity: 1});
        }
    });

    $(window).resize(function(){
        var position = 0;
        minMakeSaleIconWidth = parseInt($(mainSelection).find('.make-sale-user-icon-wrap.make-sale-user-icon-small').width()) + ($(window).width() <= 767 ? 8 : 4);
        iconsHolderPosition = ($(mainSelection).find('.multiple-selection-users').width() / 2) - ((parseInt($('.make-sale-user-icon-wrap.make-sale-user-icon-big').width()) + 4) / 2);
        
        position = (iconsHolderPosition - (minMakeSaleIconWidth * (userIndex - 1))) + (selection.length * 2);
        $(mainSelection).find('.multiple-selection-user-icons-holder').css({left: (position + 'px')});
        setRedBanner();
//        $(mainSelection).find('.multiple-selection-user-name').css({bottom: (($(mainSelection).find('.multiple-selection-user-icons-holder').height() + 20) + 'px')});
        if($(window).width() <= 767) {
            $(mainSelection).find('.arrow-left').attr('src', '../img/arrow-wht-left-small.svg');
            $(mainSelection).find('.arrow-right').attr('src', '../img/arrow-wht-right-small.svg');
        } else {
            $(mainSelection).find('.arrow-left').attr('src', '../img/arrow-wht-left.svg');
            $(mainSelection).find('.arrow-right').attr('src', '../img/arrow-wht-right.svg');
        }
    });
    if($(window).width() <= 767) {
        $(mainSelection).find('.arrow-left').attr('src', '../img/arrow-wht-left-small.svg');
        $(mainSelection).find('.arrow-right').attr('src', '../img/arrow-wht-right-small.svg');
    } else {
        $(mainSelection).find('.arrow-left').attr('src', '../img/arrow-wht-left.svg');
        $(mainSelection).find('.arrow-right').attr('src', '../img/arrow-wht-right.svg');
    }
    $(mainSelection).find('.mulitiple-selection-user-icon-box').each(function(){
        $(this).css({backgroundImage: 'url(../img/' + $(this).attr('data-image').trim() + '-gray.' + $(this).attr('data-extension') +')'});
    });
    setRedBanner();
    setWinHeightByPercent(); // coming from the wrapper.js
};
var setSelectionUserIconUI = function(index, obj){
    var str = '';
    if(index % 3 == 0) {
        str += '<div class="mulitiple-selection-user-row">';
        if(obj[index] !== undefined){
            str += '<div class="mulitiple-selection-user-icon-wrap">';
            str += '<div class="mulitiple-selection-user-icon-box inactive" data-user="' + obj[index].id + '" data-correct="' + (obj[index].correct).trim() + '" data-image=" ' + (obj[index].image).trim() + ' " data-extension="' + (obj[index].imageExtension).trim() + '"></div>';
            str += '</div>'; // .mulitiple-selection-user-icon-wrap
        }
        if(obj[(index + 1)] !== undefined){
            str += '<div class="mulitiple-selection-user-icon-wrap">';
            str += '<div class="mulitiple-selection-user-icon-box inactive" data-user="' + obj[(index + 1)].id + '" data-correct="' + (obj[(index + 1)].correct).trim() + '" data-image=" ' + (obj[(index + 1)].image).trim() + ' " data-extension="' + (obj[(index + 1)].imageExtension).trim() + '"></div>';
            str += '</div>'; // .mulitiple-selection-user-icon-wrap
        }
        if(obj[(index + 2)] !== undefined){
            str += '<div class="mulitiple-selection-user-icon-wrap">';
            str += '<div class="mulitiple-selection-user-icon-box inactive" data-user="' + obj[(index + 2)].id + '" data-correct="' + (obj[(index + 2)].correct).trim() + '" data-image=" ' + (obj[(index + 2)].image).trim() + ' " data-extension="' + (obj[(index + 2)].imageExtension).trim() + '"></div>';
            str += '</div>'; // .mulitiple-selection-user-icon-wrap
        }
        str += '</div>'; // .row
    }
    return str;
};
var setSelectionUserIcon = function(obj){
    var str = '';

    str += '<div class="make-sale-user-icon-wrap make-sale-user-icon-big"' + (obj.image == null ? ' style="opacity: 0"' : '') + '>';
    str += '<div class="make-sale-user-icon-box inactive" data-user="' + (obj.id).trim() + '" data-correct="' + (obj.correct).trim() + '">';
//    str += '<img class="img-responsive mulitiple-selection-user-icon" src="../img/' + (obj.image).trim() + '.' + (obj.imageExtension).trim() + '"><img class="img-responsive ' + (((obj.correct).trim() == 'yes') ? 'mulitiple-selection-user-check' : 'mulitiple-selection-user-cross') + '" src="../img/' + (((obj.correct).trim() == 'yes') ? 'green-check' : 'red-cross') + '.svg">';
    if(obj.image == null) {
        str += '<img class="img-responsive mulitiple-selection-user-icon" src="../img/vp-of-risk-management.svg"><img class="img-responsive mulitiple-selection-user-icon-correct-incorrect" src="">';
    } else {
        str += '<img class="img-responsive mulitiple-selection-user-icon" src="../img/' + (obj.image).trim() + '.' + (obj.imageExtension).trim() + '"><img class="img-responsive mulitiple-selection-user-icon-correct-incorrect" src="">';
    }
    str += '<div class="make-sale-user-hl-user-data dontDisplay">';
    str += '<p class="user-name">' + (obj.persona).trim() + '</p>';
    str += '<p class="user-job-title">' + (obj.teachable).trim() + '</p>';
    str += '<div class="user-data">';
    str += '<p class="text-center">' + (obj.explained).trim() + '</p>';
    str += '</div>'; // .user-data
    str += '</div>'; // .make-sale-user-hl-user-data
    str += '</div>'; // .make-sale-user-icon-box
    str += '</div>'; // .make-sale-user-icon-big

    return str;
};
var setMultipleSelectionSection = function(){
    $('#multiple-choice-customer, #multiple-choice-mcafee').empty();
    $(mainSelection).load('../pages/multiple-selection-section.html .multiple-selection-app', function(){
        var userIcons = '';
        var userIconsUI = '';
        var yesAry = new Array();
        var noAry = new Array();
        var emptyUserIcon = new Object();
        
        emptyUserIcon.id = '';
        emptyUserIcon.correct = '';
        emptyUserIcon.image = null;
        emptyUserIcon.persona = '';
        emptyUserIcon.teachable = '';
        emptyUserIcon.explained = '';
        $.each(selection, function(index, value){
            if(value.correct == 'yes') {
                yesAry.push(value);
            }else if(value.correct == 'no') {
                noAry.push(value);
            }
//            userIcons += setSelectionUserIcon(value);
            userIconsUI += setSelectionUserIconUI(index, selection);
        });
        $.each(yesAry, function(index, value){
            userIcons += setSelectionUserIcon(value);
        });
        userIcons += setSelectionUserIcon(emptyUserIcon);
        $.each(noAry, function(index, value){
            userIcons += setSelectionUserIcon(value);
        });
        $(mainSelection).find('.multiple-selection-user-icons-holder').append(userIcons);
        $(mainSelection).find('.mulitiple-selection-user-icons-wrap').append(userIconsUI);
        resetMultipleSelection();
        setMultipleSelection();
        
        switch(selectLevel) {
            case 1:
                $('.mulitiple-selection-red-title').html('Who from our side would you want to invite?');
                break;
            case 2:
                $('.mulitiple-selection-red-title').html('Who else from <strong>McAfee</strong> needs to get invited?');
                break;
        }
    });
};