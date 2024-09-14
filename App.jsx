import { useState } from 'react'
import './App.css'


function App() {
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }
  return (
    <>
      <div className='flex justify-between mb-20  fixed w-full top-0 left-0 z-10 bg-white shadow-md p-4 items-center dark:bg-slate-800 max-md:items-center' >
        <img src="./logo.png" alt="" className='w-36 h-10 max-md:w-32 ml-5p' />
        <div className='flex gap-5 mr-5p' >
          <h3 className='max-md:hidden flex items-center justify-center'>contactez-nous</h3>
          <img src="./public/Message_48px.png" alt="" className='w-8 hidden max-md:block' />
          <h3 className='max-md:hidden flex items-center justify-center'>updev community</h3>
          <img src="./public/people.png" alt="" className='w-8  h-6 mt-2 hidden max-md:block ' />
          <div>
            <button onClick={toggleTheme} className='bg-blue-300 text-black ml-5 p-2 rounded-md'>thèmes</button>
          </div>
        </div>
      </div>
      <div className=''>
        <h1 className=' text-orange-500 font-bold mb-20 text-2xl mt-44 max-md:mt-28 '>AXÉ SUR LA TECHNOLOGIE</h1>
        <h1 className='text-5xl mt-10 lg:text-7xl w-50p mx-auto'>Innover pour une Afrique meilleure</h1>
        <p className='text-2xl -mb-20 w-60p text-gray-500  mt-10  max-md:text-2xl max-md:w-95p mx-auto dark:text-gray-200'>En tirant parti des technologies innoventes et durables,Updev se consacre àpromouvoir un changement social et un avenir meilleur pour l'Afrique</p>
        <img src="./ig.png" alt="" className='z-0 flex justify-center -mt-700px  w-95p opacity-15  mx-auto max-md:-mt-550px max-md:w-full' />
      </div>
      <div className=' grid  text-black  lg:flex justify-between mt-20 dark:text-white'>
        <div>
          <h3 className='text-3xl mt-0  lg:text-5xl  w-60p mx-auto flex text-left ml-0 max-md:mt-52 '>Resolution Des Problèmes Sociaux Avec Des Solutions Durables</h3>
        </div>
        <div>
          <h1 className='text-8xl lg:text-8xl flex justify-left'>8+</h1>
        </div>
      </div>
      <div>
        <p className='text-2xl  text-gray-500 mt-10 lg:text-2xl text-left dark:text-gray-200'>Updev a créé desolutions novatrices pour les défis sociaux en Afrique comme :</p>
      </div>
      <div className='flex flex-wrap gap-8 justify-center mt-20'>
        <div className='p-5  bg-blue-50 shadow-lg  lg:p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./public/original.png" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>DEV PROFILES</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Plateforme Web/mobile pour présenter ses expériences et compétences</p>
            <li>créer votre profil</li>
            <li>Gérer vos compétences</li>
            <li>Trouver des opportunités</li>
            <h3 className=''>#Community-Driven</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./edu.png" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>EDUSTATE</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Nous contribuons à étendre cardano en Afrique</p>
            <li>Approche collaborative</li>
            <li>Education et sensibilisation</li>
            <li>Croissance économique</li>
            <h3 className=''>#stake pool</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./public/original.png" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>DEV COMMUNITY</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Plateforme web/mobile d'échange et de connexion entre développeurs</p>
            <li>Partage de connaissances</li>
            <li>Évolution des compétences</li>
            <li>opportunités de réseautage</li>
            <h3 className=''>#Collaboration-platform</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>Lancé</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./edu.png" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>EKIVAL</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Application web pour transfert d'argent et decryoto-monnaies de pair à pair</p>
            <li>Envoyer/Recevoir de l'Ada</li>
            <li>des stablecoins</li>
            <li>Vendre et acheter des biens</li>
            <h3 className=''>#P2Pmarketplace</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./edu.png" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>ADAEX</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Application mobile d'échange de crypto-monnaies via mobile money en USD</p>
            <li>Échange ADA/USD</li>
            <li>Transaction ADA/USD</li>
            <li>Suivie du taux d'échange</li>
            <h3 className=''>#CryptoExchange</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./ex.png" alt="" className='w-12 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>PROWORKSPACE</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Application web de collaboration pour une gestion efficace et productive</p>
            <li>meilleure organisation</li>
            <li>suivie de l'avancement</li>
            <li>communication facilitée</li>
            <h3 className=''>#CryptoExchange</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./agro.jpg" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>AGRO APP</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Application mobile connectée à des capteurs de sol pour une plantation précise</p>
            <li>Quand planté ?</li>
            <li>quoi planté ?</li>
            <li>où planté</li>
            <h3 className=''>#Agriculture</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>

        </div>
        <div className='bg-blue-50 shadow-lg p-4 w-280px max-md:w-full dark:bg-blue-900'>
          <div className='flex justify-between mb-5'>
            <img src="./pelek.jpg" alt="" className='w-24 h-10' />
            <p className='bg-blue-200 p-1 rounded-md dark:bg-gray-400'>PELEKAPP</p>
          </div>
          <div className='text-left mb-5'>
            <p className='mb-5'>Plateforme Web/mobile pour présenter ses expériences et compétences</p>
            <li>Expédition des colis</li>
            <li>suivie des colis</li>
            <li>Historique des courses</li>
            <h3 className=''>#DeliveryApp</h3>
          </div>
          <div className=' flex justify-between'>
            <h3>co-propriétaire</h3>
            <h3 className='text-orange-400 font-bold'>beta</h3>
            <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>
        </div>
        <div className='-mt-650px z-0'>
          <img src="public/image(1).jpg" alt="" className='w-500px h-500px z-0 opacity-30 dark:opacity-15 max-md:hidden' />
        </div>
      </div>
      <div className='mt-32 w-full overflow-hidden'>
        <h1 className='flex text-left text-5xl'>Roadmap</h1>
        <p className='flex text-left text-2xl  text-gray-500 mt-10 dark:text-gray-300'>les projets et l'action de UPDEV au fil des années :</p>
        <div className='ml-36 max-md:ml-0'>
          <div className='text-left ml-32 w-40p mr-20 mt-10 max-md:ml-5p max-md:w-full'>
            <p className='mb-5 font-bold text-2xl ml-85p max-md:ml-0p'>2019</p>
            <h3 className='text-2xl text-orange-500 font-bold mb-5'>Création de l'Entreprise UPDEV</h3>
            <h6 className=''>Update developers(UPDEV) a été fondée en tant qu'entreprise technologique de services. Depuis sa création, UPDEV s'est engagé à fournir des solutions innovantes pour résoudre des problèmes technologiques et sociaux auxquels sont confrontés ses clients</h6>
          </div>
          <div className='ml-50p text-left w-40px mr-20 mt-10 max-md:ml-5p max-md:w-full'>
            <p className='mb-5 font-bold text-2xl ml-85p max-md:ml-0p'>2020</p>
            <h3 className='text-2xl text-orange-500 font-bold mb-5'>Développement intensif des App mobiles ios/android et contribution à la réponse à la COVID-19</h3>
            <h6>l'entreprise UPDEV a intensifié ses activités en se concentrant sur le développement d'applications mobile pour les plateformes IOS et Android. Au cours de cette année, UPDEV a organisé un concours de projets technologiques, UPDEV challenge dans la ville de Goma. Nous avons également contribué à la lutte contre la COVID-19 en mettant en place un site web fournissant les données statistiques sur la COVID-19 en RDC</h6>
          </div>
          <div className='text-left ml-32 w-40p mr-20 mt-10 max-md:ml-5p max-md:w-full'>
            <p className='mb-5 font-bold text-2xl ml-85p max-md:ml-0p'>2021</p>
            <h3 className='text-2xl text-orange-500 font-bold mb-5'>UPDEV lance des produits : AgroApp et UPDEV community ainsi qu'un espace de travail à Kinshasa</h3>
            <h6>UPDEV a élargi sa gamme de services en y ajoutant le développement des applications web à ses compétences. Au cours de cette même année, nous avons lancé AgroApp en partenariat avec ISDR/GL et organisé UPDEV challenge deuxième édition. Nous avons également lancé UPDEV community , un forum d'échange entre développeurs et ouvert un espace de travail à Kinshasa en partenariat avec Ingenious city.</h6>
          </div>
          <div className='ml-50p text-left w-40px mr-20 mt-10 max-md:ml-5p max-md:w-full'>
            <p className='mb-5 font-bold text-2xl ml-85p max-md:ml-0p'>2022</p>
            <h3 className='text-2xl  text-orange-500 font-bold'>Développement de plugins et organisation du concours UPDEV challenge troisième édition</h3>
            <h6>UPDEV a élargi sa gamme de services en ajoutant le développement de plugins à son portefeuille. cette même année nous avons organisé la troisième édition du concours UPDEV challenge en partenariat avec ingenius city et parrainé par le ministère du numérique</h6>
          </div>
          <div className='text-left ml-32 w-40p mr-20 mt-10 max-md:ml-5p max-md:w-full'>
            <p className='mb-5 font-bold text-2xl ml-85p max-md:ml-0p'>2023</p>
            <h3 className='text-2xl  text-orange-500 font-bold mb-5'>UPDEV s'engage dans le développement de la Blockchain en Afrique et lance des nouvelles applications en RDC et dans l'Afrique de l'Est</h3>
            <h6>UPDEV entreprend le développement d'applications basées sur la technologie de la Blockchain en contribuant au développement de l'application EKIVAL et prévoit de lancé sa propre Blockchain dédiée aux Africains d'ici la fin de cette année. Durant cette même année, nous avons lancé l'application PelekappFood et pelekapp en RDC. Nous avons également étendue nos services de l'Est de l'Afrique en partenariat avec l'entreprise Ukuaji technologie</h6>
          </div>
        </div>
      </div>
      <div className='mt-40 w-full'>
        <h1 className='center text-5xl'>Ils nous font confiance</h1>
        <div className='w-70p mx-auto grid flex-wrap grid-cols-4 gap-8 justify-center  mt-20 max-md:grid-cols-2'>
          <img src="./edu.png" alt="" className='w-56 h-20' />
          <img src="./ukwaji.jpg" alt="" className='w-56 h-20' />
          <img src="./public/cardano.png" alt="" className='w-56 h-20 bg-blue-300 p-5 rounded-lg dark:bg-blue-950' />
          <img src="./public/ministere.jpg" alt="" className='w-56 h-20' />
          <img src="./public/pelek.jpg" alt="" className='w-56 h-20' />
          <img src="./public/wingo.png" alt="" className='w-56 h-20 bg-blue-300 p-5 rounded-lg dark:bg-blue-950' />
          <img src="./public/safrochain.png" alt="" className='w-56 h-20 bg-blue-300 p-5 rounded-lg dark:bg-blue-950' />
          <img src="./public/ikn.png" alt="" className='w-56 h-20' />

        </div>
      </div>
      <div className='flex justify-between items-center mt-32 max-md:flex-col'>
        <div className='text-left w-60p mx-auto ml-0 max-md:w-full'>
          <h1 className='text-5xl mb-5'>Notre communauté</h1>
          <p className='text-2xl  text-gray-500 mt-10  text-left max-md:w-full dark:text-gray-300'>Favoriser l'innovation technologique en permettant aux développeurs et aux technologues d'apprendre.</p>
        </div>
        <div className='flex text-left max-md:w-full max-md:mt-10'>
          <h1 className='text-8xl'>12k+</h1>
        </div>
      </div>
      <div className='flex justify-between max-md:flex-col'>
        <div className='mt-20 w-50p bg-blue-50 h-48 shadow-lg p-10 max-md:w-full dark:bg-blue-900 '>
          <div className='flex justify-between items-center'>
            <img src="./original.png" alt="" className='w-24' />
            <p>Updev community</p>
            <img src="public/External Link_48px.png" alt="" className='w-8 h-8' />
          </div>
          <div>
            <p className='flex text-left mt-5'>Plateforme d'échange et de connexion entre développeurs pour partager et améliorer leurs connaissances et grandir en tant que communauté</p>
          </div>
        </div>
        <div className=' bg-blue-50 mt-20 w-25p p-10 flex flex-col gap-5 shadow-md max-lg:w-40p  max-md:w-full max-md:p-6 dark:bg-blue-900'>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src="./public/Twitter_48px.png" alt="" className='w-8 h-8' />
              <p className='ml-2 font-bold'>Twitter</p>
            </div>
            <div>
              <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src="./Telegram App_48px.png" alt="" className='w-8 h-8' />
              <p className='ml-2 font-bold'>Telegram</p>
            </div>
            <div>
              <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src="./public/LinkedIn_48px.png" alt="" className='w-8 h-8' />
              <p className='ml-2 font-bold'>LinkedIn</p>
            </div>
            <div>
              <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src="./public/Facebook_48px.png" alt="" className='w-8 h-8' />
              <p className='ml-2 font-bold'>Facebook</p>
            </div>
            <div>
              <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src="./public/Instagram_48px.png" alt="" className='w-8 h-8' />
              <p className='ml-2 font-bold'>Instagram</p>
            </div>
            <div>
              <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src="./public/Discord_48px.png" alt="" className='w-8 h-8' />
              <p className='ml-2 font-bold'>Discord</p>
            </div>
            <div>
              <img src="./public/External Link_48px.png" alt="" className='w-8 h-8' />
            </div>
          </div>
          <div>
            <p className='flex text-left w-full'>Nous construisons la communauté par la communauté</p>
          </div>
        </div>
      </div>
      <footer>
        <div className='flex justify-between w-full mt-20 mb-5 max-md:flex '>
          <h3>clone Updev Africa</h3>
          <h3 className='text-orange-500 font-bold italic'>Ignace production</h3>
        </div>
        <hr />
        <h3 className='flex text-left mt-5'>2024</h3>
      </footer>
      <style>

      </style>
      <script>
        if (localStorage.theme=== 'dark') {
          document.documentElement.classList.add('dark')
        }else if (localStorage.theme=== 'light'){
          document.documentElement.classList.remove('dark')
        }

      </script>
    </>
  )
}

export default App
