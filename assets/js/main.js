$(document).ready(function(){
    // design toggle
    $("#design").click(function() {
        $("#design").hide();
        $("#design-1").show();
    });
    $("#design-1").click(function() {
        $("#design-1").hide();
        $("#design").show();
    });

    // development toggle
    $("#development").click(function() {
        $("#development").hide();
        $("#development-1").show();
    });
    $("#development-1").click(function() {
        $("#development-1").hide();
        $("#development").show();
    });

    // product toggle
    $("#product").click(function() {
        $("#product").hide();
        $("#product-1").show();
    });
    $("#product-1").click(function() {
        $("#product-1").hide();
        $("#product").show();
    });
    
    

});