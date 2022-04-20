import {
	Layout,
	Page,
	Card,
	Button,
	SettingToggle,
	TextStyle,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export const Index = () => {
	const [active, setActive] = useState(false);
	const handleToggle = useCallback(() => setActive((active) => !active), []);
	const contentStatus = active ? "無効" : "有効";
	const textStatus = active ? "有効化" : "無効化";
	return (
		<>
			<Page fullWidth>
				<Layout>
					<Layout.Section secondary>
						<SettingToggle
							action={{
								content: contentStatus,
								onAction: handleToggle,
							}}
							enabled={active}
						>
							現在のアプリ状態：
							<TextStyle variation="strong">{textStatus}</TextStyle>.
						</SettingToggle>
						<Card title="設定" sectioned={true}>
							<p>現在アプリは有効です</p>
						</Card>
						<Card title="設置するボタン" sectioned={true}>
							<p>アイコンを選択</p>
							<Button>有効化</Button>
						</Card>
					</Layout.Section>
					<Layout.Section>
						<Card title="プレビュー" sectioned={true}></Card>
					</Layout.Section>
				</Layout>
			</Page>
		</>
	);
};
