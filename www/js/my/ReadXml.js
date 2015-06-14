function ReadXml5Beach(mylat,mylong) {
    jQuery.support.cors = true;
    /*http://localhost:52136/Service1.svc/getbeach*/
    /*http://localhost:1844/Service1.svc/beach */
    /*https://igweb.meridiana.it/wcfRestIGWEB/IBookService.svc/Getcompany/IGPAD*/
    var urltmp = 'http://www.icesoft.it/service1.svc' + '/BeachNear/' + mylat + "/" + mylong
    //alertdebug('urltmp:' + urltmp);
    //alert('ReadXml5Beachì');
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
        },
        dataType: "jsonp",
        async: false,
        cache: false,
        crossDomain: true,
        url: urltmp,
        jsonpCallback: "localJsonpCallback",
        success: function (msg) {
            // server response
            sites5 = [];
            var i = 0;
            jQuery.each(msg, function (rec) {

                var id = this.ID;
                var nome = this.nome;
                var lat = this.lat;
                var lon = this.lon;
                var descrizione = this.descrizione;
                var windNO = this.windNO;
                var parking = this.parcheggio;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.foto;
                var camper = this.camper;
                var attivsub = this.attivsub;
                var densita = this.densita;
                var Info1 = this.Info1;
                var Info2= this.Info2;
                var Info3 = this.Info3;
                var Info4 = this.Info4;
                //   
                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita, Info1, Info2, Info3, Info4]
                sites5.push(beach);

                i = i + 1;
                //sites.push(beach);
            });
            //alert('sites5 populated');
            UpdateMyPosition();
        },
        error: function (msg) {
            // debugger;
            //alert('Service call failed: ' + msg.status + ' Type :' + msg.statusText);
        }
    });

  

}

function ReadXmlBeach() {
    jQuery.support.cors = true;
    //alert('sites');
   // alert('ReadXmlBeach');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'http://www.icesoft.it/service1.svc' + '/GetBeach',
        data: '',
        dataType: 'jsonp',
        crossDomain: true,
        processdata: false,
        error: function (msg) {
            // debugger;
            alert('Service call failed: ' + msg.status + ' Type :' + msg.statusText);
        },
        success: function (msg) {
            //debugger;
//            alert('success : ' + msg);

            sites = [];
            var i = 0;
            jQuery.each(msg, function (rec) {

                var id = this.ID;
                var nome = this.nome;
                //alert(nome);
                var lat = this.lat;
                var lon = this.lon;
                var descrizione = this.descrizione;
                var windNO = this.windNO;
                var parking = this.parcheggio;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.foto;
                var camper = this.camper;
                var attivsub = this.attivsub;
                var densita = this.densita;
                //   
                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita]
                sites.push(beach);
                //alert(beach);
//                localStorage.setItem("beachs " + i, beach);
//                beach = localStorage.getItem("beachs " + i);
                //alert(beach);
                i = i + 1;
                //sites.push(beach);
            });
           // alert(sites.length);
            //            expires = new Date();
            //            expires.setTime(expires.getTime() + (1000 * 3600 * 24 * 7));
            //            set_cookie('beachs', sites, expires);
            //            localStorage.removeItem("beachs", sites);
            //            localStorage.setItem("beachs", sites);
            //            alert(sites.length);
            //            sites =localStorage.getItem("beachs");
            //            alert(sites.length);
            UpdateMyPosition();
        }
    });

}




