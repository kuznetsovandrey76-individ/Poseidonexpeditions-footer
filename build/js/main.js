"use strict";$(document).ready(function(){$(".footer-menu__heading button").on("click",function(){var a,e=$(this).parent().parent();a=e,"true"===$(a).attr("data-collapse")?($("[data-collapse='true']").attr("data-collapse","true").removeClass("corner-up").addClass("corner-down"),$("[data-collapse='false']").attr("data-collapse","true").removeClass("corner-up").addClass("corner-down"),a.toggleClass("corner-down"),a.toggleClass("corner-up"),$(a).attr("data-collapse","false")):(a.toggleClass("corner-down"),a.toggleClass("corner-up"),$(a).attr("data-collapse","true"))})});