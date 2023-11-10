const img = [
  {
    title: 'Morning and Evening',
    desc: `I am now able to confront the fears that were in my subconscious. It seems that I might be less afraid now.`,
    url: '/imgBooks/38morning.jpg',
    date: 'October 2023'
  },
  {
    title: '아버지의 해방일지',
    desc: `The novel begins with the sentence 'Father died.'`,
    url: '/imgBooks/1아버지의해방일지.jpg',
    date: 'October 2023'
  },
  {
    title: '작별인사',
    desc: `A young boy, who was peacefully living with his father, a renowned IT company researcher, encounters unfamiliar threats and chaos, facing a new world.`,
    url: '/imgBooks/2작별인사.jpg',
    date: 'October 2023'
  },
  {
    title: 'WHERE THE CRAWDADS SING ⭐⭐⭐',
    desc: `The sentences are so beautiful. When I see Kya waiting for her mother, my heart truly aches, but when I see Kya growing up so bravely, I find solace in life.`,
    url: '/imgBooks/3where-b.jpg',
    date: 'October 2023'
  },
  {
    title: 'STONER ⭐⭐⭐',
    desc: `The more you read, the deeper the meaning of the book becomes.`,
    url: '/imgBooks/4stoner-b.jpg',
    date: 'October 2023'
  },
  {
    title: 'COSMOS',
    desc: `Humanity and the universe are fundamentally connected and we are just dust`,
    url: '/imgBooks/5cosmos.jpg',
    date: 'August 2023'
  },
  {
    title: 'COSMOS POSSIBEL WORLDS',
    desc: `It satisfied my intellectual curiosity.`,
    url: '/imgBooks/6cosmosPossible.jpg',
    date: 'September 2023'
  },
  {
    title: 'THE VERGE ⭐⭐⭐',
    desc: `I learned about the medieval era that I wasn't interested in, and a new window to the world opened for me.`,
    url: '/imgBooks/7theverge-b.jpg',
    date: 'September 2023'
  },
  {
    title: 'RENAISSANCE MILITARY MEMOIRS',
    desc: `In fact, medieval knights were not heroes. They were individuals who killed many people for empty honor.`,
    url: '/imgBooks/8renaissance.jpg',
    date: 'September 2023'
  },
  {
    title: 'ONE DAY IN THE LIFE OF IVAN DENISOVICH',
    desc: `It pains my heart that I cannot help the suffering that occurred in different times and places.`,
    url: '/imgBooks/9iban.jpg',
    date: 'September 2023'
  },
  {
    title: '인생의 역사',
    desc: `Books provide deep insights into life.`,
    url: '/imgBooks/10인생의역사.jpg',
    date: 'August 2023'
  },
  {
    title: 'GENTLE MAN IN MOSCOW',
    desc: `The book is very elegant, and it contains many sentences that offer a substantial glimpse into life.`,
    url: '/imgBooks/11gentleman.jpg',
    date: 'August 2023'
  },
  {
    title: 'CAMINO ISLAND',
    desc: `Who on earth could be in possession of that manuscript? I couldn't let go of the book while thinking about it.`,
    url: '/imgBooks/12camino.jpg',
    date: 'May 2023'
  },
  {
    title: 'MIROIR DE NOS PEINES',
    desc: `This completes Pierre Lemaitre's war trilogy. It's enjoyable once again.`,
    url: '/imgBooks/13miroir.jpg',
    date: 'May 2023'
  },
  {
    title: '열두 발자국',
    desc: `This book was one that helped me make wiser choices when I stood at crossroads in my life.`,
    url: '/imgBooks/14열두발자국.jpg',
    date: 'April 2023'
  },
  {
    title: '셔터를 올리며',
    desc: `The author, along with their family's history, described the modern history of Korea. It was a great opportunity for me to indirectly experience an era I didn't live in.`,
    url: '/imgBooks/15셔터를올리며.jpg',
    date: 'April 2023'
  },
  {
    title: '해바라기가 피지 않는 여름',
    desc: `I thoroughly enjoyed reading it, but after finishing it, I thought, "What was that?" The author left the readers somewhat bewildered.`,
    url: '/imgBooks/15해바라기.jpg',
    date: 'April 2023'
  },
  {
    title: 'Cry of the Kalahari ⭐⭐⭐',
    desc: `This is the story of two zoologists who spent nearly 8 years observing wildlife in Kalahari. Hats off to their courage. The vivid descriptions made it feel like Kalahari was right in front of my eyes. I truly hope that many people read this book and enhance their ability to empathize with animals.`,
    url: '/imgBooks/17칼라하리-b.jpg',
    date: 'April 2023'
  },
  {
    title: 'Disfigured: On Fairy Tales, Disability, and Making Space',
    desc: `If someone is ugly or disabled, it is not desirable to be portrayed as a villain in movies or fairy tales. Everyone should realize that this can instill wrong prejudices in the minds of children.`,
    url: '/imgBooks/18휠체어.jpg',
    date: 'April 2023'
  },
  {
    title: '언러키 스타트업',
    desc: `You can see how much the power of the current 2030 generation has grown in society. It was a delightful reading experience.`,
    url: '/imgBooks/19언러키.jpg',
    date: 'March 2023'
  },
  {
    title: '아무튼, 현수동',
    desc: `I have thought about where I would like to live and what kind of neighbors I would like to have.`,
    url: '/imgBooks/19현수동.jpg',
    date: 'March 2023'
  },
  {
    title: 'ON THE MOVE',
    desc: `Through Oliver Sacks' autobiography, I could imagine the United States and the United Kingdom of the era in which he lived. He was fortunate to be born into an affluent family and had a talent for writing. It seems that he was more attached to his sexual identity than the privilege he possessed.`,
    url: '/imgBooks/21onthemove.jpg',
    date: 'March 2023'
  },
  {
    title: 'The Guernsey Literary and Potato Peel Pie Society',
    desc: `I think, reading books can give us the strength to overcome real-life challenges, just like the members of the Guernsy society.`,
    url: '/imgBooks/22건지.jpg',
    date: 'March 2023'
  },
  {
    title: 'ISABELL THE AFTERNOON',
    desc: `The passionate and heart-wrenching love story between Isabelle, a married French woman, and Sam, a young American college student. Through the love of these two, the author continuously poses questions to the readers about what life is to us... And what love is...`,
    url: '/imgBooks/23sabelle.jpg',
    date: 'February 2023'
  },
  {
    title: "WHY FISH DON'T EXIST",
    desc: `Author Lulu Miller humorously pinches at the idea that someone we hold in high regard, a so-called 'hero,' might be quite inadequate when seen through the lens of today's values. It's an entertaining book that leaves me with a sense of delight.`,
    url: '/imgBooks/24whyfish.jpg',
    date: 'February 2023'
  },
  {
    title: "TEMPTATION",
    desc: `The main character lived as an unknown writer for ten years, and suddenly became a popular Hollywood writer. He were overwhelmed by busyness and the sudden flood of attention. Then, one day, he were suddenly embroiled in a plagiarism controversy. My emotions rose and fell along with the main character's success and failure.`,
    url: '/imgBooks/25temptation.jpg',
    date: 'February 2023'
  },
  {
    title: "Offer Utan Ansikte | 얼굴 없는 살인자",
    desc: ``,
    url: '/imgBooks/26noface.jpg',
    date: 'February 2023'
  },
  {
    title: "THE DEAD HEART",
    desc: ``,
    url: '/imgBooks/27deadheart.jpg',
    date: 'February 2023'
  },
  {
    title: "THE MOMENT",
    desc: ``,
    url: '/imgBooks/28moment.jpg',
    date: 'January 2023'
  },
  {
    title: "Behind Closed Doors",
    desc: ``,
    url: '/imgBooks/29behindClosedDoors.jpg',
    date: 'January 2023'
  },
  {
    title: "잔류인구",
    desc: ``,
    url: '/imgBooks/30잔류인구.jpg',
    date: 'January 2023'
  },
  {
    title: "당인리: 대정전 후 두 시간",
    desc: ``,
    url: '/imgBooks/31당인리.jpg',
    date: 'January 2023'
  },
  {
    title: "A KILLER'S MIND",
    desc: ``,
    url: '/imgBooks/32killermind.jpg',
    date: 'January 2023'
  },
  {
    title: "책, 이게뭐라고",
    desc: ``,
    url: '/imgBooks/33책이게뭐라고.jpg',
    date: 'January 2023'
  },
  {
    title: "표백",
    desc: ``,
    url: '/imgBooks/34표백.jpg',
    date: 'January 2023'
  },
  {
    title: "RULE OF THE ROBOTS",
    desc: ``,
    url: '/imgBooks/35ruleoftherobots.jpg',
    date: 'January 2023'
  },
  {
    title: "The Road to Wigan Pier",
    desc: ``,
    url: '/imgBooks/36roadtowigan.jpg',
    date: 'January 2023'
  },
  {
    title: " ぼくはイエロ-でホワイトで,ちょっとブル 나는 옐로에 화이트에 약간 블루",
    desc: ``,
    url: '/imgBooks/37yellow.jpg',
    date: 'January 2023'
  },
]
export default img;