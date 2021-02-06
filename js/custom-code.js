var page2Finish = false;
setSCORMcompleteAtTheLastPage = true;
setSCORMcomplete = function()
{
    if(SCORM && courseStart)
    {
        wrapperObj.pageProgress = (pageProgress / pages.length * 100);
        SCORM2004_CallSetValue("cmi.suspend_data",JSON.stringify(wrapperObj));

        SCORM2004_CallSetValue("cmi.completion_status","completed");
        SCORM2004_CallSetValue("cmi.success_status", "passed");

        SCORM2004_CallSetValue("cmi.exit", "");
        SCORM2004_CallSetValue("adl.nav.request", "exitAll");
    }
}
setWhenAudioIsFinish = function()
{
    $("#playBtn").show();
    $("#pauseBtn").hide();

    var quizPage = false;

    $.each(pages,function(index,val){
        if(quizes.indexOf(pages[wrapperObj.currentPage].pageName) >= 0)
        {
            quizPage = true;

            $("#resetScreenBtn").css({opacity:1});
            $("#resetScreenBtn").off("click").on("click",function(){
                $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation();
                $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioReplay();
                showPauseBtn();
            });

            return false;
        }
    });
    if(!quizPage)
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageFinish = true;
        if(page2Finish && pages[wrapperObj.currentPage].pageName == 'page2' || pages[wrapperObj.currentPage].pageName == 'page1') {
            $("#nextPage").show();
        } else {
            $("#nextPage").hide();
        }
//        $("#nextPage").fadeIn();
        showPageProgress();
    }
}
nextPage = function()
{
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#transcript").hide();
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioStop == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioStop();
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audio.currentTime = 0;
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#audio source").each(function(){
            if($(this).attr("data-default") != undefined)
            {
                $(this).attr("src", audioPath + $(this).attr("data-default"));
            }
        });
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audio.load();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.stopYTVideo == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.stopYTVideo();
    }
    if($("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#video").length > 0)
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#videoModal").modal("hide");
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.videoStop();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.reset == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.reset();
    }
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$(".audioPlayer").each(function(){
        $(this).each(function(){
            if($(this).find("source").attr("src") != undefined)
            {
                $(this)[0].pause();
            }
        });
    });
    
    wrapperObj.currentPage += 1;

    if(repeatCourse || coursePass)
    {
        quizPageIndex = (quizPageIndex < (quizes.length - 1)) ? (useTopNav ? quizPageIndex : (quizPageIndex + 1)) : quizPageIndex;
        useTopNav = false;
        $.each(pages,function(index,val){
            if(val.pageName == quizes[quizPageIndex])
            {
                wrapperObj.currentPage = index;
                return false;
            }
        });
    }

    for(var i = 0; i < quizes.length; i++)
    {
        if(pages[wrapperObj.currentPage].pageName == quizes[i])
        {
            if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.startTimer == "function")
            {
                $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.startTimer();
            }
        }
    }
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.setSeeMoreBtn();
    setPage();
    if(pages[wrapperObj.currentPage].pageName == 'page2') {
       if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset == "function")
        {
            $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset();
        }
    }
    showProperAudioBtn();
    
    if(page2Finish && pages[wrapperObj.currentPage].pageName == 'page2' || pages[wrapperObj.currentPage].pageName == 'page1') {
        $("#nextPage").show();
    } else {
        $("#nextPage").hide();
    }
}
prevPage = function()
{
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#transcript").hide();
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioStop == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioStop();
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audio.currentTime = 0;
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#audio source").each(function(){
            if($(this).attr("data-default") != undefined)
            {
                $(this).attr("src", audioPath + $(this).attr("data-default"));
            }
        });
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audio.load();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.stopYTVideo == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.stopYTVideo();
    }
    if($("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#video").length > 0)
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#videoModal").modal("hide");
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.videoStop();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.reset == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.reset();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset();
    }
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$(".audioPlayer").each(function(){
        $(this).each(function(){
            if($(this).find("source").attr("src") != undefined)
            {
                $(this)[0].pause();
            }
        });
    });
    
    wrapperObj.currentPage -= 1;
    
    if(repeatCourse || coursePass)
    {
        quizPageIndex = (quizPageIndex <= (quizes.length - 1) && quizPageIndex > 0) ? (useTopNav ? quizPageIndex : (quizPageIndex - 1)) : quizPageIndex;
        useTopNav = false;
        $.each(pages,function(index,val){
            if(val.pageName == quizes[quizPageIndex])
            {
                wrapperObj.currentPage = index;
                return false;
            }
        });
    }
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.setSeeMoreBtn();
    setPage();
    if(pages[wrapperObj.currentPage].pageName == 'page2') {
       if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset == "function")
        {
            $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset();
        }
    }
    showProperAudioBtn();
    if(page2Finish && pages[wrapperObj.currentPage].pageName == 'page2' || pages[wrapperObj.currentPage].pageName == 'page1') {
        $("#nextPage").show();
    } else {
        $("#nextPage").hide();
    }
}
showCertainPage= function(page)
{
    var quizPage = false;
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#transcript").hide();
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.resetAnimation();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioStop == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audioStop();
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audio.currentTime = 0;
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#audio source").each(function(){
            if($(this).attr("data-default") != undefined)
            {
                $(this).attr("src", audioPath + $(this).attr("data-default"));
            }
        });
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.audio.load();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.stopYTVideo == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.stopYTVideo();
    }
    if($("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#video").length > 0)
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$("#videoModal").modal("hide");
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.videoStop();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.reset == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.usersObjIndex = 0;
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.conversationIndex = 0;
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.reset();
    }
    if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset == "function")
    {
        $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset();
    }
    $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.$(".audioPlayer").each(function(){
        $(this).each(function(){
            if($(this).find("source").attr("src") != undefined)
            {
                $(this)[0].pause();
            }
        });
    });
    $.each(pages,function(index,val){
        if(val.pageName == page)
        {
            wrapperObj.currentPage = index;
            return false;
        }
    });
    
    if((pages[wrapperObj.currentPage].pageName).search('quiz') < 0)
    {
        useTopNav = true;
    }
    else
    {
        useTopNav = false;
    }
    
    setPage();
    if(pages[wrapperObj.currentPage].pageName == 'page2') {
       if(typeof $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset == "function")
        {
            $("#pageContent .page").eq(wrapperObj.currentPage)[0].contentWindow.pageReset();
        }
    }
    showProperAudioBtn();
    if(page2Finish && pages[wrapperObj.currentPage].pageName == 'page2' || pages[wrapperObj.currentPage].pageName == 'page1') {
        $("#nextPage").show();
    } else {
        $("#nextPage").hide();
    }
}

var audioFinish = function(callback){
    audio.onended = function() {
        try{
            callback();
        } catch(err) {}
        return false;
    }; 
}