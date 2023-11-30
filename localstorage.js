
// create new localstorage
if (localStorage.getItem("myDataa") == null) {
    var dataArray = ["del area","opcion","disease","2023-11-15","6:15 Am","6:45 Am"];
    localStorage.setItem("myDataa", dataArray);
}
// frame3 change localstorage
$("#opcion").change(function(){
    if ($("#opcion").val() != "") {
        var dataa = localStorage.getItem("myDataa");
        dataa = dataa.split(",");
        dataa[1] = $("#opcion").val();
        localStorage.setItem("myDataa", dataa);
        var href = $("#next-page").attr("data-href");
        $("#next-page").attr("href",href)
    }else{
        $("#next-page").removeAttr("href")
    }
});
// frame4 change localstorage
$(".fram4-content .flex-box .flex-col").click(function(){
    $(".fram4-content .flex-box .flex-col").removeClass("active");
    var dataa = localStorage.getItem("myDataa");
    dataa = dataa.split(",");
    dataa[2] = $($(this).find(".title")).text();
    localStorage.setItem("myDataa", dataa);
    var href = $("#next-page").attr("data-href");
    $("#next-page").attr("href",href)
    $(this).addClass("active");
})
// horarios change localstorage
$(".horarios-body #date").change(function(){
    var dateVal = $(this).val();
    var dataa = localStorage.getItem("myDataa");
    dataa = dataa.split(",");
    dataa[3] = $(this).val();
    localStorage.setItem("myDataa", dataa);
    $(this).blur();
});
$(".horarios-body #start_time").change(function(){
    var timeString = $(this).val();
    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
        .toLocaleTimeString('en-US', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
    var dataa = localStorage.getItem("myDataa");
    dataa = dataa.split(",");
    dataa[4] = timeString12hr;
    localStorage.setItem("myDataa", dataa);
    $(this).blur();
});
$(".horarios-body #end_time").change(function(){
    var timeString = $(this).val();
    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
        .toLocaleTimeString('en-US', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
    var dataa = localStorage.getItem("myDataa");
    dataa = dataa.split(",");
    dataa[5] = timeString12hr;
    localStorage.setItem("myDataa", dataa);
    
    $(this).blur();
});

