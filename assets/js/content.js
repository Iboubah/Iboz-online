/*
 * CONTENU DU SITE IBOZ — c'est le seul fichier à modifier pour mettre à jour le site.
 *
 * - Un lien vide ("") = l'élément s'affiche avec la mention « lien à ajouter ».
 * - exemple: true = contenu provisoire, affiché avec un badge « Exemple ». À retirer une fois le vrai contenu saisi.
 * - Un texte peut être écrit une fois ("Titre") ou dans les deux langues ({ fr: "…", en: "…" }).
 * - Seuls les liens https:// sont acceptés (sécurité).
 */
window.IBOZ_CONTENT = {
  // Plateformes d'écoute (boutons sous la section Musique)
  platforms: [
    { label: "Spotify", url: "https://open.spotify.com/artist/0NVaBn6ESThxCh6SPi4oRT" },
    { label: "Apple Music", url: "https://music.apple.com/fr/album/1658717954" },
    { label: "Deezer", url: "https://www.deezer.com/artist/994395" },
    { label: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_klMhgRViRUK7VkKjL5jjIxeXFuCcqfy4Y" }
  ],

  // Réseaux sociaux
  socials: [
    { label: "Instagram", handle: "@iboz_offishal", url: "https://www.instagram.com/iboz_offishal/" },
    { label: "TikTok", handle: "@mriboz", url: "https://www.tiktok.com/@mriboz" },
    { label: "YouTube", handle: "@Iboz.Offishal", url: "https://www.youtube.com/@Iboz.Offishal" },
    { label: "Facebook", handle: "IbozMusic", url: "https://www.facebook.com/IbozMusic/" },
    { label: "X", handle: "@IbOz_offishal", url: "https://x.com/IbOz_offishal" }
  ],

  // Sorties. "listen" = lien Spotify, Apple Music ou Deezer du titre (lu dans le lecteur du site).
  // "cover" = chemin d'une image, ex. "assets/img/pochette.jpg".
  releases: [
    { title: "J.A.B Jusqu'au bout", type: { fr: "Album · 8 titres", en: "Album · 8 tracks" }, year: "2022", cover: "assets/img/jab.jpg", listen: "https://open.spotify.com/album/56EGaFTTAdvSI1YnjpBdLx" },
    { title: "Jusqu'au bout", type: "J.A.B", year: "2022", cover: "assets/img/jab.jpg", listen: "https://open.spotify.com/track/4SyEVRn83V1eSM4MhPHYmT" },
    { title: "Chargée comme...", type: "Single", year: "2022", cover: "assets/img/chargee-comme.jpg", listen: "https://open.spotify.com/track/1ckTdvHOiVVceX78bB1y9f" },
    { title: "Tout plier", type: "Single", year: "2021", cover: "assets/img/tout-plier.jpg", listen: "https://open.spotify.com/track/6gM8Lke2NXdEKmZO7dZELO" },
    { title: "Diéguéma (feat. Admow)", type: "Single", year: "2020", cover: "assets/img/dieguema.jpg", listen: "https://open.spotify.com/track/7KKoUiZMjT3JKeaPTxPqai" },
    { title: "Contaminé (Amina)", type: "Single", year: "2020", cover: "assets/img/contamine.jpg", listen: "https://open.spotify.com/track/4u7kN3WTENpccfYyeRFodE" },
    { title: "Laisse couler", type: "J.A.B", year: "2022", cover: "assets/img/jab.jpg", listen: "https://open.spotify.com/track/4bXI6z0LN4Hl5hj7rcZgwA" },
    { title: "Señorita", type: "J.A.B", year: "2022", cover: "assets/img/jab.jpg", listen: "https://open.spotify.com/track/1DQTJeCXuPhz1VN5rkJSfV" },
    { title: "Descends plus bas", type: "J.A.B", year: "2022", cover: "assets/img/jab.jpg", listen: "https://open.spotify.com/track/7svOEdZOlHdL6vSOLJjHaU" },
    { title: "Dans le mille", type: "Single", year: "2017", cover: "assets/img/dans-le-mille.jpg", listen: "https://www.deezer.com/album/42932341" }
  ],

  // Vidéos : lien YouTube du clip
  videos: [
    { title: { fr: "Contaminé (Amina) — Clip officiel", en: "Contaminé (Amina) — Official video" }, url: "https://www.youtube.com/watch?v=7rSs_Z3Upyg" },
    { title: { fr: "Diéguéma (feat. Admow) — Vidéo officielle", en: "Diéguéma (feat. Admow) — Official video" }, url: "https://www.youtube.com/watch?v=TwZAt7eoXXY" },
    { title: { fr: "Tout plier — Platine Africa, TV5MONDE", en: "Tout plier — Platine Africa, TV5MONDE" }, url: "https://www.youtube.com/watch?v=H6nCR-bTQkw" },
    { title: "Tout plier — EPK", url: "https://www.youtube.com/watch?v=y6ZnrImzlOw" }
  ],

  // À propos : petites infos clés affichées sous la bio
  facts: [
    { label: { fr: "Genre", en: "Genre" }, value: "Afro pop · World music" },
    { label: { fr: "Fondateur de", en: "Founder of" }, value: "Workoz Entertainment · Vybz&Motion · Doferie · Artist360" }
  ],
  portrait: "assets/img/iboz.jpg", // ex. "assets/img/iboz.jpg"

  // Projets & réalisations (du plus récent au plus ancien)
  timeline: [
    { year: "2022", title: { fr: "Album « J.A.B Jusqu'au bout »", en: "Album “J.A.B Jusqu'au bout”" }, text: { fr: "Huit titres sortis le 16 décembre, dont « Tout plier », « Diéguéma », « Contaminé (Amina) » et le single « Chargée comme... ».", en: "Eight tracks released on 16 December, including “Tout plier”, “Diéguéma”, “Contaminé (Amina)” and the single “Chargée comme...”." } },
    { year: "2021", title: { fr: "« Tout plier » et la marque Doferie", en: "“Tout plier” and the Doferie brand" }, text: { fr: "Un single afrobeat au refrain puissant, sorti en décembre. La même année, Iboz lance sa marque de vêtements Doferie — « dof », fou en wolof, sa langue maternelle.", en: "An afrobeat single with a powerful chorus, released in December. The same year, Iboz launches his clothing brand Doferie — “dof” means crazy in Wolof, his mother tongue." } },
    { year: "2020", title: { fr: "« Contaminé (Amina) » et « Diéguéma »", en: "“Contaminé (Amina)” and “Diéguéma”" }, text: { fr: "« Contaminé » sort en janvier. En juillet, « Diéguéma » — « approche-toi de moi » en wolof — en featuring avec l'artiste et acteur sénégalais Admow, porte un message de respect pour les femmes.", en: "“Contaminé” comes out in January. In July, “Diéguéma” — “come closer to me” in Wolof — featuring Senegalese artist and actor Admow, carries a message of respect for women." } },
    { year: "2017", title: "« Dans le mille »", text: { fr: "Single sorti en juin.", en: "Single released in June." } },
    { year: "2015", title: { fr: "Création de Vybz&Motion", en: "Vybz&Motion is born" }, text: { fr: "Avec Jah Faya, « Faya Boom Boom » entre à la 21e place du top 40 Yacast et passe sur D17 et MTV. Suivront « On va s'enjailler » feat. DJ Vielo (2e au classement Musibox, 3e au top 40 Yacast) et « Pum Pum » feat. Luna.", en: "With Jah Faya, “Faya Boom Boom” enters the Yacast top 40 at No. 21 and airs on D17 and MTV. Then come “On va s'enjailler” feat. DJ Vielo (No. 2 on the Musibox chart, No. 3 on the Yacast top 40) and “Pum Pum” feat. Luna." } },
    { year: "2014", title: "« Chérie Oh Yé »", text: { fr: "Meilleure entrée du classement Yacast, 11e du top 40 et plus de 16 semaines dans le top 20.", en: "Highest new entry on the Yacast chart, No. 11 on the top 40 and more than 16 weeks in the top 20." } },
    { year: "2013", title: { fr: "« Ritmo calienté » et « Fondé la »", en: "“Ritmo calienté” and “Fondé la”" }, text: { fr: "Un featuring avec Orli et une collaboration avec Carlito, restée plus de 16 semaines dans le top 40 Yacast.", en: "A feature with Orli and a collaboration with Carlito that stayed more than 16 weeks in the Yacast top 40." } },
    { year: "2011", title: "« Music Africaine »", text: { fr: "En rotation en radio et en discothèque ; le clip est largement diffusé sur M6 Music.", en: "On rotation on radio and in clubs; the video is widely aired on M6 Music." } },
    { year: "2010", title: { fr: "Premier single solo : « Dklé wolof »", en: "First solo single: “Dklé wolof”" }, text: { fr: "Co-composé avec L.Rayan. 17e du classement club Yacast, en rotation sur Fun Radio, Contact FM et Vitamine.", en: "Co-written with L.Rayan. No. 17 on the Yacast club chart, on rotation on Fun Radio, Contact FM and Vitamine." } },
    { year: "2009", title: { fr: "Arrivée en France", en: "Arrival in France" }, text: { fr: "Après plusieurs pays du continent africain, Iboz s'installe en France et entame sa carrière solo.", en: "After performing in several African countries, Iboz settles in France and starts his solo career." } },
    { year: "2008", title: { fr: "« Yaye » avec Youssou N'Dour", en: "“Yaye” with Youssou N'Dour" }, text: { fr: "Un titre dédié aux mamans, diffusé sur les radios et télés du Sénégal.", en: "A song dedicated to mothers, aired on radio and TV across Senegal." } },
    { year: "2005", title: { fr: "Prix « Espoir » aux Hip Hop Awards", en: "“Espoir” prize at the Hip Hop Awards" }, text: { fr: "Remporté avec son groupe Sukuraat.", en: "Won with his group Sukuraat." } },
    { year: "1996", title: { fr: "Les débuts avec Sukuraat", en: "The beginning with Sukuraat" }, text: { fr: "Le groupe se forme au Sénégal et se fait une place parmi les meilleurs artistes du hip-hop sénégalais.", en: "The group forms in Senegal and earns its place among the best Senegalese hip-hop acts." } }
  ],

  // Entrepreneur : une carte par activité
  ventures: [
    { name: "Workoz Entertainment", role: { fr: "Fondateur", en: "Founder" },
      text: { fr: "Le label indépendant d'Iboz, qui gère aussi son booking et son management.", en: "Iboz's independent label, also handling his booking and management." },
      url: "" },
    { name: "Vybz&Motion", role: { fr: "Fondateur & membre", en: "Founder & member" }, year: "2015",
      text: { fr: "Groupe de world music fondé avec Jah Faya. Trois singles : « Faya Boom Boom », « On va s'enjailler » feat. DJ Vielo et « Pum Pum » feat. Luna.", en: "World music group founded with Jah Faya. Three singles: “Faya Boom Boom”, “On va s'enjailler” feat. DJ Vielo and “Pum Pum” feat. Luna." },
      url: "https://www.deezer.com/artist/9343000" },
    { name: "Doferie", role: { fr: "Directeur-fondateur", en: "Founder & director" }, year: "2021",
      text: { fr: "Marque de vêtements « hors du commun » : « dof » veut dire fou en wolof. Prêt-à-porter homme et femme, et accessoires.", en: "An “out of the ordinary” clothing brand: “dof” means crazy in Wolof. Men's and women's ready-to-wear, and accessories." },
      url: "https://www.instagram.com/doferie_wear/" },
    { name: "Artist360", role: { fr: "Fondateur", en: "Founder" },
      text: { fr: "Un directeur artistique personnel pour les artistes indépendants : direction artistique, contenu, identité et sortie, pour structurer sa carrière.", en: "A personal artistic director for independent artists: creative direction, content, identity and releases, to structure a career." },
      url: "https://artist360.fr/" }
  ],

  // Interviews & presse
  press: [
    { media: "Music In Africa", kind: { fr: "Article", en: "Feature" }, title: "JAB – Iboz, jusqu'au bout du rêve…", date: "2023", url: "https://musicinafrica.net/fr/magazine/jab-iboz-jusquau-bout-du-reve/" },
    { media: "Music In Africa", kind: "Interview", title: "Iboz : « le coronavirus ne tuera pas la création »", date: "2020", url: "https://musicinafrica.net/fr/magazine/iboz-le-coronavirus-ne-tuera-pas-la-creation/" },
    { media: "Senego", kind: { fr: "Portrait", en: "Profile" }, title: "Iboz : à la découverte d'une voix et d'une voie d'Afrique", date: "2020", url: "https://senego.com/iboz-a-la-decouverte-dune-voix-et-dune-voie-dafrique_1173636.html" },
    { media: "Afrik.com", kind: "Interview", title: "Entretien avec Iboz : dans les coulisses de « Diéguéma »", date: "2020", url: "https://www.afrik.com/entretien-avec-iboz-dans-les-coulisses-de-dieguema" },
    { media: "Music In Africa", kind: { fr: "Article", en: "Feature" }, title: "Sénégal : découvrez « Diéguéma », le nouveau single d'Iboz et Admow", date: "2020", url: "https://musicinafrica.net/fr/magazine/senegal-decouvrez-dieguema-le-nouveau-single-diboz-et-admow/" }
  ],

  // Bandeau défilant
  marquee: {
    fr: ["Afro pop", "World music", "Nouveau projet en préparation", "Booking ouvert"],
    en: ["Afro pop", "World music", "New project in the works", "Booking open"]
  },

  // Textes de l'interface
  t: {
    fr: {
      "skip": "Aller au contenu",
      "nav.music": "Musique", "nav.videos": "Vidéos", "nav.about": "À propos", "nav.projects": "Projets", "nav.ventures": "Entrepreneur", "nav.press": "Presse", "nav.contact": "Contact",
      "hero.kicker": "Afro pop · World music",
      "hero.tag": "Des rythmes qui voyagent, une voix qui reste.",
      "hero.listen": "Écouter", "hero.booking": "Booking & contact",
      "music.title": "Musique", "music.lead": "Lance un titre : il continue de jouer pendant que tu explores le site.",
      "videos.title": "Vidéos", "videos.lead": "Clips, lives et coulisses.",
      "about.title": "À propos", "about.photo": "Photo d'Iboz",
      "about.bio": "Iboz, de son vrai nom Ibou Bah Gaye, est un artiste d'origine sénégalaise. Il débute au sein du groupe Sukuraat, formé en 1996 au Sénégal, qui s'impose sur la scène hip-hop du pays : prix « Espoir » aux Hip Hop Awards en 2005, puis « Yaye », un titre dédié aux mamans enregistré avec Youssou N'Dour.\n\nArrivé en France en 2009, il se lance en solo. « Dklé wolof », « Music Africaine », « Ritmo calienté » et « Chérie Oh Yé » s'installent dans les classements clubs Yacast et tournent en radio, pendant qu'il fonde le groupe Vybz&Motion.\n\nAvec « Contaminé », « Diéguéma », « Tout plier » puis l'album « J.A.B Jusqu'au bout » en 2022, Iboz confirme un talent unique et atypique, qui fait voyager à travers les tendances musicales actuelles avec une joie et une énergie débordantes.",
      "projects.title": "Projets & réalisations", "projects.lead": "Le parcours, étape par étape.",
      "ventures.title": "Entrepreneur", "ventures.lead": "Au-delà de la scène, Iboz crée et développe ses propres projets.",
      "press.title": "Interviews & presse", "press.lead": "Ils en parlent.",
      "connect.title": "Réseaux", "connect.lead": "Suis l'aventure au quotidien.",
      "contact.title": "Contact & booking", "contact.lead": "Concert, collaboration, interview : écris directement à l'équipe.",
      "form.name": "Nom", "form.email": "E-mail", "form.subject": "Sujet", "form.message": "Message",
      "form.s1": "Booking / concert", "form.s2": "Presse / interview", "form.s3": "Collaboration", "form.s5": "Partenariat / business", "form.s4": "Autre",
      "form.consent": "J'accepte que mes informations soient utilisées pour répondre à ma demande.",
      "form.send": "Envoyer",
      "form.ok": "Merci, ton message est bien parti.",
      "form.err": "L'envoi n'a pas fonctionné. Réessaie dans un instant.",
      "news.title": "Ne rate aucune sortie", "news.lead": "Nouveaux titres, dates de concert et exclus, directement par e-mail.",
      "news.consent": "J'accepte de recevoir les actualités d'Iboz par e-mail. Désinscription possible à tout moment.",
      "news.send": "Je m'inscris",
      "footer.rights": "Tous droits réservés.", "footer.legal": "Mentions légales & confidentialité",
      "badge.example": "Exemple", "badge.todo": "Lien à ajouter",
      "play": "Écouter", "watch": "Regarder", "read": "Lire", "discover": "Découvrir", "soon": "Bientôt disponible"
    },
    en: {
      "skip": "Skip to content",
      "nav.music": "Music", "nav.videos": "Videos", "nav.about": "About", "nav.projects": "Projects", "nav.ventures": "Entrepreneur", "nav.press": "Press", "nav.contact": "Contact",
      "hero.kicker": "Afro pop · World music",
      "hero.tag": "Rhythms that travel, a voice that stays.",
      "hero.listen": "Listen", "hero.booking": "Booking & contact",
      "music.title": "Music", "music.lead": "Start a track: it keeps playing while you explore the site.",
      "videos.title": "Videos", "videos.lead": "Music videos, live sessions and behind the scenes.",
      "about.title": "About", "about.photo": "Photo of Iboz",
      "about.bio": "Iboz, born Ibou Bah Gaye, is an artist of Senegalese origin. He started out with the group Sukuraat, formed in Senegal in 1996, which made its mark on the country's hip-hop scene: the “Espoir” prize at the Hip Hop Awards in 2005, then “Yaye”, a song dedicated to mothers recorded with Youssou N'Dour.\n\nHe arrived in France in 2009 and went solo. “Dklé wolof”, “Music Africaine”, “Ritmo calienté” and “Chérie Oh Yé” climbed the Yacast club charts and played on radio, while he founded the group Vybz&Motion.\n\nWith “Contaminé”, “Diéguéma”, “Tout plier” and then the 2022 album “J.A.B Jusqu'au bout”, Iboz confirms a unique, one-of-a-kind talent that travels through today's musical trends with overflowing joy and energy.",
      "projects.title": "Projects & milestones", "projects.lead": "The journey, step by step.",
      "ventures.title": "Entrepreneur", "ventures.lead": "Beyond the stage, Iboz builds and grows his own ventures.",
      "press.title": "Interviews & press", "press.lead": "In the media.",
      "connect.title": "Socials", "connect.lead": "Follow the journey day by day.",
      "contact.title": "Contact & booking", "contact.lead": "Shows, collaborations, interviews: write straight to the team.",
      "form.name": "Name", "form.email": "Email", "form.subject": "Subject", "form.message": "Message",
      "form.s1": "Booking / show", "form.s2": "Press / interview", "form.s3": "Collaboration", "form.s5": "Partnership / business", "form.s4": "Other",
      "form.consent": "I agree that my details are used to reply to my request.",
      "form.send": "Send",
      "form.ok": "Thank you, your message is on its way.",
      "form.err": "Sending failed. Please try again in a moment.",
      "news.title": "Never miss a release", "news.lead": "New tracks, tour dates and exclusives, straight to your inbox.",
      "news.consent": "I agree to receive news from Iboz by email. Unsubscribe at any time.",
      "news.send": "Sign me up",
      "footer.rights": "All rights reserved.", "footer.legal": "Legal notice & privacy",
      "badge.example": "Example", "badge.todo": "Link to add",
      "play": "Listen", "watch": "Watch", "read": "Read", "discover": "Discover", "soon": "Coming soon"
    }
  }
};
