var quotes = [
  "It is during our darkest moments that we must focus to see the light.",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Change your thoughts and you change your world.",
  "Education is the most powerful weapon which you can use to change the world.",
  "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
  "Happiness resides not in possessions, and not in gold, happiness dwells in the soul.",
  "Believe you can and you're halfway there.",
  "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
  "Everything has beauty, but not everyone sees it.",
  "The only true wisdom is in knowing you know nothing.",
  "Life isn't about finding yourself. Life is about creating yourself.",
  "Life is not a problem to be solved, but a reality to be experienced.",
  "It's not what you look at that matters, it's what you see.",
  "We know what we are, but know not what we may be.",
  "All our dreams can come true, if we have the courage to pursue them.",
  "The secret of getting ahead is getting started.",
  "If opportunity doesn't knock, build a door.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Coming together is a beginning; keeping together is progress; working together is success.",
  "The best preparation for tomorrow is doing your best today.",
  "The journey of a thousand miles begins with one step.",
  "There is only one corner of the universe you can be certain of improving, and that's your own self.",
  "The difference between stupidity and genius is that genius has its limits.",
  "Happiness can exist only in acceptance.",
  "Being entirely honest with oneself is a good exercise.",
  "If you cannot do great things, do small things in a great way.",
  "It is far better to be alone, than to be in bad company.",
  "Good judgment comes from experience, and a lot of that comes from bad judgment.",
  "Learning never exhausts the mind.",
  "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
  "You cannot shake hands with a clenched fist.",
  "There is nothing permanent except change.",
  "When you reach the end of your rope, tie a knot in it and hang on."
];

var quotesAuthor = [
  "- Aristotle -",
  "- Robert Louis Stevenson -",
  "- Buddha -",
  "- Ralph Waldo Emerson -",
  "- Winston Churchill -",
  "- Robert Frost -",
  "- Norman Vincent Peale -",
  "- Nelson Mandela -",
  "- Dr. Seuss -",
  "- Democritus -",
  "- Theodore Roosevelt -",
  "- John F. Kennedy -",
  "- Confucius -",
  "- Socrates -",
  "- George Bernard Shaw -",
  "- Soren Kierkegaard -",
  "- Henry David Thoreau -",
  "- William Shakespeare -",
  "- Walt Disney -",
  "- Mark Twain -",
  "- Milton Berle -",
  "- Benjamin Franklin -",
  "- Thomas A. Edison -",
  "- Henry Ford -",
  "- H. Jackson Brown Jr. -",
  "- Lao Tzu -",
  "- Aldous Huxley -",
  "- Albert Einstein -",
  "- George Orwell -",
  "- Sigmund Freud -",
  "- Napoleon Hill -",
  "- George Washington -",
  "- Will Rogers -",
  "- Leonardo Da Vinci -",
  "- Henry James -",
  "- Indira Gandhi -",
  "- Heraclitus -",
  "- Franklin D. Roosevelt -"
];


$(document).ready(function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var newNumber;

  newNumber = randomNumber;

  // console.log(quotes[newNumber]);
  // console.log(quotesAuthor[newNumber]);
  $(".quote-saying").text(quotes[newNumber]);
  $(".quote-author").text(quotesAuthor[newNumber]);
});
