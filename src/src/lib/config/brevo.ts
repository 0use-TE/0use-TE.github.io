/**
 * Brevo 邮件订阅配置
 *
 * 注册 Brevo 后按以下步骤填写：
 * 1. Contacts → Forms → 创建「Subscription form」（建议开启 double opt-in 双重确认）
 * 2. 打开表单 → Share → Embed → 复制 HTML 代码
 * 3. 从 <form action="..."> 复制 action 到 formAction
 * 4. 复制所有 <input type="hidden" ...> 到 hiddenFields
 * 5. 确认邮箱字段名为 EMAIL（Brevo 默认）
 */
export const BREVO_CONFIG = {
	/** 例: https://xxxx.sibforms.com/serve/MUxxxx/xxxx */
	formAction: '',
	/** 邮箱字段 name，Brevo 嵌入代码里一般是 EMAIL */
	emailFieldName: 'EMAIL',
	/** 从 Brevo 嵌入代码复制的 hidden 字段 */
	hiddenFields: [] as { name: string; value: string }[]
};

export function isBrevoConfigured(): boolean {
	return Boolean(BREVO_CONFIG.formAction);
}
