import { createRouter, createWebHashHistory } from  "vue-router";

import HomeView from './views/HomeView.vue';
import Lire from "./views/LirE.vue";

import DrMirzoyan from "./views/Navbar2/DrMirzoyan.vue";
import PhotoVideo from "./views/Navbar2/PhotoVideo.vue";
import Prix from "./views/Navbar2/PrixPl.vue";
import Nouvelles from "./views/Navbar2/NouvellesPl.vue";
import Contacts from "./views/Navbar2/ContactsPl.vue";

import Visage from "./views/Visage/VisageView.vue";
import Rhinoplastie from "./views/Visage/RhinoPlastie.vue";
import LiftingFa from "./views/Visage/LiftingFacial.vue";
import Blepharopl from "./views/Visage/BlepharoPlastie.vue";
import Otopl from "./views/Visage/OtoPlastie.vue";
import Geniopl from "./views/Visage/GenioPlastie.vue";
import Greffe from "./views/Visage/GreffeDEChevux.vue";

import Sein from "./views/Sein/SeinPl.vue";
import Augmentation from "./views/Sein/AugmentationPl.vue";
import Mastopexie from "./views/Sein/MastopexiePl.vue";
import Reduction from "./views/Sein/ReductionPl.vue";
import Asymetrie from "./views/Sein/AsymetriePl.vue";
import Gynecomastie from "./views/Sein/GynecomastiePl.vue";

import Corps from "./views/Corps/CorpsPl.vue";
import Lipoaspiration from "./views/Corps/LipoaspirationPl.vue";
import Abdominopl from "./views/Corps/AbdominoPl.vue";
import Cruropl from "./views/Corps/CruroPl.vue";
import Brachiopl from "./views/Corps/BrachioPl.vue";
import PlastieDM from "./views/Corps/PlastieDM.vue";
import PlastieDF from "./views/Corps/PlastieDF.vue";
import Bodylifting from "./views/Corps/BodyliftingPl.vue";
import PlastieDC from "./views/Corps/PlastieDC.vue";

import Esthetique from "./views/Esthetique/EsthetiquePl.vue";
import Injection from "./views/Esthetique/InjectionPl.vue";
import Acide from "./views/Esthetique/AcidePl.vue";
import Nymphopl from "./views/Esthetique/NymphoPl.vue";
import Lipofilling from "./views/Esthetique/LipofillingPl.vue";
import Transsexualisme from "./views/Esthetique/TranssexualismePl.vue";

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/Lire', component: Lire},
		
        {path: '/DrMirzoyan', component: DrMirzoyan},
        {path: '/PhotoVideo', component: PhotoVideo},
        {path: '/Prix', component: Prix},
        {path: '/Nouvelles', component: Nouvelles},
        {path: '/Contacts', component: Contacts},

        {path: '/Visage', component: Visage},
        {path: '/Rhinoplastie', component: Rhinoplastie},
        {path: '/LiftingFa', component: LiftingFa},
        {path: '/Blepharopl', component: Blepharopl},
        {path: '/Otopl', component: Otopl},
        {path: '/Geniopl', component: Geniopl},
        {path: '/Greffe', component: Greffe},

        {path: '/Sein', component: Sein},
        {path: '/Augmentation', component: Augmentation},
        {path: '/Mastopexie', component: Mastopexie},
        {path: '/Reduction', component: Reduction},
        {path: '/Asymetrie', component: Asymetrie,},
        {path: '/Gynecomastie', component: Gynecomastie},

        {path: '/Corps', component: Corps},
        {path: '/Lipoaspiration', component: Lipoaspiration},
        {path: '/Abdominopl', component: Abdominopl},
        {path: '/Cruropl', component: Cruropl},
        {path: '/Brachiopl', component: Brachiopl},
        {path: '/PlastieDM', component: PlastieDM},
        {path: '/PlastieDF', component: PlastieDF},
        {path: '/Bodylifting', component: Bodylifting},
        {path: '/PlastieDC', component: PlastieDC},

        {path: '/Esthetique', component: Esthetique},
        {path: '/Injection', component: Injection},
        {path: '/Acide', component: Acide},
        {path: '/Nymphopl', component: Nymphopl},
        {path: '/Lipofilling', component: Lipofilling},
        {path: '/Transsexualisme', component: Transsexualisme},

    ],
}

)
