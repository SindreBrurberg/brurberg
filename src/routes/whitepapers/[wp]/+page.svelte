<script>
	/**
	 * @type {{ title: any; date: any; content: any; }}
	 */
	 export let data;
</script>

<svelte:head>
	<title>Whitepapers</title>
	<meta name="description" content="Whitepapers prodused by Brurberg" />
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