import { expect, describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

// 外部ファイルのインポート
import Home from '../components/Home.vue';
import Info from '../components/info.vue';
import Policy from '../components/poricy.vue';

// ルーター
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/info', component: Info },
        { path: '/policy', component: Policy },
    ],
});

// tset
describe('Navigation', () => {
    // ホーム画面
    test('navigates to Home', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [router],
            },
        });
        await router.push('/');
        expect(wrapper.text()).toContain('BoxShadow 設定値');
    });
    // 利用規約ページ
    test('navigates to Info', async () => {
        const wrapper = mount(Info, {
            global: {
                plugins: [router],
            },
        });
        await router.push('/info');
        expect(wrapper.text()).toContain('利用規約ページ');
    });
    // ポリシーページ
    test('navigates to Policy', async () => {
        const wrapper = mount(Policy, {
            global: {
                plugins: [router],
            },
        });
        await router.push('/policy');
        expect(wrapper.text()).toContain('◆プライバシーポリシーページ');
    });
});
