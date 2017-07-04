function onPageLoad(){
   getNewQuote();
}

function getNewQuote(){
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * 100)];
}

function tweetQuote(){
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
    + encodeURIComponent('"' + document.getElementById("quote").innerHTML + '"'));
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// I realize this is cheating, but there aren't any good api's to get Vonnegut quotes, 
// and I already know how to make api calls, so I'm doing it this way.
var quotes = [
    "We are what we pretend to be, so we must be careful about what we pretend to be.",
    "Those who believe in telekinetics, raise my hand.",
    "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
    "Everything was beautiful and nothing hurt.",
    "If I should ever die, God forbid, let this be my epitaph: THE ONLY PROOF HE NEEDED FOR THE EXISTENCE OF GOD WAS MUSIC",
    "We have to continually be jumping off cliffs and developing our wings on the way down.",
    "If you want to really hurt you parents, and you don't have the nerve to be gay, the least you can do is go into the arts. I'm not kidding. The arts are not a way to make a living. They are a very human way of making life more bearable. Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven's sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possible can. You will get an enormous reward. You will have created something.",
    "Here is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.",
    "Hello babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here. There's only one rule that I know of, babies-'God damn it, you've got to be kind.'",
    "A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.",
    "And I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.",
    "Of all the words of mice and men, the saddest are, 'It might have been.'",
    "How nice -- to feel nothing, and still get full credit for being alive.",
    "And I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is.'",
    "The last thing I ever wanted was to be alive when the three most powerful people on the whole planet would be named Bush, Dick and Colon.",
    "Dear future generations: Please accept our apologies. We were rolling drunk on petroleum.",
    "Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning do to do afterward.",
    "And Lot's wife, of course, was told not to look back where all those people and their homes had been. But she did look back, and I love her for that, because it was so human. So she was turned into a pillar of salt. So it goes.",
    "Tiger got to hunt, bird got to fly; Man got to sit and wonder 'why, why, why?' Tiger got to sleep, bird got to land; Man got to tell himself he understand.",
    "Being a Humanist means trying to behave decently without expectation of rewards or punishment after you are dead.",
    "I tell you, we are here on Earth to fart around, and don't let anybody tell you different.",
    "Here we are, trapped in the amber of the moment. There is no why.",
    "True terror is to wake up one morning and discover that your high school class is running the country.",
    "To be is to do - Socrates; To do is to be - Sartre; Do Be Do Be Do - Sinatra",
    "1492. As children we were taught to memorize this year with pride and joy as the year people began living full and imaginative lives on the continent of North America. Actually, people had been living full and imaginative lives on the continent of North America for hundreds of years before that. 1492 was simply the year sea pirates began to rob, cheat, and kill them.",
    "The universe is a big place, perhaps the biggest.",
    "Many people need desperately to receive this message: 'I feel and think much as you do, care about many of the things you care about, although most people do not care about them. You are not alone.",
    "In the beginning, God created the earth, and he looked upon it in His cosmic loneliness. And God said, 'Let Us make living creatures out of mud, so the mud can see what We have done. And God created every living creature that now moveth, and one was man. Mud as man alone could speak. God leaned close to mud as man sat up, looked around, and spoke. Man blinked. 'What is the purpose of all this?' he asked politely. 'Everything must have a purpose?' asked God. 'Certainly,' said man. 'Then I leave it to you to think of one for all this,' said God. And He went away.",
    "One of the few good things about modern times: If you die horribly on television, you will not have died in vain. You will have entertained us.",
    "I have this disease late at night sometimes, involving alcohol and the telephone.",
    "The only difference between Hitler and Bush is that Hitler was elected.",
    "Like so many Americans, she was trying to construct a life that made sense from things she found in gift shops.",
    "I was a victim of a series of accidents, as are we all.",
    "Who is more to be pitied, a writer bound and gagged by policemen or one living in perfect freedom who has nothing more to say?",
    "Science is magic that works.",
    "All this happened, more or less.",
    "Maturity is a bitter disappointment for which no remedy exists, unless laughter could be said to remedy anything.",
    "A sane person to an insane society must appear insane.",
    "- Why me? - That is a very Earthling question to ask, Mr. Pilgrim. Why you? Why us for that matter? Why anything? Because this moment simply is. Have you ever seen bugs trapped in amber? - Yes. - Well, here we are, Mr. Pilgrim, trapped in the amber of this moment. There is no why.",
    "If you can do no good, at least do no harm.",
    "What should young people do with their lives today? Many things, obviously. But the most daring thing is to create stable communities in which the terrible disease of loneliness can be cured.",
    "When I write, I feel like an armless, legless man with a crayon in his mouth.",
    "Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before.",
    "There is no beginning, no middle, no end, no suspense, no moral, no causes, no effects. What we love in our books are the depths of many marvelous moments seen all at one time.",
    "All moments, past, present and future, always have existed, always will exist.",
    "Take it moment by moment, and you will find that we are all, as I’ve said before, bugs in amber.",
    "Say what you will about the sweet miracle of unquestioning faith, I consider a capacity for it terrifying and absolutely vile.",
    "Love is where you find it. I think it is foolish to go around looking for it, and I think it can be poisonous. I wish that people who are conventionally supposed to love each other would say to each other, when they fight, 'Please — a little less love, and a little more common decency'.",
    "Do you realize that all great literature is all about what a bummer it is to be a human being? Isn't it such a relief to have somebody say that?",
    "If somebody says 'I love you' to me, I feel as though I had a pistol pointed at my head. What can anybody reply under such conditions but that which the pistol holder requires? 'I love you, too'.",
    "Where do I get my ideas from? You might as well have asked that of Beethoven. He was goofing around in Germany like everybody else, and all of a sudden this stuff came gushing out of him. It was music. I was goofing around like everybody else in Indiana, and all of a sudden stuff came gushing out. It was disgust with civilization.",
    "Anyway—because we are readers, we don't have to wait for some communications executive to decide what we should think about next—and how we should think about it. We can fill our heads with anything from aardvarks to zucchinis—at any time of night or day.",
    "And yet another moral occurs to me now: Make love when you can. It's good for you.",
    "As for literary criticism in general: I have long felt that any reviewer who expresses rage and loathing for a novel or a play or a poem is preposterous. He or she is like a person who has put on full armor and attacked a hot fudge sundae or a banana split.",
    "I say in speeches that a plausible mission of artists is to make people appreciate being alive at least a little bit. I am then asked if I know of any artists who pulled that off. I reply, 'The Beatles did'.",
    "Live by the harmless untruths that make you brave and kind and healthy and happy.",
    "The nicest veterans...the kindest and funniest ones, the ones who hated war the most, were the ones who'd really fought.",
    "I am a humanist, which means, in part, that I have tried to behave decently without expectations of rewards or punishments after I am dead.",
    "That's one thing Earthlings might learn to do, if they tried hard enough: Ignore the awful times and concentrate on the good ones.",
    "'I'm not a drug salesman. I'm a writer.' 'What makes you think a writer isn't a drug salesman?'",
    "There is love enough in this world for everybody, if people will just look.",
    "Wake up, you idiots! Whatever made you think that money was so valuable?",
    "All these people talk so eloquently about getting back to good old-fashioned values. Well, as an old poop I can remember back to when we had those old-fashioned values, and I say let's get back to the good old-fashioned First Amendment of the good old-fashioned Constitution of the United States -- and to hell with the censors! Give me knowledge or give me death!",
    "The practice of art isn't to make a living. It's to make your soul grow.",
    "You can't just eat good food. You've got to talk about it too. And you've got to talk about it to somebody who understands that kind of food.",
    "No good at life, but very funny sometimes with the commentary.",
    "We are healthy only to the extent that our ideas are humane.",
    "People have to talk about something just to keep their voice boxes in working order so they'll have good voice boxes in case there's ever anything really meaningful to say.",
    "I am eternally grateful for my knack of finding in great books, some of them very funny books, reason enough to feel honored to be alive, no matter what else might be going on.",
    "Trout, incidentally, had written a book about a money tree. It had twenty-dollar bills for leaves. Its flowers were government bonds. Its fruit was diamonds. It attracted human beings who killed each other around the roots and made very good fertilizer.",
    "Just because you can read, write and do a little math, doesn't mean that you're entitled to conquer the universe.",
    "She was a dull person, but a sensational invitation to make babies.",
    "We're terrible animals. I think that the Earth's immune system is trying to get rid of us, as well it should.",
    "Perhaps, when we remember wars, we should take off our clothes and paint ourselves blue and go on all fours all day long and grunt like pigs. That would surely be more appropriate than noble oratory and shows of flags and well-oiled guns.",
    "People aren’t supposed to look back. I’m certainly not going to do it anymore.",
    "All right - I'll tell you what you did for me: you went for happy, silly, beautiful walks with me.",
    "Kilgore Trout once wrote a short story which was a dialogue between two pieces of yeast. They were discussing the possible purposes of life as they ate sugar and suffocated in their own excrement. Because of their limited intelligence, they never came close to guessing that they were making champagne.",
    "I think you guys are going to have to come up with a lot of wonderful new lies, or people just aren't going to want to go on living.",
    "It is just an illusion here on Earth that one moment follows another one, like beads on a string, and that once a moment is gone, it is gone forever.",
    "The Fourteenth Book is entitled, 'What can a Thoughtful Man Hope for Mankind on Earth, Given the Experience of the Past Million Years?' It doesn't take long to read The Fourteenth Book. It consists of one word and a period. This is it: 'Nothing.'",
    "No matter how corrupt, greedy, and heartless our government, our corporations, our media, and our religious & charitable institutions may become, the music will still be wonderful.",
    "If your brains were dynamite there wouldn't be enough to blow your hat off.",
    "Americans... are forever searching for love in forms it never takes, in places it can never be. It must have something to do with the vanished frontier.",
    "We could have saved [the Earth] but we were too damned cheap.",
    "'No wonder kids grow up crazy. A cat's cradle is nothing but a bunch of X's between somebody's hands, and little kids look and look and look at all those X's . . .' 'And?' 'No damn cat, and no damn cradle.'",
    "Another flaw in the human character is that everybody wants to build and nobody wants to do maintenance.",
    "She hated people who thought too much. At that moment, she struck me as an appropriate representative for almost all mankind.",
    "Maturity...is knowing what your limitations are...Maturity is a bitter disappointment for which no remedy exists, unless laughter can be said to remedy anything.",
    "There are too many of us and we are all too far apart.",
    "You were sick, but now you're well again, and there's work to do.",
    "Sometimes I think it is a great mistake to have matter that can think and feel. It complains so. By the same token, though, I suppose that boulders and mountains and moons could be accused of being a little too phlegmatic.",
    "I can have oodles of charm when I want to.",
    "Ting-a-ling mother fucker.",
    "If I am going to spend eternity visiting this moment and that, I'm grateful that so many of those moments are nice.",
    "All of the true things I am about to tell you are shameless lies.",
    "There is no reason why good cannot triumph as often as evil. The triumph of anything is a matter of organization. If there are such things as angels, I hope that they are organized along the lines of the Mafia.",
    "Poverty is a relatively mild disease for even a very flimsy American soul, but uselessness will kill strong and weak souls alike, and kill every time.",
    "A sum of money is a leading character in this tale about people, just as a sum of honey might properly be a leading character in a tale about bees.",
    "Like all real heroes, Charley had a fatal flaw. He refused to believe that he had gonorrhea, whereas the truth was that he did.",
    "Samuel thundered that no American factory hand was worth more than eighty cents a day. And yet he could be thankful for the opportunity to pay a hundred thousand dollars or more for a painting by an Italian three centuries dead. And he capped this insult by giving paintings to museums for the spiritual elevation of the poor. The museums were closed on Sundays."
];