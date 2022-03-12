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

    // product toggle
    $("#product").click(function() {
        $("#product").hide();
        $("#product-1").show();
    });
    $("#product-1").click(function() {
        $("#product-1").hide();
        $("#product").show();
    });
    
    // Portfolio
    $(".work1").mouseover(function(){
        $(".work1 .p-show").show();
        $(".work1").addClass('tinted-image');
    });
    $(".work1").mouseout(function(){
        $(".work1 .p-show").hide();
        $(".work1").removeClass('tinted-image');
    });
    
    $(".work2").mouseover(function(){
        $(".work2 .p-show").show();
        $(".work2").addClass('tinted-image');
    });
    $(".work2").mouseout(function(){
        $(".work2 .p-show").hide();
        $(".work2").removeClass('tinted-image');
    });
    
    $(".work3").mouseover(function(){
        $(".work3 .p-show").show();
        $(".work3").addClass('tinted-image');
    });
    $(".work3").mouseout(function(){
        $(".work3 .p-show").hide();
        $(".work3").removeClass('tinted-image');
    });
    
    $(".work4").mouseover(function(){
        $(".work4 .p-show").show();
        $(".work4").addClass('tinted-image');
    });
    $(".work4").mouseout(function(){
        $(".work4 .p-show").hide();
        $(".work4").removeClass('tinted-image');
    });
    
    $(".work5").mouseover(function(){
        $(".work5 .p-show").show();
        $(".work5").addClass('tinted-image');
    });
    $(".work5").mouseout(function(){
        $(".work5 .p-show").hide();
        $(".work5").removeClass('tinted-image');
    });
    
    $(".work6").mouseover(function(){
        $(".work6 .p-show").show();
        $(".work6").addClass('tinted-image');
    });
    $(".work6").mouseout(function(){
        $(".work6 .p-show").hide();
        $(".work6").removeClass('tinted-image');
    });
    
    $(".work7").mouseover(function(){
        $(".work7 .p-show").show();
        $(".work7").addClass('tinted-image');
    });
    $(".work7").mouseout(function(){
        $(".work7 .p-show").hide();
        $(".work7").removeClass('tinted-image');
    });
    
    $(".work8").mouseover(function(){
        $(".work8 .p-show").show();
        $(".work8").addClass('tinted-image');
    });
    $(".work8").mouseout(function(){
        $(".work8 .p-show").hide();
        $(".work8").removeClass('tinted-image');
    });
    
    // Vanilla js function
    // handle contact form
    var form = document.getElementById("contact")
    form.addEventListener('submit', function(event){
        // event.preventDefault()
        var name = this.NAME.value
        var email = this.EMAIL.value
        var message = this.MESSAGE.value
        alert(name + ", we have received your message. Thank you for reaching out to us.")
    })

});