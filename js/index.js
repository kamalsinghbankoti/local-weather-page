$(document).ready(function(){
  
  var json;
  var cel=false;
  var loc;
  var iconsrc;
  var weather_code;
function displaytemp(ftemp,c)
  {
    if(c) 
      return Math.round((ftemp -32)*(5/9))+ " C";
    else
    return Math.round(ftemp)+" F";
  }
  
  function render(json ,cel)
  {
     var currentlocation=json.name;
      var currentweather=json.weather[0].description;
      var currenttemp=displaytemp(json.main.temp,cel);
      var high=displaytemp(json.main.temp_max,cel);
      var low=displaytemp(json.main.temp_min,cel);
      var icon=json.weather[0].icon;
      iconsrc="http://openweathermap.org/img/w/"+icon+".png";
    var humidity=json.main.humidity;
    var wind_speed=json.wind.speed;
    
    
  
    
      $("#key").html(currentlocation);
      $("#key1").html(currentweather);
      $("#key2").html(currenttemp);
      $("#key3").html(low+" / "+high);
     $("#key1").prepend('<img src="'+iconsrc+'">');
    $("#key4").html(humidity+" %");
    $("#key5").html(wind_speed+" miles/hour")
  }
  
$.getJSON('https://ipinfo.io', function(data){
  loc=data.loc.split(",")
      
   var weatherAPI='http://api.openweathermap.org/data/2.5/weather?lat='+loc[0]+'&lon='+loc[1] +'&units=imperial&appid=e3b6d8508f75a82b3cacf3389dace1b5';
  if(window.location.protocol === 'https:') weatherAPI = 'https://cors-anywhere.herokuapp.com/' + weatherAPI
    $.getJSON(weatherAPI, function(data){
      json =data;
    render(data, cel);
      $('#toggle').click(function(event){
        event.preventDefault();
        cel=!cel;
        render(json,cel);
        
      })
     weather_code=data.weather[0].id;
      console.log(weather_code);
        if(weather_code<=232 && weather_code>=200){
          $('body').css('background-image','url(https://az616578.vo.msecnd.net/files/responsive/cover/main/desktop/2016/09/10/636091222907884233993892316_thunderstorm.jpg)');}
  else if(weather_code<=321 && weather_code>=300){
          $('body').css('background-image','url(http://chronicallychristian.com/files/blogs/cold.jpg)');}
    else if(weather_code<=531 && weather_code>=500){
          $('body').css('background-image','url(http://carphotosgallery.net/wp-content/uploads/2017/06/rainy-day-wallpaper-free-wallpapersafari-with-free-wallpaper-rain.jpg)');}
     else if(weather_code<=622 && weather_code>=600){
          $('body').css('background-image','url(http://cfile25.uf.tistory.com/image/27778B40568A581D1CD2A9)');}
       else if(weather_code<=701 && weather_code>=781){
          $('body').css('background-image','url(http://img.tapatalk.com/d/14/09/14/mu9edura.jpg)');}
          
            else if(weather_code<=804 && weather_code>=801){
          $('body').css('background-image','url(http://media.massal.net/clouds-sky/x/flying-the-clouds-running-over-land-p.jpg)');}
             else if(weather_code<=906 && weather_code>=900){
          $('body').css('background-image','url(https://tallypress.com/wp-content/uploads/2017/05/635981751870849035-1234523254_rainyday.jpg)');}
               else if(weather_code<=951 && weather_code>=962){
          $('body').css('background-image','url(https://img.hipcamp.com/image/upload/c_fill,f_auto,h_960,q_60,w_1440/v1434729889/bm67hdz1g2kc0iigbpzm.jpg)');}
             else{
          $('body').css('background-image','url(http://jlrfzy.com/userfiles/images/20150105155641-92417234228923920.jpg)');
            
        }
    })
    })

})