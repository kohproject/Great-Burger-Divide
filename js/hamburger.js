(function(){
    const $body = document.getElementById('body');
    const hamburger = document.getElementById('hamburger');
    const toggleswitch = document.getElementById('link_toggleswitch');
    const asideSection = document.getElementById('aside_menu');

    const closeAsideList = () =>{
       let $li = asideSection.getElementsByTagName('ul')[0].getElementsByClassName('li__cat');
       Array.from($li).forEach(el =>{
        el.className = 'li__cat';
       })
    }

    const showAside = () =>{
        window.scrollTo({ top: 0, left: 0});
        if($body.classList.contains('openAside')){
            $body.classList.remove('openAside');
            closeAsideList();
            d3.select("#statesvg").selectAll(".state").style("fill","#fffdf4");
            d3.select("#block_state-sign").classed('open2',false);
            let $timer = setTimeout(()=>{
                d3.select("#block_state-sign").classed('open',false);
                $body.classList.remove('openMarquee');
                clearTimeout($timer);
              },300);
            return;
        }
        $body.classList.add('openAside');
        $body.classList.remove('openMarquee');
        return;
    }

    

    toggleswitch.addEventListener('click',(evt)=>{
        evt.preventDefault();
    
        showAside();
        return false;
    });


    hamburger.addEventListener('click',(evt)=>{
        evt.preventDefault();
        showAside();
        return false;
    });

}())