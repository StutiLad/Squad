let nav = document.getElementById('top-nav');

window.onscroll = function () {
    let scroll = window.pageYOffset;
    if (scroll < 400) {
        nav.style.display = '';
    } else if (scroll >= 400) {
        nav.style.display = 'none';
    }
}

$('.image-slider').slick({
    autoplay: true,
    autoplaySpeed: 50000,
});

$("#name").keyup(function () {
    var text = $(this).val();
    var nameReg = new RegExp('([a-zA-Z]{3,10}\s*)+');
    if (!nameReg.test(text)) {
        $('#name').css('color', 'red', 'border-color', 'red')
    } else {
        $('#name').css('color', 'white')
    }
    console.log('name')
})

$("#phone").keyup(function () {
    var text = $(this).val();
    var nameReg = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
    if (!nameReg.test(text)) {
        $('#phone').css('color', 'red')
    } else {
        $('#phone').css('color', 'white')
    }
    console.log('phone')
})

$("#email").keyup(function () {
    var text = $(this).val();
    var nameReg = new RegExp('^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$');
    if (!nameReg.test(text)) {
        $('#email').css('color', 'red')
    } else {
        $('#email').css('color', 'white')
    }
    console.log('email')
})

function validation() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name.trim() || name == '' || name == null) {
        alert("Enter Name..!");
    }
    else if (!phone.trim() || phone == "" || phone == null) {
        alert("Enter Phone Number..!");
    }
    else if (phone.length < 10 || phone.length > 10) {
        alert("Invalid Phone number.")
    }
    else if (email == "" || email == null) {
        alert("Enter Email..!");
    }
    else if (!message.trim() || message == "" || message == null) {
        alert("Enter Message..!");
    }
    else {
        alert("Thanks...I received your message.");
        document.getElementById('contactForm').reset();
    }
}