var mainMCCElem = null;
var mccLevel = 0;
var scenario = null;
var skipIndex = 0;
var tmpElem = null;
var skipEvent = function(_this,_this2) {
    $('.skip-btn').off();
    switch(skipIndex){
        case 0:
            audioStop();
            mainMCCElem.find('.multiple-choice-chat-wrap').show();
            generateSpeechBalloon('sales-rep', scenario.setup.conversation[0].salesRep, true, scenario.setup.conversation[0].salesRepAudio);
            // setCMWHeight();
            $('.skip-btn').on('click', function(){
                skipIndex = 1;
                audioStop();
                // setCMWHeight();
                skipEvent(_this,_this2);
            });
            break;
        case 1:
            audioStop();
            generateSpeechBalloon('customer', scenario.setup.conversation[0].customer, true, scenario.setup.conversation[0].customerAudio);
            // setCMWHeight();
            $('.skip-btn').on('click', function(){
                skipIndex = 2;
                audioStop();
                // setCMWHeight();
                skipEvent(_this,_this2);
            });
            break;
        case 2:
            audioStop();
            generateSpeechBalloon('select-notification', generateInstantFeedbackText());
            mainMCCElem.find('.course-multiple-items-wrap').show();
            mainMCCElem.find('.customer-response').css({opacity: 1});
            $('.skip-btn').hide();
            skipIndex = 3;
            $('.skip-btn').on('click', function(){
                audioStop();
                // setCMWHeight();
                mainMCCElem.find('.customer-response .instant-feedback').parent().parent().remove();
                skipEvent(_this,_this2);
            });
            break;
        case 3:
            audioStop();
            generateSpeechBalloon('sales-rep',_this2.find('p').text(), true, _this.attr('data-sales-rep-audio'));
            mainMCCElem.find('.customer-response .instant-feedback').parent().parent().remove();
            $('.skip-btn').show();
            $('.skip-btn').on('click', function(){
                skipIndex = 4;
                audioStop();
                // setCMWHeight();
                skipEvent(_this,_this2);
            });
            break;
        case 4:
            audioStop();
            generateSpeechBalloon('customer',_this.attr('data-response'), true, _this.attr('data-customer-audio'));
            mainMCCElem.find('.customer-response .instant-feedback').parent().parent().remove();
            $('.skip-btn').hide();
            skipIndex = 3;
            $('.skip-btn').on('click', function(){
                if(mccLevel <= 0) {
                    skipIndex = 0;
                }
                audioStop();
                // setCMWHeight();
                skipEvent(_this,_this2);
            });
            break;
    }
}
var setCMWHeight = function() {
    var cmwHeight = mainMCCElem.find('.course-multiple-wrap').outerHeight();
    var objImgHeight = mainMCCElem.find('.objection-img').outerHeight();
    
    if((mainMCCElem.find('.customer-response-wrap').height() + 50) >= ($(window).height() - (cmwHeight + objImgHeight))) {
        mainMCCElem.find('.customer-response-wrap').height(($(window).height() - (cmwHeight + objImgHeight)));
    } else {
        mainMCCElem.find('.customer-response-wrap').attr('style','');
    }
    mainMCCElem.find('.objection-wrap').width(mainMCCElem.find('.chat-elem').width());
    if($(window).width() <= 767) {
        mainMCCElem.find('.objection-wrap').width(mainMCCElem.find('.chat-elem'));
       mainMCCElem.find('.instant-feedback-icon').removeClass('glyphicon-arrow-right').addClass('glyphicon-arrow-down');
    } else {
        mainMCCElem.find('.objection-wrap').width(mainMCCElem.find('.chat-elem').width());
        mainMCCElem.find('.instant-feedback-icon').removeClass('glyphicon-arrow-down').addClass('glyphicon-arrow-right');
    }
}
var showPopup = function(choice, response) {
    var change1 = choice.replace(/&lt;/g, '<');
    var change2 = change1.replace(/&gt;/g, '>');
    mainMCCElem.find('.overlay-bg').fadeIn();
    mainMCCElem.find('.course-multiple-feedback-text').html(change2);
    // reserve code
//    generateSpeechBalloon('sales-rep', response);
}
var generateTypingDot = function(type, callback){
    var str = '';
    if(production) {
        str = '<div class="mcc-speech-bubble ' + type + ' typing-dots">';
        str += '<p><img class="typing-dots" src="../img/typing-dots.gif"></p>';
        str += '</div>'; // .mcc-speech-bubble
        mainMCCElem.find('.customer-response').append(str);
        mainMCCElem.find('.customer-response .mcc-speech-bubble:last-child').fadeIn('fast');
        // setCMWHeight();
        try {
            mainMCCElem.find('.customer-response .mcc-speech-bubble:last-child')[0].scrollIntoView();
        } catch(err){}
        setTimeout(function(){
            $('.customer-response .mcc-speech-bubble.typing-dots').remove();
            callback();
        }, 1000);
    } else {
        $('.customer-response .mcc-speech-bubble.typing-dots').remove();
        audioStop();
        callback();
    }
}
var generateSpeechBalloon = function(type, text, audioPlay, speechBalloonAudio) {
    var str = '';
    str = '<div class="mcc-speech-bubble ' + type + '">';
    str += '<p>' + text + '</p>';
    str += '</div>'; // .mcc-speech-bubble
    mainMCCElem.find('.customer-response').append(str);
    
    if(audioPlay){
        playAudio(speechBalloonAudio);
    }
    
    if(production) {
        mainMCCElem.find('.customer-response .mcc-speech-bubble:last-child').fadeIn('fast');
    } else {
        audioStop();
        mainMCCElem.find('.customer-response .mcc-speech-bubble:last-child').show();
    }
    
    // setCMWHeight();
    try {
        mainMCCElem.find('.customer-response .mcc-speech-bubble:last-child')[0].scrollIntoView();
    } catch(err){}
}
var generateInstantFeedbackText = function() {
    return '<span class="instant-feedback">Select the next best question to ask the Customer.<span class="instant-feedback-icon glyphicon"></span></span>';
}
var mccResetFeedback = function() {
    if($('#audio').length > 0){
        audioStop();
    }
    setMCCClickEvent();
    mainMCCElem.find('.not-correct').each(function(){
        if($(this).hasClass('selected'))
        {
            $(this).removeClass('selected').addClass('gray-out');
        }
    });
    mainMCCElem.find('.overlay-bg').fadeOut();
}
var exitScenario = function(elemOut, elemIn){
    var complete = true;
    $(elemOut).hide();
    $(elemIn).fadeIn(function(){
        $(elemOut).empty();
    });
    
    $('.btn-scenario').each(function(){
        if($(this).attr('data-finish') == 'false') {
            complete = false;
            return false;
        }
    });
    audioFinish(function(){return false;});
    $('#continue-part2-btn').trigger('click');
    /*if(complete) {
        $('#continue-part2-btn').show();
    }*/
}
var setMCCClickEvent = function() {
    var courseMultipleItemResponse = function(obj) {
        var audio = '';
        var _this = obj;

        if(_this.hasClass('course-multiple-item-gray'))
        {
            _this.removeClass('course-multiple-item-gray').addClass('selected');
        }
        mainMCCElem.find('.try-again-btn, .continue-btn-wrap').hide();
        mainMCCElem.find('.customer-response .instant-feedback').parent().parent().remove();
        if(_this.attr('data-result') == 'best') {
            var _this2 = obj;
            audio = _this2.attr('data-audio');
            mainMCCElem.find('.course-multiple-feedback-title').text('Correct!');

            mainMCCElem.find('.course-multiple-feedback-text').html(_this2.attr(('data-' + choice)));
            console.log(_this2.find('p').text());            
            if(production) {
                generateSpeechBalloon('sales-rep',_this2.find('p').text(), true, _this.attr('data-sales-rep-audio'));
                setTimeout(function(){
                    generateTypingDot('customer', function(){
                        generateSpeechBalloon('customer',_this.attr('data-response'), true, _this.attr('data-customer-audio'));
                        audioFinish(function(){
                            if(mccLevel == 0) {
                                mainMCCElem.find('.objection-img img').attr('src', '../img/customer-2.svg');
                            }
                            if(mccLevel > 0) {
                                generateMCCElements();
                                generateSpeechBalloon('select-notification', generateInstantFeedbackText());
                                if($(window).width() <= 767) {
                                    mainMCCElem.find('.show-sales-rep-choice-btn').trigger('click');
                                }
                            } else {
                                if($(window).width() <= 767) {
                                    mainMCCElem.find('.continue-btn-mobile-wrap').fadeIn();
                                    $('html, body').animate({scrollTop: mainMCCElem.find(".continue-btn-mobile-wrap").eq(0).offset().top}, 800);
                                }
                                mainMCCElem.find('.continue-btn-wrap').fadeIn();
                            }
                        });
                    });
                }, 1000);
            } else {
                if(mccLevel == 0) {
                    mainMCCElem.find('.objection-img img').attr('src', '../img/customer-2.svg');
                }
                if(mccLevel > 0) {
                    generateMCCElements();
                    generateSpeechBalloon('select-notification', generateInstantFeedbackText());
                } else {
                    mainMCCElem.find('.continue-btn-wrap').show();
                }
                if($(window).width() <= 767) {
                   mainMCCElem.find('.show-sales-rep-choice-btn-wrap').fadeIn(function(){
                        mainMCCElem.find('.show-sales-rep-choice-btn').trigger('click');
                    });
                } else {
                    mainMCCElem.find('.show-sales-rep-choice-btn-wrap').hide();
                }
                skipEvent(_this,_this2);
            }

        } else if(_this.attr('data-result') == 'good') {
            mainMCCElem.find('.course-multiple-feedback-title').text('Good...');
            mainMCCElem.find('.try-again-btn').show();
            mainMCCElem.find('.objection-img img').attr('src', '../img/customer-1.svg');

            generateTypingDot('customer', function(){
                generateSpeechBalloon('customer-incorrect',_this.attr('data-response'), true, _this.attr('data-customer-audio'));
                audioFinish(function(){
                    mainMCCElem.find('.overlay-bg').fadeIn();
                    mainMCCElem.find('.course-multiple-feedback-text').html(_this.attr(('data-' + choice)));
                    showPopup(_this.attr(('data-' + choice)), _this.attr('data-response'));
                    playAudio(_this.attr(('data-' + choice  + '-audio')));

                    if($(window).width() <= 767) {
                        audioFinish(function(){return false;});
                    } else {
                        audioFinish(function(){return false;});
                        mainMCCElem.find('.show-sales-rep-choice-btn-wrap').hide();
                    }
                });

            });

        } else if(_this.attr('data-result') == 'bad') {
            mainMCCElem.find('.course-multiple-feedback-title').text('Not Quite...');
            mainMCCElem.find('.try-again-btn').show();
            mainMCCElem.find('.objection-img img').attr('src', '../img/customer-1.svg');

            generateTypingDot('customer', function(){
                generateSpeechBalloon('customer-incorrect',_this.attr('data-response'), true, _this.attr('data-customer-audio'));
                audioFinish(function(){
                    mainMCCElem.find('.overlay-bg').fadeIn();
                    mainMCCElem.find('.course-multiple-feedback-text').html(_this.attr(('data-' + choice)));
                    showPopup(_this.attr(('data-' + choice)), _this.attr('data-response'));
                    playAudio(_this.attr(('data-' + choice  + '-audio')));
                    if($(window).width() <= 767) {
                        audioFinish(function(){return false;});
                    } else {
                        audioFinish(function(){return false;});
                        mainMCCElem.find('.show-sales-rep-choice-btn-wrap').hide();
                    }
                });

            });

        }
        if(production) {
            mainMCCElem.find('.course-multiple-item').off('click');
        }
        if($(window).width() <= 767) {
            $('.multiple-items-col').hide();
        }
    }
    var continueToChat = function() {
        mainMCCElem.find('.continue-to-chat').show();
        mainMCCElem.find('.multiple-choice-chat-top').hide();
        mainMCCElem.find('.show-sales-rep-choice-btn-wrap').hide();
        
        if(production) {
            mainMCCElem.find('.multiple-choice-chat-wrap').fadeIn(function(){
                generateSpeechBalloon('sales-rep', scenario.setup.conversation[0].salesRep, true, scenario.setup.conversation[0].salesRepAudio);
                audioFinish(function(){
                    generateTypingDot('customer', function(){
                        generateSpeechBalloon('customer', scenario.setup.conversation[0].customer, true, scenario.setup.conversation[0].customerAudio);
                        audioFinish(function(){
                            generateSpeechBalloon('select-notification', generateInstantFeedbackText());
                            mainMCCElem.find('.course-multiple-items-wrap').fadeIn(function(){
                                mainMCCElem.find('.customer-response').animate({opacity: 1});
                                if($(window).width() <= 767) {
                                    mainMCCElem.find('.show-sales-rep-choice-btn').trigger('click');
                                }
                            });
                        });
                    });
                });
            });
        } else {
            if($(window).width() <= 767) {
                mainMCCElem.find('.show-sales-rep-choice-btn-wrap').fadeIn(function(){
                    mainMCCElem.find('.show-sales-rep-choice-btn').trigger('click');
                });
            }
            skipEvent('','');
        }
    }
    mainMCCElem.find('.continue-btn').off().on('click', function(){
        exitScenario(mainMCCElem, '#initial-choice');
        if($('#audio').length > 0){
            audioStop();
        }
        if($(window).width() <= 767) {
            $('.show-sales-rep-choice-btn-wrap').show();
        }
    });
    mainMCCElem.find('.try-again-btn').off().on('click', function(){
        mccResetFeedback();
        if($('#audio').length > 0){
            audioStop();
        }
        if($(window).width() <= 767) {
            $('.show-sales-rep-choice-btn-wrap').show();
        }
    });
    mainMCCElem.find('.course-multiple-top-item').each(function(){
        if($(this).hasClass('course-multiple-item-gray')) {
            $(this).off().on('click', function(){
                var audio = '';
                var _this = $(this);

                if(_this.hasClass('course-multiple-item-gray'))
                {
                    _this.removeClass('course-multiple-item-gray').addClass('selected');
                }
                mainMCCElem.find('.try-again-btn, .continue-btn-wrap').hide();
                if(_this.attr('data-result') == 'best') {
                    audio = _this.attr('data-audio');
                    mainMCCElem.find('.course-multiple-feedback-title').text('Correct!');

                    mainMCCElem.find('.course-multiple-feedback-text').html(_this.attr(('data-' + choice)));
                    mainMCCElem.find('.course-multiple-items-wrap').hide();

                    audioStop();
                    mainMCCElem.find('.continue-to-chat .btn').removeClass('transparent').addClass('red');
                    if($(window).width() <= 767) {
                        continueToChat();
                    } else {
                        mainMCCElem.find('.continue-to-chat .btn').off().on('click', function(){
                            continueToChat();
                        });
                    }
                } else if(_this.attr('data-result') == 'good') {
                    audio = _this.attr('data-audio');
                    mainMCCElem.find('.course-multiple-feedback-title').text('Good...');
                    mainMCCElem.find('.try-again-btn').show();

                    audioStop();
                    mainMCCElem.find('.overlay-bg').fadeIn();
                    mainMCCElem.find('.course-multiple-feedback-text').html(_this.attr(('data-' + choice)));
                    showPopup(_this.attr(('data-' + choice)), _this.attr('data-response'));
                    playAudio(_this.attr(('data-' + choice  + '-audio')));
                    audioFinish(function(){return false;});

                } else if(_this.attr('data-result') == 'bad') {
                    audio = _this.attr('data-audio');
                    mainMCCElem.find('.course-multiple-feedback-title').text('Not Quite...');
                    mainMCCElem.find('.try-again-btn').show();

                    audioStop();
                    mainMCCElem.find('.overlay-bg').fadeIn();
                    mainMCCElem.find('.course-multiple-feedback-text').html(_this.attr(('data-' + choice)));
                    showPopup(_this.attr(('data-' + choice)), _this.attr('data-response'));
                    playAudio(_this.attr(('data-' + choice  + '-audio')));
                    audioFinish(function(){return false;});
                }
                mainMCCElem.find('.course-multiple-top-item').off('click');
            });
        }
    });
    mainMCCElem.find('.course-multiple-item').each(function(){
        if($(this).hasClass('course-multiple-item-gray')) {
            $(this).off().on('click', function(){
                courseMultipleItemResponse($(this));
            });
        }
    });
}
var generateMCCElements = function() {
    var str = '';
    var obj = null;
    var objTop = scenario.top.conversation;
    if(mccLevel == 0){
        obj = scenario.level1.conversation;
        mccLevel++;
    } else if(mccLevel == 1) {
        obj = scenario.level2.conversation;
        mccLevel++;
    } else if(mccLevel >= 2) {
        obj = scenario.ask.conversation;
        mccLevel = 0;
    }
    
    $.each(obj, function(key, value){
        var assess = (value.response == 'best') ? 'correct' : 'not-correct';
        str += '<div class="course-multiple-item course-multiple-item-gray ' + assess + '" data-sales-rep-audio="' + value.salesRepAudio + '" data-customer-audio="' + value.customerAudio + '" data-result="' + value.response + '" data-response="' + value.customer + '" data-choice1="' + value.choice1 + '" data-choice2="' + value.choice2 + '" data-choice1-audio="' + value.choice1Audio + '" data-choice2-audio="' + value.choice2Audio + '"><p>' + value.salesRep + '</p></div>';
    });
    mainMCCElem.find('.course-multiple-items-wrap').empty().append(str).fadeIn(function(){
        mainMCCElem.find('.customer-response').animate({opacity: 1});
        // setCMWHeight();
    });
    str = '';
    
    $.each(objTop, function(key, value){
        var assess = (value.response == 'best') ? 'correct' : 'not-correct';
        str += '<div class="course-multiple-top-item-wrap"><img class="img-responsive course-multiple-top-item-img" src="../img/' + value.image + '">';
        str += '<p class="course-multiple-top-item course-multiple-item-gray ' + assess + '" data-sales-rep-audio="' + value.salesRepAudio + '" data-customer-audio="' + value.customerAudio + '" data-result="' + value.response + '" data-response="' + value.customer + '" data-choice1="' + value.choice1 + '" data-choice2="' + value.choice2 + '" data-choice1-audio="' + value.choice1Audio + '" data-choice2-audio="' + value.choice2Audio + '">' + value.salesRep + '</p></div>';
    });
    mainMCCElem.find('.course-multiple-top-items-wrap').empty().append(str);
    setMCCClickEvent()
}

