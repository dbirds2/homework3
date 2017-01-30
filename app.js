(function ($) {

     function generate() {
    var myString = ["The, quick, brown,  fox,  jumps,  over,  the,  lazy,  dog"];
    var splits = myString.split(" ");
    var x = document.getElementById(generate);
    window.alert(splits);
  }

     function sortWords(){
      var myArray = ["The,  quick,  brown,  fox,  jumps,  over,  the,  lazy,  dog"];
      var b = myArray.sort(" ");
      window.alert(b);
    }

    function wordLengths(){
       var longWords =  ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
       var x = longWords.sort(function (a, b) {
        return (a.length < b.length);
        window.alert(x);



    });

      function wordReverse() {
        var words = ["The", "quick", brown, fox, jumps, over, the, laz, dog];
        var shortWords = words.reverse(" ");
    window.alert(shortWords);


    }




    $("#generate").on("click", function (event){
      $('#guid').html(generate());
});

    $("#sortWords").on("click", function (event){
      $('#guid').html(sortWords());
});

    $("#wordLengths").on("click", function (event){
      $('#guid').html(wordLengths());
});
    $("#wordReverse").on("click", function (event){
      $('#guid').html(wordReverse());


    });
 })(jQuery);
