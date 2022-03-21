function openForm() {
    document.getElementById("myForm").style.display = "block";
    
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



  function myFunction() {
    let many = document.getElementById("many").value;
    let total10 = document.getElementById("enter").textContent;
    let pizza10 = document.getElementById("demo").textContent;
  alert("Successfully ordered"+ " "+  many + " " + pizza10 +"," +" " + " pizzas" + " " + "for" + " " + total10 + " "+ ".Thank you for shopping with Pizza Pie")

}


function myTotal() {
    let amount = document.getElementById("demos").textContent;
    let total = document.getElementById("many").value;
    let pep = document.getElementById("pep").checked;
    let bacon = document.getElementById("bacon").checked;
    let olives = document.getElementById("olives").checked;

    if(pep == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total + 100*total);
    }
    else if (bacon == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total +200*total);
    }
    else if (olives == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total +300*total);
    }
    else if (olives == true || bacon == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total +500*total);
    }
    else if (olives == true && pep == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total +400*total);
    }
    else if (pep == true && bacon == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total +300*total);
    }
    else if (olives == true && bacon == true && pep == true){
      document.getElementById("enter").innerHTML = "Ksh" +" " + (amount*total +600*total);
    }
    else{
      document.getElementById("enter").innerHTML = "Ksh" +" " + amount*total;
    }
    
  
    // document.getElementById("enter").innerHTML = "Ksh" +" " + amount*total;
  
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
      $("#show11").hide();
      
    });
    $("#list11").click(function() {
      $("#show1").hide();
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
    $("#show22").hide();
    
  });
  $("#list22").click(function() {
    $("#show2").hide();
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
  $("#show33").hide();
  
  });
  $("#list33").click(function() {
  $("#show3").hide();
  $("#show33").show();
  
  });
  
  });


  $(document).ready(function() {

  $("#p4").click(function() {
      $(".ul4").show();
      $("#option4").show();
      $("#option1").hide();
      $("#option2").hide();
      $("#option3").hide();
      $(".ul3").hide();
      $(".ul5").hide();
      $(".ul6").hide();
      $("#img5").hide();
      $("#img6").show();
      $("#img7").hide();
      $("#img8").hide();
    
    });
  $("#list4").click(function() {
    $("#show4").show();
    $("#show44").hide();
    
  });
  $("#list44").click(function() {
    $("#show4").hide();
    $("#show44").show();
    
  });

  $("#p5").click(function() {
    $(".ul4").hide();
    $(".ul5").show();
    $("#option5").show();
    $(".ul6").hide();
    $("#img5").hide();
    $("#img6").hide();
    $("#img7").show();
    $("#img8").hide();


  });
$("#list5").click(function() {
  $("#show5").show();
  $("#show55").hide();
  
});
$("#list55").click(function() {
  $("#show5").hide();
  $("#show55").show();
  
});

$("#p6").click(function() {
  $(".ul4").hide();
  $(".ul5").hide();
  $(".ul6").show();
  $("#option6").show();
  $("#img5").hide();
  $("#img6").hide();
  $("#img7").hide();
  $("#img8").show();

});
$("#list6").click(function() {
$("#show6").show();
$("#show66").hide();

});
$("#list66").click(function() {
$("#show6").hide();
$("#show66").show();

});

});


$(document).ready(function() {

  $("#p7").click(function() {
      $(".ul7").show();
      $("#option7").show();
      $("#option4").hide();
      $("#option5").hide();
      $("#option6").hide();
      $(".ul6").hide();
      $(".ul8").hide();
      $(".ul9").hide();
      $("#img9").hide();
      $("#img10").show();
      $("#img11").hide();
      $("#img12").hide();
    
    });
  $("#list7").click(function() {
    $("#show7").show();
    $("#show77").hide();
    
  });
  $("#list77").click(function() {
    $("#show7").hide();
    $("#show77").show();
  });

  $("#p8").click(function() {
    $(".ul7").hide();
    $(".ul8").show();
    $("#option8").show();
    $(".ul9").hide();
    $("#img9").hide();
    $("#img10").hide();
    $("#img11").show();
    $("#img12").hide();


  });
$("#list8").click(function() {
  $("#show8").show();
  $("#show88").hide();
  
});
$("#list88").click(function() {
  $("#show8").hide();
  $("#show88").show();
  
});

$("#p9").click(function() {
  $(".ul7").hide();
  $(".ul8").hide();
  $(".ul9").show();
  $("#option9").show();
  $("#img9").hide();
  $("#img10").hide();
  $("#img11").hide();
  $("#img12").show();

});
$("#list9").click(function() {
$("#show9").show();
$("#show99").hide();

});
$("#list99").click(function() {
$("#show9").hide();
$("#show99").show();

});

});

$(document).ready(function() {

    $("#add").click(function() {
      $("#demo").html("<b>Small Crispy with topping</b>");
      $("#demos").html("<b>700</b>");
    $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add2").click(function() {
      $("#demo").html("<b>Small Crispy without topping</b>");
      $("#demos").html("<b>500</b>");
      $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
    $("#add3").click(function() {
        $("#demo").html("<b>Small Stuffed with topping</b>");
        $("#demos").html("<b>850</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add4").click(function() {
        $("#demo").html("<b>Small Stuffed without topping</b>");
        $("#demos").html("<b>750</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
    $("#add5").click(function() {
        $("#demo").html("<b>Small Gutten with topping</b>");
        $("#demos").html("<b>1050</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add6").click(function() {
        $("#demo").html("<b>Small Gutten without topping</b>");
        $("#demos").html("<b>900</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
})

$(document).ready(function() {

    $("#add7").click(function() {
        $("#demo").html("<b>Medium Crispy with topping</b>");
        $("#demos").html("<b>1200</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add8").click(function() {
        $("#demo").html("<b>Medium Crispy without topping</b>");
        $("#demos").html("<b>1100</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
    $("#add9").click(function() {
        $("#demo").html("<b>Medium Stuffed with topping</b>");
        $("#demos").html("<b>1400</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add10").click(function() {
        $("#demo").html("<b>Medium Stuffed without topping</b>");
        $("#demos").html("<b>1350</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
    $("#add11").click(function() {
        $("#demo").html("<b>Medium Gutten with topping</b>");
        $("#demos").html("<b>1600</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add12").click(function() {
        $("#demo").html("<b>Medium Gutten without topping</b>");
        $("#demos").html("<b>1450</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
})

$(document).ready(function() {

    $("#add13").click(function() {
        $("#demo").html("<b>Large Crispy with topping</b>");
        $("#demos").html("<b>1850</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add14").click(function() {
        $("#demo").html("<b>Large Crispy without topping</b>");
        $("#demos").html("<b>1750</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
    $("#add15").click(function() {
        $("#demo").html("<b>Large Stuffed with topping</b>");
        $("#demos").html("<b>2000</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add16").click(function() {
        $("#demo").html("<b>Large Stuffed without topping</b>");
        $("#demos").html("<b>1900</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
    $("#add17").click(function() {
        $("#demo").html("<b>Large Gutten with topping</b>");
        $("#demos").html("<b>2500</b>");
        $("#pep").show();
    $("#bacon").show();
    $("#olives").show();
    $("#pep1").show();
    $("#bacon1").show();
    $("#olives1").show();
    })
    $("#add18").click(function() {
        $("#demo").html("<b>Large Gutten without topping</b>");
        $("#demos").html("<b>2200</b>");
        $("#pep").hide();
    $("#bacon").hide();
    $("#olives").hide();
    $("#pep1").hide();
    $("#bacon1").hide();
    $("#olives1").hide();
    })
})