"use strict";

//let visits = document.cookie;
let visits = localStorage.getItem("visits");
let numberOfVisits = 0;
let coll = document.getElementsByClassName("collapsible");

$( document ).ready( function() {
    
    /*
    if( visits.length > 0 ) {
        visits = visits.split("=");
        numberOfVisits = visits[1];
        if( numberOfVisits > 1 ){
            $('.welcome').hide();
        } else {
            numberOfVisits++;
            document.cookie = "visits=" + numberOfVisits;
        }
    } else { 
        $('.welcome').hide();
        document.cookie = "visits=1";
    }
    */
    
    if( visits === null ) {
        localStorage.setItem("visits", 1);
        visits = localStorage.getItem("visits");
        $('.welcome').hide();
    } else {
        if( visits > 1 ) {
            $('.welcome').hide();
        }
        visits++;
        localStorage.setItem("visits", visits);
    }
    
});

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.height){
            $( this ).find('span').html("<i class='fa fa-angle-down'>");
			content.style.height = null;
		} else {
            $( this ).find('span').html("<i class='fa fa-angle-up'>");
            content.style.height = content.scrollHeight + "px";
		}
    });
}

$('#close').click( function() {
    $('.welcome').hide();
} );

$('#welcome-bg').click( function() {
    $('.welcome').hide();
} );
