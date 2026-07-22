<script lang="ts">
	import { BREVO_CONFIG, isBrevoConfigured } from '$lib/config/brevo';

	let email = $state('');
	let submitted = $state(false);

	function handleSubmit() {
		submitted = true;
	}
</script>

{#if isBrevoConfigured()}
	<section class="subscribe" aria-label="邮件订阅">
		<h2 class="subscribe-title">订阅博客更新</h2>
		<p class="subscribe-desc">
			新文章发布时通过邮件通知你。提交后 Brevo 会发送确认邮件，点击链接后订阅才生效。
		</p>

		{#if submitted}
			<p class="subscribe-success">已提交，请查收邮箱并点击确认链接完成订阅。</p>
		{:else}
			<form
				class="subscribe-form"
				method="POST"
				action={BREVO_CONFIG.formAction}
				target="_blank"
				rel="noopener noreferrer"
				onsubmit={handleSubmit}
			>
				{#each BREVO_CONFIG.hiddenFields as field}
					<input type="hidden" name={field.name} value={field.value} />
				{/each}

				<input
					type="email"
					name={BREVO_CONFIG.emailFieldName}
					bind:value={email}
					placeholder="your@email.com"
					required
					autocomplete="email"
					class="email-input"
				/>
				<button type="submit" class="submit-btn">订阅</button>
			</form>
		{/if}
	</section>
{/if}

<style>
	.subscribe {
		margin-top: 2.5rem;
		padding: 1.5rem;
		border-radius: 12px;
		border: 1px solid rgba(108, 69, 168, 0.25);
		background: rgba(108, 69, 168, 0.04);
	}

	:global([data-theme='dark']) .subscribe {
		background: rgba(108, 69, 168, 0.08);
		border-color: rgba(157, 133, 202, 0.3);
	}

	.subscribe-title {
		margin: 0 0 0.5rem;
		font-size: 1.15rem;
		font-weight: 600;
		color: #6c45a8;
	}

	:global([data-theme='dark']) .subscribe-title {
		color: #9d85ca;
	}

	.subscribe-desc {
		margin: 0 0 1rem;
		font-size: 0.88rem;
		line-height: 1.6;
		color: #666;
	}

	:global([data-theme='dark']) .subscribe-desc {
		color: #aaa;
	}

	.subscribe-form {
		display: flex;
		gap: 0.6rem;
		flex-wrap: wrap;
	}

	.email-input {
		flex: 1;
		min-width: 200px;
		padding: 0.65rem 0.9rem;
		font-size: 0.95rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		background: #fff;
		color: #333;
	}

	:global([data-theme='dark']) .email-input {
		background: #333;
		border-color: #555;
		color: #fff;
	}

	.email-input:focus {
		outline: none;
		border-color: #6c45a8;
	}

	.submit-btn {
		padding: 0.65rem 1.25rem;
		font-size: 0.95rem;
		font-weight: 500;
		border: none;
		border-radius: 8px;
		background: #6c45a8;
		color: #fff;
		cursor: pointer;
		transition: background 0.15s;
	}

	.submit-btn:hover {
		background: #5a3a8f;
	}

	.subscribe-success {
		margin: 0;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		background: rgba(34, 197, 94, 0.12);
		color: #15803d;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	:global([data-theme='dark']) .subscribe-success {
		background: rgba(34, 197, 94, 0.15);
		color: #86efac;
	}
</style>
