$(document).ready(function () {
    $('.collapsible').collapsible();
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