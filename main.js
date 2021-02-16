function make_navbar(active_item) {
    // load navbar.html
    $.get("navbar.html", function (data) {
        $("#navbar").replaceWith(data);

        $(".top-navbar .nav-link#" + active_item).toggleClass("active");
    });
}

function insert_footer(active_element) {
    $.get("footer.html", function (data) {
        $("#footer").replaceWith(data);
    });
}

$("td[colspan]").css("padding", "0");
$(".table").css("margin-bottom", "0");
