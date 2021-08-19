<h1>{status}: {error.message}</h1>
{#if dev && error.stack}
	<hr>
	<p>Development-only stack trace information:</p>
	<pre>{error.stack}</pre>
{/if}

<script context="module">
	export const load = props => ({ props })
</script>

<script>
	export let status
	export let error
	const dev = import.meta.env.DEV
</script>
