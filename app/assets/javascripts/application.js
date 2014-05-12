// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// alert('hello')

$(document).ready(function(){
   
   var update_params = function () {
        var ajaxOptions = {
          url: "/users/js_parameters/js_parameters",
          type: 'GET',
          success: function(data) {
            // console.log(data);
          } ,
          error: function(data) {
            console.error("ajax error");
            // console.log(data);
          }
        }

        $.ajax(ajaxOptions).done(update_things);
    };

    var update_board = function () {
       var data = {}
       data["id"] = $('.box0').data('game')
       // console.log(data)
        var ajaxOptions = {
          url: "/ttts/" + data["id"],
          type: 'GET',
          success: function(data) {
            // console.log(data);
          } ,
          error: function(data) {
            console.error("ajax error");
            // console.log(data);
          }
        }

        $.ajax(ajaxOptions).done(update_things);
    };

  setInterval(function() {
        update_board();
        update_params();
      }, 1000);
  
  var update_things = function(data) {
     // $(".game_container").html(data);
  }



  console.log("running");

});