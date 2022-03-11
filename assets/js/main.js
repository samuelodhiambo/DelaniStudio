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

});