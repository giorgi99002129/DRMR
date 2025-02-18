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
            document.title='Plastie des mollets  - Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'

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
            <div class="bordered-title-inner">Plastie des mollets</div>
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
                    <strong>Augmentation des mollets par prothèse</strong><br><br> L’augmentation des mollets est une intervention chirurgicale qui consiste à mettre en place un implant en gel de silicone souple permettant de galber les contours des mollets et redonner du volume souhaité. Les prosthèses sont placées derrière les muscles du mollet sans les abimer. L’incision cutanée est pratiquée dans la pie cutanée derrière le genou. L’implant en silicone est placé dans la loge crée entre la gaine musculaire et le muscle du mollet. En fonction de la morphologie du patient et du volume souhaité, on pose entre un et deux implants par mollet. Les implants sont en gel de silicone souple et sont conçues pour supporter le poids et les contractions musculaires.
            </div>
            <div class="tab-pane" id="tab2">
                    <div class="tab-photos clearfix">
                            <div class="clearfix photo-gallery-inner">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <a href="/web/20190213042038/https://www.paris-esthetics.com/images/photo_img/871432447446.jpeg" title="Augmentation du mollet gauche avec un implant" data-fancybox-group="thumb" class="magnific-link">
            <div class="img-block">
                    <div class="zoom-text">
                        <!-- <img src="/web/20190213042038im_/https://www.paris-esthetics.com/img/icons/zoom-icon.png" alt="" title="">  -->
                    </div>
                    <!-- <img src="/web/20190213042038im_/https://www.paris-esthetics.com/images/photo_thumb/871432447446.jpeg" class="img-responsive" alt="Augmentation du mollet gauche avec un implant" title="Augmentation du mollet gauche avec un implant"> -->
            </div>
            <div class="before-after">Augmentation du mollet gauche avec un implant</div>
        </a>
    </div>
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