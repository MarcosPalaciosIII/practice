function generator$miscellaneous$sports_teams(type) {
	var nm1 = ["Amazing", "Ancient", "Angry", "Awesome", "Big", "Big Bad", "Bitter", "Black", "Blue", "Bold", "Brave", "Bright", "Brutal", "Brute", "Calm", "Careless", "Classic", "Clever", "Colossal", "Courageous", "Crazy", "Creative", "Dapper", "Daring", "Deadly", "Defiant", "Determined", "Eager", "Earnest", "Enchanted", "Exalted", "Fabulous", "Fantastic", "Fast", "Fearless", "Fiery", "Flawless", "Flying", "Free", "Freedom", "Giant", "Glorious", "Golden", "Grand", "Grave", "Great", "Grim", "Grizzly", "Gruesome", "Handsome", "Happy", "Hard", "Haunting", "Heavenly", "Hidden", "Hot", "Hungry", "Incredible", "Infamous", "Iron", "Loyal", "Lucky", "Mad", "Magic", "Majestic", "Major", "Marvelous", "Mean", "Merry", "Monstrous", "Mysterious", "Mystery", "Naughty", "Nimble", "Potent", "Powerful", "Prime", "Proud", "Pure", "Quick", "Quiet", "Rapid", "Red", "Regal", "Rough", "Royal", "Silent", "Silver", "Skeleton", "Spectacular", "Spirit", "Stark", "Steel", "Storm", "Strong", "Swift", "Terrific", "Thunder", "Tough", "True", "United", "Valiant", "White", "Wicked", "Wild", "Wise", "Young"];
	var nm2 = ["Aces", "Admirals", "Aliens", "Alligators", "Alphas", "Anacondas", "Androids", "Angels", "Ants", "Apes", "Arrows", "Asteroids", "Baboons", "Badgers", "Barracudas", "Bats", "Bears", "Beasts", "Beavers", "Bees", "Beluga Whales", "Birds", "Bison", "Blades", "Blazers", "Blazes", "Blitzes", "Blizzards", "Boars", "Bolts", "Boomers", "Bottle Rockets", "Boulders", "Braves", "Broncos", "Bruisers", "Buccanneers", "Buffalo", "Bulldogs", "Bullets", "Bulls", "Busters", "Camels", "Cannons", "Cardinals", "Cats", "Cavaliers", "Champs", "Chargers", "Cheetahs", "Chiefs", "Chimpanzees", "Chimps", "Claws", "Cobras", "Comets", "Cougars", "Coyotes", "Crabs", "Cranes", "Creatures", "Crickets", "Crocodiles", "Crocs", "Crows", "Crunchers", "Crusaders", "Cubs", "Deer", "Demons", "Devils", "Dingos", "Dinos", "Dinosaurs", "Dodgers", "Dogs", "Dolphins", "Donkeys", "Doves", "Dragonflies", "Dragons", "Dreamers", "Dreams", "Droids", "Ducks", "Eagles", "Earthquakes", "Elephants", "Enigmas", "Explorers", "Falcons", "Ferrets", "Foxes", "Furies", "Gargoyles", "Gators", "Ghosts", "Giants", "Gibbons", "Giraffes", "Gladiators", "Gnomes", "Goats", "Goblins", "Gophers", "Gorillas", "Grasshoppers", "Griffins", "Grizzlies", "Gusts", "Hammers", "Hamsters", "Hawks", "Hedgehogs", "Heroes", "Hippos", "Hogs", "Honey Badgers", "Hornets", "Horses", "Hounds", "Howlers", "Hurricanes", "Hyenas", "Imps", "Infernos", "Jackals", "Jaguars", "Jesters", "Jokers", "Kangaroos", "Kingfishers", "Kings", "Knights", "Koalas", "Komodos", "Krakens", "Legends", "Lemurs", "Leopards", "Lions", "Lizards", "Llamas", "Lobsters", "Magicians", "Mallards", "Mambas", "Mammoths", "Manatees", "Manticores", "Marines", "Martians", "Marvels", "Mavericks", "Menaces", "Miracles", "Monarchs", "Monkeys", "Monsters", "Mountaineers", "Mystics", "Mythics", "Nationals", "Nightingales", "Ninjas", "Novas", "Ocelots", "Octopi", "Ogres", "Oracles", "Orangutans", "Orcas", "Orcs", "Ostriches", "Pandas", "Panthers", "Parrots", "Patriots", "Peacocks", "Pelicans", "Penguins", "Phantoms", "Phoenixes", "Pigeons", "Pigs", "Pirates", "Pit Bulls", "Porcupines", "Predators", "Prowlers", "Pumas", "Pythons", "Raccoons", "Raiders", "Rams", "Rangers", "Raptors", "Ravens", "Rhinos", "Riddles", "Riders", "Roaches", "Roadrunners", "Robins", "Robots", "Rockets", "Rovers", "Royals", "Runners", "Sabretooths", "Sailors", "Saints", "Scorpions", "Seagulls", "Seals", "Serpents", "Shades", "Shadows", "Sharks", "Sirens", "Sliders", "Snakes", "Snowstorms", "Soldiers", "Sparks", "Sparrows", "Spartans", "Spiders", "Spikes", "Squids", "Squirrels", "Stags", "Stallions", "Stars", "Stingers", "Storms", "Striders", "Suns", "Swallows", "Swans", "Terrors", "Tigers", "Titans", "Toads", "Tornadoes", "Toucans", "Trojans", "Trolls", "Turkeys", "Turtles", "Vampires", "Vikings", "Vipers", "Vultures", "Warhawks", "Warhogs", "Warriors", "Warthogs", "Wasps", "Weasels", "Werewolves", "Wildcats", "Wildlings", "Wings", "Wizards", "Wolverines", "Wolves", "Wombats", "Wreckers", "Yetis", "Zebras", "Zombies"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		names = "The " + nm1[rnd] + " " + nm2[rnd2];
		return names;
	}

}