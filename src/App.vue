<template>
	<Navbar1></Navbar1>
	<router-view/>  
	<Footer></Footer>
    <!-- <div id="wrapper">
    <BSNavbar />
    <BSTooltip />
    </div> -->

</template>

<style>
/* body{background-color: rgb(168, 138, 102);} */
</style>

<script>
	import Footer from './components/FooterPl.vue'
	import Navbar1 from './components/Navbar1Pl.vue';
    // import BSTooltip from '@/components/BSTooltip.vue';
    // import BSNavbar from '@/components/BSNavbar.vue';

	export default {
	components: {
		Footer,
		Navbar1
        // BSTooltip,
        // BSNavbar,
	}
	}
</script>