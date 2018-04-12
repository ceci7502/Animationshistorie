$(window).on("load", begynd)

function begynd() {
    console.log("begynd")
    $("#start").on("click", moveIn);
    $("#stop").on("click", stop);
    $("#hund_container").addClass("position_start_hund");
    $("#egern_container").addClass("position_start_egern");
}

function moveIn() {
    console.log("moveIn");
    $("#egern_container").addClass("moving_egern");
    $("#egern_sprite").addClass("walking");
    $("#hund_container").addClass("moving_hund");
    $("#hund_sprite").addClass("walking");
}

function stop() {
    console.log("stop");
    $("#egern_container").addClass("position_in_egern");
    $("#hund_container").addClass("position_in_hund");

    $("#egern_container").removeClass("moving_egern");
    $("#egern_sprite").removeClass("walking");

    $("#hund_container").removeClass("moving_hund");
    $("#hund_sprite").removeClass("walking");


}
