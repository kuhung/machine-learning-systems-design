let soul = [
  'Duolingo is a platform for language learning. When a student is learning a new language, Duolingo wants to recommend increasingly difficult stories to read. How would you measure the difficulty level of a story? Given a story, how would you edit it to make it easier or more difficult?',
  'Given a dataset of credit card purchases information, each record is labelled as fraudulent or safe, how would you build a fraud detection algorithm?',
  'You run an e-commerce website. Sometimes, users want to buy an item that is no longer available. Build a recommendation system to suggest replacement items.',
  'For any user on Twitter, how would you suggest who they should follow? What do you do when that user is new? What are some of the limitations of data-driven recommender systems?',
  "When you enter a search query on Google, you're shown a list of related searches. How would you generate a list of related searches for each query?",
  'Build a system that return images associated with a query like in Google Images.',
  'How would you build a system to suggest trending hashtags on Twitter?',
  'Each question on Quora often gets many different answers. How do you create a model that ranks all these answers? How computationally intensive is this model?',
  'How to you build a system to display top 10 results when a user searches for rental listings in a certain location on Airbnb?',
  'Autocompletion: how would you build an algorithm to finish your sentence when you text?',
  "When you type a question on StackOverflow, you're shown a list of similar questions to make sure that your question hasn't been asked before. How do you build such a system?",
  'How would you design an algorithm to match pool riders for Lyft or Uber?',
  'On social networks like Facebook, users can choose to list their high schools. Can you estimate what percentage of high schools listed on Facebook are real? How do we find out, and deploy at scale, a way of finding invalid schools?',
  'How would you build a trigger word detection algorithm to spot the word "activate" in a 10 second long audio clip?',
  "If you were to build a Netflix clone, how would you build a system that predicts when a user stops watching a TV show, whether they are tired of that show or they're just taking a break?",
  "Facebook would like to develop a way to estimate the month and day of people's birthdays, regardless of whether people give us that information directly. What methods would you propose, and data would you use, to help with that task?",
  'Build a system to predict the language a text is written in.',
  'Predict the house price for a property listed on Zillow. Use that system to predict whether we invest on buying more properties in a certain city.',
  'Imagine you were working on iPhone. Everytime users open their phones, you want to suggest one app they are most likely to open first with 90% accuracy. How would you do that?',
  'How do you map nicknames (Pete, Andy, Nick, Rob, etc) to real names?',
  'An e-commerce company is trying to minimize the time it takes customers to purchase their selected items. As a machine learning engineer, what can you do to help them?',
  'Build a chatbot to help people book hotels.',
  'How would you design a question answering system that can extract an answer from a large collection of documents given a user query?',
  'How would you train a model to predict whether the word "jaguar" in a sentence refers to the animal or the car?',
  "Suppose you're building a software to manage the stock portfolio of your clients. You manage X amount of money. Imagine that you've converted all that amount into stocks, and find a stock that you definitely must buy. How do you decide which of your currently owned stocks to drop so that you can buy this new stock?",
  'How would you create a model to recognize whether an image is a triangle, a circle, or a square?',
  'Given only CIFAR-10 dataset, how to build a model to recognize if an image is in the 10 classes of CIFAR-10 or not?',
];

function randomSentence() {
  document.getElementById('sentence').innerHTML = soul[Math.floor(Math.random() * soul.length)];
}

randomSentence();
