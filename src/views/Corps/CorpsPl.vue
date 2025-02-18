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
            document.title='CORPS  - Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'

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
                <div class="side-sub-category clearfix hidden-lg hidden-md">
                <div class="clearfix bordered-title">
                <div class="bordered-title-inner">CORPS</div>
                <div class="title-border"></div>
                </div>
                <ul>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Lipoaspiration">Lipoaspiration</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Abdominoplastie">Abdominoplastie</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Cruroplastie">Cruroplastie</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Brachioplastie_lifting_des_bras">Brachioplastie : lifting des bras</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Plastie_des_mollets">Plastie des mollets</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Plastie_des_fesses">Plastie des fesses</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Bodylifting">Bodylifting</a>
                </li>
                        <li class="active">
                <a href="/web/20190213030017/https://www.paris-esthetics.com/fr/Plastie_des_cicatrices">Plastie des cicatrices</a>
                </li>
                </ul>
                </div>

                <div class="clearfix inner-description">
                <div class="clearfix bordered-title">
                <div class="bordered-title-inner">CORPS</div>
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

			<div class="side-sub-category clearfix hidden-sm hidden-xs">
				<div class="clearfix bordered-title">
                    <div class="bordered-title-inner">CORPS</div>
                    <div class="title-border"></div>
				</div>

				<ul>
                    <li class="active"> <a href="">Lipoaspiration</a> </li>

                    <li class="active"> <a href="">Abdominoplastie</a> </li>

                    <li class="active"> <a href="">Cruroplastie</a> </li>

                    <li class="active"> <a href="">Brachioplastie : lifting des bras</a> </li>

                    <li class="active"> <a href="">Plastie des mollets</a> </li>

                    <li class="active"> <a href="">Plastie des fesses</a> </li>

                    <li class="active"> <a href="">Bodylifting</a> </li>

                    <li class="active"> <a href="">Plastie des cicatrices</a> </li>

                </ul>
			</div>

			<SideBlock></SideBlock>

		</div>
	</section>

</template>