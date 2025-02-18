<script>

	import Navbar2 from '@/components/Navbar2Pl.vue';
	import MenuIt from '@/components/MenuIt.vue';
	import LiraContentBlock from '@/components/ContentBlocks/LiraContentBlock.vue';
	import SideBlock from '@/components/SideBlock.vue';

	export default{
		components:{
			Navbar2,
			MenuIt,
			LiraContentBlock,
			SideBlock,
		},
        created(){

            document.title='QUALIFICATIONS - Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'
        }
	}

</script>

<template>

	<Navbar2></Navbar2>
	<MenuIt></MenuIt>
	<section id="all">
		<LiraContentBlock></LiraContentBlock>
		<div class="side-block">
			<SideBlock></SideBlock>
		</div>
	</section>

</template>