/*$(window).on("load", begynd)

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
*/


$(window).on("load", sidenVises)

function sidenVises() {
    console.log("sidenVises");
    $("#hund_container").addClass("position_start_hund");
    $("#egern_container").addClass("position_start_egern");

    $("#egern_container").addClass("moving_egern");
    $("#egern_sprite").addClass("walking");
    $("#hund_container").addClass("moving_hund");
    $("#hund_sprite").addClass("walking");

    $("#hund_container").on("animationend", dyrStopper);
    // $("#egern_container").on("animationend", dyrStopper);

}

function dyrStopper() {
    console.log("dyrStopper");
    $("#hund_container").off("animationend", sidenVises);

    $("#egern_container").removeClass("moving_egern");
    $("#egern_sprite").removeClass("walking");
    $("#hund_container").removeClass("moving_hund");
    $("#hund_sprite").removeClass("walking");

    $("#egern_container").addClass("position_in_egern");
    $("#hund_container").addClass("position_in_hund");


    //$("#hund_container").on("animationend", hundVender);

    setTimeout(hundVender, 500);

}

function hundVender() {
    console.log("hundVender");
    $("#hund_container").off("animationend", dyrStopper);

    $("#hund_container").addClass("position_in_hund_back");
    $("#hund_container").addClass("hund_turn");

    $("#hund_container").on("animationend", hundTilbage);

}

function hundTilbage() {
    console.log("hundtilbage");

    $("#hund_container").off("animationend", hundVender);

    $("#hund_container").removeClass("hund_turn");

    $("#hund_container").addClass("movingback_hund");
    $("#hund_sprite").addClass("walking");

}
