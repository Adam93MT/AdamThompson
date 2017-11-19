<?php
	$medium_user = "@thesonofthomp";
	$min_posts = 2;
	$url = "https://medium.com/feed/".$medium_user;
	$rss = file_get_contents($url);
	// echo $rss;
	if ($rss !== false) {
		$x = new SimpleXmlElement($rss);
	}
	if (sizeof($x->channel->item) >= $min_posts) {
?>

<?php sectionHeader("Medium"); ?>

<section class="blog" id="blog">
	<div class="container">
		<ul>
		<?php
			foreach($x->channel->item as $entry) {
				echo "<li><a href='$entry->link' title='$entry->title' target='_blank'>" . $entry->title . "<span class='date_published'> " . date("M j, Y", strtotime($entry->pubDate)) . "</span></a></li>";
			}	
		?>
		</ul>
	</div>
</section>

<?php
}
?>