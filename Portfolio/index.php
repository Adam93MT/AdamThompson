<?php
include('../includes/php/global-head.php');
include('portfolio_switch.php');
?>
<title>Adam Thompson - <?php echo($p_title) ?></title>
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/header.css" type="text/css">
<link rel="stylesheet" href= "<?php echo $root_path; ?>/includes/css/mobile.css" type="text/css">
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/css/portfolio-hilight.css">
<link rel="stylesheet" type="text/css" href="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/theme/bitter/vanillabox.css">

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/jquery.mixitup.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/vendor/vanillabox/jquery.vanillabox-0.1.7.min.js"></script>
<script type="text/javascript" src="<?php echo $root_path; ?>/includes/js/portfolio.js"></script>
</head>
<!-- ********** /HEAD ********** -->

<main>
<?php include('../includes/php/header.php'); ?>


<article class="gallery-content">
	<h2 class="portfolio-title"><?php echo $p_title ?></h2>	
	<div class="col single-column">

	<?php if ($useTemplate) {?>
		<p class="folio_paragraph" id="paragraph1"><?php echo $p_p1; ?></p>
		<figure class="folio_image" id="img1">
			<a href="<?php echo $img1 ; ?>" target="_blank">
				<img src="<?php echo $img1; ?>">
			</a>
			<figcaption><?php echo $img1_caption ?></figcaption>
		</figure>

		<p class="folio_paragraph" id="paragraph2"><?php echo $p_p2; ?></p>
		<figure class="folio_image" id="img2">
			<a href="<?php echo $img2 ; ?>" target="_blank">
				<img src="<?php echo $img2; ?>">
			</a>
		<figcaption><?php echo $img2_caption ?></figcaption>
		</figure>

		<p class="folio_paragraph" id="paragraph3"><?php echo $p_p3; ?></p>
		<figure class="folio_image" id="img3">
			<a href="<?php echo $img3 ; ?>" target="_blank">
				<img src="<?php echo $img3; ?>">
			</a>
			<figcaption><?php echo $img3_caption ?></figcaption>
		</figure>

		<p class="folio_paragraph" id="paragraph4"><?php echo $p_p4; ?></p>
		<figure class="folio_image" id="img4">
			<a href="<?php echo $img4 ; ?>" target="_blank">
				<img src="<?php echo $img4; ?>">
			</a>
			<figcaption><?php echo $img4_caption ?></figcaption>
		</figure>

		<p class="folio_paragraph" id="paragraph5"><?php echo $p_p5; ?></p>
		<figure class="folio_image" id="img5">
			<a href="<?php echo $img5 ; ?>" target="_blank">
				<img src="<?php echo $img5; ?>">
			</a>
			<figcaption><?php echo $img5_caption ?></figcaption>
		</figure>
		<p class="folio_paragraph" id="paragraph6"><?php echo $p_p6; ?></p>
	<?php } else { ?>
		<?php echo $HTML; ?>


	<?php } ?>
	</div>
</article>
<script type="text/javascript">
	$(document).ready(function() {

		$('.folio_image').each(function() {
			if ($('a', this).attr('href') == '') {
				console.log($(this).attr('id') + ' does not exist');
				$(this).remove();
			}
		});

		$('.folio_paragraph').each(function() {
			if ($(this).text() == '') {
				console.log($(this).attr('id') + ' does not exist');
				$(this).remove();
			}
		});
		
		$('.folio_image a').vanillabox({
			loop: true,
		});
	});

	// // Scroll to the h2
	// h2_location = $('h2').offset().top;
 //    $('body').animate({scrollTop: h2_location}, 650);
</script>
</main>
</body>
</html>
