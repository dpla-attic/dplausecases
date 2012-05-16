jQuery(document).ready(function ($) {

	$(".profile-thumb-container").css( 'cursor', 'pointer' ).click(function() {
        window.location.href = $('a', this).attr('href');
    });
	
	$(".profile-thumb-container").hover(function(){
  		$(this).css("background-color","yellow");
  		},function(){
  		$(this).css("background-color","white");
	});

//////

var $notOrion = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notBecky = $('#use-case-uno, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notJoanie = $('#use-case-dos, #use-case-uno, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notChuck = $('#use-case-dos, #use-case-tres, #use-case-uno, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notFern = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-uno, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notD = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-uno, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notAlthea = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-uno, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notBraulio = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-uno, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-doce');

var $notWendy = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-uno, #use-case-diez, #use-case-once, #use-case-doce');

var $notCarl = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-uno, #use-case-once, #use-case-doce');

var $notDarla = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-uno, #use-case-doce');

var $notSumit = $('#use-case-dos, #use-case-tres, #use-case-cuatro, #use-case-cinco, #use-case-seis, #use-case-siete, #use-case-ocho, #use-case-nueve, #use-case-diez, #use-case-once, #use-case-uno');

///////

$notOrion.hide();


    var disqus_shortname = 'usecaseorion'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();


	$("#use-case-one").click(function() {
        $("#use-case-uno").fadeIn();
		$notOrion.hide();
		var disqus_shortname = 'usecaseorion'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });

	$("#use-case-two").click(function() {
        $("#use-case-dos").fadeIn();
		$notBecky.hide();
			var disqus_shortname = 'usecasebecky'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
	
	$("#use-case-three").click(function() {
        $("#use-case-tres").fadeIn();
		$notJoanie.hide();
			var disqus_shortname = 'usecasejoanie'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
	$("#use-case-four").click(function() {
        $("#use-case-cuatro").fadeIn();
		$notChuck.hide();
			var disqus_shortname = 'usecasechuck'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-five").click(function() {
        $("#use-case-cinco").fadeIn();
		$notFern.hide();
			var disqus_shortname = 'usecasefern'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-six").click(function() {
        $("#use-case-seis").fadeIn();
		$notD.hide();
			var disqus_shortname = 'usecasewadsworth'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-seven").click(function() {
        $("#use-case-siete").fadeIn();
		$notAlthea.hide();
			var disqus_shortname = 'usecasealthea'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-eight").click(function() {
        $("#use-case-ocho").fadeIn();
		$notBraulio.hide();
			var disqus_shortname = 'usecasebraulio'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-nine").click(function() {
        $("#use-case-nueve").fadeIn();
		$notWendy.hide();
			var disqus_shortname = 'usecasewendy'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-ten").click(function() {
        $("#use-case-diez").fadeIn();
		$notCarl.hide();
			var disqus_shortname = 'usecasecarl'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-eleven").click(function() {
        $("#use-case-once").fadeIn();
		$notDarla.hide();
			var disqus_shortname = 'usecasedarla'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });
	
		$("#use-case-twelve").click(function() {
        $("#use-case-doce").fadeIn();
		$notSumit.hide();
			var disqus_shortname = 'usecasesumit'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    });		
	


		
	$('#wtf').hide();
	$('#participate').css( 'cursor', 'pointer' ).click(function() {
    $('#wtf').animate({width: 'toggle'});
  });
  

$('#wtf, .profile-thumb-container').click(function() {
    $('#wtf').hide();
  });

	 
});