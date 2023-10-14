import { expect, describe, test } from 'vitest';
import { mount } from '@vue/test-utils';

// 外部フィアルのインポート
import Info from './src/components/info.vue';

function checkContainedText(text, fectedTargetWordWords) {
    fectedTargetWordWords.forEach(fectedTargetWordWord => {
        expect(text).toContain(fectedTargetWordWord);
    });

}

// tset
describe(Info, () => {
    const wrapper = mount(Info);
    const allText = wrapper.text();
    test("描画文言テスト", () => {
        const targetWords = ['利用規約', '適用', '禁止事項', "本サービスの提供の停止等", "利用制限",
            "保証の否認および免責事項", "サービス内容の変更等", "利用規約の変更", "個人情報の取扱い",
            "通知または連絡", "権利義務の譲渡の禁止", "準拠法・裁判管轄"];
        checkContainedText(allText, targetWords)
    });
    test("見出しの数テスト", () => {
        const matches = allText.match(/第\d+条/g);
        expect(matches ? matches.length : 0).toBe(11);
    });
});