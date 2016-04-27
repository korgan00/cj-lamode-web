/*
(function () {
  "use strict";
  var toggles = document.querySelectorAll(".menuButton");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
    });
  }
})();
*/

(function() {
  function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }
  function init() {
    loadJSON("/data/news.json", function(response) {
      var actual_JSON = JSON.parse(response);
    });
  }
  
  
  document.getElementById("CalendarTile").onclick = function() {
    document.getElementById("CalendarSection").classList.add("active");
  };
  
  
})();