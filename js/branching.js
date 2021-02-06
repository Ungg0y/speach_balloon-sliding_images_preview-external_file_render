var pageReset = function() {
    minMakeSaleIconWidth = 0;
    iconsHolderPosition = 0;
    userIndex = 1;
    animationFinihed = true;
    audio = $("#audio")[0];
    scenario = null;
    selection = null;
    scenarioNumber = '';
    scenarioLevel = 1;
    choice = 'choice1';
    selectLevel  = 1;
    mainScenario = null;
    mainSelection = null;
    scenarioBtn = null;
    scenarioClicked = '';
//    availableScenario = ['Scenario #1', 'Scenario #2', 'Scenario #3'];
    $('#initial-choice').show();
    audioStop();
    init();
};

var fadeInOut = function(elemOut, elemIn, generateScenario){
    $(elemOut).hide();
    generateScenario;
    $(elemIn).fadeIn();
};

var init = function(){
    $('#initial-choice').show();
    $('.scenario-wrap').each(function(){
        $(this).empty();
    });
    $.each(scenario1.choice, function(key, value){
        if($('#initial-choice .scenario-building-btn-wrap').eq(0).children().length <= 1) {
            $('#initial-choice .scenario-building-btn-wrap').eq(0).append('<span class="btn gray btn-scenario btn-scenario-1" data-selected="false" data-finish="false" data-number="1" data-scenario="' + key + '">' + value + '</span>');
        }
    });
    $.each(scenario2.choice, function(key, value){
        if($('#initial-choice .scenario-building-btn-wrap').eq(1).children().length <= 1) {
            $('#initial-choice .scenario-building-btn-wrap').eq(1).append('<span class="btn gray btn-scenario btn-scenario-2" data-selected="false" data-finish="false" data-number="2" data-scenario="' + key + '">' + value + '</span>');
        }
    });
    $.each(scenario3.choice, function(key, value){
        if($('#initial-choice .scenario-building-btn-wrap').eq(2).children().length <= 1) {
            $('#initial-choice .scenario-building-btn-wrap').eq(2).append('<span class="btn gray btn-scenario btn-scenario-3" data-selected="false" data-finish="false" data-number="3" data-scenario="' + key + '">' + value + '</span>');
        }
    });
    $('#scenario-1, #scenario-2, #scenario-3, #multiple-choice-customer, #multiple-choice-mcafee').empty();
    $('#continue-part2-btn').removeClass('red');
    $('.btn-scenario').each(function(){
        $(this).off().on('click', function(){
            var obj = '';
            choice = $(this).attr('data-scenario');
            scenarioNumber = $(this).attr('data-number');
            scenarioLevel = 1;
            if($(this).hasClass('btn-scenario-1')){
                scenarioClicked = 'Scenario #1';
                obj = $('.btn-scenario-1');
                scenario = scenario1;
            } else if($(this).hasClass('btn-scenario-2')){
                scenarioClicked = 'Scenario #2';
                obj = $('.btn-scenario-2');
                scenario = scenario2;
            } else if($(this).hasClass('btn-scenario-3')){
                scenarioClicked = 'Scenario #3';
                obj = $('.btn-scenario-3');
                scenario = scenario3;
            }
            if(scenarioClicked != ''){
                playAudio('PPTSlide3Intro.mp3');
            }
            scenarioBtn = obj;
            $(this).attr('data-selected', 'true');
            fadeInOut('#initial-choice', '#scenario-1', initMultipleChoiceChat('#scenario-1', scenario));
        });
    });
    $('#continue-part2-btn').each(function(){
        $(this).off().on('click', function(){
            var str = '';
            selectLevel = 1;
            
            if(scenarioClicked == 'Scenario #1') {
                switch($(this).attr('data-selection')) {
                    case 'customer':
                        mainSelection = '#multiple-choice-customer';
                        $('.mulitiple-selection-red-title').html('Who from our side would you want to invite?');
                        selection = customer1;
                        break;
                    case 'mcafee':
                        mainSelection = '#multiple-choice-mcafee';
                        $('.mulitiple-selection-red-title').html('Who else from <strong>McAfee</strong> needs to get invited?');
                        selection = mcafee1;
                        break;
                }
            } else if(scenarioClicked == 'Scenario #2') {
                switch($(this).attr('data-selection')) {
                    case 'customer':
                        mainSelection = '#multiple-choice-customer';
                        $('.mulitiple-selection-red-title').html('Who from our side would you want to invite?');
                        selection = customer2;
                        break;
                    case 'mcafee':
                        mainSelection = '#multiple-choice-mcafee';
                        $('.mulitiple-selection-red-title').html('Who else from <strong>McAfee</strong> needs to get invited?');
                        selection = mcafee2;
                        break;
                }
            } else if(scenarioClicked == 'Scenario #3') {
                switch($(this).attr('data-selection')) {
                    case 'customer':
                        mainSelection = '#multiple-choice-customer';
                        $('.mulitiple-selection-red-title').html('Who from our side would you want to invite?');
                        selection = customer3;
                        break;
                    case 'mcafee':
                        mainSelection = '#multiple-choice-mcafee';
                        $('.mulitiple-selection-red-title').html('Who else from <strong>McAfee</strong> needs to get invited?');
                        selection = mcafee3;
                        break;
                }
            }
            
            $(this).attr('data-selected', 'true');
            fadeInOut('#initial-choice', mainSelection, setMultipleSelectionSection(mainSelection));
        });
    });
    $('.scenario-building-thumb').each(function(){
        if($(this).hasClass('selected')) {
            $(this).parent().find('.btn-scenario').each(function(){
                $(this).off();
            });
        }
    });
};
//init();