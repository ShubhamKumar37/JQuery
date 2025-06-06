// $(function () {
// $(".red-box ").fadeOut(1000).fadeIn(1000);
// $(".green-box ").fadeOut(1000);
// $(".red-box ").fadeTo(1000, 0.3);

// $(".red-box").fadeOut(1000);
// We can use normal css selector for this
// Duplicacy will keep the answer same 

// $(".red-box").fadeOut(1000);
// $(".green-box").fadeOut(1000);
// $(".blue-box").fadeOut(1000);
// $(".red-box").fadeTo(1000, 0.2);
// $(".green-box").fadeTo(1000, 0.5);
// $(".blue-box").fadeTo(1000, 0.8);

// $(".red-box").fadeToggle().fadeToggle();
// $(".green-box").fadeToggle().fadeToggle();
// $(".blue-box").fadeToggle().fadeToggle();

// Fade will change the display property and will not able to change it again if have dispaly none property.

// $(".red-box").fadeOut(1000);
// $(".red-box").fadeTo(1000, 0.3);
// $(".blue-box").hide();
// $(".blue-box").toggle();

// $(".red-box").fadeTo(1000, 0, function () {
//   $(".green-box").fadeTo(1000, 0.3, function () {
//     window.alert("Hello world");
//   });
// })
// $(".blue-box").animate({
//   marginLeft: "+=40px",
//   width: "+=20px",
//   height: "+=20px",
//   marginTop: "+=30px"
// }, 1000, function () {
//   $(".blue-box").animate({
//     marginLeft: "40px",
//     width: "20px",
//     height: "20px",
//     marginTop: "30px"
//   }, 1000)
// });

// $(".lightbox").delay(500).fadeIn(1000);
// }); 

// $(function () {
  // $(".blue-box").before(function () {
  //   return "<div class='blue-box'>Blue box 2</div>"
  // })

  // $(".blue-box").before($(".red-box")) // This will move the div actually
  // $(".red-box").after("<div class='red-box'>Red box 2</div>")
  // $(".green-box").after("<div class='green-box'>Red box 2</div>")

  
// })

// $(function()
// {
  // $("li").replaceWith("<li>Replaced</li>"); // This will help to replace the element and what ever we have selected

  // const firstList = $("li:first");
  // $("p:first").replaceWith(firstList);
  
  // $(".red-box, .blue-box").replaceWith($(".green-box"));
  // $("<div class='green-box'>This is green box</div>").replaceAll(".red-box, .blue-box")
// })

// $(function()
// {
  // $("li").remove();
  // $("form").children().not("input:email, input:number, textarea, br").remove();

  // const detachedList = $("li").detach();
  // $("#content").append(detachedList); // Remove also do this but it will lost its events and context where detach does not so it is recommennded to use detach

  // $("p:first").empty(); // It will truncate the content
//   $(".red-box, .blue-box, .green-box  ").empty();
// })

// $(function()
// {
   // attr(), prop(), val();
  //  const specialLink = $("#link");
  //  console.log(specialLink.attr("href")); 
  //  console.log(specialLink.attr("title")); 
  // specialLink.attr("href", "https://google.com");

//   const checkedBox = $("input:checkbox");
//   console.log(typeof checkedBox.attr("checked")); // This will be string
//   console.log(checkedBox.prop("checked"));  // This will be boolean 
//  checkedBox.prop("checked", true); // This will set the checked property to true
//   console.log($("input:text").val());
//   console.log($("input[type='range']").val());
//   $("input:text").val("hello");
// })

// $(function(){
//   let image = [
//     "./images/laptop-mobile_small.jpg",
//     "./images/laptop-on-table_small.jpg",
//     "./images/people-office-group-team_small.jpg",
//   ];
//   let i = 0; 
//   const banner = $("#banner");

  // setInterval(() =>
  //   {
  //     banner.attr("src", image[i]);
  //     i = (i + 1) % image.length;
  //   }, 2000);
//   banner.data("bannerImages", image);
//   console.log(banner.data("bannerImages"));
//   banner.data("newName", "Shubham Kumar");
//   console.log(banner.data("newName"));
//   banner.removeData("newName");
//   console.log(banner.data());

//   console.log($("p:first").data("my-data"));
// }); 

$(function()
{
  const firstPara = $("p:first");
  console.log(firstPara.text()); // This only have the text beside leaving any tag inside selected eleemnt but the content of it still be here
  console.log(firstPara.html()); // This get everthing inside the tag we select

  // firstPara.text("<h1>Hello world</h1>"); // This will keep the given value as a text even if it is a html
  // firstPara.html("<h1>Hello world</h1>");
  firstPara.html(firstPara.html() + "<h1>Hello world</h1>");
})