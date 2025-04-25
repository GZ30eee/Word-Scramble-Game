let words = [
    {
        word: "Beautiful",
        hint: "Pleasing the senses or mind aesthetically",
        difficulty: "common"
    },
    {
        word: "Aggravate",
        hint: "Make a problem, injury, or offense worse or more serious",
        difficulty: "common"
    },
    {
        word: "Nebula",
        hint: "A cloud of gas and dust in outer space",
        difficulty: "rare"
    },
    {
        word: "Committee",
        hint: "A group of people appointed for a specific function",
        difficulty: "common"
    },
    {
        word: "Possessed",
        hint: "Firmly controlled",
        difficulty: "common"
    },
    {
        word: "Successful",
        hint: "Accomplishing a desired aim or result",
        difficulty: "common"
    },
    {
        word: "Tofu",
        hint: "A food made from soy milk",
        difficulty: "common"
    },
    {
        word: "addition",
        hint: "The process of adding numbers",
        difficulty: "common"
    },
    {
        word: "meeting",
        hint: "Event in which people come together",
        difficulty: "common"
    },
    {
        word: "number",
        hint: "Math symbol used for counting",
        difficulty: "common"
    },
    {
        word: "exchange",
        hint: "The act of trading",
        difficulty: "common"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting",
        difficulty: "common"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant",
        difficulty: "common"
    },
    {
        word: "Comet",
        hint: "A celestial object consisting of a nucleus of ice and dust",
        difficulty: "rare"
    },
    {
        word: "Orbit",
        hint: "The regularly repeated elliptical course of a celestial object",
        difficulty: "rare"
    },
    {
        word: "position",
        hint: "Location of someone or something",
        difficulty: "common"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird",
        difficulty: "common"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation",
        difficulty: "common"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth",
        difficulty: "common"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow",
        difficulty: "common"
    },
    {
        word: "country",
        hint: "A politically identified region",
        difficulty: "common"
    },
    {
        word: "group",
        hint: "A number of objects or persons",
        difficulty: "common"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour",
        difficulty: "common"
    },
    {
        word: "Elephant",
        hint: "A large mammal",
        difficulty: "common"
    },
    {
        word: "Tortilla",
        hint: "A type of thin bread",
        difficulty: "common"
    },
    {
        word: "Scissors",
        hint: "Cutting tool",
        difficulty: "common"
    },
    {
        word: "Balloons",
        hint: "Inflatable objects for parties",
        difficulty: "common"
    },
    {
        word: "Assassin",
        hint: "A stealthy killer",
        difficulty: "rare"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded",
        difficulty: "common"
    },
    {
        word: "Geometry",
        hint: "The branch of mathematics concerned with the properties and relations of points, lines, surfaces, solids, and higher dimensional analogs",
        difficulty: "rare"
    },
    {
        word: "Peninsula",
        hint: "A piece of land almost surrounded by water",
        difficulty: "rare"
    },
    {
        word: "Tundra",
        hint: "A vast, flat, treeless Arctic region",
        difficulty: "rare"
    },
    {
        word: "Statistics",
        hint: "The practice or science of collecting and analyzing numerical data in large quantities",
        difficulty: "rare"
    },
    {
        word: "field",
        hint: "Area of land for farming activities",
        difficulty: "common"
    },
    {
        word: "friend",
        hint: "Person other than a family member",
        difficulty: "common"
    },
    {
        word: "Compiler",
        hint: "A program that translates source code",
        difficulty: "legendary"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items",
        difficulty: "common"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin",
        difficulty: "common"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge",
        difficulty: "common"
    },
    {
        word: "statement",
        hint: "A declaration of something",
        difficulty: "common"
    },
    {
        word: "Fantasy",
        hint: "Imagination",
        difficulty: "common"
    },
    {
        word: "Journey",
        hint: "Travel",
        difficulty: "common"
    },
    {
        word: "Mystery",
        hint: "Unknown",
        difficulty: "common"
    },
    {
        word: "Thought",
        hint: "Idea",
        difficulty: "common"
    },
    {
        hint: "Quiet talk",
        word: "Whisper",
        difficulty: "common"
    },
    {
        word: "Diamond",
        hint: "Gemstone",
        difficulty: "common"
    },
    {
        word: "Rainbow",
        hint: "Color arc",
        difficulty: "common"
    },
    {
        word: "Molecule",
        hint: "The smallest particle in a chemical element or compound",
        difficulty: "rare"
    },
    {
        word: "Catalyst",
        hint: "A substance that increases the rate of a chemical reaction",
        difficulty: "rare"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute",
        difficulty: "common"
    },
    {
        word: "library",
        hint: "Place containing collection of books",
        difficulty: "common"
    },
    {
        word: "algorithm",
        hint: "A set of rules to be followed in calculations or problem-solving",
        difficulty: "rare"
    },
    {
        word: "Yen",
        hint: "A strong desire",
        difficulty: "rare"
    },
    {
        word: "Zen",
        hint: "A state of calm",
        difficulty: "rare"
    },
    {
        word: "database",
        hint: "A structured set of data",
        difficulty: "rare"
    },
    {
       arakter: "network",
        hint: "A group or system of interconnected people or things",
        difficulty: "common"
    },
    {
        word: "pixel",
        hint: "A minute area of illumination on a display screen",
        difficulty: "rare"
    },
    {
        word: "Calculus",
        hint: "The branch of mathematics that deals with the finding and properties of derivatives and integrals of functions",
        difficulty: "legendary"
    },
    {
        word: "Algebra",
        hint: "The part of mathematics in which letters and other general symbols are used to represent numbers and quantities in equations",
        difficulty: "rare"
    },
    {
        word: "syntax",
        hint: "The arrangement of words and phrases to create well-formed sentences",
        difficulty: "rare"
    },
    {
        word: "Ambiguous",
        hint: "Unclear",
        difficulty: "rare"
    },
    {
        word: "Eloquent",
        hint: "Expressive",
        difficulty: "rare"
    },
    {
        word: "Inevitable",
        hint: "Unavoidable",
        difficulty: "rare"
    },
    {
        word: "deed",
        hint: "An action",
        difficulty: "common"
    },
    {
        word: "peep",
        hint: "A quick look",
        difficulty: "common"
    },
    {
        word: "teet",
        hint: "A misspelling of teeth",
        difficulty: "rare"
    },
    {
        word: "keek",
        hint: "To peek",
        difficulty: "rare"
    },
    {
        word: "Optimistic",
        hint: "Hopeful",
        difficulty: "common"
    },
    {
        word: "Ecosystem",
        hint: "A community of living organisms in conjunction with the nonliving components of their environment",
        difficulty: "rare"
    },
    {
        word: "Pessimistic",
        hint: "Negative",
        difficulty: "common"
    },
    {
        word: "Rhetoric",
        hint: "Persuasive speech",
        difficulty: "rare"
    },
    {
        word: "Sarcasm",
        hint: "Irony",
        difficulty: "common"
    },
    {
        word: "Ubiquitous",
        hint: "Everywhere",
        difficulty: "rare"
    },
    {
        word: "Voracious",
        hint: "Very hungry",
        difficulty: "rare"
    },
    {
        word: "Zealous",
        hint: "Passionate",
        difficulty: "rare"
    },
    {
        word: "Banana",
        hint: "A fruit",
        difficulty: "common"
    },
    {
        word: "Coffee",
        hint: "A drink",
        difficulty: "common"
    },
    {
        word: "Bottle",
        hint: "A container",
        difficulty: "common"
    },
    {
        word: "Snow",
        hint: "Frozen precipitation",
        difficulty: "common"
    },
    {
        word: "Neutron",
        hint: "A subatomic particle found in the nucleus of every atom except that of hydrogen",
        difficulty: "legendary"
    },
    {
        word: "Pen",
        hint: "A writing instrument",
        difficulty: "common"
    },
    {
        word: "Soccer",
        hint: "A popular sport",
        difficulty: "common"
    },
    {
        word: "Yellow",
        hint: "A color",
        difficulty: "common"
    },
    {
        word: "Summer",
        hint: "A season",
        difficulty: "common"
    },
    {
        word: "School",
        hint: "A place for education",
        difficulty: "common"
    },
    {
        word: "Square",
        hint: "A shape",
        difficulty: "common"
    },
    {
        word: "Quantum",
        hint: "The smallest amount of a physical quantity that can exist independently",
        difficulty: "legendary"
    },
    {
        word: "Circle",
        hint: "A round shape",
        difficulty: "common"
    },
    {
        word: "Flower",
        hint: "A plant's bloom",
        difficulty: "common"
    },
    {
        word: "Orange",
        hint: "A fruit or a color",
        difficulty: "common"
    },
    {
        word: "Triangle",
        hint: "A three-sided shape",
        difficulty: "common"
    },
    {
        word: "Apple",
        hint: "A common fruit",
        difficulty: "common"
    },
    {
        word: "Sun",
        hint: "A star at the center of our solar system",
        difficulty: "common"
    },
    {
        word: "Blue",
        hint: "A color or a feeling",
        difficulty: "common"
    },
    {
        word: "Dog",
        hint: "A common pet",
        difficulty: "common"
    },
    {
        word: "Pizza",
        hint: "A popular Italian dish",
        difficulty: "common"
    },
    {
        word: "Inheritance",
        hint: "A mechanism of basing an object or class upon another object or class",
        difficulty: "legendary"
    },
    {
        word: "Polymorphism",
        hint: "The ability of an object to take on many forms",
        difficulty: "legendary"
    },
    {
        word: "Rain",
        hint: "Water falling from the sky",
        difficulty: "common"
    },
    {
        word: "Book",
        hint: "A source of knowledge or entertainment",
        difficulty: "common"
    },
    {
        word: "Music",
        hint: "A form of art using sound",
        difficulty: "common"
    },
    {
        word: "Computer",
        hint: "An electronic device for storing and processing data",
        difficulty: "common"
    },
    {
        word: "Adventure",
        hint: "An exciting or unusual experience",
        difficulty: "common"
    },
    {
        word: "Balance",
        hint: "Even distribution of weight",
        difficulty: "common"
    },
    {
        word: "Celebrate",
        hint: "To honor an event with joy",
        difficulty: "common"
    },
    {
        word: "Delicate",
        hint: "Fragile or easily broken",
        difficulty: "common"
    },
    {
        word: "Eclipse",
        hint: "Obscuring of one celestial body by another",
        difficulty: "rare"
    },
    {
        word: "Fierce",
        hint: "Intense aggression or strength",
        difficulty: "common"
    },
    {
        word: "Gigantic",
        hint: "Extremely large",
        difficulty: "common"
    },
    {
        word: "Harmony",
        hint: "Pleasing arrangement of parts",
        difficulty: "common"
    },
    {
        word: "Illuminate",
        hint: "To light up",
        difficulty: "common"
    },
    {
        word: "Jubilant",
        hint: "Full of happiness",
        difficulty: "rare"
    },
    {
        word: "Kaleidoscope",
        hint: "A constantly changing pattern",
        difficulty: "rare"
    },
    {
        word: "Luminous",
        hint: "Emitting light",
        difficulty: "rare"
    },
    {
        word: "Majestic",
        hint: "Having grandeur",
        difficulty: "common"
    },
    {
        word: "Nimble",
        hint: "Quick and light in movement",
        difficulty: "common"
    },
    {
        word: "Opaque",
        hint: "Not transparent",
        difficulty: "rare"
    },
    {
        word: "Pinnacle",
        hint: "The highest point",
        difficulty: "rare"
    },
    {
        word: "Quaint",
        hint: "Attractively old-fashioned",
        difficulty: "rare"
    },
    {
        word: "Resilient",
        hint: "Able to recover quickly",
        difficulty: "common"
    },
    {
        word: "Serene",
        hint: "Calm and peaceful",
        difficulty: "common"
    },
    {
        word: "Tranquil",
        hint: "Free from disturbance",
        difficulty: "common"
    },
    {
        word: "Unison",
        hint: "Simultaneous action",
        difficulty: "rare"
    },
    {
        word: "Vibrant",
        hint: "Full of energy",
        difficulty: "common"
    },
    {
        word: "Whimsical",
        hint: "Playfully quaint",
        difficulty: "rare"
    },
    {
        word: "Xenial",
        hint: "Hospitable",
        difficulty: "exclusive"
    },
    {
        word: "Yield",
        hint: "To produce or give way",
        difficulty: "common"
    },
    {
        word: "Zephyr",
        hint: "A gentle breeze",
        difficulty: "rare"
    },
    {
        word: "Algorithm",
        hint: "Step-by-step computational procedure",
        difficulty: "rare"
    },
    {
        word: "Binary",
        hint: "Base-2 number system",
        difficulty: "rare"
    },
    {
        word: "Cryptography",
        hint: "Secure communication techniques",
        difficulty: "legendary"
    },
    {
        word: "Dynamo",
        hint: "A machine that generates electricity",
        difficulty: "rare"
    },
    {
        word: "Entropy",
        hint: "Measure of disorder in a system",
        difficulty: "legendary"
    },
    {
        word: "Fusion",
        hint: "Combining nuclei to release energy",
        difficulty: "legendary"
    },
    {
        word: "Galaxy",
        hint: "A massive system of stars",
        difficulty: "rare"
    },
    {
        word: "Hypothesis",
        hint: "A proposed explanation",
        difficulty: "rare"
    },
    {
        word: "Isotope",
        hint: "Variant of a chemical element",
        difficulty: "legendary"
    },
    {
        word: "Joule",
        hint: "Unit of energy",
        difficulty: "rare"
    },
    {
        word: "Kinetic",
        hint: "Relating to motion",
        difficulty: "rare"
    },
    {
        word: "Laser",
        hint: "Focused light amplification",
        difficulty: "rare"
    },
    {
        word: "Magnetic",
        hint: "Property of attraction",
        difficulty: "common"
    },
    {
        word: "Nanotech",
        hint: "Technology at the atomic scale",
        difficulty: "legendary"
    },
    {
        word: "Oxidation",
        hint: "Chemical reaction with oxygen",
        difficulty: "rare"
    },
    {
        word: "Particle",
        hint: "Tiny piece of matter",
        difficulty: "rare"
    },
    {
        word: "Quantum",
        hint: "Discrete quantity of energy",
        difficulty: "legendary"
    },
    {
        word: "Radiation",
        hint: "Emission of energy waves",
        difficulty: "rare"
    },
    {
        word: "Supernova",
        hint: "Exploding star",
        difficulty: "rare"
    },
    {
        word: "Thermodynamics",
        hint: "Study of heat and energy",
        difficulty: "legendary"
    },
    {
        word: "Aurora",
        hint: "Natural light display in the sky",
        difficulty: "rare"
    },
    {
        word: "Blizzard",
        hint: "Severe snowstorm",
        difficulty: "common"
    },
    {
        word: "Canyon",
        hint: "Deep gorge between cliffs",
        difficulty: "common"
    },
    {
        word: "Drought",
        hint: "Prolonged lack of rain",
        difficulty: "common"
    },
    {
        word: "Estuary",
        hint: "Where a river meets the sea",
        difficulty: "rare"
    },
    {
        word: "Fjord",
        hint: "Narrow sea inlet with cliffs",
        difficulty: "rare"
    },
    {
        word: "Glacier",
        hint: "Slow-moving river of ice",
        difficulty: "common"
    },
    {
        word: "Habitat",
        hint: "Natural environment of an organism",
        difficulty: "common"
    },
    {
        word: "Igloo",
        hint: "Dome-shaped ice shelter",
        difficulty: "rare"
    },
    {
        word: "Jungle",
        hint: "Dense tropical forest",
        difficulty: "common"
    },
    {
        word: "Lagoon",
        hint: "Shallow body of water",
        difficulty: "rare"
    },
    {
        word: "Monsoon",
        hint: "Seasonal wind bringing rain",
        difficulty: "rare"
    },
    {
        word: "Oasis",
        hint: "Fertile spot in a desert",
        difficulty: "rare"
    },
    {
        word: "Prairie",
        hint: "Flat grassland",
        difficulty: "rare"
    },
    {
        word: "Quicksand",
        hint: "Loose wet sand that traps objects",
        difficulty: "rare"
    },
    {
        word: "Reef",
        hint: "Ridge of rock or coral underwater",
        difficulty: "common"
    },
    {
        word: "Savanna",
        hint: "Grassy plain with few trees",
        difficulty: "rare"
    },
    {
        word: "Tornado",
        hint: "Violently rotating wind column",
        difficulty: "common"
    },
    {
        word: "Volcano",
        hint: "Mountain that erupts lava",
        difficulty: "common"
    },
    {
        word: "Wetland",
        hint: "Land saturated with water",
        difficulty: "rare"
    },
    {
        word: "Avocado",
        hint: "Creamy green fruit",
        difficulty: "common"
    },
    {
        word: "Baguette",
        hint: "Long, thin French bread",
        difficulty: "common"
    },
    {
        word: "Croissant",
        hint: "Flaky French pastry",
        difficulty: "common"
    },
    {
        word: "Durian",
        hint: "Pungent tropical fruit",
        difficulty: "rare"
    },
    {
        word: "Espresso",
        hint: "Strong black coffee",
        difficulty: "common"
    },
    {
        word: "Falafel",
        hint: "Fried chickpea balls",
        difficulty: "common"
    },
    {
        word: "Guacamole",
        hint: "Avocado-based dip",
        difficulty: "common"
    },
    {
        word: "Hummus",
        hint: "Chickpea spread",
        difficulty: "common"
    },
    {
        word: "Igneous",
        hint: "Rock formed from lava",
        difficulty: "rare"
    },
    {
        word: "Jackfruit",
        hint: "Large tropical fruit",
        difficulty: "rare"
    },
    {
        word: "Ketchup",
        hint: "Tomato-based condiment",
        difficulty: "common"
    },
    {
        word: "Lychee",
        hint: "Sweet tropical fruit",
        difficulty: "rare"
    },
    {
        word: "Macaron",
        hint: "Colorful French cookie",
        difficulty: "common"
    },
    {
        word: "Nachos",
        hint: "Tortilla chips with toppings",
        difficulty: "common"
    },
    {
        word: "Omelet",
        hint: "Egg dish with fillings",
        difficulty: "common"
    },
    {
        word: "Pancake",
        hint: "Flat, round breakfast food",
        difficulty: "common"
    },
    {
        word: "Quiche",
        hint: "Savory egg pie",
        difficulty: "common"
    },
    {
        word: "Risotto",
        hint: "Creamy Italian rice dish",
        difficulty: "common"
    },
    {
        word: "Sushi",
        hint: "Japanese rice and seafood dish",
        difficulty: "common"
    },
    {
        word: "Taco",
        hint: "Mexican folded tortilla",
        difficulty: "common"
    },
    {
        word: "Bamboozle",
        hint: "To deceive playfully",
        difficulty: "exclusive"
    },
    {
        word: "Cacophony",
        hint: "Harsh mixture of sounds",
        difficulty: "rare"
    },
    {
        word: "Doodle",
        hint: "Scribble absentmindedly",
        difficulty: "common"
    },
    {
        word: "Ephemeral",
        hint: "Lasting a short time",
        difficulty: "rare"
    },
    {
        word: "Flabbergasted",
        hint: "Extremely surprised",
        difficulty: "rare"
    },
    {
        word: "Gobbledygook",
        hint: "Nonsensical language",
        difficulty: "exclusive"
    },
    {
        word: "Hullabaloo",
        hint: "A commotion",
        difficulty: "rare"
    },
    {
        word: "Incognito",
        hint: "In disguise",
        difficulty: "rare"
    },
    {
        word: "Juxtapose",
        hint: "Place side by side for contrast",
        difficulty: "rare"
    },
    {
        word: "Kowtow",
        hint: "Act excessively submissive",
        difficulty: "rare"
    },
    {
        word: "Lollygag",
        hint: "Spend time aimlessly",
        difficulty: "exclusive"
    },
    {
        word: "Mellifluous",
        hint: "Sweet-sounding",
        difficulty: "rare"
    },
    {
        word: "Nincompoop",
        hint: "A foolish person",
        difficulty: "exclusive"
    },
    {
        word: "Obfuscate",
        hint: "Deliberately confuse",
        difficulty: "rare"
    },
    {
        word: "Pandemonium",
        hint: "Wild uproar",
        difficulty: "rare"
    }
];
