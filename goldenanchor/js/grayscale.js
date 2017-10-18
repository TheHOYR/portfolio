/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

$(document).ready(function(){


    /*$("#caracteristique1").click(function(){
        fond=$("<div/>");
        lightbox=$("<div/>");
        lightbox.addClass("lightbox1 animated fadeIn");
        fond.addClass("fondlightbox animated fadeIn");
        $('body').append(fond);
        $('body').append(lightbox);
        caract=$("<div>Longueur: 5.5 m<br/>Poids : 500Kg<br/>Equipement : Cabine aménagée pour 2 personnes et pouvant recevoir une cuisine sommairee, arrière aménagé en solarium</div>");
        caract.css("color","black");
        lightbox.append(caract);

      $(".fondlightbox").click(function(){
      $(".fondlightbox").remove();
      $(".lightbox1").remove();
    })

    })
    $("#caracteristique2").click(function(){
        fond=$("<div/>");
        lightbox=$("<div/>");
        lightbox.addClass("lightbox1 animated fadeIn");
        fond.addClass("fondlightbox animated fadeIn");
        $('body').append(fond);
        $('body').append(lightbox);
        caract=$("<div>Longueur: 8 m<br/>Poids : 1300Kg<br/>Equipement : Une cabine à l'avant pour 2 personnes, Une cabine centrale pour 2 personnes avec cuisine et espace détente, Un poste de pilotage à l'arrière et 2 banquettes, Un solarium à l'avant et sur le toit de la cabine centrale</div>");
        caract.css("color","black");
        lightbox.append(caract);

      $(".fondlightbox").click(function(){
      $(".fondlightbox").remove();
      $(".lightbox1").remove();
    })*/
    var bool = true;
    var bool2 = true;
    $("#caracteristique1").click(function(){
        $(".descr").remove();
        $("#bateauB").toggleClass("animated zoomOut");
        $("#txtimg1").toggleClass("hidden");
        if (bool==true)
        {
            $("#caracteristique1").html("Visualiser bateau");
            bool=false;
        }
        
        else
        {
            $("#caracteristique1").html("Caractéristiques");
            bool=true;
        }
           
        
    })
    $("#caracteristique2").click(function(){
         $(".descr").remove();
        $("#bateauC").toggleClass("animated zoomOut");
        $("#txtimg2").toggleClass("hidden");
        if (bool2==true)
        {
            $("#caracteristique2").html("Visualiser bateau");
            bool2=false;
        }
        
        else
        {
            $("#caracteristique2").html("Caractéristiques");
            bool2=true;
        }
    })

    

    $("#bateauB").click(function(){
        fond=$("<div/>");
        lightbox=$("<div/>");
        lightbox.addClass("lightbox2 animated fadeIn");
        fond.addClass("fondlightbox animated fadeIn");
        $('body').append(fond);
        $('body').append(lightbox);

        modele3d=$("<iframe width='100%' height='100%' src='https://sketchfab.com/models/d96a463bb40b4dc0a732a16155bd2422/embed' frameborder='0' allowvr allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' onmousewheel=''></iframe>");
        lightbox.append(modele3d)

        $(".fondlightbox").click(function(){
      $(".fondlightbox").remove();
      $(".lightbox2").remove();
    })

    })
    $("#bateauC").click(function(){
        fond=$("<div/>");
        lightbox=$("<div/>");
        lightbox.addClass("lightbox2 animated fadeIn");
        fond.addClass("fondlightbox animated fadeIn");
        $('body').append(fond);
        $('body').append(lightbox);

        modele3d=$("<iframe width='100%' height='100%' src='https://sketchfab.com/models/b7ff71b6ab7c4be598a3aea5bc88074b/embed' frameborder='0' allowvr allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' onmousewheel=''></iframe>");
        lightbox.append(modele3d)

        $(".fondlightbox").click(function(){
      $(".fondlightbox").remove();
      $(".lightbox2").remove();
    })

    })

})
