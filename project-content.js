/* 
  PORTFOLIO CONTENT — easy editing
  Replace the Lorem Ipsum text below with your own descriptions.
  Keep both "fr" and "en" fields to maintain the bilingual website.
  You can also change titles, labels, and the feature grouping here.
*/
window.PORTFOLIO_CONTENT = {
  flame: {
    title: { fr: "Flame", en: "Flame" },
    subtitle: { fr: "Jeu de plateforme 2D - Projet d'étude (Octobre 2025 - Avril 2026)", en: "2D platformer - School project (October 2025 - April 2026)" },
    description: {
      fr: "Flame est un platformer 2D avec des éléments Die&Retry dans lequel le joueur incarne Sunno dernière flamme du soleil.",
      en: "Flame is a platformer 2D with Die&Retry elements in which the players plays as Sunno last flame of the sun."
    },
    image: "assets/flame/Présentation Flame.png",
    imageAlt: { fr: "Logo de Flame", en: "Flame logo" },
    groups: [
      {
        title: { fr: "Mobilitée", en: "Movement" },
        features: [
            { id: "dash", title: { fr: "Dash", en: "Dash" }, video: "assets/flame/Vidéo Dash.mp4", description: { fr: "Le joueur peut effectuer un dash dans toute les directions qui est son seul moyen pour effectuer des sauts dans ce platformer ou pour tuer des ennemis. Cependant, effectuer un dash consomme de la santé vitale qui est une ressource important.", en:"The player can dash in all directions, which is their only way to jump in this platformer or to defeat enemies. However, dashing consumes health, an important resource."} },
            { id: "cursor", title: { fr: "Curseur", en: "Cursor / aiming" }, video: "assets/flame/Vidéo Curseur(1).mp4", description: { fr: "Le curseur sert principalement d'indicateur au joueur pour décider dans quelle direction il va effectuer son dash. Ce curseur est controlé par la souris ou par le stick droit de la manette.", en:"The cursor primarily serves as an indicator to help the player decide in which direction to perform a dash. This cursor is controlled using the mouse or the right analog stick on a controller."} }
        ]
      },
      {
        title: { fr: "Combat et survie", en: "Combat and survival" },
        features: [
          { id:"health", title:{fr:"Barre de vie",en:"Health bar"}, video:"assets/flame/Vidéo Barre de vie.mp4", description:{fr:"Ressource importante du jeu, la barre de vie diminue constamment en dehors des safe zone ou quand le joueur effectue un dash.",en:"Important ressource of the game, the lifebar diminishes overtime while outside of safe zones or whenever the player perform a dash."} },
            { id: "enemy-death", title: { fr: "Mort des ennemis", en: "Enemy deaths" }, video: "assets/flame/Vidéo Ennemis mort.mp4", description: { fr: "Des ennemis peuplent la caverne dans laquelle se déroule le jeu. C'est en éliminant cet obstacle que les joueurs peuvent récupérer leur vie et donc continuer à faire des dash.", en:"Enemies inhabit the cavern where the game takes place. By eliminating this obstacle, players can regain their health and thus continue to dash."} },
            { id: "death-respawn", title: { fr: "Mort et réapparition", en: "Death and respawn" }, video: "assets/flame/Vidéo MortRespawn.mp4", description: { fr: "Les joueurs peuvent trouver des checkpoints prenant la forme de torche. Les checkpoints servent à récupérer sa vie et de point de retour en cas de mort, de plus, ils servent aussi de zone safe pour laisser au joueur le temps de reprendre son souffle.", en:"Players can find checkpoints in the form of torches. These checkpoints allow players to restore their health and serve as respawn points in the event of death; furthermore, they act as safe zones, giving players a moment to catch their breath."} }
        ]
      }
    ]
  },
  ayo: {
    title: { fr: "Ayo", en: "Ayo" },
    subtitle: { fr: "Jeu de craft — Projet en collaboration avec le Musée Vodoo de Strasbourg (Avril 2026 - Juin 2026)", en: "Crafting game — Project in collaboration with the Vodoo museum of Strasbourg (April 2026 - June 2026)" },
    description: {
      fr: "Ayo est un jeu éducatif visant à explorer plus en profondeur la culture Vodoo du Bénin.",
        en: "Ayo is an educational game designed to explore the Voodoo culture of Benin in greater depth."
    },
    image: "assets/ayo/Présentation Ayo.png",
    imageAlt: { fr: "Logo d’Ayo", en: "Ayo logo" },
    groups: [
      {
        title: { fr: "Gameplay", en: "Gameplay" },
        features: [
            { id: "gameplay", title: { fr: "Gameplay", en: "Gameplay" }, video: "assets/ayo/Vidéo gameplay.mp4", description: { fr: "Le but du joueur est de reconsituer une statuette qui lui ait fournis dans un mail en jeu. Pour se faire, il a à sa disposition différent matériaux qu'il peut placer sur cette statuette offrant ainsi une certaine personnalisation. Cependant attention, il y a certain matériau qu'il ne faut pas mettre sur certaine statuette car la signification de ce matériau ne correspond pas a la signification de la statuette.", en:"The player's goal is to reconstruct a statuette, details of which are provided via an in-game email. To do this, the player has various materials at their disposal that can be applied to the statuette, allowing for a degree of customization. However, caution is advised: certain materials should not be used on specific statuettes, as the meaning of the material may not align with the meaning of the statuette itself."} }
        ]
      }
    ]
  },
  phantomora: {
    title: { fr: "Phantomora", en: "Phantomora" },
    subtitle: { fr: "Prototype expérimental — test de mécaniques", en: "Experimental prototype — mechanics test" },
    description: {
      fr: "Phantomora est un test de survival horror dont la mécanique principale était d'utiliser un appareil photo pour alterner entre deux mondes.",
        en: "Phantomora is a survival horror prototype whose core mechanic involved using a camera to switch between two worlds."
    },
    image: "assets/phantomora/Phantomora.png",
    imageAlt: { fr: "Visuel de présentation de Phantomora", en: "Phantomora presentation image" },
    groups: [
      {
        title: { fr: "Mécaniques expérimentales", en: "Experimental mechanics" },
        features: [
            { id: "world-door", title: { fr: "Changement de monde et interaction avec les portes", en: "World switching and door interaction" }, video: "assets/phantomora/Changement monde&Interaction Porte.mp4", description: { fr: "Par un simple clic le joueur peut changer de monde afin de résoudre des énigmes ou encore pour échapper à l'ennemi principal; le monde autour de lui change et un filtre bleu s'installe sur l'écran pour indiquer que ce changement s'est effectué.", en:"With a simple click, the player can switch worlds to solve puzzles or escape the main enemy; the world around them changes, and a blue filter appears on the screen to indicate that this shift has taken place.."} },
            { id: "ai", title: { fr: "Gestion de l’IA", en: "AI management" }, video: "assets/phantomora/Gestion IA.mp4", description: { fr: "L'ennemi principal du jeu est complètement indépendant et se déplace dans l'environnement. Cependant elle est capable de poursuivre le joueur si ce dernier entre dans son champs de vision; de plus, la barre de vie diminue si le joueur se trouve proche de cet ennemi.", en:"The game's main enemy is entirely independent and moves throughout the environment. However, it is capable of pursuing the player if they enter its field of vision; furthermore, the player's health bar decreases if they are close to this enemy."} },
            { id: "puzzle", title: { fr: "Puzzle", en: "Puzzle" }, video: "assets/phantomora/Puzzle.mp4", description: { fr: "Le puzzle se résout en tournant les statuettes pour faire apparaitre un certain symbole, pour se faire le joueur doit explorer l'environnement pour découvrir la bonne combinaison, qui une fois correcte déverrouile un coffre.", en:"The puzzle is solved by rotating the statuettes to reveal a specific symbol; to do this, the player must explore the environment to discover the correct combination, which, once entered, unlocks a chest.."} }
        ]
      }
    ]
  }
};