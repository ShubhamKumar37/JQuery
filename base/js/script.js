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

// $(function()
// {
//   const firstPara = $("p:first");
//   console.log(firstPara.text()); // This only have the text beside leaving any tag inside selected eleemnt but the content of it still be here
//   console.log(firstPara.html()); // This get everthing inside the tag we select

//   // firstPara.text("<h1>Hello world</h1>"); // This will keep the given value as a text even if it is a html
//   // firstPara.html("<h1>Hello world</h1>");
//   firstPara.html(firstPara.html() + "<h1>Hello world</h1>");
// })

//   setInterval(() =>
//     {
//       banner.attr("src", image[i]);
//       i = (i + 1) % image.length;
//     }, 2000);
// }); 

// $(function()
// {
//   $("#banner").hide();
//   const redbox = $(".red-box");
//   console.log(redbox.css("width")); // This will be string
//   console.log(redbox.width()); // This will be number
//   console.log(redbox.height()); // This will be number

//   $(".red-box").css("background-color", "orange")
//   $(".red-box").css("width", "+=20px")
//   $("p").css("font-size", "30px");

//   const properties = ["background-color", "height", "width"];
//   console.log(redbox.css(properties)); // This will return a object
//   console.log(properties["background-color"]);
//   // console.log(redbox.css("background-color"));

//   redbox.css("user-select", "none");

// })

// $(function () {
//   $("a").addClass('fancy-link');
//   $("p").addClass("large emphasize")

//   $("li li").addClass(function (index) {
//     $(this).addClass("item-" + (index + 1));
//   });

//   $("div").addClass(function (index, currentClass) {
//     if (currentClass === "dummy") return "blue-box";
//     else return "item-" + (index + 1);
//   });

//   $(".red-box").removeClass("red-box").addClass("blue-box")
//   $(".dummy").removeClass("dummy, blue-box").addClass("green-box");
//   console.log($(".dummy"))
// })

// $(function () {
// $("#btn-click").click(function (event) {
//   console.log(event);
//   alert("You clicked the button");
// })

// $(".red-box").click(function () {
//   $(this).css("opacity", "0.5");
// })
// $(".red-box").click();

// $("#btn-hover").hover(function (){
//   alert("You hovered the button");
// });

// $(".green-box").hover(function () {
//   $(this).text("I was hovered");
// })

// $(".blue-box").mouseenter(function () {
//   $(this).stop().fadeTo(500, 0.3);
// })
// $(".blue-box").mouseleave(function () {
//   $(this).stop().fadeTo(500, 1);
// })

// $(".blue-box").hover(function () {
//   $(this).stop().fadeTo(500, 0.3);
// }, function () {

//   $(this).stop().fadeTo(500, 1);
// })


//   const banner = $("#banner");
//   let count = 1;
//   let image = [
//     "./images/laptop-mobile_small.jpg",
//     "./images/laptop-on-table_small.jpg",
//     "./images/people-office-group-team_small.jpg",
//   ];
//   banner.on("click", function () { return imageChangeHandler(count, image, banner) });
//   const counter = $("#counter");
//   let i = 1;
//   $("html").on("click keydown", function () { return eventLogger(counter, i) })
// })

// function eventLogger(counter, i) {
//   counter.text(i++);
//   console.log("This is event from click or keydown is fired");
// }
// function imageChangeHandler (count, image, banner) {
//     count = count + 1;
//     $(banner).fadeOut(function () {
//       banner.attr("src", image[count % image.length]).fadeIn();
//     })

//   }

// $(function () {
// $("p").on("click", function (param) {  
//   $(this).slideUp();
// })

// $("#content").append("<p>This is a new dynamically added p tag</p>"); // Because this p tag is added dynamically so the event is not attached to this.
// So to solve this we have delegated events

// $("#content").on("click", "p", function () // The second parameter will be the selector for which the event should work 
// {
//   $(this).slideUp();
// })

//   $("body").on("mouseenter", "li li", function () {
//     $(this).css("color", "green");
//   })
// })

// $(function () {

//   function greetUser(data)  {
//   console.log("Hello " + data.name + " you are " + data.age + " years old and you were born on " + data.birth);
// }

// $("#btn-click").click({
//   name: "Shubham Kumar",
//   age: 22,
//   birth: "06-01-1998"
// }, function (event) {
//   greetUser(event.data);
//   console.log("This is the data inside the event", event.data);
// });
// })

// $(function () {
//   const banner = $("img");
//   banner.css("width", "30%").css("opacity", "0.6");

//   banner.hover(function () {
//     $(this).stop().fadeTo(400, 1);
//   }, function () {
//     $(this).stop().fadeTo(400, 0.6);
//   });

//   banner.on("click", function () {  
//     const newImageUrl = $(this).attr("src");
//     const newImage = $("<img>").attr("src", newImageUrl).css("width", "30%");
//     $(".lightbox").empty().fadeIn(1000).append(newImage).fadeIn(1000);
//   });

//   $(".lightbox").on("click", function()
// {
//   // $(this).fadeOut(1000, function () {
//   // })
//     $(this).empty().fadeOut(1000);
// });
// })

// $(function () {
//   $("html").keydown(function (event) {
//     console.log("You pressed a key", event.which);
//     if(event.which ==  39)
//     {
//       $(".blue-box").stop().animate({
//         "margin-left": "+=10px"
//       })
//     }
//   })
// })

$(function () {
  // const allInput = $("input:text, input[type='email'], textarea");

  // allInput.focus(function () {
  //   $(this).css("box-shadow", "10px 10px 10px black");
  // })

  // allInput.blur(function () {
  //   $(this).css("box-shadow", "none");
  // })

  // const textInput = $("input:text");
  // textInput.blur(function () {   
  //   let text = $(this).val();
  //   if(text.trim().length < 3) $(this).css("box-shadow", "10px 10px 10px red");
  //   else $(this).css("box-shadow", "10px 10px 10px green");
  // })

  $("input:checkbox").change(function () {
      const isChecked = $(this).is(":checked");
      if(isChecked)
      {
        $(this).add("label[for='cb'").css("box-shadow", "10px 10px 10px green");
      }
      else $(this).add("label[for='cb'").css("box-shadow", "10px 10px 10px red");
  })


  $("#selection").change(function()
{
  const selectedValue = $(":selected");
  console.log("This is the selected value = ", selectedValue.val()); // This will give the value of the selected option
  console.log("This is the selected value = ", selectedValue.text()); // This will give the innerText of the selected option
  alert(selectedValue.text());

});
})