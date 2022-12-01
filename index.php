<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">

    <link rel="stylesheet" href="css/burgerDivide.css" type="text/css" />
    <title>Eat Here !!!</title>
</head>
<body id="body" class="home">
   
    <?php
   include('inc/header.inc');
   ?>
    <div class="container open" id="container">
        <main id="main">
            <section class="sect__accent">
                <!-- <div class="wrap__search" id="wrap_search">
                    <em></em>
                    <span class="inp__wrap" id="inp_search-wrap">
                    <input type="text" id="inp_search"/>
                        <ul id="list_search-drop" class="list__search-drop"></ul>
                    </span>
                </div> -->
                <div class="wrap__marquee">
                    
                        <div class="block__marquee" id="block_state-sign">
                            <h3><span id="sp__title-name"></span></h3>
                            <div class="flipper">
                                <div class="flip">
                                    <p> is available in <span id="sp__state-num"></span> states in the<br/>United States.</p>
                                 
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <svg width="960" height="640" id="statesvg"></svg>
           <span id="sp_pointer" class="sp__pointer"></span>
        </main>
    </div>

    <?php include('inc/aside.inc') ?>
    <?php include('inc/nav.inc') ?>

    <a href="javascript:void(0)" id="link_toggleswitch" class="link__toggleswitch"><em></em></a>

    <script src="https://ajax.googleapis.com/ajax/libs/d3js/7.4.2/d3.min.js"></script>
    <script type="text/javascript" defer src="js/states.js"></script>
    <!-- <script type="text/javascript" defer src="js/searchcomplete.js"></script> -->
    <script type="text/javascript" src="js/hamburger.js"></script>


   
</body>
</html>