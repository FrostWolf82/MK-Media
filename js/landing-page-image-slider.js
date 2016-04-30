
//list of images
var images = ["pic01.jpg", "pic02.jpg", "pic03.jpg"];
    //function to start on document ready
    $(function () {
        //increment variable set
        var i = 0;
        //div targeted to have property changed
        $("#header").css("background-image", "url(/img/" + images[i] + ")");
        //interval function created
        setInterval(function () {
            //increment variable incremented by 1
            i++;
            //if statment to check to see if the increment variable is = to the total number of images (meaning it is at the last image), if it is the increment variable is set to 0 (to go to the first image)
            if (i === images.length) {
                i = 0;
            }
            //fade out property assigned to the header div, with the value slow.
            $("#header").fadeOut("normal", function () {
                $(this).css("background-image", "url(/img/" + images[i] + ")");
                $(this).fadeIn("normal");
            });
        }, 8000);
    });
