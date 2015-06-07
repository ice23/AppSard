function Language(lang) {
    var __construct = function () {
        if (eval('typeof ' + lang) == 'undefined') {
            lang = "en";
        }
        return;
    } ()

    this.getStr = function (str, defaultStr) {
        var retStr = eval('eval(lang).' + str);
        if (typeof retStr != 'undefined') {
            return retStr;
        } else {
            if (typeof defaultStr != 'undefined') {
                return defaultStr;
            } else {
                return eval('en.' + str);
            }
        }
    }
}


function SetLabel() {
    var lang = "ITA";

    if (localStorage.getItem('Lang') != null) {
        lang = localStorage.getItem('Lang');
    }
    //alert('set labels:' + lang);
    var translator = new Language(lang);

    /*MAin*/
    $('#TitleMAin').html(translator.getStr("TitleMAin"));
    $('#TitleBeachNearest').html(translator.getStr("TitleBeachNearest"));
    $('#allsbeachs').html(translator.getStr("allsbeachs"));
    $('#distanceCal').html(translator.getStr("distanceCal"));

    /*Beach*/
    $('#TitleStreet').html(translator.getStr("TitleStreet"));
    $('#TitleWeather').html(translator.getStr("TitleWeather"));

    $('#lblWeatherPlace').html(translator.getStr("lblWeatherPlace"));
    $('#lblWeather').html(translator.getStr("lblWeather"));
    $('#lblWeatherTemp').html(translator.getStr("lblWeatherTemp"));
    $('#lblWeatherWind').html(translator.getStr("lblWeatherWind"));
    $('#lblWeatherNuv').html(translator.getStr("lblWeatherNuv"));
    $('#lblWeatherPres').html(translator.getStr("lblWeatherPres"));
    $('#forecast_beach').html(translator.getStr("forecast_beach"));

    /*MAp*/
    $('#optTitle').html(translator.getStr("optTitle"));
    $('#opt5').html(translator.getStr("opt5"));
    $('#optPArk').html(translator.getStr("optPArk"));
    $('#optBar').html(translator.getStr("optBar"));
    $('#optChild').html(translator.getStr("optChild"));
    $('#optDis').html(translator.getStr("optDis"));
    $('#optOmbr').html(translator.getStr("optOmbr"));
    $('#optCamp').html(translator.getStr("optCamp"));
    $('#optSub').html(translator.getStr("optSub"));
    $('#optSurf').html(translator.getStr("optSurf"));
    
    $('#optdB').html(translator.getStr("optdB"));
    $('#optdM').html(translator.getStr("optdM"));
    $('#optBdA').html(translator.getStr("optBdA"));



    /*MEnu*/

    $('#main1').html(translator.getStr("Menumain"));
    $('#gmap1').html(translator.getStr("Menugmap"));
    $('#meteo1').html(translator.getStr("Menumeteo"));
    $('#chart1').html(translator.getStr("Menuchart"));
    $('#search1').html(translator.getStr("Mensearch"));
    $('#like1').html(translator.getStr("Menulike"));
    $('#setting1').html(translator.getStr("Menusetting"));

    /*Setting*/

    $('#TitleSetting').html(translator.getStr("TitleSetting"));
    $('#TitleSettYourPos').html(translator.getStr("TitleSettYourPos"));
    $('#lblradioPosDevice').html(translator.getStr("lblradioPosDevice"));
    $('#lblradioPosManual').html(translator.getStr("lblradioPosManual"));


    $('#SpanTitleLang').html(translator.getStr("SpanTitleLang"));
    $('#lblradioITA').html(translator.getStr("lblradioITA"));
    $('#lblradioEN').html(translator.getStr("lblradioEN"));


}