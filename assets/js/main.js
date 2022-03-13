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
    var works = [...Array(8).keys()] // creates a dummy array with keys only like [0,1,2,3,4,5,6,7]
    works.forEach(index => {
        $(".work" + (index+1)).mouseover(function(){
            $(".work" + (index+1) + " .p-show").show();
            $(".work" + (index+1)).addClass('tinted-image');
        });
        $(".work" + (index+1)).mouseout(function(){
            $(".work" + (index+1) + " .p-show").hide();
            $(".work" + (index+1)).removeClass('tinted-image');
        });
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