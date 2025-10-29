$(document).ready(function () {
  let nameNE = true
  let emailNE = true
  let phoneNE = true
  let passNE = true

  $('#name').on('keyup', nameValidation)

  function nameValidation() {
    let value = $('#name').val()
    const nameReg = /^[a-z ,.'-]+$/i

    // console.log(value);

    if (value.length === 0) {
      $('#name-error-pop').html('Required Field').show()
      nameNE = false
    } else if (value.length === 1) {
      $('#name').val(value.toUpperCase()).show()
      nameNE = false
    } else if (!nameReg.test(value)) {
      $('#name-error-pop').html('Please enter a valid name').show()
      nameNE = false
    } else if (value.length < 1) {
      $('#name-error-pop').html('Required Field').show()
      nameNE = false
    } else {
      $('#name-error-pop').html('')
      nameNE = true
    }

    if (nameNE === false) {
      $('#name').addClass('incorrect');
      $('body').addClass('overlay')

    } else {
      $('#name').removeClass('incorrect')
      $('body').removeClass('overlay')
    }
  }

  $('#email').on('keyup', emailValidation)

  function emailValidation() {
    let value = $('#email').val().trim()
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    console.log(value)

    if (value.length === 0) {
      $('#email-error-pop').html('Required Field').show()
      emailNE = false
    } else if (!emailReg.test(value)) {
      $('#email-error-pop').html('Please enter a valid email address').show()
      emailNE = false
    } else {
      $('#email-error-pop').html('')
      emailNE = true
    }

    if (emailNE === false) {
      $('#email').addClass('incorrect')
      $('body').addClass('overlay')

    } else {
      $('#email').removeClass('incorrect')
      $('body').removeClass('overlay')
    }
  }

  $('#phone').on('keyup', phoneValidation)

  function phoneValidation() {
    let value = $('#phone').val()
    const phoneReg = /^[0-9]{10}$/

    if (value.length === 0) {
      $('#phone-error-pop').html('Required Field').show()
      phoneNE = false
    } else if (!phoneReg.test(value)) {
      $('#phone-error-pop').html('Please enter a valid 10 digit phone number').show()
      phoneNE = false
    } else {
      $('#phone-error-pop').html('')
      phoneNE = true
    }

    if (phoneNE === false) {
      $('#phone').addClass('incorrect')
      $('body').addClass('overlay')
    } else {
      $('#phone').removeClass('incorrect')
      $('body').removeClass('overlay')
    }
  }

  $('#password').on('keyup', passValidation)

  function passValidation() {
    let value = $('#password').val()

    let msg = []
    const upCase = /[A-Z]/
    const lowCase = /[a-z]/
    const numOne = /\d/
    const speChar = /[@$!%*?&]/

    if (!upCase.test(value)) {
      msg.push('Require at least one uppercase letter')
      passNE = false
    }
    if (!lowCase.test(value)) {
      msg.push('Require at least one lowercase letter')
      passNE = false
    }
    if (!numOne.test(value)) {
      msg.push('Require at least one number')
      passNE = false
    }
    if (!speChar.test(value)) {
      msg.push('Require at least one special character (@$!%*?&)')
      passNE = false
    }
    if (value.length < 8) {
      msg.push('Minimum 8 characters required')
      passNE = false
    }
    if (value.length > 12) {
      msg.push('Maximum 12 characters required')
      passNE = false
    }
    if (msg.length > 0) {
      $('#pass-error-pop').html(msg.join('<br>')).show()
    } else {
      $('#pass-error-pop').html('')
      passNE = true
    }
    if (passNE === false) {
      $('#password').addClass('incorrect')
      $('body').addClass('overlay')
    } else {
      $('#password').removeClass('incorrect')
      $('body').removeClass('overlay')
    }
  }

  $('#user-name').on('keyup', userNameValidation)

  function userNameValidation() {
    let value = $('#user-name').val().trim()
    const nameReg = /^[a-zA-Z0-9._-]{3,16}$/

    if (value.length === 0) {
      $('#name-error-pop').html('Required Field').show()
      $('#user-name').addClass('incorrect')
    } else if (!nameReg.test(value)) {
      $('#name-error-pop').html('only letters, numbers, . _ - ').show()
      $('#user-name').addClass('incorrect')
    } else {
      $('#name-error-pop').html('')
      $('#user-name').removeClass('incorrect')
    }
  }

  $('#confirm-password').on('keyup', confirmPasswordValidation)

  function confirmPasswordValidation() {
    const pass = $('#password').val()
    const confirm = $('#confirm-password').val()

    if (confirm.length === 0) {
      $('#con-pass-error-pop').html('Required Field').show()
      $('#confirm-password').addClass('incorrect')
    } else if (confirm !== pass) {
      $('#con-pass-error-pop').html('Passwords do not match').show()
      $('#confirm-password').addClass('incorrect')
    } else {
      $('#con-pass-error-pop').html('')
      $('#confirm-password').removeClass('incorrect')
    }
  }



  $('#form').submit(function () {
    nameNE = true
    emailNE = true
    phoneNE = true
    passNE = true

// checks input existance
    if ($('#name').length) nameValidation();
    if ($('#user-name').length) userNameValidation();
    if ($('#email').length) emailValidation();
    if ($('#phone').length) phoneValidation();
    if ($('#password').length) passValidation();
    if ($('#confirm-password').length) confirmPasswordValidation();

    let valid = true;

    if ($('#name').length && !nameNE) valid = false;
    if ($('#user-name').length && $('#user-name').hasClass('incorrect')) valid = false;
    if ($('#email').hasClass('incorrect')) valid = false;
    if ($('#phone').length && $('#phone').hasClass('incorrect')) valid = false;
    if ($('#password').hasClass('incorrect')) valid = false;
    if ($('#confirm-password').length && $('#confirm-password').hasClass('incorrect')) valid = false;

    return valid
  });
  $('input').on('focus', function () {
    $(this).removeClass('incorrect')
  })



// Show Password Toggle Eye Icon


    $('#togglePassword').on('click', function(){
        const passwordInput = $('#password');
        const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', type);

        // toggle the icon
        $(this).toggleClass('fa-eye fa-eye-slash');
    })

     $('#toggleConfirmPassword').on('click', function () {
       const confirmInput = $('#confirm-password')
       const type = confirmInput.attr('type') === 'password' ? 'text' : 'password'
       confirmInput.attr('type', type)

       // toggle the icon
       $(this).toggleClass('fa-eye fa-eye-slash')
     })
})
