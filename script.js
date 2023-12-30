document.addEventListener('DOMContentLoaded', function(){
    var bimage = document.querySelector('.image img');
    var switchback =  document.querySelector('.switch input');
    switchback.addEventListener('change', function()
    {
        if(this.checked)
        {
            bimage.src = "bulb-on.png";
        }
        else
        {
            bimage.src  = "bulb-off.png";
        }
    });
});
