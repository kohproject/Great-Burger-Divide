<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/burgerDivide.css" type="text/css" />
   


    <title>Document</title>
</head>

<body id="body" class="contact">
   
    <?php
   include('inc/header.inc');
   ?>
    <div class="container-contact" id="container">
    <section class="sect__accent"></section>
        <main id="main">
            <section>
                <div class="contact__wrapper" id="contactWrapper">
                    <h2>Sure...</h2>
                    <h3>I will let the manager know.</h3>
                    <div id="response" class="contact-response">
                        <div>
                            <h3>Thank You.</h3>
                            <p>Your message has been sent...</p>
                        </div>
                    </div>
                    <form id="form_contact">
                        <ul>
                            <li class="li__req"> 
                                <label class="before-required-star" for="name">Name<span
                                        class="sp__error-mess"></span></label>
                                <input type="text" class="inp__txt inp-req" id="name" name="name" required>
                            </li>
                            <li class="li__req">
                                 <label class="before-required-star" for="email">Email<span
                                        class="sp__error-mess"></span></label>
                                <input type="text" class="inp__txt inp-req" id="email" name="email" required>
                            </li>
                            <li class="li__req">
                                <label class="before-required-star" for="subject">Subject<span
                                        class="sp__error-mess"></span></label>
                                <input type="text" class="inp__txt inp-req" id="subject" name="subject" required>
                            </li>
                            <li class="li__req">
                                <label class="before-required-star" for="message">Message<span
                                        class="sp__error-mess"></span></label>
                                <textarea name="message" class="textarea__mess inp-req" id="message" cols="30" rows="10"
                                    required></textarea>

                            </li>
                            <li>
                                <div class="wrapper__btn margintop10 wide100 centered">
                                    <button id="btn_submit"
                                        class="base__btn btn-red btn-med-large wide80 centered">Submit</button>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </main>
    </div>
    <?php
   include('inc/nav.inc');
   ?>
    <?php include('inc/footer.inc') ?>
</body>
<script type="text/javascript">
(function() {

    const $ = (id) => document.getElementById(id);
    const requiredItems = document.querySelectorAll('.li__req');
    const validate = () => {
        let validBool = true;
            requiredItems.forEach(itm => {
                var inp = itm.getElementsByClassName('inp-req')[0];
                if (inp.value === '') {
                    itm.classList.add('err');
                    validBool = false;
                }
                if ((inp.id === 'email' && inp.value.indexOf('@') === -1) ||
                    (inp.id === 'email' && inp.value.indexOf('.') === -1)) {
                    itm.classList.add('err-email');
                    validBool = false;
                }
        })
        return validBool;
    }
    const resetForm =() =>{
        document.querySelectorAll('.inp-req').forEach(el =>{
            el.value ='';
        });
    }
    const setSuccess =() =>{
        var $wrapper = $("contactWrapper").classList;
        ($wrapper.contains('success')) 
        ? $wrapper.remove('success') 
        : $wrapper.add('success')
    }

    document.querySelectorAll('.li__req').forEach(el => {
        var $inp = el.getElementsByClassName('inp-req')[0]
            $inp.addEventListener('keyup', (e) => {
            if (el.classList.contains('err')){
                el.classList.remove('err');
            }
            if (($inp.value.indexOf('@') > 0) && ($inp.value.indexOf('.') > 0)) {
                el.classList.remove('err-email');
            }
        })
    })

    $('btn_submit').addEventListener('click', (e) => {
        e.preventDefault();
        if(!validate()) return false;

        let $messObj = {"name":$('name').value,
                        "email":$('email').value,
                        "subject":$('subject').value,
                        "mess":$('message').value}

           resetForm();
         
           setSuccess();
           setTimeout(function(){
            setSuccess();
           },2200)



        return false;
    });
}())
</script>

</html>