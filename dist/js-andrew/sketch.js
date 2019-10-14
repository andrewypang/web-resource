// INITIALIZE COLLAPSIBLE
$(document).ready(function () {
    $('.collapsible').collapsible();
});

// INITIALIZE SCROLLSPY
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

function expandAll() {
    $(".collapsible-header").addClass("active");
    $(".collapsible").collapsible({
        accordion: false
    });

    console.log("expand all!")
}

function collapseAll() {
    $(".collapsible-header").removeClass(function () {
        return "active";
    });
    $(".collapsible").collapsible({
        accordion: true
    });
    $(".collapsible").collapsible({
        accordion: false
    });
}