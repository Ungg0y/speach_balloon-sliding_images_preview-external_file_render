var resetMultipleChoice = function() {
    $(mainScenario).find('.course-multiple-feedback').hide();
    $(mainScenario).find('.speech-bubble').show();
    $(mainScenario).find('.course-multiple-item').each(function(){
        $(this).removeClass('selected').removeClass('gray-out').addClass('course-multiple-item-gray');
    });
    setClickEvent();
    resetFeedback();
}
var proceedNextScenario = function() {
    if(scenarioLevel == 1) {
        scenarioLevel = 2
        $(mainScenario).hide()
        $(mainScenario).empty();
        setScenario('#scenario-1');
        $(mainScenario).fadeIn();
    } else if(scenarioLevel == 2) {
        scenarioLevel = 3
        $(mainScenario).hide();
        $(mainScenario).empty();
        setScenario('#scenario-1');
        $(mainScenario).fadeIn();
    } else if(scenarioLevel == 3) {
        exitScenario(mainScenario, '#initial-choice');
    }
};
var exitScenario = function(elemOut, elemIn) {
    var complete = true;
    $(('.btn-scenario[data-number="' + scenarioNumber + '"][data-scenario="' + choice + '"]')).removeClass('gray').removeClass('red').addClass('red');
    $(('.btn-scenario[data-number="' + scenarioNumber + '"][data-scenario="' + choice + '"]')).attr('data-finish', 'true');
    $(elemOut).hide();
    $(elemIn).fadeIn(function(){
        $(elemOut).empty();
    });
    if($('.btn-scenario-1[data-finish="true"]').length == 2) {
        $('.scenario-1-building').removeClass('gray').removeClass('selected').addClass('selected');
    }
    if($('.btn-scenario-2[data-finish="true"]').length == 2) {
        $('.scenario-2-building').removeClass('gray').removeClass('selected').addClass('selected');
    }
    if($('.btn-scenario-3[data-finish="true"]').length == 2) {
        $('.scenario-3-building').removeClass('gray').removeClass('selected').addClass('selected');
    }
    $('.btn-scenario').each(function(){
        if($(this).attr('data-finish') == 'false') {
            complete = false;
            return false;
        }
    });
    if(complete) {
        $('#continue-part2-btn').show();
    }
};

