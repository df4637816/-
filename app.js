

const TopBtn = document.querySelector('.btn');
const Nav = document.querySelector('nav');
const Imgitems = document.querySelectorAll('img')


document.onload = (function(){
 
  Imgitems.forEach((i)=>{
     i.setAttribute('loading','lazy')
  })
})()
TopBtn.addEventListener('click',function(){
         
          let scY = window.scrollY;
          scY = Nav.scrollTop
          window.scrollTo(0,scY);
       
    })


  

    //google map set
    
    
       // 將 lat 與 lng 帶入後續的 Google Maps API 中
   
    let map;                  

  async  function initMap(){

        const { data } = await google.maps.importLibrary("maps");
        map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:24.960855, lng: 121.259092 },
        zoom: 15, // 設定較高的縮放級別
        
      });
      
    let marker =  new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        title:'現在位置'
      });
      
     // 創建一個 Data Layer
    

     // 將 GeoJSON 數據加入到 Data Layer 中
     map.data.addGeoJson({
       "type": "FeatureCollection",
       "features": [
        {
            "type":"Feature",
            "properties":{
                "name":"% Arabica Singapore CapitaSpring",
                "type":"咖啡"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85029936819264, 1.285088744981146]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"瑞春",
                "type":"宵夜"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85702521237086, 1.3083143605652174]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Beach Road Scissor-Cut Curry Rice (Jalan Besar)",
                "type":"剪刀剪"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85782322586397,1.309774568741513]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"545黃埔蝦麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85045123935696,1.305973486761974]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Hotel 1888 Collection",
                "type":"Hotel"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.84392238168573,1.2833062712894856]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"喜園",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8558319105213,1.2962643395928042]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"吐司工坊",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.86223516819261,1.3086302428141268]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Killiney Kopitiam",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[ 103.83941022401437,1.2990820176184579]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"歐南園亞華肉骨茶",
                "type":"肉骨茶"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.84225161052132,1.2726473556348472]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Founder Bak Kut Teh",
                "type":"肉骨茶"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85101155285001,1.3245948750537495]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"明發鴨飯",
                "type":"鴨肉飯"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.89017935469953,1.354650286791552]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"黃亞細肉骨茶",
                "type":"肉骨茶"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85278210867175,1.3178484939533313]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"結霜橋叻沙",
                "type":"叻沙"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85779089517868,1.3069288950637703]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Zam Zam Restaurant",
                "type":"印度料理"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85842925284994,1.3025000955115689]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"脆皮泡芙",
                "type":"點心"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.83440741052138,1.3029182954693639]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"佳香米暹",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.81821240867177,1.2874740186350433]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"榜鵝椰漿飯",
                "type":"椰漿飯"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.88664492401438,1.3621630151600197]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"林志源肉乾",
                "type":"伴手禮"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.84254161052135,1.2843416973322872]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"天天海南雞飯",
                "type":"海南雞飯"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.84479868168573,1.2807209500058638]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"竹腳中心Tekka Centre",
                "type":"小販中心"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.85069689702833,1.3064762430139998]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"AR-Rahman Cafe 印度煎餅",
                "type":"印度煎餅"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8506692134101,1.3066574141877283]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Ya Kun Kaya Toast",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.9529726375074,1.343005261912856]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Ya Kun Family Cafe",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.9864351970283,1.3568730899116028]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"亞坤咖椰吐司",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.84793176634305,1.2838400405211725]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Lau Pa Sat 老巴剎",
                "type":"沙嗲"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8503899375075,1.2809306976715236]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Good Morning Nanyang Cafe",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.83392681237092,1.307227142944353]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"老伴豆花",
                "type":"豆花"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.84454196634316,1.280605623861027]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"飛飛雲吞麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.90319405203236,1.3173094096960802]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"國記雲吞麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8602166824844,1.312352119158738]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"歐南園炒粿條",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8459196130026,1.2854400906730654]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"東亞餐室",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8369446,1.2801503]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"愛爾鴨",
                "type":"聖淘沙"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8178321,1.255957]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Killiney Kopitiam - Lorong Telok",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8441048,1.2867611]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Bacha Coffee",
                "type":"咖啡"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8544954,1.2837419]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"% Arabica Jewel Changi Airport",
                "type":"咖啡"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.9851573,1.3603966]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"% Arabica Singapore Arab Street",
                "type":"咖啡"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.855009,1.3009527]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Makansutra Gluttons Bay",
                "type":"辣椒螃蟹"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8568698,1.2894024]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"興記咖哩雞麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8414058,1.2851376]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"白蘭閣街蝦麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8551276,1.3001657]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"328加東叻沙",
                "type":"叻沙"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8987822,1.3050644]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"無招牌海鮮",
                "type":"海鮮"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8782395,1.3129024]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"珍寶海鮮",
                "type":"海鮮"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8401767,1.2889271]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"545黃埔蝦麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8459451,1.305818]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"大華豬肉粿條麵",
                "type":"麵食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.858051,1.3051319]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"新剪刀剪",
                "type":"剪刀剪"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8842266,1.3145697]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"大巴窑八巷剪刀剪",
                "type":"剪刀剪"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8497136,1.3401817]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Belinda‘s Traditional Pancake",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8436945,1.3638918]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"海星粿汁",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8822785,1.3207798]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Toast Box",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.851385,1.2990891]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Killiney Kopitiam",
                "type":"早午餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[1.2988729,103.834947]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"麵包物語",
                "type":"聖淘沙"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[1.2569498,103.8157495]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"冰淇淋三明治",
                "type":"點心"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8282092,1.3042902]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"福明熟食",
                "type":"炒蘿蔔糕"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8162245,1.2874783]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"松發肉骨茶",
                "type":"肉骨茶"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8432403,1.2890282]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Shake Shack Jewel Changi",
                "type":"速食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8785706,1.3105317]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"Shake Shack Gardens by the Bay",
                "type":"速食"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8785706,1.3105317]
            }
           },
           {
            "type":"Feature",
            "properties":{
                "name":"New Ubin Seafood CHIJMES",
                "type":"晚餐"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[103.8527083,1.2949022]
            }
           }
       ]
     },{idPropertyName: 'name'});
     
     
       

     // 將 Data Layer 加入到地圖上
     map.data.setMap(map);
   
    
    
      // 在google map上顯示資訊視窗
    let infoWindow = new google.maps.InfoWindow();
    
    
    if(navigator.geolocation){
        
       
        // 創建一個 Google Maps 地圖實例
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            let InfoDisplay = (e) =>{
                let time;
                let name = e.feature.getProperty('name')
                let infowindow = new google.maps.InfoWindow({
                content: name
                })
                infowindow.setPosition(e.latLng);
                infowindow.open(map);
                time = setTimeout(()=>{infowindow.close()},1600)
                
           }

            map.data.addListener('click',
                debouse(InfoDisplay)
            )
           
            function debouse(callback,time=200){
                  let timer;
                  clearTimeout(timer)
                  let that = this
                  let args = arguments
                return function(e){
                timer = setTimeout(()=>{
                    callback(e)
                    
                },time)   
                }
            }
            
  
            infoWindow.setPosition(pos);
            infoWindow.setContent("我的位置");
            infoWindow.open(map,marker);
            map.setCenter(pos);
            
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      
        
       
      ;
        
    }
    else{
        handleLocationError(false,infoWindow,map.getCenter())
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    } 
    
    //返回現在位置的button
    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current ";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              let marker = new google.maps.Marker(
                {
                    position:pos,
                    map:map,
                    title:'我的位置'

                }
              )
             
              infoWindow.setPosition(pos);
              infoWindow.setContent("我的位置");
              infoWindow.open(map);
              map.setCenter(pos);
              marker.setMap(map);
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });
  
}
   

window.initMap = initMap;

