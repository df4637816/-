

const TopBtn = document.querySelector('.btn');
const Nav = document.querySelector('nav')

TopBtn.addEventListener('click',function(){
         
          let scY = window.scrollY;
          scY = Nav.scrollTop
          window.scrollTo(0,scY);
       
    })


  

    //google map set
    
    
       // 將 lat 與 lng 帶入後續的 Google Maps API 中
                         
    function initMap(){
      
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        // 創建一個 Google Maps 地圖實例
        var map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: lat, lng: lng },
          zoom: 15 // 設定較高的縮放級別
        });

        // 在地圖上標記使用者所在位置
        const svgMarker = {
          path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
          fillColor: "red",
          fillOpacity: 0.8,
          strokeWeight: 0,
          rotation: 0,
          scale: 1.5,
          anchor: new google.maps.Point(0, 20),
        };
      
        new google.maps.Marker({
          position: map.getCenter(),
          icon: svgMarker,
          map: map,
        });
        
       
      });
        
          
          
    
  
}
    
