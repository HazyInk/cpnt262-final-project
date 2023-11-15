<script>
  export let src
  export let title
  export let content
</script>

<article>
<div class="card">
<a href="https://hazyink.github.io/inkmedia/">
<img src={src} alt=""/>
<h1>{title}</h1>
<p>{content}</p>
</a>
</div>
</article>

<!--Card styles-->
<style>
  article {
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}
h1 {
		color: #fff9f4;
		font-family: 'Croissant One', cursive;
		font-size: 35px;
	}
  p {
		color: #fff9f4;
    font-family: 'Ubuntu', sans-serif;
		font-size: 16px;
	}
  .card {
  border-radius: 15px;
  padding: 1rem;
  max-width: 280px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  box-shadow: 0 4px 20px 0 rgba(60, 44, 79, 0.378);
  background-color: #516947;
}
a {
  text-decoration: none;

  color: #ccf4bb;
}

/* Image & hover state */

img {
  border-radius: 15px;
  width: 270px;

  opacity: 0.87;
}

.card:hover {
  object-fit: contain;
  
  background-color: #28463E;
}
</style>