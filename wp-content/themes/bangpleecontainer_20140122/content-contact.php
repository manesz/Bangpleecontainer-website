<section id="content" class="container">

	<!-- Google Map -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
	$(document).ready(function() {
		load();
	});
	function load() {
		var gLat = 13.571909;
		var gLng = 100.803509;
		var point = new google.maps.LatLng(gLat, gLng);
		var myMapOptions = {
			zoom : 15,
			center : point,
			mapTypeId : google.maps.MapTypeId.TERRAIN
		};
		var map = new google.maps.Map(document.getElementById("googlemap"), myMapOptions);
		var image = new google.maps.MarkerImage('http://ideacorners.com/demo/ic-gallery/images/map-pin.png', new google.maps.Size(30, 30), new google.maps.Point(0, 0), new google.maps.Point(15, 15));
		var shadow = new google.maps.MarkerImage('http://ideacorners.com/demo/ic-gallery/images/shadow-map-pin.png', new google.maps.Size(46, 30), new google.maps.Point(0, 0), new google.maps.Point(15, 15));
		var shape = {
			coord : [30, 0, 30, 1, 31, 2, 31, 3, 31, 4, 31, 5, 31, 6, 31, 7, 31, 8, 31, 9, 31, 10, 31, 11, 31, 12, 31, 13, 31, 14, 31, 15, 31, 16, 31, 17, 31, 18, 31, 19, 31, 20, 31, 21, 31, 22, 30, 23, 30, 24, 29, 25, 28, 26, 27, 27, 26, 28, 25, 29, 24, 30, 24, 31, 10, 31, 10, 30, 10, 29, 9, 28, 8, 27, 7, 26, 6, 25, 5, 24, 4, 23, 4, 22, 4, 21, 3, 20, 3, 19, 2, 18, 2, 17, 2, 16, 2, 15, 2, 14, 2, 13, 2, 12, 2, 11, 2, 10, 2, 9, 2, 8, 2, 7, 2, 6, 3, 5, 3, 4, 4, 3, 4, 2, 4, 1, 5, 0, 30, 0],
			type : 'poly'
		};
		var marker = new google.maps.Marker({
			draggable : false,
			raiseOnDrag : false,
			icon : image,
			shadow : shadow,
			shape : shape,
			map : map,
			position : point
		});
	}
</script>

<div id="googlemap" class="" style="height: 300px; width: 100%; margin-top: 30px;"></div>

	<hr class="divider1">
	<!-- Divider -->
	<div class="columns one-half first add-bottom">
		<h4>Get In Touch</h4>
		<p>
			ขาย นำเข้า-ส่งออก อะไหล่ตู้คอนเทนเนอร์ (ทุกชนิด)
		</p>
		<ul class="contact2-info">
			<li>
				<i class="icon-location"></i>20/40 หมู่ 17 ต. บางเสาธง อ. บางเสาธง จ. สมุทรปราการ 10540
			</li>
			<li>
				<i class="icon-phone"></i>02-3303040 02-3303611-13
			</li>
			<li>
				<i class="icon-mail"></i>siriwan@bangplee-noi.com
			</li>
		</ul>
	</div><!-- End Contact Information -->
	<div class="columns one-half contact-form2 add-bottom">
		<form action="http://demo.ideacorners.com/bangpleecontainer/wp-content/themes/bangpleecontainer/sendmail.php" id="contact-form" method="post">
			<h4>Send Us A Message</h4>
			<label for="name">Name</label>
			<input type="text" name="name" id="name" class="name required">
			<label for="mail">Email</label>
			<input type="text" name="email" id="mail" class="email required">
			<label for="message">Message</label>
			<textarea name="message" cols="30" rows="5" id="message" class="message required"></textarea>
			<button type="submit" class="submit">SUBMIT</button>
		</form>
		<!-- End Contact Form -->
	</div><!-- End Contact Form -->
</section>