var initMultipleChoiceChat = function(elem, scenarioObj) {
    scenario = scenarioObj;
    skipIndex = 0;
    var initalize = function() {
        if(production) {
            mainMCCElem.find('.skip-btn-wrap').hide();
        } else {
            mainMCCElem.find('.skip-btn-wrap').show();
        }
        mainMCCElem.find('.course-multiple-items-wrap').hide();
        mainMCCElem.find('.customer-response').css({opacity: 0});
        mainMCCElem.find('.course-multiple-objection').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
        mainMCCElem.find('.speech-bubble p').text(scenario.setup.conversation[0].salesRep);
        generateMCCElements();
        setWinHeightByPercent();
        // setCMWHeight();
        $(window).resize(function(){
            
        });
        mainMCCElem.find('.show-sales-rep-choice-btn').off().on('click', function() {
            mainMCCElem.find('.show-sales-rep-choice-btn-wrap').hide();
            mainMCCElem.find('.multiple-items-col').fadeIn();
        });
        mainMCCElem.find('.multiple-items-col-close-btn').off().on('click', function() {
            mainMCCElem.find('.multiple-items-col').fadeOut(function(){
                mainMCCElem.find('.show-sales-rep-choice-btn-wrap').fadeIn();
            });
        });
    };
    if(elem.length <= 0) {
        mainMCCElem = $('.multiple-choice-chat-section');
        initalize();
    } else {
        $(elem).empty().load('../pages/multiple-choice-chat.html .multiple-choice-chat-section', function(){
            mccLevel = 0;
            mainMCCElem = $((elem + ' .multiple-choice-chat-section'));
            initalize();
            if($(window).width() <= 767) {
                $('html, body').animate({scrollTop: mainMCCElem.find(".course-multiple-top-item-wrap").eq(0).offset().top}, 800);
            }
        });
    }
}
if(self == top) {
//    initMultipleChoiceChat('', scenario1);
}