function ReadXmlBeachById(Beach_ID) {
    jQuery.support.cors = true;

    //alert('ReadXmlBeachById');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'http://www.icesoft.it/service1.svc' + '/GetBeachByID/' + Beach_ID,
        data: '',
        dataType: 'jsonp',
        crossDomain: true,
        processdata: false,
        error: function (msg) {
            // debugger;
            alert('Service call failed: ' + msg.status + ' Type :' + msg.statusText);
        },
        success: function (msg) {
            //debugger;
            //alert('success : ' + msg);

            //sites = [];
            var i = 0;
            jQuery.each(msg, function (rec) {

                var id = this.ID;
                var nome = this.nome;
                //alert(nome);
                var lat = this.lat;
                var lon = this.lon;
                var descrizione = this.descrizione;
                var windNO = this.windNO;
                var parking = this.parcheggio;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.photo;
                var camper = this.camper;
                var attivsub = this.attivsub;
                var densita = this.densita;
                //   



                var ds = descrizione;
                //alert('info3 ' + info[0]);
                localStorage.setItem('ThisBeachName', nome);
                $("#forecast_title").html(localStorage.getItem('ThisBeachName'));
                $('#beach_Name').html(nome);
                $('#beach_Ds').html(ds);


                //Img
                if (parking == '1') {
                    $('#td_parcheggio').show();
                }
                else {
                    $('#td_parcheggio').hide();
                }
                if (bar == '1') {
                    $('#td_bar').show();
                }
                else {
                    $('#td_bar').hide();
                }
                if (disabili == '1') {
                    $('#td_disabili').show();
                }
                else {
                    $('#td_disabili').hide();
                }
                if (xbambini == '1') {
                    $('#td_xbambini').show();
                }
                else {
                    $('#td_xbambini').hide();
                }
                if (rent == '1') {
                    $('#td_attrezzata').show();
                }
                else {
                    $('#td_attrezzata').hide();
                }
                if (attivsub == '1') {
                    $('#td_attivsub').show();
                }
                else {
                    $('#td_attivsub').hide();
                }
                if (camper == '1') {
                    $('#td_camper').show();
                }
                else {
                    $('#td_camper').hide();
                }
                $('#td_densita').hide();
                if (densita == 'B') {
                    $('#img_densita').attr('src', 'images/icone/densitab.png');
                    $('#td_densita').show();
                }
                if (densita == 'M') {
                    $('#img_densita').attr('src', 'images/icone/densita.png');
                    $('#td_densita').show();
                }
                if (densita == 'A') {
                    $('#img_densita').attr('src', 'images/icone/densita.png');
                    $('#td_densita').show();
                }


                //Direzione
                mylat = localStorage.getItem("mylat");
                mylng = localStorage.getItem("mylng");
                var start = mylat + "," + mylng;
                var end = lat + "," + lon;
                //alert(start + '\n' + end);
                //var distanceInput = document.getElementById("distance");


                var ThisBeachLat = lat;
                var ThisBeachLon = lon;
                localStorage.setItem('ThisBeachLat', ThisBeachLat);
                localStorage.setItem('ThisBeachLon', ThisBeachLon);
                //alert(ThisBeachLat + '-' + ThisBeachLon);
                var lan = "it";
                if (localStorage.getItem('Lang') != null) {
                    if (localStorage.getItem('Lang') == "EN") {
                        lan = "us";
                    }
                }
                var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + ThisBeachLat + "&lon=" + ThisBeachLon + "&mode=json&lang=" + lan + "t&units=metric";
                //alert(url);
                $.getJSON(url, showCurrentweather).error(errorWeather);





                var directionDisplay;
                var directionsService = new google.maps.DirectionsService();
                var map_dir;

                directionsDisplay = new google.maps.DirectionsRenderer();
                var mypos = new google.maps.LatLng(mylat, mylng);
                //alert(mylat + ' ' +mylng);
                var myOptions = {
                    zoom: 12,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: mypos
                }
                //alert(map_dir);
                map_dir = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
                directionsDisplay.setMap(map_dir);
                //alert(map_dir);

                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function (response, status) {
                    //alert('status:' + status);
                    count_tmp_beach = count_tmp_beach + 1;
                    //alert(count_tmp_beach +'/' + sites.length);
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                        //alert(response.routes[0].legs[0].distance.value / 1000);
                        distancekm = response.routes[0].legs[0].distance.value / 1000;
                        var origins = request.origin.split(',');
                        var destinations = request.destination.split(',');

                        var myRoute = response.routes[0].legs[0];
                        var instr = '<b> Distanza Totale : ' + distancekm + 'km <b/></br>';
                        for (var i = 0; i < myRoute.steps.length; i++) {
                            var km = myRoute.steps[i].distance.text;
                            instr = instr + '<br/> ' + km + ')' + myRoute.steps[i].instructions;
                        }


                        $('#beach_Drive').html(instr);
                    }

                });

                //                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita]
                //                sites.push(beach);
                //                //alert(beach);
                //                //localStorage.setItem("beachs " + i, beach);
                //                //beach = localStorage.getItem("beachs " + i);
                //                //alert(beach);
                i = i + 1;
                //sites.push(beach);
            });





            UpdateMyPosition();
        }
    });

}


