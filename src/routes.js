import AcadPlan from './components/acadplan/AcadPlan.vue';
import GradProgress from './components/gradprogress/GradProgress.vue';
import ModuleInfo from './components/moduleinfo/ModuleInfo.vue';
import SEPMapping from './components/sepmapping/SEPMapping.vue';
import Login from './components/userprofile/Login.vue';
import Register from './components/userprofile/Register.vue';
import UserProfile from './components/userprofile/Profile.vue';

export const routes = [
    { path: '/', component: AcadPlan },
    { path: '/acadplan', component: AcadPlan },
    { path: '/gradprogress', component: GradProgress },
    { path: '/moduleinfo', component: ModuleInfo },
    { path: '/sepmapping', component: SEPMapping },
    { path: '/login', component: Login},
    { path: '/register', component: Register },
    { path: '/userprofile', component: UserProfile},
];