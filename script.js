function openForm() {
    document.getElementById("myForm").style.display = "block";
    
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  function myFunction() {
    let many = document.getElementById("many").value;
  alert("Successfully ordered"+"," + " " + many+" " + " pizzas")

}



$(document).ready(function() {

    $("#p1").click(function() {
        $(".ul1").show();
        $("#option1").show();
        $(".ul2").hide();
        $(".ul3").hide();
        $("#img4").hide();
        $("#img3").show();
        $("#img2").hide();
        $("#img1").hide();
      
      });
    $("#list1").click(function() {
      $("#show1").show();
      $("#demo").html("<b>Small Crispy with topping</b>");
      $("#demos").html("<b>500</b>");
      $("#show11").hide();
      
    });
    $("#list11").click(function() {
      $("#show1").hide();
      $("#demo").html("<b>Small Crispy without topping</b>");
      $("#demos").html("<b>700</b>");
      $("#show11").show();
      
    });
  
    $("#p2").click(function() {
      $(".ul1").hide();
      $(".ul2").show();
      $("#option2").show();
      $(".ul3").hide();
      $("#img4").hide();
      $("#img3").hide();
      $("#img2").show();
      $("#img1").hide();
  
  
    });
  $("#list2").click(function() {
    $("#show2").show();
    $("#demo").html("<b>Small Stuffed with topping</b>");
    $("#demos").html("<b>850</b>");
    $("#show22").hide();
    
  });
  $("#list22").click(function() {
    $("#show2").hide();
    $("#demo").html("<b>Small Stuffed without topping</b>");
    $("#demos").html("<b>750</b>");
    $("#show22").show();
    
  });
  
  $("#p3").click(function() {
    $(".ul1").hide();
    $(".ul2").hide();
    $(".ul3").show();
    $("#option3").show();
    $("#img4").hide();
    $("#img3").hide();
    $("#img2").hide();
    $("#img1").show();
  
  });
  $("#list3").click(function() {
  $("#show3").show();
  $("#demo").html("<b>Small Gutten with topping</b>");
  $("#demos").html("<b>1050</b>");
  $("#show33").hide();
  
  });
  $("#list33").click(function() {
  $("#show3").hide();
  $("#show33").show();
  $("#demo").html("<b>Small Gutten without topping</b>");
  $("#demos").html("<b>900</b>");
  
  });
  
  });