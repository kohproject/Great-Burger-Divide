document.addEventListener("DOMContentLoaded", function() { 
   
    const fetchData = async(url) =>{
     
        await fetch(url, {
            method: 'GET',
           
            cache: 'no-cache'
          }).then((response) => response.json())
            .then((data) => {
             initAside(window.d3,data.rests);
          })
    }
      
    fetchData('http://www.sonnykoh.com/api/restaurants.php');
})