function errorWeather(e) {
    alert('status : ' + e.status + ' Status.text ' + e.statusText);

}

function showCurrentweather(d) {
    //alert('showCurrentCity :' + d.main.temp);

    $('#city_tempg').html('' + Math.round((d.main.temp) * 100) / 100 + '°C');
    var dt = new Date(d.dt * 1000);
    var hr = dt.getHours();
    if (hr < 10) hr = '0' + hr;
    var mn = dt.getMinutes();
    if (mn < 10) mn = '0' + mn;
    var mon = dt.getMonth() + 1;
    if (mon < 10) mon = '0' + mon;
    var day = dt.getDate();
    if (day < 10) day = '0' + day;
    var year = dt.getFullYear();
    $('#city_last_upd').html(" <i>Ult. agg. :" + day + ' ' + hr + ':' + mn + '</i>');
    $('#forecast_beach').attr('href', '#forecast?force=1');

    //$("#forecast_title").html(d.name + ', ' + d.sys.country);
    //alert('forecast_title5');
    localStorage.setItem('forceMeteo', '1');

    $('#city_nameg').html(d.name.toUpperCase() + ', ' + d.sys.country.toUpperCase());
    WindDir = '';
    WindSpeed = d.wind.speed;
    if (d.wind.deg >= 348.75 || d.wind.deg < 11.25) {
        WindDir = 'N';
    }
    if (d.wind.deg >= 11.25 && d.wind.deg < 33.75) {
        WindDir = 'NNE';
    }
    if (d.wind.deg >= 33.75 && d.wind.deg < 56.25) {
        WindDir = 'NE';
    }
    if (d.wind.deg >= 56.25 && d.wind.deg < 78.75) {
        WindDir = 'ENE';
    }
    if (d.wind.deg >= 78.75 && d.wind.deg < 101.25) {
        WindDir = 'E';
    }
    if (d.wind.deg >= 101.25 && d.wind.deg < 123.75) {
        WindDir = 'ESE';
    }
    if (d.wind.deg >= 123.75 && d.wind.deg < 146.25) {
        WindDir = 'SE';
    }
    if (d.wind.deg >= 146.25 && d.wind.deg < 168.75) {
        WindDir = 'SSE';
    }
    if (d.wind.deg >= 168.75 && d.wind.deg < 191.25) {
        WindDir = 'S';
    }
    if (d.wind.deg >= 191.25 && d.wind.deg < 213.75) {
        WindDir = 'SSW';
    }
    if (d.wind.deg >= 213.75 && d.wind.deg < 236.25) {
        WindDir = 'SW';
    }
    if (d.wind.deg >= 236.25 && d.wind.deg < 258.75) {
        WindDir = 'WSW';
    }
    if (d.wind.deg >= 258.75 && d.wind.deg < 281.25) {
        WindDir = 'W';
    }
    if (d.wind.deg >= 281.25 && d.wind.deg < 303.75) {
        WindDir = 'WW';
    }
    if (d.wind.deg >= 303.75 && d.wind.deg < 326.25) {
        WindDir = 'NW';
    }
    if (d.wind.deg >= 348.75 && d.wind.deg < 326.25) {
        WindDir = 'NW';
    }
    var KM_HR = Math.round(d.wind.speed * 3.6);
    var nod = Math.round(d.wind.speed / 0.514444);
    $('#city_windg').html();
    $('#city_cloudsg').html();
    $('#city_pressureg').html();
    Hpa = d.main.pressure;

    $('#city_wind_lblg').html('' + KM_HR + 'Km/hr  (' + nod + 'nodi) ' + d.wind.deg + '° (' + WindDir + ')');
    $('#city_clouds_lblg').html('' + d.clouds.all + ' %');
    $('#city_pressure_lblg').html('' + d.main.pressure + ' hpa');
    $('#city_humidity_lblg').html('' + d.main.humidity + ' %');
    if (d.weather[0]) {
        //$('li.picture').css('background', "#fff url(http://openweathermap.org/img/w/" + d.weather[0].icon + ".png) no-repeat");
        $('img.pictureg').attr("src", "images/" + d.weather[0].icon + ".png");
        //$('img.picture').css('background', "#fff url(images/" + d.weather[0].icon + ".png) no-repeat");
        $('#city_weatherg').html('<b>' + d.weather[0].description + '</b>');
    }
}

