<script>

	import Navbar2 from '@/components/Navbar2Pl.vue';
	import MenuIt from '@/components/MenuIt.vue';
	import SideBlock from '@/components/SideBlock.vue';
	let i = 1;

	export default{
		components:{
			Navbar2,
			MenuIt,
			SideBlock,
		},
		methods: {
			active(index){		
				this.$refs['nt'+i].classList.remove('active');
				this.$refs['nt'+index].classList.add('active');
				i = index;
			}
		},
        created(){
            document.title='VISAGE  - Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'
        }
}

</script>

<template>

	<Navbar2></Navbar2>
	<MenuIt></MenuIt>
	<section id="all">
		
		<div class="col-lg-8 col-md-8 content-block">
			<div class="col-lg-8 col-md-8 content-block">
				<div class="clearfix home-about-block">
					
					<div class="clearfix inner-description">
							<div class="clearfix bordered-title wd">
									<div class="bordered-title-inner">VISAGE</div>
									<div class="title-border"></div>
							</div>

							<!-- Nav tabs ++++++-->
							<ul  ref="items" class="nav nav-tabs" role="tablist">
									<li ref="nt1" class="active"  @click="active(1)" >
										<a >DESCRIPTION</a>
									</li>
									<li ref="nt2"  @click="active(2)" >
										<a >PHOTO</a>
									</li>
									<li  ref="nt3" @click="active(3)">
										<a >VIDEO</a>
									</li>
									<li ref="nt4" @click="active(4)" >
										<a>WHERE</a>
									</li>
									<li ref="nt5" @click="active(5)" >
										<a >HOWARE</a>
									</li>
									<li ref="nt6" @click="active(6)" >
										<a >HELLO</a>
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
							<div class="clearfix bordered-title hidden-xs wd">
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
			</div>
		</div>

		
		<div class="side-block">
			
			<div class="side-sub-category clearfix hidden-sm hidden-xs">
                <div class="clearfix bordered-title">
                    <div class="bordered-title-inner">
                        VISAGE
                    </div>
                    <div class="title-border"></div>
                </div>

                <ul>
                    <li class="active">
                        <a href="/web/20190213060911/https://www.paris-esthetics.com/fr/Rhinoplastie">Rhinoplastie</a>
                    </li>
                    <li class="active">
                        <a href="/web/20190213060911/https://www.paris-esthetics.com/fr/Lifting_facial">Lifting facial</a>
                    </li>
                    <li class="active">
                        <a href="/web/20190213060911/https://www.paris-esthetics.com/fr/Blepharoplastie">Blepharoplastie</a>
                    </li>
                    <li class="active">
                        <a href="/web/20190213060911/https://www.paris-esthetics.com/fr/Otoplastie">Otoplastie</a>
                    </li>
                    <li class="active">
                        <a href="/web/20190213060911/https://www.paris-esthetics.com/fr/Génioplastie">Génioplastie</a>
                    </li>
                    <li class="active">
                        <a href="">Greffe de cheveux</a>
                    </li>
                </ul>

			</div>

			<SideBlock></SideBlock>
				
		</div>
	</section>

</template>