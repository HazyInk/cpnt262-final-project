<script>
	import Card from "../lib/components/Card.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
  <div>
    <img id = "hero" src="./home.jpg" alt="a bar">
  </div>
 <section id="about-us">
  <h3>About Us</h3>
  <p>Escape to the heart of Ireland right here in Calgary. Our pub invites you to unwind with an authentic Irish atmosphere, where laidback vibes, live music, and a diverse selection of brews create the perfect blend. Embrace the warmth of genuine hospitality as you share good times with friends. </p>
 </section>
 <section id="menu-and-events">
  
    <div id="menu">
      <h5>MENU</h5>
      <p class="sub-print">Check out our menu its SOOO good! Authentically Irish, fresh and delicious. </p>
      <a href="/menu"><button>SEE OUR MENU</button></a>
    </div>
    <div id="events">
      <h5>Events</h5>
      <p class="sub-print">Check out our menu its SOOO good! Authentically Irish, fresh and delicious. </p>
      <a href="/events"><button>EVENTS</button></a>
    </div>

 </section>
</main>


<style>
  #hero{
    max-width: 100%;
    max-height: auto;
  }
  #about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3F8F1;
    color: #203731;
  }
  h3 {
    font-family: 'Croissant One', cursive;
    font-size: 40px;
    display: block;
    padding: 0;
    margin-bottom: 0;
    margin-top: 0;
  }

  p {
    max-width: 65ch;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px
  }
  #menu-and-events {
    display:flex;
    gap: 0.5rem;
  }
  #menu {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color:#203731;
    max-width: 40vw;
    justify-content: center;
    align-items: center;
    color:#F3F8F1;
  }

  h5 {
    font-family: 'Croissant One', cursive;
    display: block;
    padding: 0;
    margin-bottom: 0;
    font-size: 30px;
  }

  .sub-print{
    font-size: 18px;
    max-width: 30ch;
  }
  #events {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color:#203731;
    max-width: 40vw;
    justify-content: center;
    align-items: center;
    color:#F3F8F1;
  }

  button {
    background-color: #B15236;
    font-family: 'Ubuntu', sans-serif;
    padding:1rem;
    color:#F3F8F1;
    border: none;
  }

  button:hover {
    background-color:#6d2c19;
  }
</style>






<!-- <main>
<div class="card-container">
  {#each obj as { title, content, src } (title)}
    <Card title={title} content={content} src={src} />
  {/each}
</div>
</main>

<style>
  .card-container {
    padding: 5rem;
    display: flex;
    justify-content: space-evenly; /* or space-between */
    flex-wrap: wrap;
    max-width: 1000px; /* Adjust as needed */
    margin: 0 auto; /* Center the cards */
  }

</style> -->