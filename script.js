function compute()
{
    //principal input tag
    var principal = document.getElementById("principal").value;
    if(principal == "" || principal <= 0)
    {
        //to display an alert every time a user enters a positive or negative number or blank
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    //rate input tag
    var rate = document.getElementById("rate").value;
    
    //years input tag
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    //text displayed once computer interest is clicked
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<mark>" + principal + "</mark>"  + ", <br> at an interest rate of "+ "<mark>" + rate + "%</mark>." + "<br> You will receive an amount of " + "<mark>" + interest + "</mark>" + ", <br> in the year " + "<mark>" + year + "</mark>";
}

    function updateRate() 
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value;

    //to update slider value 
    rateval.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
        