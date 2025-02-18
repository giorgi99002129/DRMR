<script>

	import Navbar2 from '@/components/Navbar2Pl.vue';
	import MenuIt from '@/components/MenuIt.vue';
	import SideBlock from '@/components/SideBlock.vue';

	export default{
		components:{
			Navbar2,
			MenuIt,
			SideBlock,
		},
        created(){
            document.title='Transsexualisme homme-femme  - Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'
        }
	}
</script>

<template>

	<Navbar2></Navbar2>
	<MenuIt></MenuIt>
	<section id="all">
		
		
		<div class="col-lg-8 col-md-8 content-block">
            <!--main categories BEGIN--><div class="col-lg-8 col-md-8 content-block">
	<div class="clearfix home-about-block">
		
		<div class="clearfix inner-description">
				<div class="clearfix bordered-title">
						<div class="bordered-title-inner">Transsexualisme homme-femme</div>
						<div class="title-border"></div>
				</div>
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" role="tablist">
						<li class="active">
								<a href="#tab1" role="tab" data-toggle="tab">DESCRIPTION</a>
						</li>
						<li>
								<a href="#tab2" role="tab" data-toggle="tab">PHOTO</a>
						</li>
						<li>
								<a href="#tab3" role="tab" data-toggle="tab"></a>
						</li>
						<li>
								<a href="#tab4" role="tab" data-toggle="tab"></a>
						</li>
						<li>
								<a href="#tab5" role="tab" data-toggle="tab"></a>
						</li>
						<li>
								<a href="#tab6" role="tab" data-toggle="tab"></a>
						</li>
				</ul>

				<!-- Tab panes -->
				<div class="tab-content">
						<div class="tab-pane active" id="tab1">
								L'information sur la prise en charge de la transformation génitale est délivrée pendant la consultation.
						</div>
						<div class="tab-pane" id="tab2">
								<div class="tab-photos clearfix">
										<div class="clearfix photo-gallery-inner">
		</div>
								</div>
						</div>
						<div class="tab-pane" id="tab3">
								<div class="clearfix video-gallery-inner">
    </div>
						</div>
						<div class="tab-pane" id="tab4">
								
						</div>
						<div class="tab-pane" id="tab5">
								
						</div>
						<div class="tab-pane" id="tab6">
								
						</div>
				</div>

				<div class="clearfix bordered-title hidden-xs">
						<div class="bordered-title-inner"></div>
						<div class="title-border"></div>
				</div>
				<div class="clearfix hidden-lg hidden-md hidden-sm faq-toggle">
						LIRE <span></span>s
				</div>
				<div class="clearfix accordion accordion-ver">
		<ul>
						</ul>
</div>
		</div>

	</div>
</div><!--main categories END-->
            </div>


		<div class="side-block">
				<SideBlock></SideBlock>
			</div>
	</section>

</template>