<script>
	import logo from '$lib/images/logo_rectangle.svg';
</script>

<svelte:head>
	<title>Brurberg</title>
	<meta name="description" content="Brurberg information" />
</svelte:head>

<section>
	<div class="content flex">
		<div class="max_item">
			<img src={logo} alt="Brurberg" />
		</div>
		<div class="new_line" />
		<img
			class="min_item profile_img"
			src="https://lh3.googleusercontent.com/pw/ACtC-3dUUiydFNwG6MFu09M78gw11ZlYDnqmismMKHy8011irkBL1n9A21iylTlsWIVPtPNPoycU7peyDhfwInLtsIlN1lEAQZpyE98J0mpghgC0Sv2mQkWUIvYFyPdWlnQT2XpW8l6vA-NXpu8nmbyYNpo-Eg=w876-h1314-no?authuser=0"
			alt="profile pic"
			height="350px"
			width="234px"
		/>
		<div class="item center">
			<table class="elevate">
				<thead>
					<tr>
						<th style="width: 30%;" />
						<th style="width: 70%;" />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><h3>Name:</h3></td>
						<td>Sindre Brurberg</td>
					</tr>
					<tr>
						<td><h3>Born in:</h3></td>
						<td>1997</td>
					</tr>
					<tr>
						<td><h3>Profession:</h3></td>
						<td>Developer, backend</td>
					</tr>
					<tr>
						<td><h3>Current:</h3></td>
						<td>Nerthus and eXOReaction customers</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="new_line" style="padding-top: 1.5em;" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h3 {
		text-align: left;
	}
	.content {
		position: relative;
		max-width: 1270px;
		margin-left: auto;
		margin-right: auto;
		padding-top: 1em;
	}
	.flex {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-items: flex-start;
		align-content: space-around;
	}

	.item {
		flex: 0 0 45%;
	}
	.max_item {
		flex: 0 0 85%;
	}
	.min_item {
		flex: 0 0 20%;
	}
	.new_line {
		flex: 0 0 100%;
	}
	.center {
		align-self: center;
	}

	table {
		width: 100%;
		border-spacing: 0;
		text-align: left;
	}
	thead tr:last-child th {
		font-size: x-large;
		padding-top: 1em;
		padding-bottom: 0.5em;
	}
	thead tr:last-child th,
	tbody tr:not(:last-child) td {
		border-bottom: thin solid rgba(0, 0, 0, 0.12);
	}

	.profile_img {
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
		border-radius: 50%;
	}
</style>
