<script>

	import Navbar2 from '@/components/Navbar2Pl.vue';
	import MenuIt from '@/components/MenuIt.vue';

	export default{
		components:{
			Navbar2,
			MenuIt,
		},
        created(){

            document.title='Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'
        }
	}

</script>

<template>

	<Navbar2></Navbar2>
	<MenuIt></MenuIt>
	

		<section id="all" class="block-max-width clearfix" style="flex-direction: column;">
			<div class="clearfix block-max-width" style="flex-direction: column;" >
				<div class="clearfix bordered-title block--width ">
					<div class="bordered-title-inner">Localisation</div>
					<div class="title-border"></div>
				</div>

				<div class="clearfix map-block" >
						<!-- <div class="col-lg-9 col-md-9 no-padding-left">
							<div id="map_canvas_paris" style="width: 100%; height: 250px;position:relative"></div>
						</div> -->
						<div class="col-lg-3 col-md-3 location-info" style="margin-bottom: 100px;">
								<div class="title clearfix">
										Consultation à <span></span>
								</div>
								<div class="clearfix info">
										<a class="map">3 rue Sainte Marthe 75010 Paris</a>
										<a class="tel">+ 33 1 86 95 24 04</a>
										<a class="skype" href="https://web.archive.org/web/20190213064448/skype:borism777?call"> Skype</a>
								</div>
						</div>
				</div>

				<div class="clearfix map-block">
						<!-- <div class="col-lg-9 col-md-9 no-padding-left">
								<div id="map_canvas_moscow" style="width: 100%; height: 250px;position:relative"></div>
						</div> -->
						<div class="col-lg-3 col-md-3 location-info">
								<div class="title clearfix">
										Consultation à <span></span>
								</div>
								<div class="clearfix info">
										<a class="map"></a>
										<a class="tel"></a>
										<a class="skype" href="https://web.archive.org/web/20190213064448/skype:borism777?call"> Skype</a>
								</div>
						</div>
				</div>
			</div>

			<div class="contact-form clearfix ">
				<div class="clearfix bordered-title">
						<div class="bordered-title-inner">Contactez-nous</div>
						<div class="title-border"></div>
				</div>				
				
				<form class="clearfix bv-form" action="/web/20190213064448/https://www.paris-esthetics.com/fr/contacts" method="POST" enctype="multipart/form-data" id="contact_form" novalidate="novalidate"><button type="submit" class="bv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
						<div class="form-description">Je m'engage à vous répondre au plus vite</div>
						<div class="form-group clearfix">
								<input type="text" id="name" name="name" class="form-input" placeholder="Votre NOM" value="" data-bv-notempty="true" data-bv-notempty-message="" data-bv-field="name">
						<small class="help-block" data-bv-validator="notEmpty" data-bv-for="name" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a value</small></div>
						<div class="form-group clearfix">
								<input type="email" id="email" name="email" class="form-input" placeholder="E-Mail" value="" data-bv-notempty="true" data-bv-notempty-message="" data-bv-field="email">
						<small class="help-block" data-bv-validator="emailAddress" data-bv-for="email" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a valid email address</small><small class="help-block" data-bv-validator="notEmpty" data-bv-for="email" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a value</small></div>
						<div class="form-group clearfix">
								<input type="text" id="phone" name="phone" class="form-input" placeholder="Téléphone" value="">
						</div>
						<div class="form-group clearfix">
								<input type="text" id="subject" name="subject" class="form-input" placeholder="Objet" value="" data-bv-notempty="true" data-bv-notempty-message="" data-bv-field="subject">
						<small class="help-block" data-bv-validator="notEmpty" data-bv-for="subject" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a value</small></div>
						<div class="form-group clearfix">
								<textarea class="form-input" id="message" name="message" placeholder="Poser votre question" data-bv-notempty="true" data-bv-notempty-message="" data-bv-field="message"></textarea>
						<small class="help-block" data-bv-validator="notEmpty" data-bv-for="message" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a value</small></div>
						<div class="clearfix">
								<!-- <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 no-padding">
										<div class="form-group image-upload clearfix">
												<label class="col-lg-4 col-md-4 col-sm-4 col-xs-4 control-label no-padding" for="questionFileButton">Joindre une photo</label>
												<div class="col-sm-8 col-xs-8 no-padding">
														<button class="btn btn-default" id="questionFileButton">TÉLÉCHARGER</button>
														<input type="file" name="attachment" class="hidden" id="questionFile">
												</div>
										</div>
								</div>-->
																<div class="col-lg-12 col-md-2 col-sm-12 col-xs-12 no-padding">
										<button class="btn blue-button pull-right" type="submit" name="send">ENVOYER</button>
								</div>
						</div>
				</form>
			</div>
		</section>


	

</template>