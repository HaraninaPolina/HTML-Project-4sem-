var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let darkTheme = "css/style1.css";
    let lightTheme = "css/style2.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == darkTheme)
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }
    else
    {    
   	 currTheme = darkTheme;
   	 theme = "dark";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}


// Slider --------------------

