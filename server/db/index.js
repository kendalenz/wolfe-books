const conn = require('./conn');
const User = require('./User');
const Book = require('./Book');
const Order = require('./Order');
const LineItem = require('./LineItem');
const Review = require('./Review');
const Checkout = require('./Checkout');

User.hasMany(Order, { hooks: true, onDelete: 'CASCADE' });
Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem, { hooks: true, onDelete: 'CASCADE' });
LineItem.belongsTo(Book);
Review.belongsTo(Book);
Book.hasMany(LineItem, { hooks: true, onDelete: 'CASCADE' });
Book.hasMany(Review, { hooks: true, onDelete: 'CASCADE' });
Review.belongsTo(User);
User.hasMany(Review);
Checkout.belongsTo(Order);
Order.hasOne(Checkout);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [
    moe,
    may,
    lucy,
    larry,
    cece,
    wayward,
    girlInLandscape,
    physics,
    runner,
    claysArk,
    stranger,
    automateWithPython,
    heartbreaking,
    geekLove,
    eloquentJavascript,
    underworld,
    ethyl,
  ] = await Promise.all([
    User.create({
      username: 'moe',
      password: '123',
      firstName: 'monique',
      lastName: 'harvey',
      email: 'moe@fullstack.edu',
      isAdmin: true,
    }),
    User.create({
      username: 'may',
      password: '123',
      firstName: 'marie',
      lastName: 'smith',
      email: 'may@fullstack.edu',
      isAdmin: true,
    }),
    User.create({
      username: 'lucy',
      password: '123',
      firstName: 'lucinda',
      lastName: 'daniel',
      email: 'lucy@fullstack.edu',
    }),
    User.create({
      username: 'larry',
      password: '123',
      firstName: 'laurence',
      lastName: 'fishburn',
      email: 'larry@fullstack.edu',
    }),
    User.create({
      username: 'cece',
      password: '123',
      firstName: 'grace',
      lastName: 'amazing',
      email: 'cece@fullstack.edu',
    }),
    Book.create({
      title: 'Wayward',
      author: 'Chris Burkhard',
      genre: 'Non-fiction',
      description:
        'Wayward is a collection of strking photographs and the revealing personal stories behind them by one of the leading surf, nature, and adventure photographers of our time.',
      price: '35.00',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/B8C2C643/EAN-9781419732768',
    }),
    Book.create({
      title: 'Girl in Landscape',
      author: 'Jonathan Lethem',
      genre: 'Fiction',
      description:
        'Girl in Landscape finds Lethem once again twisting forms and literary conventions to create a dazzling, completely unconventional tale that manages simultaneously to amaze and move the reader. The heroine is a fourteen-year-old Pella Marsh, whose mother dies just as her family flees a postapocalyptic Brooklyn for the frontier of a recently discovered planet.',
      price: '22.95',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/972A945D/EAN-9780385485180',
    }),
    Book.create({
      title: 'Seven Brief Lessons on Physics',
      author: 'Carlo Rovelli',
      genre: 'Non-fiction',
      description: `This playful, entertaining, and mind-bending introduction to modern physics briskly explains Einstein's general relativity, quantum mechanics, elementary particles, gravity, black holes, the complex architecture of the universe, and the role humans play in this weird and wonderful world. Carlo Rovelli, a renowned theoretical physicist, is a delightfully poetic and philosophical scientific guide. He takes us to the frontiers of our knowledge: to the most minute reaches of the fabric of space, back to the origins of the cosmos, and into the workings of our minds. The book celebrates the joy of discovery. "Here, on the edge of what we know, in contact with the ocean of the unknown, shines the mystery and the beauty of the world," Rovelli writes. "And it's breathtaking.`,
      price: '18.00',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/7F8A6166/EAN-9780399184413',
    }),
    Book.create({
      title: 'Once a Runner',
      author: 'John L. Parker, Jr.',
      genre: 'Fiction',
      description: `Originally self-published in 1978 and sold at road races out of the trunk of the author's car, ONCE A RUNNER, an inspiring, funny and spot-on tale of one man's quest to become a champion, eventually found its way into the hands of highschool, college, and postgraduate athletes all over the country. The book captures what it means to be a competitive runner, to devote one's entire existence to a single-minded pursuit of excellence. In doing so, it has become one of the most beloved posrts novels ever published. 272p. /n Perhaps the best novel ever written about running. There are parts of "Once a Runner" that are pure poetry. I have never read descriptions of what it is to run and race as accurate and compelling as Parker's.--Tom Jordan, "Track & Field News.`,
      price: '17.00',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/100ADAB7/EAN-9781416597896',
    }),
    Book.create({
      title: "Clay's Ark",
      author: 'Octavia E. Butler',
      genre: 'Science Fiction',
      description:
        'A gripping tale of survival as an alien pandemic irrevocably changes humanity, from the critically acclaimed author of Parable of the Sower.\n In a violent near-future, Asa Elias Doyle and her companions encounter an alien life form so heinous and destructive, they exile themselves in the desert so as not to contaminate other humans. Resisting the compulsion to infect others is mental agony, but succumbing would mean relinquishing their humanity and free will. Desperate, they kidnap a doctor and his two daughters as they cross the wasteland -- and, in doing so, endanger the world.',
      price: '16.99',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/B9F06AC5/EAN-9781538751503',
    }),
    Book.create({
      title: 'Stranger in a Strange Land',
      author: 'Robert A. Heinlein',
      genre: 'Science Fiction',
      description:
        "Raised by Martians on Mars, Valentine Michael Smith is a human who has never seen another member of his species. Sent to Earth, he is a stranger who must learn what it is to be a man. But his own beliefs and his powers far exceed the limits of humankind, and as he teaches them about grokking and water-sharing, he also inspires a transformation that will alter Earth's inhabitants forever...",
      price: '9.99',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/29ADBA02/EAN-9781984802781',
    }),
    Book.create({
      title: 'Automate the Boring Stuff with Python',
      author: 'Al Sweigart',
      genre: 'Software Development',
      description:
        "If you've ever spent hours renaming files or updating hundreds of spreadsheet cells, you know how tedious tasks like these can be. But what if you could have your computer do them for you? In this fully revised second edition of the best-selling classic Automate the Boring Stuff with Python, you'll learn how to use Python to write programs that do in minutes what would take you hours to do by hand--no prior programming experience required. You'll learn the basics of Python and explore Python's rich library of modules for performing specific tasks, like scraping data off websites, reading PDF and Word documents, and automating clicking and typing tasks.",
      price: '39.95',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/4351951B/EAN-9781593279929',
    }),
    Book.create({
      title: 'A Heartbreaking Work of Staggering Genius',
      author: 'Dave Eggers',
      genre: 'Non-fiction',
      description:
        'The literary bestseller that redefines both family and narrative for the 21st century, this moving memoir is the story of a college senior who, in the space of five weeks, loses both of his parents to cancer and inherits his eight-year-old brother. This is an exhilarating debut that manages to be simultaneously hilarious and wildly inventive as well as a deeply heartfelt story of the love that holds a family together.',
      price: '18.00',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/E66CC6D6/EAN-9780375725784',
    }),
    Book.create({
      title: 'Geek Love',
      author: 'Katherine Dunn',
      genre: 'Fiction',
      description:
        'At once a highly regarded novel and an enduring cult classic, "Geek Love" is the story of the Binewskis, a carnival family of human oddities. As Dunn charts their journey across the U.S. backwaters, their Machiavellian rivalries, and their galvanic effect on gawking crowds, she takes on everything from definitions of beauty to organized religion to family values.',
      price: '17.95',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/39BFAFD3/EAN-9780375713347',
    }),
    Book.create({
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      genre: 'Software Development',
      description:
        'This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of JavaScript and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track.',
      price: '39.95',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/57848D64/EAN-9781593279509',
    }),
    Book.create({
      title: 'Underworld',
      author: 'Don DeLillo',
      genre: 'Fiction',
      description:
        'A finalist for the National Book Award, Don DeLillo\'s most powerful and riveting novel--"a great American novel, a masterpiece, a thrilling page-turner" (San Francisco Chronicle)--Underworld is about the second half of the twentieth century in America and about two people, an artist and an executive, whose lives intertwine in New York in the fifties and again in the nineties. With cameo appearances by Lenny Bruce, J. Edgar Hoover, Bobby Thompson, Frank Sinatra, Jackie Gleason and Toots Shor, "this is DeLillo\'s most affecting novel...a dazzling, phosphorescent work of art" (Michiko Kakutani, The New York Times).',
      price: '22.00',
      imageUrl:
        'https://d2p7wwv96gt4xt.cloudfront.net/G/BA6443C5/EAN-9780684848150',
    }),
    User.create({
      username: 'ethyl',
      password: '123',
      firstName: 'ethylin',
      lastName: 'grace',
      email: 'ethyl@fullstack.edu',
    }),
  ]);
  await Review.create({
    userId: moe.id,
    bookId: wayward.id,
    rating: 5,
    text: 'amaaaazing!!',
  });
  await Review.create({
    userId: lucy.id,
    bookId: wayward.id,
    rating: 4,
    text: 'must buy!!',
  });
  await Review.create({
    userId: larry.id,
    bookId: girlInLandscape.id,
    rating: 5,
    text: '2 thumbs up!!',
  });
  await Review.create({
    userId: ethyl.id,
    bookId: girlInLandscape.id,
    rating: 5,
    text: 'greeaaaat!!',
  });
  await Book.create({
    title: 'The Candy House',
    author: 'Jennifer Egan',
    genre: 'Fiction',
    description:
      "The Candy House opens with the staggeringly brilliant Bix Bouton, whose company, Mandala, is so successful that he is “one of those tech demi-gods with whom we're all on a first name basis.” Bix is forty, with four kids, restless, and desperate for a new idea, when he stumbles into a conversation group, mostly Columbia professors, one of whom is experimenting with downloading or “externalizing” memory. Within a decade, Bix's new technology, “Own Your Unconscious”—which allows you access to every memory you’ve ever had, and to share your memories in exchange for access to the memories of others—has seduced multitudes.In the world of Egan's spectacular imagination, there are “counters” who track and exploit desires and there are “eluders,” those who understand the price of taking a bite of the Candy House. Egan introduces these characters in an astonishing array of narrative styles—from omniscient to first person plural to a duet of voices, an epistolary chapter, and a chapter of tweets. Intellectually dazzling, The Candy House is also a moving testament to the tenacity and transcendence of human longing for connection, family, privacy, and love.",
    price: '28.00',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/6E90DD8A/EAN-9781476716763',
  });
  await Book.create({
    title: 'Words and Rules: The Ingredients of Language',
    author: 'Steven Pinker',
    genre: 'Cognitive Science',
    description:
      "In Words and Rules, Steven Pinker explores profound mysteries of language by picking a deceptively simple phenomenon--regular and irregular verbs--and examining it from every angle. With humor and verve, he covers an astonishing array of topics in the sciences and humanities, from the history of languages to how to simulate languages on computers to major ideas in the history of Western philosophy.   Through it all, Pinker presents a single, powerful idea: that language comprises a mental dictionary of memorized words and a mental grammar of creative rules. The idea extends beyond language and offers insight into the very nature of the human mind.   This is a sparkling, eye-opening, and utterly original book by one of the world's leading cognitive scientists.",
    price: '18.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/18FCE24C/EAN-9780465072705',
  });
  await Book.create({
    title: 'The Language Instinct',
    author: 'Steven Pinker',
    genre: 'Cognitive Science',
    description:
      "In this classic, the world's expert on language and mind lucidly explains everything you always wanted to know about language: how it works, how children learn it, how it changes, how the brain computes it, and how it evolved. With deft use of examples of humor and wordplay, Steven Pinker weaves our vast knowledge of language into a compelling story: language is a human instinct, wired into our brains by evolution. The Language Instinct received the William James Book Prize from the American Psychological Association and the Public Interest Award from the Linguistics Society of America. This edition includes an update on advances in the science of language since The Language Instinct was first published.",
    price: '17.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/FF7D817F/EAN-9780061336461',
  });
  await Book.create({
    title: 'The City We Became',
    author: 'N.K. Jemisin',
    genre: 'Science Fiction',
    description:
      "\"A glorious fantasy.\"--Neil Gaiman Three-time Hugo Award-winning and New York Times bestselling author N.K. Jemisin crafts her most incredible novel yet, a story of culture, identity, magic, and myths in contemporary New York City.     In Manhattan, a young grad student gets off the train and realizes he doesn't remember who he is, where he's from, or even his own name. But he can sense the beating heart of the city, see its history, and feel its power.</br>In the Bronx, a Lenape gallery director discovers strange graffiti scattered throughout the city, so beautiful and powerful it's as if the paint is literally calling to her.     In Brooklyn, a politician and mother finds she can hear the songs of her city, pulsing to the beat of her Louboutin heels.And they're not the only ones.",
    price: '17.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/CCAAED4D/EAN-9780316509848',
  });
  await Book.create({
    title: 'Bobby Fischer Teaches Chess',
    author: 'Bobby Fischer',
    genre: 'Educational',
    description:
      'Learn how to play chess the Bobby Fischer way with the fastest, most efficient, most enjoyable method ever devised. Whether you’re just learning the game or looking for more complex strategies, these practice problems and exercises will help you master the art of the checkmate. ',
    price: '8.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/C7905B8C/EAN-9780553263152',
  });
  await Book.create({
    title: 'Dreams',
    author: 'C.G. Jung',
    genre: 'Psychology',
    description:
      'Dream analysis is a distinctive and foundational part of analytical psychology, the school of psychology founded by C. G. Jung and his successors. This volume collects Jung\'s most insightful contributions to the study of dreams and their meaning. The essays in this volume, written by Jung between 1909 and 1945, reveal Jung\'s most essential views about dreaming--especially regarding the relationship between language and dream. Through these studies, Jung grew to understand that dreams are themselves a language, a language through which the soul communicates with the body. The essays included are "The Analysis of Dreams," "On the Significance of Number Dreams," "General Aspects of Dream Psychology," "On the Nature of Dreams," "The Practical Use of Dream Analysis," and "Individual Dream Symbolism in Relation to Alchemy" (complete with illustrations). ',
    price: '16.95',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/2C4EBC05/EAN-9780691150482',
  });
  await Book.create({
    title:
      'Modern Full-Stack Development: Using Typescript, React, Node.Js, Webpack, and Docker',
    author: 'Frank Zammetti',
    genre: 'Software Development',
    description:
      "Explore what React, Node, TypeScript, Webpack, and Docker have to offer individually, and how they all fit together in modern app development.React is one of the most popular web development tools available today, and Node.js is extremely popular for server-side development. The fact that both utilize JavaScript is a big selling point, but as developers use the language more, they begin to recognize the shortcomings, and that's where TypeScript comes in and why it's gaining in popularity quickly. Add Webpack and Docker to the mix, and you've got a potent full development stack on which to build applications.You'll begin by building a solid foundation of knowledge and quickly expand it by constructing two different real-world apps. These aren't just simple, contrived examples but real apps that you can choose to install on your servers and use for real. By the end, you will have a solid grasp of building apps with React, Node.js, and TypeScript and a good grasp on how Webpack can be used to optimize and organize your code for deployment. You'll also understand how Docker can be used to run the apps you build in a clear and well-defined way, all of which will be able to springboard you into creating more advanced apps on your own.",
    price: '44.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/04D67517/EAN-9781484257371',
  });
  await Book.create({
    title: 'The Lathe of Heaven',
    author: 'Ursula K. Le Guin',
    genre: 'Science Fiction',
    description:
      'In a future world racked by violence and environmental catastrophes, George Orr wakes up one day to discover that his dreams have the ability to alter reality. He seeks help from Dr. William Haber, a psychiatrist who immediately grasps the power George wields. Soon George must preserve reality itself as Dr. Haber becomes adept at manipulating George’s dreams for his own purposes. 184p.',
    price: '17.00',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/F67B8622/EAN-9781416556961',
  });
  await Book.create({
    title: 'Annihilation (Southern Reach Trilogy: Book 1)',
    author: 'Jeff Vandermeer',
    genre: 'Science Fiction',
    description:
      "Area X has been cut off from the rest of the continent for decades. Nature has reclaimed the last vestiges of human civilization. The first expedition returned with reports of a pristine, Edenic landscape; the second expedition ended in mass suicide; the third expedition in a hail of gunfire as its members turned on one another. The members of the eleventh expedition returned as shadows of their former selves, and within weeks, all had died of cancer. In Annihilation, the first volume of Jeff VanderMeer's Southern Reach trilogy, we join the twelfth expedition.The group is made up of four women: an anthropologist; a surveyor; a psychologist, the de facto leader; and our narrator, a biologist. Their mission is to map the terrain, record all observations of their surroundings and of one another, and, above all, avoid being contaminated by Area X itself.They arrive expecting the unexpected, and Area X delivers--they discover a massive topographic anomaly and life forms that surpass understanding--but it's the surprises that came across the border with them and the secrets the expedition members are keeping from one another that change everything.",
    price: '16.00',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/5F3DCDDD/EAN-9780374104092',
  });
  await Book.create({
    title: 'Wicked: The Life and Times of the Wicked Witch of the West',
    author: 'Gregory Maguire',
    genre: 'Fiction',
    description:
      "When Dorothy triumphed over the Wicked Witch of the West in L. Frank Baum's classic tale, we heard only her side of the story. But what about her arch-nemesis, the mysterious witch? Where did she come from? How did she become so wicked? And what is the true nature of evil? Gregory Maguire creates a fantasy world so rich and vivid that we will never look at Oz the same way again. Wicked is about a land where animals talk and strive to be treated like first-class citizens, Munchkinlanders seek the comfort of middle-class stability and the Tin Man becomes a victim of domestic violence. And then there is the little green-skinned girl named Elphaba, who will grow up to be the infamous Wicked Witch of the West, a smart, prickly and misunderstood creature who challenges all our preconceived notions about the nature of good and evil. ",
    price: '8.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/773149A4/EAN-9780061350962',
  });
  await Book.create({
    title: 'Parable of the Sower (Earthseed #1)',
    author: 'Octavia E. Butler',
    genre: 'Fiction',
    description:
      "When global climate change and economic crises lead to social chaos in the early 2020s, California becomes full of dangers, from pervasive water shortage to masses of vagabonds who will do anything to live to see another day. Fifteen-year-old Lauren Olamina lives inside a gated community with her preacher father, family, and neighbors, sheltered from the surrounding anarchy. In a society where any vulnerability is a risk, she suffers from hyperempathy, a debilitating sensitivity to others' emotions.    Precocious and clear-eyed, Lauren must make her voice heard in order to protect her loved ones from the imminent disasters her small community stubbornly ignores. But what begins as a fight for survival soon leads to something much more: the birth of a new faith . . . and a startling vision of human destiny. ",
    price: '16.99',
    imageUrl:
      'https://d2p7wwv96gt4xt.cloudfront.net/G/363FFD5A/EAN-9781538732182',
  });
  await Review.create({
    userId: cece.id,
    bookId: runner.id,
    rating: 5,
    text: 'This book changed my life for the better',
  });
  const cart = await ethyl.getCart();
  await ethyl.addToCart({ book: wayward, quantity: 3 });
  await ethyl.addToCart({ book: girlInLandscape, quantity: 2 });
  return {
    users: {
      moe,
      may,
      lucy,
      larry,
      cece,
      ethyl,
    },
    books: {
      wayward,
      girlInLandscape,
      physics,
      runner,
      claysArk,
      stranger,
      automateWithPython,
      heartbreaking,
      geekLove,
      eloquentJavascript,
      underworld,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Book,
  Review,
  Checkout,
};
