<script>
	import Card from "../lib/components/Card.svelte";
  import Footer from "../lib/components/Footer.svelte";
// const arr = ["one", "two", "three"]
// const obj = {src:'background.png', header:"TEST", paragraph:"TESTESTTESTTESTTEST"};
const obj = [
    { slug:"Live Music Night", title: "Live Music Night", content: "On a lively Friday evening, the Irish pub comes alive with the soulful tunes of a local folk band. The atmosphere is electric as patrons tap their feet to the rhythm of fiddles and guitar. The cozy ambience is filled with laughter and camaraderie, creating the perfect backdrop for enjoying a pint of Guinness or a glass of smooth Irish whiskey.", src:'./small/band-small.jpg' },
    { slug: "Pub Quiz", title: "Pub Quiz Extravaganza", content: "Wednesday nights are reserved for the ultimate pub quiz showdown. Teams gather around wooden tables, armed with pens and answer sheets, ready to tackle questions that range from Irish history to pop culture. The competitive spirit is palpable, but it's all in good fun as participants engage in friendly banter between rounds, with the promise of bragging rights for the winning team.", src:'./small/trivia-small.jpg' },
    { slug: "Whiskey", title: "Whiskey Tasting Event", content: "For the whiskey connoisseurs, the Irish pub hosts a special tasting event. A knowledgeable guide takes patrons on a journey through the nuances of various Irish whiskeys, explaining the differences in flavor profiles and distillation techniques. The amber nectar flows, and patrons savor each sip, deepening their appreciation for the rich heritage of Irish spirits.", src:'./small/whisky-small.jpg' },
    { slug: "Irish Dance", title: "Traditional Irish Dance Night", content: "On a weekend dedicated to celebrating Irish culture, the pub transforms into a dance floor for traditional Irish step dancing. The rhythmic clatter of hard-soled shoes reverberates through the air as talented dancers perform intricate routines. Patrons are invited to join in the fun, and soon the entire pub becomes a swirling sea of coordinated footwork.", src:'./small/dancing-small.jpg' },
    { slug:"St.Patrick's",title: "St.Patrick's Day Bash", content: " The highlight of the pub's calendar is, undoubtedly, the St. Patrick's Day celebration. Green decorations, Irish flags, and leprechaun hats set the scene for a day filled with revelry. The pub offers special Irish-themed menus, and patrons revel in the joyous atmosphere, raising their glasses to the patron saint of Ireland.", src:'./small/st.patricks-small.jpg' },
    { slug: "Sports", title: "Sports Fan Frenzy", content: "When a crucial rugby or soccer match involving an Irish team is on, the pub becomes a haven for sports enthusiasts. The air is thick with tension as fans gather around the big screen, cheering on their favorite teams. Victory or defeat, the post-match analysis is animated, with passionate discussions echoing through the pub.", src:'./small/sports-small.jpg' },
    { slug:"Charity Crawl", title: "Charity Pub Crawl", content: "In the spirit of giving back, the Irish pub organizes a charity pub crawl through the local community. Patrons purchase passports for the crawl, with each stop featuring unique drink specials and entertainment. The funds raised go to a local charity, fostering a sense of community while enjoying the conviviality of the pub.", src:'./small/bingo-small.jpg' },
    { slug: "Sunday Roast", title: "Traditional Sunday Roast", content: "   Sundays are dedicated to hearty meals and relaxation. The pub offers a traditional Irish Sunday roast, complete with succulent meats, roasted vegetables, and velvety mashed potatoes. Patrons gather with friends and family, enjoying a leisurely meal in the warm and welcoming setting of the pub.", src:'./small/roast-small.jpg' },
    { slug:"Open Mic", title: "Open Mic Night", content: "  Aspiring musicians, poets, and comedians take center stage during the open mic night. The pub becomes a platform for local talent to showcase their skills, creating an intimate and supportive atmosphere. The audience is treated to a diverse range of performances, adding an element of surprise and creativity to the regular pub routine.", src:'./small/mic-small.jpg' }
]
</script>

<svelte:head>
  <title>Gallery Page</title>
</svelte:head>
<main>
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

</style>