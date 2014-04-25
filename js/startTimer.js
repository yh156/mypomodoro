jQuery(document).ready(function ($) {

	$.ionSound({
    sounds: [
        "bell_ring",
    ],
    path: "sounds/"
});

	var idle_timer = $("#timer");
	idle_timer.data("timer", 10);
	idle_timer.TimeCircles({
		start: false,
		count_past_zero: false,
		"animation": "smooth",
	    "bg_width": 0.2,
	    "fg_width": 0.03,
	    "circle_bg_color": "#90989F",
	    "time": {
	        "Days": {"show": false},
	        "Hours": {"show": false},
	        "Minutes": {
	            "text": "Minutes",
	            "color": "#40484F",
	            "show": true
	        },
	        "Seconds": {
	            "text": "Seconds",
	            "color": "#40484F",
	            "show": true
	        }
		}
	}).addListener(
    	function(unit,value,total) { 

    		if(value == 0)
    			$.ionSound.play("bell_ring");

	        $("#timer-sbreak").click(function(){ 
				idle_timer.data("timer", 300);
				idle_timer.TimeCircles().destroy();
				setup(true);
			});
			$("#timer-lbreak").click(function(){ 
				idle_timer.data("timer", 1200);
				idle_timer.TimeCircles().destroy();
				setup(true);
			});
			$("#timer-pomodoro").click(function(){ 
				idle_timer.data("timer", 1500);
				idle_timer.TimeCircles().destroy();
				setup(true);
			});
    });


	$("#timer-start").click(function(){ $("#timer").TimeCircles().start(); }); 
	$("#timer-stop").click(function(){ $("#timer").TimeCircles().stop(); }); 
	$("#timer-restart").click(function(){ $("#timer").TimeCircles().restart(); });

});

function setup(p_start){
	var timer = $("#timer").TimeCircles({
		start: p_start,
		count_past_zero: false,
		"animation": "smooth",
	    "bg_width": 0.2,
	    "fg_width": 0.03,
	    "circle_bg_color": "#90989F",
	    "time": {
	        "Days": {
	            "text": "Days",
	            "color": "#40484F",
	            "show": false
	        },
	        "Hours": {
	            "text": "Hours",
	            "color": "#40484F",
	            "show": false
	        },
	        "Minutes": {
	            "text": "Minutes",
	            "color": "#40484F",
	            "show": true
	        },
	        "Seconds": {
	            "text": "Seconds",
	            "color": "#40484F",
	            "show": true
	        }
		}
	}).addListener(
    	function(unit,value,total) { 
	        $("#timer-sbreak").click(function(){ 
				timer.data("timer", 300);
				setup(true);
			});
    });
}











