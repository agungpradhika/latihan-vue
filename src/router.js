import { createWebHistory, createRouter } from 'vue-router';
import Login from "./components/LoginForm.vue";
import Table from "./components/TableForm.vue";

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
    {
		path: '/table',
		name: 'Table',
		component: Table,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;