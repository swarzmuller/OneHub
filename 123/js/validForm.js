      //validate upon entry
$(".validate input, .validate select, .validate textarea").filter('[required]').change ( function () {
  validate ( this );
  if ( $("#validate-error").is(":visible")) {
    validateAll();
  };
});

//validate on submission
$( ".validate" ).submit(function(event) {
  validateAll();
  $("#shippingForm").removeClass("hidden");
  var errors = calculateErrors ();
  if (errors > 0) {
    return false;
  } else {
  return false;
  };
});

function calculateErrors () {
  var errors = $('.validate .error').length;
  if (errors > 0) {
    $("#validate-error").text("Error, please select  "+errors+" fields.").removeClass("hidden") .addClass("validate-error");
  } else {
  $("#validate-error").text("Success, everything is awesome.").removeClass("hidden, alert-danger").addClass("alert-success");
  };
  return errors;
};
            
function validateAll() {
  $(".validate input, .validate select, .validate textarea").each(function(){
    validate ( this );
  });
  calculateErrors ();
};

function validate (a) {
  var val = $(a).val();
  if (a.checked) { val = 'on' };
    if ( val == '' || val == null ){
        $( a ).addClass( "error" );
    } else {
        $( a ).removeClass( "error" );
    };
};