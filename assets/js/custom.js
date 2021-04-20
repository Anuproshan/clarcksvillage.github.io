// +++++++++++++++++++++++++++++++++++++++
// +++++++++ CUSTOM JAVASCRIPT +++++++++++
// +++++++++++++++++++++++++++++++++++++++
$(window).scroll(function(){
if ($(this).scrollTop() > 5) {
$(".header").addClass("fixed-top");
}
else{
$(".header").removeClass("fixed-top");
}
});
$(function(){
$(window).scroll(function(){
if ($(this).scrollTop() > 5){
$(".navbar .navbar-brand img").attr("src","assets/image/LOGO-ONE.png");
}
else{
$(".navbar .navbar-brand img").attr("src","assets/image/LOGO-TWO.png");
}
});
});