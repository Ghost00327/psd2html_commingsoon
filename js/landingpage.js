$( document ).ready(function() {
    $("#DateCountdown").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.3,
        "fg_width": 0.05,
        "circle_bg_color": "#A4D232",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#A4D232",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#A4D232",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#A4D232",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#A4D232",
                "show": true
            }
        }
    });

    $("#state").select2({
        minimumResultsForSearch: -1,
        templateResult: formatState,        
        templateSelection: formatState
    });

    $("#hamburger").click(function() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
        }
    });
});

function formatState (state) {
    if (!state.id) { return state.text; }
    var $state = $(
     `  <div class="flex items-center">
            <img src="images/states/${state.text.trim()}.svg" alt="" class="flex-shrink-0 w-10 h-6">
            <span class="font-normal ml-3 block truncate text-sm">
                ${state.text}
            </span>
        </div>`
    );
    return $state;
}