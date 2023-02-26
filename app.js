

const TopBtn = document.querySelector('.btn');
const Nav = document.querySelector('nav')

TopBtn.addEventListener('click',function(){
         
          let scY = window.scrollY;
          scY = Nav.scrollTop
          window.scrollTo(0,scY);
       
    })


  

    //google map set
    
    let currPOsition = navigator.geolocation.getCurrentPosition(function(position) {
                         let currentPosition;
                         currentPosition ={ lat : position.coords.latitude,
                                              lng : position.coords.longitude
                        }
                        return currentPosition
       // 將 lat 與 lng 帶入後續的 Google Maps API 中
                          });
    function initMap(){
      
         
        let location = currPOsition
          let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: location,
          });
            let marker = new google.maps.Marker({
            position:location ,
            map,
            
          });
          
          navigator.geolocation.getCurrentPosition(function(position){
            currentPosition = {
                lat:position.coords.latitude,
                lng:position.coords.longitude
            };
            map.setCenter(currentPosition);
            map.setZoom(16);
               marker.getCurrentPosition(); 
          })

          //按下標記時地圖會縮放
          map.addListener("center_changed", () => {
            // 3 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(() => {
              map.panTo(marker.getCurrentPosition());
            }, 3000);
          });
          marker.addListener("click", () => {
            map.setZoom(8);
            map.setCenter(marker.getPosition());
          });
         //為地圖加入事件監聽器，並在地圖上使用者按下的位置建立標記。
          map.addListener("click", (e) => {
            placeMarkerAndPanTo(e.latLng, map);
          });
          function placeMarkerAndPanTo(latLng, map) {
            new google.maps.Marker({
              position: latLng,
              map: map,
            });
            map.panTo(latLng);
           
      }
        }
        
       
   
    
