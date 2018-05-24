$(document).ready(function(){
  $('#email_id').on('keyup focus', function(){
    var user_input = document.getElementById('email_id').value;
    if( user_input.match( /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ) ){
      $('#email_error').hide();
    }
    else{
      $('#email_error').show();
    }
  });
});

