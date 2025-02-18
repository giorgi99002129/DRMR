<script>
	export default {}
</script>

<template>

	<div class="navbar2">
		<div class="block--width" >      
			<div class="menu-line" >
					<!-- <a href="#">ACCUEIL <img src="../images/icons/menuselected.png"></a> -->
					<!-- <a style="margin-left: 55px;" href="../pages/drmirzoyan.html">DR MIRZOYAN</a>
					<a style="margin-left: 55px;" href="#">PHOTO / VIDEO</a>
					<a style="margin-left: 55px;" href="#">PRIX</a>
					<a style="margin-left: 55px;" href="#">NOUVELLES</a>
					<a style="margin-left: 55px;" href="#">CONTACTS</a> -->
					<!-- <a href="#">ACCUEIL <img src="../images/icons/menuselected.png"></a> -->
					
					<router-link to="/">ACCUEIL <img src="../images/icons/menuselected.png"></router-link>
					<router-link to="/DrMirzoyan" style="margin-left: 55px;" >DR MIRZOYAN</router-link>
					<router-link to="/PhotoVideo" style="margin-left: 55px;" >PHOTO / VIDEO</router-link>
					<router-link to="/Prix" style="margin-left: 55px;" >PRIX</router-link>
					<router-link to="/Nouvelles" style="margin-left: 55px;" >NOUVELLES</router-link>
					<router-link to="/Contacts" style="margin-left: 55px;" >CONTACTS</router-link>

			</div>
		</div>
	</div>

</template>
