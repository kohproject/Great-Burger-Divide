function initAside (d3,rArr) {
    
      const d3body = d3.select("body");
      const addBodyCls = (cl, bool, _bool) => {
        if (_bool) {
          d3body.attr("class", "");
          return;
        }
        d3body.classed(cl, bool);
        return;
      };
    
      let currentId = null;
      const setOpenLink = (id, cl, openStatus) => {
        let $bodycl = "body-" + cl.split("__")[1];
    
        d3.select(".link__type-name.active").classed("active", false);
        d3.select(".sect__aside-top").classed("search-active", false);
    
        /* == reset map when close accordian ==*/
        if (openStatus || currentId !== id) {
          setMapUSA({ bool: false, arr: [] },false);
          addBodyCls("openMarquee", false);
        }
        currentId = id;
    
        d3.selectAll("." + cl).each(function () {
          var $el = d3.select(this);
          if ($el.attr("id") === id) {
            $el.classed("open", !$el.classed("open"));
            $el.classed("open")
              ? addBodyCls($bodycl, true)
              : addBodyCls($bodycl, false, true);
          } else {
            $el.classed("open", false);
          }
        });
    
        var $index = parseInt(id.replace("li_cat", ""));
        var $num = $index++;
        var $heightEl = 48; // height of the link block including padding;
        var $point = openStatus ? 0 : $num * $heightEl + $index;
    
        scrollAside($point);
      };
    
      const scrollAside = (tPoint) => {
        var $delay = tPoint > 0 ? 100 : 0.01;
    
        setTimeout(() =>
            window.scroll({
              top: tPoint,
              left: 0,
              behavior: "smooth",
            }),
          $delay
        );
      };
    
      const setMapUSA = (obj,_bool) => {
        let $data = obj.arr;
        //old hilite = "#dae4fd"
        let $color = "#fffdf4";
        let hilite = "#693c4f";
        let $clickColor = "#dbedfe";
        hilite = "#0382ab";
        hilite ='rgb(255, 243, 196)';
        hilite ='#cad9e4';
    
        d3.select("#statesvg").selectAll(".state").style("fill", $color);
        
        $color = obj.bool ? hilite : "#fffdf4";
        if(_bool) $color=$clickColor;
    
        if (obj.bool === true) {
          d3.select("#statesvg")
            .selectAll(null)
            .data($data)
            .enter()
            .each((d) => {
              d3.select("#path_" + d.toUpperCase()).style("fill", $color);
            });
          return;
        }
      };
    
      const funct1 = function(bool){
        d3.select("#block_state-sign").classed("open",bool);
        addBodyCls("openMarquee", bool);
      }
      const funct2 = function(bool){
        d3.select("#block_state-sign").classed('open2',bool);
      }
    
      const setFlipSign = (bool) =>{
        let actFunct = (bool) ? funct1 : funct2;
        let actFunct2 = (actFunct == funct1) ? funct2 : funct1;
       
        actFunct(bool);
        let $timer = setTimeout(()=>{
          actFunct2(bool)
          clearTimeout($timer);
        },300);
      }
    
      const shoRestDisplay = ( name, _arr,_bool) => {
        if(name.toUpperCase() !==  d3.select("#sp__title-name").text()){
          funct1(false);
          funct2(false);
        }
      
        d3.select("#sp__title-name").text(name.toUpperCase());
        d3.select("#sp__state-num").text(_arr.length > 50 ? "all 50" : _arr.length);
      
        let $status = d3.selectAll(".active").size() > 0 ? true : false;
    
        setFlipSign($status);
      
        if (!$status) {
          setMapUSA({ bool: false, arr: []},false);
          return;
        }
        setMapUSA({ bool: true, arr: _arr },_bool);
        return;
      };
    
      const $ul = d3
        .select("#aside_menu")
        .append("ul")
        .classed("list__aside", true)
        .selectAll("link__type")
        .data(rArr)
        .enter()
        .each(function (d, index) {
          var $this = d3.select(this);
          var $li = $this.append("li");
    
          $li
            .classed("li__cat", true)
            .classed("open", false)
            .attr("id", "li_cat" + index)
            .append("a")
            .attr("id", "link_type" + index)
            .classed("link__type", true)
            .on("click", function (evt) {
              evt.preventDefault();
                setOpenLink("li_cat" + index,"li__cat", d3.select("#li_cat" + index).classed("open"));
              return false;
            })
            .append("h3")
            .text(d.type);
    
          $li
            .append("ol")
            .selectAll("li")
            .data(function () {
              return d.list;
            })
            .enter()
            .each(function (obj, j) {
              d3.select(this)
                .append("li")
                .append("a")
                .classed("link__type-name", true)
                .attr("id", "link_type-name-" + index + "-li-" + j)
                .attr("data-loc", obj.loc)
                .attr("data-name", obj.name)
                .attr("href", "#")
                .classed("active", false)
                .text(obj.name)
                .on("mouseover", function () {
                  if (d3body.classed("openMarquee")) return;
                  setMapUSA({ bool: true, arr: obj.loc },false)
                })
                .on("mouseout", function () {
                  if (d3body.classed("openMarquee")) return;s
                  setMapUSA({ bool: false, arr: obj.loc },false);
                })
                .on("click", function (evt) {
                  evt.preventDefault();
               
                  var isActive = d3.select(this).classed("active");
    
                  d3.selectAll(".link__type-name").attr("class", "link__type-name");
                  d3.select(this).classed("active", !isActive);
    
                  shoRestDisplay(obj.name, obj.loc,true);
                  return false;
                });
            });
        });
    
      scrollAside(0);
    
    }

    
    
     
    
     
        
     
    
    
    