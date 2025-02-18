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

            document.title='Boris Mirzoyan - Chirurgie plastique et esthétique à Paris'
        }
	}
    
</script>

<template>

	<Navbar2></Navbar2>
	<MenuIt></MenuIt>
	<section id="all">

		<div class="col-lg-8 col-md-8 content-block">
			<div class="clearfix bordered-title">
				<div class="bordered-title-inner">PRIX</div>
				<div class="title-border"></div>
			</div>
			<div class="content-box clearfix">
				<div class="content-txt"><span style="font-size: 14pt;"><em><strong></strong></em></span><strong>Consultation</strong><br>Le prix de la première consultation est de 23 euros à 80 euros.<br><br><strong>Intervention</strong><br>Le prix de l'intervention inclut les frais du bloc opératoire, de la clinique, du matériel implantable éventuel et du suivi post-opératoire pendant un mois.&nbsp;<br>Les tarifs varie en fonction du lieu de l'intervention, du choix d'une chambre individuelle ou double,&nbsp;du temps opératoire nécessaire, de la difficulté technique de la l'intervention, du type d'anesthésie et des honoraires de l'anethésiste. &nbsp;<br><br>Tarifs des interventions non prise en charge par la sécurité sociale<br><br><br>
	<table border="2" align="left" style="border: 2px solid #446abb;">
	<tbody>
	<tr>
	<td><span style="color: #000000;"><strong>&nbsp;<span style="background-color: #ffffff;">POITRINE</span></strong></span></td>
	<td></td>
	</tr>
	<tr>
	<td>&nbsp;Augmentation mammaire</td>
	<td>&nbsp;3 500 - 4 500 euros&nbsp;</td>
	</tr>
	<tr>
	<td>&nbsp;Ptose mammaire ou réduction mammaire <br>&nbsp;non pris en charge&nbsp;</td>
	<td>&nbsp;3 500 - 4 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Plastie avec umplant (plastie prothèse)</td>
	<td>&nbsp;4 700 - 5 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Asymétie mammaire</td>
	<td>&nbsp;3 500 - 4 200 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Mammelon invaginé</td>
	<td>&nbsp;1 000 - 1 200 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lipofilling mammaire</td>
	<td>&nbsp;4 800 - 7 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Cure de gynecomastie</td>
	<td>&nbsp;3 000 - 3 800 euros</td>
	</tr>
	</tbody>
	</table>
	<table border="2" align="center" style="border: 2px solid #446abb;">
	<tbody>
	<tr>
	<td><strong>&nbsp;SILHOUETTE</strong>&nbsp;</td>
	<td></td>
	</tr>
	<tr>
	<td>&nbsp;Lipoaspiration sous anesthésie <br>&nbsp;générale une zone</td>
	<td>&nbsp;1 500 - 2 000 euros&nbsp;</td>
	</tr>
	<tr>
	<td>&nbsp;Lipoaspiration sous anesthésie&nbsp;<br>&nbsp;locale</td>
	<td>&nbsp;1 000 - 1 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Abdominoplastie</td>
	<td>&nbsp;4 200 - 4 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Bodylifting</td>
	<td>&nbsp;6 500 - 7 000 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting des cuisses</td>
	<td>&nbsp;4 000 - 4 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Plastie brachiale</td>
	<td>&nbsp;3 500 - 3 750 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Prothèse des mollets</td>
	<td>&nbsp;3 500 - 4 000 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lipofilling des fesses</td>
	<td>&nbsp;3 500 - 4 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Implants des fesses</td>
	<td>&nbsp;5 000 - 5 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting des fesses</td>
	<td>&nbsp;3 500 - 4 000 eu</td>
	</tr>
	</tbody>
	</table>
	<table border="2" align="left" style="border: 2px solid #446abb;">
	<tbody>
	<tr>
	<td><strong>&nbsp;VISAGE</strong></td>
	<td></td>
	</tr>
	<tr>
	<td>&nbsp;Blépharoplastie supérieure</td>
	<td>&nbsp;1 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Blépharoplastie inférieure</td>
	<td>&nbsp;2 000 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Blépharoplastie 4 paupières</td>
	<td>&nbsp;3 000 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Rhinoplastie</td>
	<td>&nbsp;4 000 - 5 000 euros&nbsp;</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting cervico-facial</td>
	<td>&nbsp;4 500 - 5 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting centro-facial</td>
	<td>&nbsp;4 000 - 4 500 euros&nbsp;</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting temporal</td>
	<td>&nbsp;3 500 - 4 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting du front</td>
	<td>&nbsp;3 000 - 3 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting de la lèvre supérieure&nbsp;</td>
	<td>&nbsp;1 800 - 2 250 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Oreilles décollées&nbsp;</td>
	<td>&nbsp;1 800 - 2 400 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Double menton</td>
	<td>&nbsp;1 500 - 2 000 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Génioplastie&nbsp;</td>
	<td>&nbsp;3 000 - 3 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lipofilling du visage</td>
	<td>&nbsp;à partir de 1 700 €</td>
	</tr>
	<tr>
	<td>&nbsp;Implants capillaires</td>
	<td>&nbsp;à partir de 2 200 €</td>
	</tr>
	</tbody>
	</table>
	&nbsp; &nbsp; &nbsp;&nbsp;
	<table border="2" style="border: 2px solid #446abb;" align="center">
	<tbody>
	<tr>
	<td><strong>&nbsp;CHIRURGIE INTIME</strong></td>
	<td></td>
	</tr>
	<tr>
	<td>&nbsp;Nymphoplastie</td>
	<td>&nbsp;1 500 - 2 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lipofilling des grandes lèvres</td>
	<td>&nbsp;2 000 - 4 000 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lipoaspiration du mont Vénus&nbsp;</td>
	<td>&nbsp;1 500 - 2 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Rétrécissement vaginal</td>
	<td>&nbsp;3 000 - 3 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Pénoplastie d'élargissement et&nbsp;<br>&nbsp;d'allongement</td>
	<td>&nbsp;3 500 - 6 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Lifting des bourses</td>
	<td>&nbsp;3 000 - 3 500 euros</td>
	</tr>
	<tr>
	<td>&nbsp;Injeciton point G</td>
	<td>&nbsp;à partir de 750 euros&nbsp;</td>
	</tr>
	</tbody>
	</table>
	<p>&nbsp;</p>
	<table border="2" align="center" style="border: 2px solid #446abb;">
	<tbody>
	<tr>
	<td><strong>&nbsp;MEDECINE ESTHETIQUE</strong></td>
	<td></td>
	</tr>
	<tr>
	<td>&nbsp;Injection Acide Hyaluronique</td>
	<td>&nbsp;à parit de 350 euros&nbsp;</td>
	</tr>
	<tr>
	<td>&nbsp;Injection Toxine Botulique (Botox®) &nbsp;</td>
	<td><span>&nbsp;à parit de 350 euros&nbsp;</span></td>
	</tr>
	<tr>
	<td>&nbsp;Peeling superficiel</td>
	<td>&nbsp;100 euros la séance</td>
	</tr>
	<tr>
	<td>&nbsp;Mesothérapie&nbsp;</td>
	<td>&nbsp;100 euros la séance</td>
	</tr>
	</tbody>
	</table>
				<p><br><br mce_bogus="1"></p>
				</div>
            </div>
            </div>


		<div class="side-block">
			<SideBlock></SideBlock>
		</div>
	</section>

</template>