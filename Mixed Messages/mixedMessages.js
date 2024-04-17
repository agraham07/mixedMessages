
class Feeling {
    constructor (feeling, quotes) {
        this._feeling = feeling;
        this._quotes = quotes;
    }
    get feeling(){
        return console.log(this._feeling);
    }
    get quotes(){
        return console.log(this._quotes);
    }
    addQuote(quote){
        return this._quotes.push(quote);
    }
    randomQuote(){
        return this._quotes[Math.floor(Math.random() * this._quotes.length)]
    }

    }

const lost = new Feeling('Lost', ['It is worth remembering that the time of greatest gain in terms of wisdom and inner strength is often that of greatest difficulty','I used to think the worst thing in life is to end up all alone. It’s not. The worst thing in life is to end up with people who make you feel all alone.', "You’ll never leave where you are until you decide where you’d rather be.", 'Feeling sorry for yourself, and your present condition, is not only a waste of energy but the worst habit you could possibly have.', 'There are two ways to live your life. One is as if nothing is a miracle. The other is as if everything is a miracle.']);
    
    //lost.quotes;
lost.addQuote('No man is free who cannot control himself.');
    //lost.quotes;
lost.addQuote('The greatest mistake you can make in life is to continually be afraid you will make one.');
lost.addQuote('The fears we don’t face become our limits.');
lost.addQuote('Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us.');
//lost.quotes;
lost.addQuote('If you are working on something you don’t really care about, you don’t have to be pushed. The vision pulls you.');

const happy = new Feeling('Happy', ['There are always flowers for those who want to see them.', 'A happy life is one spent in learning, earning, and yearning.', 'Happiness is a choice that requires effort at times.', 'The way I see it, if you want the rainbow, you gotta put up with the rain!', 'Happiness held is the seed; happiness shared is the flower.', 'Happiness is a journey, not a destination.', 'Happiness is a state of mind. Its just according to the way you look at things.', 'Happiness is not a goal... its a by-product of a life well lived.', 'Happiness consists more in small conveniences or pleasures that occur every day, than in great pieces of good fortune that happen but seldom to a man in the course of his life.', 'Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now.']);
const sad = new Feeling('Sad', ['Do not go around saying the world owes you a living. The world owes you nothing. It was here first.', 'So its true, when all is said and done, grief is the price we pay for love.', 'Grief is not as heavy as guilt, but it takes more away from you.', 'I never got to fall out of love. I just had to move on.', 'There is no greater sorrow than to recall, in misery, the time when we were happy.', 'The worst feeling is not being lonely, it is being forgotten by someone you would never forget.', 'Some people feel like they don’t deserve love. They walk away quietly into empty spaces, trying to close the gaps of the past.', 'Of all the words of mice and men, the saddest are, "It might have been."', 'Faking a smile is so much easier than explaining why you are sad.', 'To have felt too much is to end in feeling nothing.']);
const accomplished = new Feeling('Accomplished', ['What you do in this world is a matter of no consequence. The question is what can you make people believe you have done.', 'I am only one, but I am one. I cannot do everything, but I can do something. And because I cannot do everything, I will not refuse to do the something that I can do.', 'Be ashamed to die until you have won some victory for humanity.', 'The difference between ordinary and extraordinary is that little extra.', 'Failure is constructive feedback that tells you to try a different approach to accomplish what you want.', 'There is no progress or accomplishment without sacrifice.', 'You are never given a dream without also being given the power to make it true. You may have to work for it, however.', 'Do the best you can in every task, no matter how unimportant it may seem at the time. No one learns more about a problem than the person at the bottom.', 'If you have a good idea, use it so that you will not only accomplish something, but so that you can make room for new ones to flow into you.']);

let happyImgArr = ['./resources/happy/happyImg_1.jpg', './resources/happy/happyImg_2.jpg', './resources/happy/happyImg_3.avif']

function happyRandSelector(){
     document.body.style.backgroundImage = `url(${happyImgArr[Math.floor(Math.random() * happyImgArr.length)]})`;
     document.body.style.backgroundSize = 'cover';
     document.body.innerHTML = happy.randomQuote();
     document.body.style.textAlign = 'center';
     document.body.style.color = 'GhostWhite';
     document.body.style.fontSize = '50px';
}

let happyButton = document.getElementById("happy");
happyButton.addEventListener("click", happyRandSelector);

let sadImgArr = ['./resources/sad/sadImg_1.jpg', './resources/sad/sadImg_2.jpg', './resources/sad/sadImg_3.jpg'];

let accomplishedImgArr = ['./resources/accomplished/accomplishedImg_1.jpg', './resources/accomplished/accomplishedImg_2.jpg', './resources/accomplished/accomplishedImg_3.jpg'];

let lostImgArr = ['./resources/lost/lostImg_1.jpg', './resources/lost/lostImg_2.jpg', './resources/lost/lostImg_3.png'];

function sadRandSelector(){
    document.body.style.backgroundImage = `url(${sadImgArr[Math.floor(Math.random() * sadImgArr.length)]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.innerHTML = sad.randomQuote();
    document.body.style.textAlign = 'center';
    document.body.style.color = 'Gainsboro';
    document.body.style.fontSize = '50px';
}

function accomplishedRandSelector(){
    document.body.style.backgroundImage = `url(${accomplishedImgArr[Math.floor(Math.random() * accomplishedImgArr.length)]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.innerHTML = accomplished.randomQuote();
    document.body.style.textAlign = 'center';
    document.body.style.color = 'LightSlateGrey';
    document.body.style.fontSize = '50px';
}

function lostRandSelector(){
    document.body.style.backgroundImage = `url(${lostImgArr[Math.floor(Math.random() * lostImgArr.length)]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.innerHTML = lost.randomQuote();
    document.body.style.textAlign = 'center';
    document.body.style.color = 'Black';
    document.body.style.fontSize = '50px';
}

let sadButton = document.getElementById("sad");
sadButton.addEventListener("click", sadRandSelector);

let accomplishedButton= document.getElementById("accomplished");
accomplishedButton.addEventListener("click", accomplishedRandSelector);

let lostButton = document.getElementById("lost");
lostButton.addEventListener("click", lostRandSelector);