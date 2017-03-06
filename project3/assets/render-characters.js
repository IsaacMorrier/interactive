$('.letters').each(function() {
  var $letterWrapper = $(this);
  var letters = $letterWrapper.html().split('');
  var letterArray = [];

  for (i = 0; i < letters.length; i++) {
    console.log(letters[i]);

    var character = letters[i];
    var characterDefinition = $('.character-definition[data-character="' + character + '"]').html();
    var characterHTML = characterDefinition ;
    
    letterArray.push(characterHTML);
  };

  $letterWrapper.html(letterArray);
});
