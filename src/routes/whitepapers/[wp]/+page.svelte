<script>
	/**
	 * @type {{ title: any; date: any; content: any; description: any; }}
	 */
	 export let data;
</script>

<svelte:head>
	<title>{ data.title }</title>
	<meta name="description" content={ data.description } />
</svelte:head>

<div class="text-column">
	<h1>{ data.title }</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content}/>
</div>

<style>
	h2 {
		font-size: larger;
		background-color: blue;
	}
</style>