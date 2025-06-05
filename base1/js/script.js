// $(function() {
// $("body").css({
//   "background-color": "black",
//   "color": "white"
// });
// $(".blue-box").hide(1000).show(1000);

// $(".blue-box").slideUp(1000).slideDown(1000);
// $("p").slideUp(1000).slideDown(1000);
// $("p").slideToggle(1000);

// $(".blue-box").animate({
//   "margin-left": "+=100px", // (+-)= will allow the element to move to the right by 100 pixels from its existing css property values
//   // "opacity": "0.5"
// }, 2000, "linear");
// $(".blue-box").animate({
//   "margin-left": "-=100px",
// }, 1000);

// $(".blue-box").animate({
//   marginLeft: "200px",
//   opacity: "0.5",
//   width: "10%",
//   height: "10%",
//   marginTop: "20px",
// }, 1000);

// $("p").animate({
//   "font-size": "20px",
// });

// $(".red-box").fadeTo(1000, 0.5);
// $(".green-box").delay(1000).fadeTo(1000, 0.5);
// $(".blue-box").delay(2000).fadeTo(1000, 0.5).delay(500).fadeOut();

// $("p").css("background-color", "green")
// $("ul").css("color", "red")
// $("input[type='text']").css("padding", "10px")

// $(".red-box, p, li:last").css("background-color", "green")
// $("input:text").css("border", "2px solid red")

// Traversal
// $("#list").find("li").css("background-color", "green");
// $("#list ul").parents("").css("background-color", "green");
// $("#list").siblings(":header").css("background-color", "green");
// $("#list").next("").css("background-color", "green");
// $(":header").next().css("background-color", "orange");

//   $("form").children("input").css("background-color", "green");
// });

// $(function () {
  // $("#list").find("li").filter(":even").css("background-color", "green");
  // $("#list").find("li").filter((index) => index % 3 === 1).css("background-color", "green");
  // $("li").first("").css("background-color", "green");
  // $("li").last("").css("background-color", "green");
  // $("li").eq(5).css("background-color", "green");
  // $("li").eq(5).css("background-color", "green");
  // $("li").not(":first").css("background-color", "green");
// });

$(function() {
  // $("ul ul:first").append("<li>You are great</li>");
  // $("<li>You are great part 2</li>").appendTo($("ul ul:first"));
  // $("ul").prepend("<li>You are first great</li>");
  // $("<li>Now this is first challenge</li>").prependTo(".red-box");

  $(".red-box").after("<div class='red-box'>This is a another red box</div>")
  $(".blue-box").before("<div class='blue-box'>This is a another blue box</div>")
})