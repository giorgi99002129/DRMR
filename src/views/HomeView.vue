
<script>

	import MainContent from '@/components/home/MainContent.vue'
	import Navbar2 from '@/components/Navbar2Pl.vue'
	import MenuIt from '@/components/MenuIt.vue';
	import SertSlide from '@/components/home/SertSlide.vue';
	import HomeContentBlock from '@/components/ContentBlocks/HomeContentBlock.vue';
	import SideBlock from '@/components/SideBlock.vue';

	export default {
	components: {
		MainContent,
		Navbar2,
		MenuIt,
		SertSlide,
		HomeContentBlock,
		SideBlock,
	},
    created(){
        
        document.title='Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'
    }
	}
</script>

<template>
    
    <div class="main">
        <MainContent></MainContent>
		<Navbar2></Navbar2>
		<MenuIt></MenuIt>
		<SertSlide></SertSlide>
		<section id="all">
			<HomeContentBlock></HomeContentBlock>
			<div class="side-block">
				<SideBlock></SideBlock>
			</div>

		</section>
    </div>

</template>


