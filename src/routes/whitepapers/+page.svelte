<script>
	export let data;
</script>

<svelte:head>
	<title>Whitepapers</title>
	<meta name="description" content="Whitepapers prodused by Brurberg" />
</svelte:head>

<div class="text-column">
	<h1>Whitepapers</h1>

	<p>
		This page will contain cards for every whitepaper we write. 
	</p>

	<ul>
		{#each data.pages as post}
		  <li>
			<h2>
			  <a href={"/whitepapers/" + post.path}>
				{post.meta.title}
			  </a>
			</h2>
			<p class="text-sm">Published {post.meta.date}</p>
			<p class="max-w-lg" >{post.meta.description}</p>
		  </li>
		{/each}
	  </ul>
</div>
