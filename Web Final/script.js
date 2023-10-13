

(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
       // Define the chart to be drawn.
       var data = new google.visualization.DataTable();
       data.addColumn('string', 'Browser');
       data.addColumn('number', 'Percentage');
       data.addRows([
          ['Firefox', 45.0],
          ['IE', 26.8],
          ['Chrome', 12.8],
          ['Safari', 8.5],
          ['Opera', 6.2],
          ['Others', 0.7]
       ]);
          
       // Set chart options
       var options = {'title':'Browser market shares at a specific website, 2014', 'width':800, 'height':700};

       // Instantiate and draw the chart.
       var chart = new google.visualization.PieChart(document.getElementById ('container'));
       chart.draw(data, options);
    }
    google.charts.setOnLoadCallback(drawChart);

    // Initialize and add the map
let map;

function initMap() {
    var dumbo = {lat: 40.700802, lng:73.987602};
    var mapOptions = {
        center: dumbo,
        zoom: 10
    };
    var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
}
var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
            var marker = new google.maps.Marker({
                position: siliconValley,
                map: googlemap
            });