var resetFeedback = function() {
    audioStop();
    setClickEvent();
    $(mainScenario).find('.not-correct').each(function(){
        if($(this).hasClass('selected'))
        {
            $(this).removeClass('selected').addClass('gray-out');
        }
    });
    $(mainScenario).find('.overlay-bg').fadeOut();
//    $(mainScenario).find('.course-multiple-feedback').hide();
//    $(mainScenario).find('.speech-bubble').show();
}
var setClickEvent = function(callback) {
    $(mainScenario).find('.continue-btn').off().on('click', function(){
        proceedNextScenario();
        // resetFeedback();
    });
    $(mainScenario).find('.try-again-btn').off().on('click', function(){
        resetFeedback();
    });
    $(mainScenario).find('.course-multiple-item').each(function(){
        $(this).off().on('click', function(){
            var _this = $(this);
            if($(this).hasClass('course-multiple-item-gray'))
            {
                $(this).removeClass('course-multiple-item-gray').addClass('selected');
            }
            $(mainScenario).find('.try-again-btn, .continue-btn, .continue-btn-wrap').hide();
            if($(this).attr('data-result') == 'best')
            {
                // exitScenario(mainScenario, '#initial-choice')
                $(mainScenario).find('.course-multiple-feedback-title').text('Correct!');
                $(mainScenario).find('.continue-btn').show();
                $(mainScenario).find('.continue-btn-wrap').show();
                $(mainScenario).find('.objection-img img').attr('src', '../img/customer-2.svg');

                playAudio($(this).attr('data-audio'));
//                $(mainScenario).find('.overlay-bg').fadeIn();
                $(mainScenario).find('.course-multiple-feedback-text').html($(this).attr(('data-' + choice)));
                $(mainScenario).find('.customer-response').append('<p><span class="feedback-best glyphicon glyphicon-ok"></span>' + ('&quot;' + $(this).attr('data-response') + '&quot;') + '</p>');
//                $(mainScenario).find('.course-multiple-feedback').show();
//                $(mainScenario).find('.speech-bubble').hide();
                $(mainScenario).find('.course-multiple-item').off('click');
            }
            else if($(this).attr('data-result') == 'good')
            {
                $(mainScenario).find('.course-multiple-feedback-title').text('Good...');
                $(mainScenario).find('.try-again-btn').show();
                $(mainScenario).find('.objection-img img').attr('src', '../img/customer-1.svg');

                playAudio($(this).attr('data-audio'));
                $(mainScenario).find('.overlay-bg').fadeIn();
                $(mainScenario).find('.course-multiple-feedback-text').html($(this).attr(('data-' + choice)));
                $(mainScenario).find('.customer-response').append('<p>' + ('&quot;' + $(this).attr('data-response') + '&quot;') + '</p>');
//                $(mainScenario).find('.course-multiple-feedback').show();
//                $(mainScenario).find('.speech-bubble').hide();
                $(mainScenario).find('.course-multiple-item').off('click');
            }
            else if($(this).attr('data-result') == 'bad')
            {
                $(mainScenario).find('.course-multiple-feedback-title').text('Not Quite...');
                $(mainScenario).find('.try-again-btn').show();
                $(mainScenario).find('.objection-img img').attr('src', '../img/customer-1.svg');

                playAudio($(this).attr('data-audio'));
                $(mainScenario).find('.overlay-bg').fadeIn();
                $(mainScenario).find('.course-multiple-feedback-text').html($(this).attr(('data-' + choice)));
                $(mainScenario).find('.customer-response').append('<p>' + ('&quot;' + $(this).attr('data-response') + '&quot;') + '</p>');
//                $(mainScenario).find('.course-multiple-feedback').show();
//                $(mainScenario).find('.speech-bubble').hide();
                $(mainScenario).find('.course-multiple-item').off('click');
            }
        });
    });
}
var setScenario = function(elem){
    mainScenario = elem;
    $(mainScenario).load('../pages/multiple-choice-section.html .multiple-choice-section', function(){
        var str = '';
        $(mainScenario).find('.course-multiple-objection').text(scenario.top.conversation[0].salesRep);
        $(mainScenario).find('.speech-bubble p').text(scenario.setup.conversation[0].salesRep);
        $(mainScenario).find('.customer-response').html('<p>' + ('&quot;' + scenario.setup.conversation[0].customer + '&quot;') + '</p>');
        if(scenarioLevel == 1) {
            $.each(scenario.level1.conversation, function(key, value){
                var assess = (value.response == 'best') ? 'correct' : 'not-correct';
                str += '<div class="course-multiple-item course-multiple-item-gray ' + assess + '" data-audio="' + value.customerAudio + '" data-result="' + value.response + '" data-response="' + value.customer + '" data-choice1="' + value.choice1 + '" data-choice2="' + value.choice2 + '"><p>' + value.salesRep + '</p></div>';
            });   
        } else if(scenarioLevel == 2) {
            $.each(scenario.level2.conversation, function(key, value){
                var assess = (value.response == 'best') ? 'correct' : 'not-correct';
                str += '<div class="course-multiple-item course-multiple-item-gray ' + assess + '" data-audio="' + value.customerAudio + '" data-result="' + value.response + '" data-response="' + value.customer + '" data-choice1="' + value.choice1 + '" data-choice2="' + value.choice2 + '"><p>' + value.salesRep + '</p></div>';
            });
        } else if(scenarioLevel == 3) {
            $.each(scenario.ask.conversation, function(key, value){
                var assess = (value.response == 'best') ? 'correct' : 'not-correct';
                str += '<div class="course-multiple-item course-multiple-item-gray ' + assess + '" data-audio="' + value.customerAudio + '" data-result="' + value.response + '" data-response="' + value.customer + '" data-choice1="' + value.choice1 + '" data-choice2="' + value.choice2 + '"><p>' + value.salesRep + '</p></div>';
            });
        }
        $(mainScenario).find('.course-multiple-items-wrap').append(str);
        setClickEvent();
        $(mainScenario).find('.course-multiple-feedback-table').each(function(){
            $(this).height($('.percentByHeight').css('min-height'));
        });
        setWinHeightByPercent();
    });
};