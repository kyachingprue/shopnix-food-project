const u = id =>
  `https://images.unsplash.com/${id}?w=700&q=80&auto=format&fit=crop`
export const IMG = {
  hero: u('photo-1600891964092-4316c288032e'),
  chef: u('photo-1577219491135-ce391730fb2c'),
  room: u('photo-1414235077428-338989a2e8c0')
}
export const cats = [
  'All',
  'Appetizers',
  'Main Course',
  'Pizza',
  'Pasta',
  'Desserts',
  'Drinks',
  'Burgers',
  'Seafood'
]

export const blogData = [
  {
    id: 'seasonal-vegetables-guide',
    title: 'The Complete Guide to Cooking With Seasonal Vegetables',
    excerpt:
      'Discover how seasonal vegetables can make everyday meals fresher, healthier, and surprisingly delicious.',
    category: 'Healthy Living',
    author: 'Maya Anderson',
    date: 'October 2, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=85',
    featured: true,
    tags: ['Vegetables', 'Healthy', 'Seasonal'],
    intro:
      'Cooking with seasonal vegetables is one of the easiest ways to bring better flavor and freshness into your kitchen. When vegetables are naturally in season, they often have better texture, stronger flavor, and more vibrant color.',
    ingredients: [
      '2 cups fresh seasonal vegetables',
      '2 tablespoons extra virgin olive oil',
      '1 teaspoon sea salt',
      '½ teaspoon black pepper',
      '1 teaspoon fresh herbs',
      '1 tablespoon lemon juice'
    ],
    tips: [
      'Buy vegetables that look firm and naturally vibrant.',
      'Avoid overcrowding the pan when roasting.',
      'Add fresh herbs near the end to preserve their aroma.',
      'Use lemon juice to brighten roasted vegetables.'
    ],
    sections: [
      {
        heading: 'Why seasonal vegetables taste better',
        text: 'Seasonal produce generally reaches the kitchen closer to its natural harvesting period. This helps preserve texture, aroma, and flavor, making simple recipes taste much more interesting without requiring complicated sauces or techniques.'
      },
      {
        heading: 'Keep the preparation simple',
        text: 'You do not need a long ingredient list. A little olive oil, salt, pepper, herbs, and a hot oven can transform ordinary vegetables into a beautiful side dish.'
      },
      {
        heading: 'Build a balanced plate',
        text: 'Try pairing roasted vegetables with a protein source, whole grains, and a fresh salad. This creates a colorful plate with different textures and flavors while keeping the meal satisfying.'
      }
    ]
  },

  {
    id: 'perfect-pasta-at-home',
    title: 'How to Make Restaurant-Style Pasta at Home',
    excerpt:
      'A few simple techniques can turn an ordinary pasta dinner into a restaurant-worthy experience.',
    category: 'Cooking Tips',
    author: 'Daniel Carter',
    date: 'September 28, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=85',
    tags: ['Pasta', 'Cooking', 'Dinner'],
    intro:
      'Great pasta is less about expensive ingredients and more about technique. The right amount of salt, properly cooked pasta, and a silky sauce can completely change the final result.',
    ingredients: [
      '250g dried pasta',
      '2 tablespoons olive oil',
      '2 cloves garlic',
      '½ cup pasta water',
      '½ cup parmesan cheese',
      'Fresh basil'
    ],
    tips: [
      'Salt your pasta water generously.',
      'Always reserve some pasta water before draining.',
      'Finish cooking pasta in the sauce.',
      'Add cheese away from extremely high heat.'
    ],
    sections: [
      {
        heading: 'Start with properly salted water',
        text: 'Pasta water should be seasoned before the pasta goes in. This is one of the easiest opportunities to season the pasta from the inside rather than relying entirely on the sauce.'
      },
      {
        heading: 'The secret is pasta water',
        text: 'Starchy pasta water helps emulsify the sauce and gives it a smooth, glossy texture. Add it gradually while tossing the pasta with your sauce.'
      },
      {
        heading: 'Finish everything together',
        text: 'Instead of simply pouring sauce over cooked pasta, combine them in the pan for the final minute. This allows the sauce to coat every strand beautifully.'
      }
    ]
  },

  {
    id: 'healthy-breakfast-ideas',
    title: '7 Delicious Breakfast Ideas for Busy Mornings',
    excerpt:
      'Start your day with quick, nourishing breakfasts that take less time than ordering delivery.',
    category: 'Breakfast',
    author: 'Sofia Bennett',
    date: 'September 21, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1400&q=85',
    tags: ['Breakfast', 'Quick Meals', 'Healthy'],
    intro:
      'Busy mornings do not mean you have to skip breakfast. With a few simple ingredients prepared in advance, you can create satisfying meals in just a few minutes.',
    ingredients: [
      'Greek yogurt',
      'Fresh berries',
      'Banana',
      'Whole grain toast',
      'Avocado',
      'Eggs'
    ],
    tips: [
      'Prepare ingredients the night before.',
      'Keep fresh fruit visible in your kitchen.',
      'Use Greek yogurt as a quick protein-rich base.',
      'Batch-cook eggs for several mornings.'
    ],
    sections: [
      {
        heading: 'Make breakfast easier',
        text: 'The easiest way to eat better in the morning is to reduce the number of decisions you need to make. Keep a few dependable ingredients ready to combine.'
      },
      {
        heading: 'Think in combinations',
        text: 'A good breakfast usually combines protein, carbohydrates, healthy fats, and fruit or vegetables. You can mix and match these components depending on your schedule.'
      }
    ]
  },

  {
    id: 'ultimate-burger-guide',
    title: 'The Ultimate Guide to Building a Better Burger',
    excerpt:
      'From the bun to the final sauce, here is how to build a burger with incredible texture and flavor.',
    category: 'Food Guide',
    author: 'Ethan Brooks',
    date: 'September 16, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85',
    tags: ['Burger', 'Grill', 'Food Guide'],
    intro:
      'A great burger is all about balance. You want a juicy center, a toasted bun, creamy sauce, crunchy vegetables, and just enough cheese to bring everything together.',
    ingredients: [
      '200g ground beef',
      '1 brioche bun',
      '1 slice cheddar cheese',
      'Lettuce',
      'Tomato',
      'Pickles',
      'House burger sauce'
    ],
    tips: [
      'Do not overwork the meat.',
      'Season just before cooking.',
      'Toast the bun for better texture.',
      'Let the burger rest briefly before serving.'
    ],
    sections: [
      {
        heading: 'Choose the right meat',
        text: 'A moderate amount of fat helps create a juicy burger. Avoid pressing the meat too much while forming the patty because that can create a dense texture.'
      },
      {
        heading: 'Texture matters',
        text: 'A burger becomes more interesting when every bite contains different textures. Combine a soft toasted bun with crisp lettuce, juicy tomato, creamy sauce, and a tender patty.'
      }
    ]
  },

  {
    id: 'coffee-pairing-guide',
    title: 'Coffee & Food Pairing: What Goes Best Together?',
    excerpt:
      'Learn how different coffee flavors can complement sweet, savory, and buttery foods.',
    category: 'Food Guide',
    author: 'Liam Wilson',
    date: 'September 10, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85',
    tags: ['Coffee', 'Pairing', 'Drinks'],
    intro:
      'Coffee has a surprisingly wide range of flavors. Depending on the roast and brewing style, it can complement desserts, breakfast foods, chocolate, or even savory dishes.',
    ingredients: [
      'Freshly brewed coffee',
      'Dark chocolate',
      'Butter croissant',
      'Fresh berries',
      'Cheese'
    ],
    tips: [
      'Light roasts work beautifully with fruit.',
      'Dark chocolate pairs well with richer coffee.',
      'Milk-based coffee works well with pastries.',
      'Avoid overpowering delicate coffee with very spicy food.'
    ],
    sections: [
      {
        heading: 'Match intensity',
        text: 'The easiest pairing rule is to match intensity. A bold dark roast can stand up to chocolate or rich desserts, while a lighter roast can highlight fruit and delicate pastries.'
      },
      {
        heading: 'Experiment with contrast',
        text: 'Not every pairing needs to be similar. Sometimes contrast creates the most interesting experience, such as bright coffee with buttery pastries.'
      }
    ]
  },

  {
    id: 'meal-prep-weekend',
    title: 'A Simple Weekend Meal Prep Routine',
    excerpt:
      'Spend a little time on the weekend and make your weekday meals dramatically easier.',
    category: 'Healthy Living',
    author: 'Olivia James',
    date: 'September 4, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85',
    tags: ['Meal Prep', 'Healthy', 'Planning'],
    intro:
      'Meal preparation does not need to consume your entire weekend. A simple routine can help you prepare ingredients instead of cooking complete meals in advance.',
    ingredients: [
      'Mixed vegetables',
      'Brown rice',
      'Chicken breast',
      'Eggs',
      'Fresh greens',
      'Homemade dressing'
    ],
    tips: [
      'Prepare ingredients instead of complete meals.',
      'Store sauces separately.',
      'Use airtight containers.',
      'Keep two flexible meal options available.'
    ],
    sections: [
      {
        heading: 'Prepare building blocks',
        text: 'Cook a grain, prepare a protein, wash your vegetables, and make one simple sauce. During the week you can combine them in different ways.'
      },
      {
        heading: 'Keep variety',
        text: 'The biggest problem with meal prep is boredom. Change the sauces, herbs, and serving style so the same ingredients feel completely different.'
      }
    ]
  },

  {
    id: 'homemade-pizza-secrets',
    title: '5 Secrets Behind a Perfect Homemade Pizza',
    excerpt:
      'Crispy edges, a soft center, and a beautifully balanced topping combination are closer than you think.',
    category: 'Cooking Tips',
    author: 'Noah Miller',
    date: 'August 29, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=85',
    tags: ['Pizza', 'Baking', 'Italian'],
    intro:
      'You do not need a professional pizza oven to make an impressive pizza at home. High heat, good dough, and restraint with toppings are the real secrets.',
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Mozzarella',
      'Fresh basil',
      'Olive oil',
      'Flour'
    ],
    tips: [
      'Let the dough rest properly.',
      'Preheat your oven thoroughly.',
      'Do not overload the pizza.',
      'Use a hot baking surface when possible.'
    ],
    sections: [
      {
        heading: 'Give the dough time',
        text: 'Resting allows the dough to become easier to stretch and helps develop better flavor. Rushing this stage can lead to a dense crust.'
      },
      {
        heading: 'Less can be more',
        text: 'Too many toppings release moisture and make the crust difficult to crisp. Use a few high-quality ingredients and let each one contribute.'
      }
    ]
  },

  {
    id: 'dessert-plating',
    title: 'How to Plate Desserts Like a Restaurant',
    excerpt:
      'Beautiful presentation can turn a simple dessert into an unforgettable final course.',
    category: 'Inspiration',
    author: 'Emma Parker',
    date: 'August 22, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=85',
    tags: ['Dessert', 'Presentation', 'Inspiration'],
    intro:
      'Dessert presentation is not about making the plate complicated. It is about creating balance between color, texture, negative space, and the main dessert.',
    ingredients: [
      'Your favorite dessert',
      'Fresh berries',
      'Mint leaves',
      'Chocolate sauce',
      'Powdered sugar'
    ],
    tips: [
      'Choose one visual focal point.',
      'Use negative space intentionally.',
      'Add color with fresh fruit.',
      'Keep sauces controlled and elegant.'
    ],
    sections: [
      {
        heading: 'Start with one hero element',
        text: 'Place the main dessert first. Everything else should support it instead of competing with it.'
      },
      {
        heading: 'Use contrast',
        text: 'A creamy dessert can look more interesting next to something crisp, colorful, or fresh. Contrast makes the plate visually and texturally exciting.'
      }
    ]
  },
  {
    id: 'creamy-garlic-pasta',
    title: 'How to Make Creamy Garlic Pasta at Home',
    excerpt:
      'A rich, creamy pasta recipe with roasted garlic, parmesan, and fresh herbs that feels like restaurant comfort food.',
    category: 'Cooking Tips',
    author: 'Emma Wilson',
    date: 'September 2, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=85',
    tags: ['Pasta', 'Italian', 'Garlic'],
    intro:
      'Creamy garlic pasta is one of those simple dishes that can turn a few everyday ingredients into something incredibly satisfying. The secret is building flavor slowly and balancing the richness with fresh herbs and parmesan.',
    ingredients: [
      'Spaghetti or fettuccine',
      'Fresh garlic',
      'Heavy cream',
      'Parmesan cheese',
      'Butter',
      'Fresh parsley',
      'Black pepper'
    ],
    tips: [
      'Cook the pasta until just al dente.',
      'Use freshly grated parmesan for a smoother sauce.',
      'Do not let the cream boil aggressively.',
      'Save some pasta water for the sauce.'
    ],
    sections: [
      {
        heading: 'Start with aromatic garlic',
        text: 'Cook the garlic gently in butter until fragrant and lightly golden. Avoid burning it because bitter garlic can overpower the entire sauce.'
      },
      {
        heading: 'Build a silky sauce',
        text: 'Add cream and gradually mix in parmesan. A small amount of reserved pasta water helps create a smooth sauce that coats every strand beautifully.'
      }
    ]
  },

  {
    id: 'healthy-buddha-bowl',
    title: 'The Ultimate Guide to Building a Colorful Buddha Bowl',
    excerpt:
      'Learn how to combine grains, fresh vegetables, protein, and flavorful sauces into one balanced and beautiful meal.',
    category: 'Healthy Living',
    author: 'Sophia Carter',
    date: 'September 5, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85',
    tags: ['Healthy', 'Vegetables', 'Bowl'],
    intro:
      'A Buddha bowl is more than just a colorful meal. It is an easy way to combine different textures, flavors, and nutrients in one satisfying plate without making cooking complicated.',
    ingredients: [
      'Brown rice',
      'Chickpeas',
      'Avocado',
      'Carrots',
      'Cucumber',
      'Spinach',
      'Tahini dressing'
    ],
    tips: [
      'Use at least three different vegetables.',
      'Combine crunchy and soft textures.',
      'Prepare grains in advance.',
      'Finish with a flavorful homemade dressing.'
    ],
    sections: [
      {
        heading: 'Start with a hearty base',
        text: 'Brown rice, quinoa, couscous, or roasted sweet potatoes can create a satisfying foundation. Choose something that can hold up well under sauces and vegetables.'
      },
      {
        heading: 'Add contrast and color',
        text: 'Mix green vegetables with orange carrots, creamy avocado, and crispy chickpeas. A colorful bowl usually offers a more interesting combination of textures and flavors.'
      }
    ]
  },

  {
    id: 'crispy-fried-chicken',
    title: 'The Secret to Extra Crispy Fried Chicken',
    excerpt:
      'Discover simple techniques for making golden, crunchy fried chicken with juicy meat and perfectly seasoned crust.',
    category: 'Cooking Tips',
    author: 'James Anderson',
    date: 'September 8, 2026',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1400&q=85',
    tags: ['Chicken', 'Fried Food', 'Comfort Food'],
    intro:
      'Great fried chicken is all about contrast: a crunchy, flavorful crust on the outside and tender, juicy meat inside. The right marinade, coating, and cooking temperature make all the difference.',
    ingredients: [
      'Chicken pieces',
      'Buttermilk',
      'All-purpose flour',
      'Paprika',
      'Garlic powder',
      'Black pepper',
      'Cooking oil'
    ],
    tips: [
      'Marinate the chicken for several hours.',
      'Season every layer of the coating.',
      'Keep the oil temperature consistent.',
      'Let fried chicken rest before serving.'
    ],
    sections: [
      {
        heading: 'Marinate for maximum flavor',
        text: 'A buttermilk marinade helps tenderize the chicken while adding a subtle tangy flavor. Give the chicken enough time to absorb the seasoning before coating it.'
      },
      {
        heading: 'Create a textured coating',
        text: 'A well-seasoned flour mixture creates the crispy crust. Press the coating firmly onto the chicken so that small irregular pieces form during frying.'
      }
    ]
  },

  {
    id: 'fresh-fruit-smoothie',
    title: '5 Fresh Fruit Smoothies for a Better Morning',
    excerpt:
      'Start your day with refreshing homemade smoothies packed with fruit, natural sweetness, and simple ingredients.',
    category: 'Breakfast',
    author: 'Olivia Bennett',
    date: 'September 11, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1400&q=85',
    tags: ['Smoothie', 'Breakfast', 'Fruit'],
    intro:
      'Smoothies are one of the easiest ways to create a quick breakfast without sacrificing flavor. With fresh fruit, yogurt, milk, or plant-based alternatives, you can create endless combinations.',
    ingredients: [
      'Fresh strawberries',
      'Banana',
      'Blueberries',
      'Greek yogurt',
      'Almond milk',
      'Honey',
      'Ice cubes'
    ],
    tips: [
      'Use frozen fruit for a thicker texture.',
      'Add yogurt for extra creaminess.',
      'Avoid adding too much liquid at once.',
      'Blend leafy greens with sweet fruits.'
    ],
    sections: [
      {
        heading: 'Choose a flavor combination',
        text: 'Sweet berries pair beautifully with banana, while mango works well with pineapple and coconut. Start with two or three fruits rather than mixing everything together.'
      },
      {
        heading: 'Get the perfect texture',
        text: 'Frozen fruit creates a naturally thick and cold smoothie. Add liquid gradually until the blender reaches the consistency you prefer.'
      }
    ]
  },

  {
    id: 'asian-noodle-bowl',
    title: 'Build a Delicious Asian-Inspired Noodle Bowl',
    excerpt:
      'Create a restaurant-style noodle bowl at home with savory broth, fresh vegetables, herbs, and perfectly cooked noodles.',
    category: 'Food Guide',
    author: 'Daniel Lee',
    date: 'September 14, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=85',
    tags: ['Noodles', 'Asian Food', 'Soup'],
    intro:
      'A warm noodle bowl can be comforting, flavorful, and surprisingly easy to customize. The best bowls combine a flavorful base, satisfying noodles, fresh toppings, and contrasting textures.',
    ingredients: [
      'Egg noodles',
      'Vegetable or chicken broth',
      'Mushrooms',
      'Spring onions',
      'Pak choi',
      'Soy sauce',
      'Sesame oil'
    ],
    tips: [
      'Build flavor into the broth.',
      'Cook noodles separately when possible.',
      'Add fresh herbs before serving.',
      'Use sesame oil as a finishing flavor.'
    ],
    sections: [
      {
        heading: 'Build a flavorful broth',
        text: 'Soy sauce, ginger, garlic, sesame oil, and a good broth create a flavorful foundation. Taste the broth before adding noodles and adjust the seasoning.'
      },
      {
        heading: 'Finish with fresh toppings',
        text: 'Spring onions, herbs, mushrooms, chili, and fresh vegetables add brightness and texture. Add them near the end so they stay vibrant and crisp.'
      }
    ]
  },

  {
    id: 'chocolate-dessert-guide',
    title: 'The Art of Making the Perfect Chocolate Dessert',
    excerpt:
      'From rich brownies to silky mousse, discover how to create impressive chocolate desserts with simple techniques.',
    category: 'Desserts',
    author: 'Isabella Moore',
    date: 'September 17, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85',
    tags: ['Chocolate', 'Dessert', 'Baking'],
    intro:
      'Chocolate desserts are all about balance. The right combination of sweetness, cocoa intensity, texture, and temperature can turn a simple dessert into a memorable final course.',
    ingredients: [
      'Dark chocolate',
      'Cocoa powder',
      'Butter',
      'Eggs',
      'All-purpose flour',
      'Sugar',
      'Vanilla extract'
    ],
    tips: [
      'Use good-quality chocolate.',
      'Measure baking ingredients carefully.',
      'Do not overbake brownies.',
      'Allow desserts to cool before slicing.'
    ],
    sections: [
      {
        heading: 'Choose the right chocolate',
        text: 'Dark chocolate provides a deeper flavor while milk chocolate creates a sweeter and softer profile. Choose based on the dessert and the level of sweetness you want.'
      },
      {
        heading: 'Balance texture and sweetness',
        text: 'A great chocolate dessert should not taste overwhelmingly sweet. A small amount of salt, vanilla, or coffee can make the chocolate flavor much more pronounced.'
      }
    ]
  },

  {
    id: 'weekend-brunch-guide',
    title: 'How to Create the Perfect Weekend Brunch at Home',
    excerpt:
      'Turn a relaxed weekend morning into a beautiful brunch with simple dishes, fresh drinks, and thoughtful presentation.',
    category: 'Breakfast',
    author: 'Mia Thompson',
    date: 'September 20, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1400&q=85',
    tags: ['Brunch', 'Breakfast', 'Lifestyle'],
    intro:
      'A memorable brunch does not require a complicated menu. A few well-prepared dishes, fresh ingredients, and a little attention to presentation can create a restaurant-style experience at home.',
    ingredients: [
      'Fresh eggs',
      'Sourdough bread',
      'Avocado',
      'Fresh berries',
      'Greek yogurt',
      'Orange juice',
      'Fresh herbs'
    ],
    tips: [
      'Prepare ingredients the night before.',
      'Choose dishes that can be served together.',
      'Keep drinks simple and refreshing.',
      'Add fresh herbs for presentation.'
    ],
    sections: [
      {
        heading: 'Keep the menu balanced',
        text: 'Combine something savory with something sweet and add fresh fruit for contrast. This keeps the table interesting without creating too much cooking work.'
      },
      {
        heading: 'Focus on presentation',
        text: 'Use simple plates, colorful ingredients, and small bowls for sauces or fruit. A thoughtful presentation makes even easy recipes feel special.'
      }
    ]
  },

  {
    id: 'fresh-salad-secrets',
    title: '7 Simple Secrets to Make Restaurant-Style Salads',
    excerpt:
      'Learn how chefs balance crunch, freshness, acidity, and creamy textures to create salads that are never boring.',
    category: 'Healthy Living',
    author: 'Ethan Walker',
    date: 'September 23, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=85',
    tags: ['Salad', 'Healthy', 'Vegetables'],
    intro:
      'A great salad is not simply a bowl of vegetables. It is a combination of textures and flavors where every ingredient has a purpose. The dressing and finishing touches are especially important.',
    ingredients: [
      'Mixed lettuce',
      'Cherry tomatoes',
      'Cucumber',
      'Red onion',
      'Avocado',
      'Feta cheese',
      'Olive oil'
    ],
    tips: [
      'Dry leafy greens before dressing.',
      'Add dressing just before serving.',
      'Include something crunchy.',
      'Balance acidity with a little sweetness.'
    ],
    sections: [
      {
        heading: 'Create texture',
        text: 'Combine crisp vegetables with creamy avocado, crunchy nuts, or toasted seeds. Different textures make every bite more interesting.'
      },
      {
        heading: 'Never underestimate the dressing',
        text: 'A simple dressing made with olive oil, lemon juice, mustard, and seasoning can completely transform a salad. Always taste and adjust before serving.'
      }
    ]
  },

  {
    id: 'homemade-burger-guide',
    title: 'The Complete Guide to Making Better Burgers at Home',
    excerpt:
      'Juicy patties, toasted buns, fresh toppings, and the perfect sauce come together in this ultimate homemade burger guide.',
    category: 'Food Guide',
    author: 'Lucas Martin',
    date: 'September 26, 2026',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85',
    tags: ['Burger', 'Beef', 'Comfort Food'],
    intro:
      'Making a great burger at home is easier than it looks. The key is choosing quality ingredients, shaping the meat gently, cooking it properly, and building layers of flavor with toppings and sauce.',
    ingredients: [
      'Ground beef',
      'Burger buns',
      'Cheddar cheese',
      'Lettuce',
      'Tomato',
      'Pickles',
      'Burger sauce'
    ],
    tips: [
      'Do not overwork the ground beef.',
      'Season the patties just before cooking.',
      'Toast the buns lightly.',
      'Let the cooked patty rest briefly.'
    ],
    sections: [
      {
        heading: 'Shape the perfect patty',
        text: 'Handle the ground beef gently and form a loose patty that is slightly wider than the bun. Avoid compressing the meat too much because this can make the burger dense.'
      },
      {
        heading: 'Build every layer carefully',
        text: 'A great burger needs contrast. Combine melted cheese, crisp lettuce, juicy tomato, tangy pickles, and a creamy sauce for a balanced bite.'
      }
    ]
  },

  {
    id: 'morning-coffee-guide',
    title: 'A Beginner’s Guide to Better Coffee at Home',
    excerpt:
      'Discover simple ways to improve your morning coffee by choosing better beans, water, grind size, and brewing techniques.',
    category: 'Food Guide',
    author: 'Henry Collins',
    date: 'September 29, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85',
    tags: ['Coffee', 'Drinks', 'Morning'],
    intro:
      'You do not need expensive equipment to make better coffee. Fresh beans, good water, the correct grind size, and a consistent brewing method can make a noticeable difference.',
    ingredients: [
      'Fresh coffee beans',
      'Filtered water',
      'Milk',
      'Brown sugar',
      'Cinnamon',
      'Ice',
      'Optional coffee syrup'
    ],
    tips: [
      'Use freshly ground coffee when possible.',
      'Store beans away from heat and moisture.',
      'Use clean filtered water.',
      'Experiment with grind size gradually.'
    ],
    sections: [
      {
        heading: 'Start with fresh beans',
        text: 'Coffee tastes noticeably better when the beans are fresh and properly stored. Keep them in an airtight container away from direct sunlight and moisture.'
      },
      {
        heading: 'Find your preferred brewing style',
        text: 'Pour-over, French press, espresso, and cold brew each create different flavor profiles. Try different methods and discover which style matches your taste.'
      }
    ]
  }
]


export const dishes = [
  {
    id: 1,
    name: 'Grilled Ribeye Steak',
    cat: 'Main Course',
    price: 24,
    desc: 'Premium ribeye steak grilled to perfection, featuring a beautifully caramelized crust, tender center, and rich buttery flavor.',
    img: u('photo-1600891964092-4316c288032e'),
    tag: 'Best Seller',
    rating: 4.9,
    reviews: 248,
    prepTime: '25-30 min',
    calories: 680,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Ribeye steak',
      'Garlic butter',
      'Rosemary',
      'Black pepper',
      'Sea salt',
      'Olive oil'
    ],
    allergens: ['Dairy'],
    dietary: ['Gluten-Free', 'High-Protein'],
    nutrition: { protein: 48, carbs: 12, fat: 44 },
    available: true,
    featured: true
  },
  {
    id: 2,
    name: 'Creamy Alfredo Pasta',
    cat: 'Pasta',
    price: 16,
    desc: 'Classic Italian fettuccine coated in a silky Parmesan cream sauce with garlic, cracked black pepper, and fresh parsley.',
    img: u('photo-1551183053-bf91a1d81141'),
    tag: 'Popular',
    rating: 4.8,
    reviews: 186,
    prepTime: '15-20 min',
    calories: 590,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Fettuccine pasta',
      'Heavy cream',
      'Parmesan cheese',
      'Garlic',
      'Butter',
      'Parsley'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 19, carbs: 68, fat: 27 },
    available: true,
    featured: true
  },
  {
    id: 3,
    name: 'Chicken Caesar Salad',
    cat: 'Appetizers',
    price: 12,
    desc: 'Crisp romaine lettuce, tender grilled chicken, crunchy croutons, shaved Parmesan, and creamy Caesar dressing.',
    img: u('photo-1546069901-ba9599a7e63c'),
    tag: 'Healthy Choice',
    rating: 4.7,
    reviews: 154,
    prepTime: '10-15 min',
    calories: 390,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Grilled chicken',
      'Romaine lettuce',
      'Parmesan',
      'Croutons',
      'Caesar dressing',
      'Lemon'
    ],
    allergens: ['Eggs', 'Dairy', 'Gluten', 'Fish'],
    dietary: ['High-Protein'],
    nutrition: { protein: 32, carbs: 22, fat: 18 },
    available: true,
    featured: false
  },
  {
    id: 4,
    name: 'Margherita Pizza',
    cat: 'Pizza',
    price: 14,
    desc: 'Hand-stretched pizza dough topped with tangy tomato sauce, creamy mozzarella, fragrant basil, and extra virgin olive oil.',
    img: u('photo-1565299624946-b28f40a0ae38'),
    tag: 'Classic Favorite',
    rating: 4.8,
    reviews: 312,
    prepTime: '15-20 min',
    calories: 780,
    servings: 2,
    spicy: 'Not Spicy',
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Mozzarella',
      'Fresh basil',
      'Olive oil',
      'Oregano'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 29, carbs: 92, fat: 31 },
    available: true,
    featured: true
  },
  {
    id: 5,
    name: 'Shrimp Alfredo Pasta',
    cat: 'Pasta',
    price: 18,
    desc: 'Juicy garlic-seared shrimp tossed with fettuccine in a luxurious Parmesan cream sauce with a delicate touch of herbs.',
    img: u('photo-1621996346565-e3dbc646d9a9'),
    tag: 'Chef Special',
    rating: 4.9,
    reviews: 203,
    prepTime: '20-25 min',
    calories: 640,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Shrimp',
      'Fettuccine',
      'Heavy cream',
      'Parmesan',
      'Garlic',
      'Butter',
      'Parsley'
    ],
    allergens: ['Shellfish', 'Dairy', 'Gluten'],
    dietary: ['High-Protein'],
    nutrition: { protein: 36, carbs: 64, fat: 28 },
    available: true,
    featured: true
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    cat: 'Desserts',
    price: 8,
    desc: 'A decadent chocolate cake with a warm, flowing chocolate center, served with vanilla ice cream and a dusting of cocoa.',
    img: u('photo-1624353365286-3f8d62daad51'),
    tag: 'Sweet Favorite',
    rating: 4.9,
    reviews: 278,
    prepTime: '12-15 min',
    calories: 430,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Eggs',
      'Sugar',
      'Flour',
      'Vanilla ice cream'
    ],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 7, carbs: 49, fat: 24 },
    available: true,
    featured: true
  },
  {
    id: 7,
    name: 'Truffle Mushroom Soup',
    cat: 'Appetizers',
    price: 9,
    desc: 'A velvety mushroom soup infused with aromatic truffle oil, roasted garlic, fresh thyme, and a splash of cream.',
    img: u('photo-1547592166-23ac45744acd'),
    tag: 'Chef Special',
    rating: 4.6,
    reviews: 97,
    prepTime: '15-20 min',
    calories: 280,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Button mushrooms',
      'Porcini mushrooms',
      'Cream',
      'Garlic',
      'Thyme',
      'Truffle oil'
    ],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 8, carbs: 18, fat: 20 },
    available: true,
    featured: false
  },
  {
    id: 8,
    name: 'Fresh Mint Lemonade',
    cat: 'Drinks',
    price: 5,
    desc: 'Freshly squeezed lemon juice blended with cool water, fragrant mint leaves, and just the right amount of sweetness.',
    img: u('photo-1621263764928-df1444c5e859'),
    tag: 'Refreshing',
    rating: 4.7,
    reviews: 143,
    prepTime: '5 min',
    calories: 95,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: ['Fresh lemons', 'Mint leaves', 'Water', 'Sugar', 'Ice'],
    allergens: [],
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 0, carbs: 24, fat: 0 },
    available: true,
    featured: false
  },
  {
    id: 9,
    name: 'Double Cheeseburger',
    cat: 'Burgers',
    price: 15,
    desc: 'Two juicy beef patties layered with melted cheddar, crisp lettuce, ripe tomatoes, pickles, and signature burger sauce.',
    img: u('photo-1568901346375-23c9450c58cd'),
    tag: 'Best Seller',
    rating: 4.9,
    reviews: 421,
    prepTime: '15-20 min',
    calories: 850,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Beef patties',
      'Cheddar cheese',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Pickles',
      'Burger sauce'
    ],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 42, carbs: 48, fat: 51 },
    available: true,
    featured: true
  },
  {
    id: 10,
    name: 'BBQ Chicken Pizza',
    cat: 'Pizza',
    price: 17,
    desc: 'Smoky barbecue sauce, juicy grilled chicken, stretchy mozzarella, red onions, and fresh cilantro on a golden crust.',
    img: u('photo-1513104890138-7c749659a591'),
    tag: 'Popular',
    rating: 4.8,
    reviews: 235,
    prepTime: '18-22 min',
    calories: 820,
    servings: 2,
    spicy: 'Mild',
    ingredients: [
      'Pizza dough',
      'Chicken',
      'BBQ sauce',
      'Mozzarella',
      'Red onion',
      'Cilantro'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['High-Protein'],
    nutrition: { protein: 38, carbs: 88, fat: 32 },
    available: true,
    featured: true
  },
  {
    id: 11,
    name: 'Classic Pepperoni Pizza',
    cat: 'Pizza',
    price: 16,
    desc: 'A timeless favorite featuring savory pepperoni, rich tomato sauce, bubbling mozzarella, and a perfectly crisp crust.',
    img: u('photo-1628840042765-356cda07504e'),
    tag: 'Best Seller',
    rating: 4.8,
    reviews: 367,
    prepTime: '15-20 min',
    calories: 860,
    servings: 2,
    spicy: 'Mild',
    ingredients: [
      'Pizza dough',
      'Pepperoni',
      'Mozzarella',
      'Tomato sauce',
      'Oregano',
      'Olive oil'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: [],
    nutrition: { protein: 34, carbs: 90, fat: 38 },
    available: true,
    featured: true
  },
  {
    id: 12,
    name: 'Spaghetti Bolognese',
    cat: 'Pasta',
    price: 17,
    desc: 'Traditional spaghetti served with a slow-simmered beef and tomato ragù, finished with Parmesan and fresh basil.',
    img: u('photo-1555949258-eb67b1ef0ceb'),
    tag: 'Italian Favorite',
    rating: 4.7,
    reviews: 192,
    prepTime: '20-25 min',
    calories: 610,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Spaghetti',
      'Ground beef',
      'Tomatoes',
      'Onion',
      'Garlic',
      'Parmesan',
      'Basil'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['High-Protein'],
    nutrition: { protein: 31, carbs: 70, fat: 22 },
    available: true,
    featured: false
  },
  {
    id: 13,
    name: 'Creamy Chicken Pasta',
    cat: 'Pasta',
    price: 16,
    desc: 'Tender grilled chicken and perfectly cooked penne coated in creamy garlic sauce with Parmesan and Italian herbs.',
    img: u('photo-1473093295043-cdd812d0e601'),
    tag: 'Popular',
    rating: 4.8,
    reviews: 174,
    prepTime: '18-22 min',
    calories: 650,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Penne pasta',
      'Chicken breast',
      'Cream',
      'Garlic',
      'Parmesan',
      'Italian herbs'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['High-Protein'],
    nutrition: { protein: 39, carbs: 62, fat: 26 },
    available: true,
    featured: false
  },
  {
    id: 14,
    name: 'Crispy Fried Chicken',
    cat: 'Main Course',
    price: 13,
    desc: 'Golden, crunchy chicken with a juicy interior, seasoned with a signature blend of herbs and spices.',
    img: u('photo-1626082927389-6cd097cdc6ec'),
    tag: 'Best Seller',
    rating: 4.8,
    reviews: 309,
    prepTime: '20-25 min',
    calories: 560,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Chicken',
      'Flour',
      'Buttermilk',
      'Paprika',
      'Garlic powder',
      'Black pepper'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['High-Protein'],
    nutrition: { protein: 35, carbs: 32, fat: 30 },
    available: true,
    featured: true
  },
  {
    id: 15,
    name: 'Herb Grilled Chicken Breast',
    cat: 'Main Course',
    price: 19,
    desc: 'Lean chicken breast marinated with lemon, garlic, and fresh herbs, served with seasonal vegetables and roasted potatoes.',
    img: u('photo-1532550907401-a500c9a57435'),
    tag: 'Healthy Choice',
    rating: 4.7,
    reviews: 128,
    prepTime: '20-25 min',
    calories: 420,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Chicken breast',
      'Rosemary',
      'Thyme',
      'Garlic',
      'Lemon',
      'Potatoes',
      'Vegetables'
    ],
    allergens: [],
    dietary: ['High-Protein', 'Gluten-Free'],
    nutrition: { protein: 44, carbs: 30, fat: 12 },
    available: true,
    featured: false
  },
  {
    id: 16,
    name: 'Garlic Butter Prawns',
    cat: 'Seafood',
    price: 21,
    desc: 'Plump prawns sautéed in golden garlic butter with fresh parsley, lemon zest, and a subtle touch of chili.',
    img: u('photo-1559737558-2f5a35f4523b'),
    tag: 'Chef Special',
    rating: 4.9,
    reviews: 142,
    prepTime: '12-18 min',
    calories: 360,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Prawns',
      'Garlic',
      'Butter',
      'Parsley',
      'Lemon',
      'Chili flakes'
    ],
    allergens: ['Shellfish', 'Dairy'],
    dietary: ['High-Protein', 'Gluten-Free'],
    nutrition: { protein: 32, carbs: 6, fat: 23 },
    available: true,
    featured: true
  },
  {
    id: 17,
    name: 'Grilled Salmon Fillet',
    cat: 'Seafood',
    price: 26,
    desc: 'A beautifully grilled salmon fillet served with lemon herb butter, roasted vegetables, and fluffy mashed potatoes.',
    img: u('photo-1467003909585-2f8a72700288'),
    tag: 'Premium',
    rating: 4.9,
    reviews: 116,
    prepTime: '20-25 min',
    calories: 540,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Salmon fillet',
      'Lemon',
      'Butter',
      'Dill',
      'Broccoli',
      'Potatoes'
    ],
    allergens: ['Fish', 'Dairy'],
    dietary: ['High-Protein', 'Gluten-Free'],
    nutrition: { protein: 42, carbs: 32, fat: 26 },
    available: true,
    featured: true
  },
  {
    id: 18,
    name: 'Classic Fish and Chips',
    cat: 'Seafood',
    price: 18,
    desc: 'Crispy golden battered white fish with seasoned fries, lemon wedges, and creamy tartar sauce.',
    img: u('photo-1579208575657-c595a05383b7'),
    tag: 'Classic Favorite',
    rating: 4.6,
    reviews: 102,
    prepTime: '18-22 min',
    calories: 720,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'White fish',
      'Flour',
      'Potatoes',
      'Egg',
      'Tartar sauce',
      'Lemon'
    ],
    allergens: ['Fish', 'Gluten', 'Eggs'],
    dietary: [],
    nutrition: { protein: 30, carbs: 74, fat: 32 },
    available: true,
    featured: false
  },
  {
    id: 19,
    name: 'Loaded Cheese Fries',
    cat: 'Appetizers',
    price: 8,
    desc: 'Crispy golden fries covered in warm cheddar cheese sauce, topped with spring onions and smoky paprika.',
    img: u('photo-1573080496219-bb080dd4f877'),
    tag: 'Popular',
    rating: 4.7,
    reviews: 198,
    prepTime: '10-12 min',
    calories: 490,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Potatoes',
      'Cheddar cheese',
      'Milk',
      'Spring onions',
      'Paprika',
      'Salt'
    ],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 12, carbs: 54, fat: 26 },
    available: true,
    featured: false
  },
  {
    id: 20,
    name: 'Mozzarella Cheese Sticks',
    cat: 'Appetizers',
    price: 9,
    desc: 'Melt-in-your-mouth mozzarella wrapped in a crunchy golden coating, served with warm marinara dipping sauce.',
    img: u('photo-1531749668029-2db88e4276c7'),
    tag: 'Crowd Favorite',
    rating: 4.6,
    reviews: 134,
    prepTime: '10-15 min',
    calories: 390,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Mozzarella',
      'Breadcrumbs',
      'Flour',
      'Eggs',
      'Italian herbs',
      'Marinara sauce'
    ],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 18, carbs: 34, fat: 21 },
    available: true,
    featured: false
  },
  {
    id: 21,
    name: 'Spicy Buffalo Chicken Wings',
    cat: 'Appetizers',
    price: 12,
    desc: 'Crispy chicken wings tossed in tangy buffalo sauce, served with crunchy celery and a cool ranch dip.',
    img: u('photo-1527477396000-e27163b481c2'),
    tag: 'Best Seller',
    rating: 4.8,
    reviews: 265,
    prepTime: '18-22 min',
    calories: 520,
    servings: 1,
    spicy: 'Hot',
    ingredients: [
      'Chicken wings',
      'Buffalo sauce',
      'Butter',
      'Paprika',
      'Celery',
      'Ranch dressing'
    ],
    allergens: ['Dairy', 'Eggs'],
    dietary: ['High-Protein', 'Gluten-Free'],
    nutrition: { protein: 34, carbs: 9, fat: 38 },
    available: true,
    featured: true
  },
  {
    id: 22,
    name: 'Classic Beef Burger',
    cat: 'Burgers',
    price: 12,
    desc: 'A flame-grilled beef patty layered with crisp lettuce, fresh tomato, red onion, pickles, and house burger sauce.',
    img: u('photo-1568901346375-23c9450c58cd'),
    tag: 'Popular',
    rating: 4.7,
    reviews: 218,
    prepTime: '12-18 min',
    calories: 690,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Beef patty',
      'Burger bun',
      'Lettuce',
      'Tomato',
      'Red onion',
      'Pickles',
      'House sauce'
    ],
    allergens: ['Gluten', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 32, carbs: 46, fat: 37 },
    available: true,
    featured: false
  },
  {
    id: 23,
    name: 'Crispy Chicken Burger',
    cat: 'Burgers',
    price: 11,
    desc: 'A crunchy golden chicken fillet with fresh lettuce, juicy tomato, and creamy pepper mayo in a toasted bun.',
    img: u('photo-1606755962773-d324e0a13086'),
    tag: 'Best Seller',
    rating: 4.8,
    reviews: 247,
    prepTime: '12-18 min',
    calories: 650,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Chicken fillet',
      'Burger bun',
      'Lettuce',
      'Tomato',
      'Mayonnaise',
      'Seasoned coating'
    ],
    allergens: ['Gluten', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 30, carbs: 52, fat: 32 },
    available: true,
    featured: true
  },
  {
    id: 24,
    name: 'Mushroom Swiss Burger',
    cat: 'Burgers',
    price: 14,
    desc: 'A juicy beef patty topped with sautéed mushrooms, melted Swiss cheese, caramelized onions, and garlic aioli.',
    img: u('photo-1553979459-d2229ba7433a'),
    tag: 'Gourmet',
    rating: 4.8,
    reviews: 121,
    prepTime: '15-20 min',
    calories: 760,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Beef patty',
      'Swiss cheese',
      'Mushrooms',
      'Caramelized onions',
      'Burger bun',
      'Garlic aioli'
    ],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 38, carbs: 44, fat: 43 },
    available: true,
    featured: false
  },
  {
    id: 25,
    name: 'Chicken Biryani',
    cat: 'Main Course',
    price: 14,
    desc: 'Fragrant basmati rice layered with aromatic spices, tender chicken, caramelized onions, fresh herbs, and saffron notes.',
    img: u('photo-1563379091339-03246963d51a'),
    tag: 'Best Seller',
    rating: 4.9,
    reviews: 386,
    prepTime: '25-30 min',
    calories: 620,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Basmati rice',
      'Chicken',
      'Yogurt',
      'Onions',
      'Ginger',
      'Garlic',
      'Biryani spices'
    ],
    allergens: ['Dairy'],
    dietary: ['High-Protein'],
    nutrition: { protein: 32, carbs: 76, fat: 18 },
    available: true,
    featured: true
  },
  {
    id: 26,
    name: 'Beef Lasagna',
    cat: 'Main Course',
    price: 18,
    desc: 'Oven-baked layers of pasta, slow-cooked beef ragù, creamy béchamel, and bubbling mozzarella with a golden cheese crust.',
    img: u('photo-1574894709920-11b28e7367e3'),
    tag: 'Italian Favorite',
    rating: 4.8,
    reviews: 157,
    prepTime: '25-35 min',
    calories: 680,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Lasagna sheets',
      'Ground beef',
      'Tomatoes',
      'Béchamel sauce',
      'Mozzarella',
      'Parmesan'
    ],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 36, carbs: 58, fat: 32 },
    available: true,
    featured: false
  },
  {
    id: 27,
    name: 'Chicken Noodle Soup',
    cat: 'Appetizers',
    price: 9,
    desc: 'A comforting bowl of slow-simmered chicken broth with shredded chicken, tender noodles, carrots, celery, and fresh herbs.',
    img: u('photo-1547592166-23ac45744acd'),
    tag: 'Comfort Food',
    rating: 4.6,
    reviews: 89,
    prepTime: '12-18 min',
    calories: 240,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Chicken broth',
      'Chicken',
      'Egg noodles',
      'Carrots',
      'Celery',
      'Parsley'
    ],
    allergens: ['Gluten', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 20, carbs: 26, fat: 7 },
    available: true,
    featured: false
  },
  {
    id: 28,
    name: 'Greek Garden Salad',
    cat: 'Appetizers',
    price: 10,
    desc: 'A colorful Mediterranean salad with ripe tomatoes, cucumber, red onion, Kalamata olives, feta cheese, and oregano dressing.',
    img: u('photo-1512621776951-a57141f2eefd'),
    tag: 'Fresh Pick',
    rating: 4.7,
    reviews: 112,
    prepTime: '8-12 min',
    calories: 290,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Tomatoes',
      'Cucumber',
      'Red onion',
      'Kalamata olives',
      'Feta cheese',
      'Olive oil',
      'Oregano'
    ],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 8, carbs: 18, fat: 21 },
    available: true,
    featured: false
  },
  {
    id: 29,
    name: 'Fudgy Chocolate Brownie',
    cat: 'Desserts',
    price: 7,
    desc: 'A rich, dense chocolate brownie with a delicate crackly top, deep cocoa flavor, and soft fudgy center.',
    img: u('photo-1606313564200-e75d5e30476c'),
    tag: 'Sweet Favorite',
    rating: 4.8,
    reviews: 176,
    prepTime: '5 min',
    calories: 360,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Cocoa powder',
      'Flour',
      'Eggs',
      'Sugar'
    ],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 5, carbs: 42, fat: 20 },
    available: true,
    featured: false
  },
  {
    id: 30,
    name: 'New York Cheesecake',
    cat: 'Desserts',
    price: 9,
    desc: 'A velvety baked cheesecake with a rich cream cheese filling, buttery biscuit base, and a delicate vanilla aroma.',
    img: u('photo-1533134242443-d4fd215305ad'),
    tag: 'Popular',
    rating: 4.9,
    reviews: 214,
    prepTime: '5 min',
    calories: 410,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Cream cheese',
      'Cream',
      'Sugar',
      'Eggs',
      'Vanilla',
      'Biscuit crumbs',
      'Butter'
    ],
    allergens: ['Dairy', 'Eggs', 'Gluten'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 7, carbs: 38, fat: 27 },
    available: true,
    featured: true
  },
  {
    id: 31,
    name: 'Strawberry Ice Cream',
    cat: 'Desserts',
    price: 6,
    desc: 'Smooth and creamy strawberry ice cream made with sweet berry flavor, served chilled for a refreshing dessert.',
    img: u('photo-1563805042-7684c019e1cb'),
    tag: 'Refreshing',
    rating: 4.6,
    reviews: 92,
    prepTime: '2-5 min',
    calories: 220,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: ['Strawberries', 'Milk', 'Cream', 'Sugar', 'Vanilla'],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 4, carbs: 28, fat: 11 },
    available: true,
    featured: false
  },
  {
    id: 32,
    name: 'Blueberry Pancakes',
    cat: 'Desserts',
    price: 10,
    desc: 'Fluffy golden pancakes filled with juicy blueberries, finished with maple syrup and a light dusting of powdered sugar.',
    img: u('photo-1528207776546-365bb710ee93'),
    tag: 'Brunch Favorite',
    rating: 4.7,
    reviews: 139,
    prepTime: '12-18 min',
    calories: 480,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Flour',
      'Blueberries',
      'Milk',
      'Eggs',
      'Butter',
      'Maple syrup',
      'Sugar'
    ],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 11, carbs: 72, fat: 16 },
    available: true,
    featured: false
  },
  {
    id: 33,
    name: 'Fresh Orange Juice',
    cat: 'Drinks',
    price: 5,
    desc: 'Bright, naturally sweet orange juice freshly squeezed and served cold to capture the refreshing taste of ripe citrus.',
    img: u('photo-1600271886742-f049cd451bba'),
    tag: 'Fresh Daily',
    rating: 4.7,
    reviews: 127,
    prepTime: '3-5 min',
    calories: 110,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: ['Fresh oranges'],
    allergens: [],
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 2, carbs: 26, fat: 0 },
    available: true,
    featured: false
  },
  {
    id: 34,
    name: 'Iced Caramel Latte',
    cat: 'Drinks',
    price: 6,
    desc: 'Smooth espresso poured over cold milk and ice, finished with buttery caramel syrup and a delicate caramel drizzle.',
    img: u('photo-1461023058943-07fcbe16d735'),
    tag: 'Coffee Favorite',
    rating: 4.8,
    reviews: 192,
    prepTime: '5-7 min',
    calories: 210,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Espresso',
      'Milk',
      'Caramel syrup',
      'Ice',
      'Caramel drizzle'
    ],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 7, carbs: 31, fat: 6 },
    available: true,
    featured: true
  },
  {
    id: 35,
    name: 'Fresh Mango Smoothie',
    cat: 'Drinks',
    price: 6,
    desc: 'Ripe mango blended into a thick tropical smoothie with yogurt and a splash of milk for a creamy finish.',
    img: u('photo-1505252585461-04db1eb84625'),
    tag: 'Tropical Favorite',
    rating: 4.7,
    reviews: 108,
    prepTime: '5-7 min',
    calories: 190,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: ['Mango', 'Yogurt', 'Milk', 'Honey', 'Ice'],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 6, carbs: 38, fat: 3 },
    available: true,
    featured: false
  },
  {
    id: 36,
    name: 'Chocolate Milkshake',
    cat: 'Drinks',
    price: 7,
    desc: 'A thick, indulgent chocolate milkshake blended with creamy vanilla ice cream, chocolate sauce, and cold milk.',
    img: u('photo-1572490122747-3968b75cc699'),
    tag: 'Sweet Favorite',
    rating: 4.8,
    reviews: 167,
    prepTime: '5-7 min',
    calories: 390,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Chocolate ice cream',
      'Milk',
      'Chocolate sauce',
      'Cocoa powder'
    ],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 9, carbs: 52, fat: 17 },
    available: true,
    featured: false
  },
  {
    id: 37,
    name: 'Fresh Garden Salad',
    cat: 'Appetizers',
    price: 9,
    desc: 'A light, colorful bowl of crisp seasonal vegetables, cherry tomatoes, cucumber, carrots, and a tangy house vinaigrette.',
    img: u('photo-1540420773420-3366772f4999'),
    tag: 'Healthy Choice',
    rating: 4.6,
    reviews: 83,
    prepTime: '8-10 min',
    calories: 180,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Lettuce',
      'Cherry tomatoes',
      'Cucumber',
      'Carrots',
      'Olive oil',
      'Vinegar'
    ],
    allergens: [],
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 4, carbs: 18, fat: 10 },
    available: true,
    featured: false
  },
  {
    id: 38,
    name: 'Spicy Chicken Wrap',
    cat: 'Main Course',
    price: 11,
    desc: 'A soft tortilla filled with spicy grilled chicken, crunchy lettuce, ripe tomatoes, red onions, and creamy garlic sauce.',
    img: u('photo-1626700051175-6818013e1d4f'),
    tag: 'Popular',
    rating: 4.7,
    reviews: 145,
    prepTime: '12-16 min',
    calories: 520,
    servings: 1,
    spicy: 'Hot',
    ingredients: [
      'Tortilla',
      'Chicken breast',
      'Lettuce',
      'Tomatoes',
      'Red onion',
      'Garlic sauce',
      'Chili seasoning'
    ],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    dietary: ['High-Protein'],
    nutrition: { protein: 34, carbs: 48, fat: 19 },
    available: true,
    featured: false
  },
  {
    id: 39,
    name: 'Garlic Herb Bread',
    cat: 'Appetizers',
    price: 6,
    desc: 'Freshly toasted bread brushed with garlic butter, sprinkled with Italian herbs, and finished with a light golden crust.',
    img: u('photo-1573140247632-f8fd74997d5c'),
    tag: 'Classic Favorite',
    rating: 4.6,
    reviews: 98,
    prepTime: '6-8 min',
    calories: 260,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Bread',
      'Garlic',
      'Butter',
      'Parsley',
      'Oregano',
      'Olive oil'
    ],
    allergens: ['Gluten', 'Dairy'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 6, carbs: 34, fat: 11 },
    available: true,
    featured: false
  },
  {
    id: 40,
    name: 'Vanilla Bean Panna Cotta',
    cat: 'Desserts',
    price: 8,
    desc: 'A silky Italian cream dessert infused with real vanilla, served chilled with a delicate berry coulis.',
    img: u('photo-1488477181946-6428a0291777'),
    tag: 'Chef Special',
    rating: 4.8,
    reviews: 105,
    prepTime: '5 min',
    calories: 320,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Cream',
      'Milk',
      'Vanilla bean',
      'Sugar',
      'Gelatin',
      'Berry coulis'
    ],
    allergens: ['Dairy'],
    dietary: ['Gluten-Free'],
    nutrition: { protein: 5, carbs: 26, fat: 22 },
    available: true,
    featured: false
  },
  {
    id: 41,
    name: 'Chicken Tikka Masala',
    cat: 'Main Course',
    price: 17,
    desc: 'Tender chicken tikka simmered in a rich tomato cream sauce with warming Indian spices, served with fragrant basmati rice.',
    img: u('photo-1565557623262-b51c2513a641'),
    tag: 'Chef Special',
    rating: 4.9,
    reviews: 231,
    prepTime: '25-30 min',
    calories: 610,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Chicken',
      'Tomatoes',
      'Yogurt',
      'Cream',
      'Ginger',
      'Garlic',
      'Garam masala',
      'Basmati rice'
    ],
    allergens: ['Dairy'],
    dietary: ['High-Protein', 'Gluten-Free'],
    nutrition: { protein: 38, carbs: 56, fat: 24 },
    available: true,
    featured: true
  },
  {
    id: 42,
    name: 'Beef Tacos',
    cat: 'Main Course',
    price: 13,
    desc: 'Seasoned beef tucked into warm tortillas with shredded lettuce, fresh salsa, cheddar cheese, and zesty lime crema.',
    img: u('photo-1551504734-5ee1c4a1479b'),
    tag: 'Street Food Favorite',
    rating: 4.7,
    reviews: 163,
    prepTime: '12-18 min',
    calories: 470,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Ground beef',
      'Corn tortillas',
      'Lettuce',
      'Tomatoes',
      'Cheddar',
      'Lime',
      'Cilantro'
    ],
    allergens: ['Dairy'],
    dietary: ['High-Protein'],
    nutrition: { protein: 27, carbs: 42, fat: 22 },
    available: true,
    featured: false
  },
  {
    id: 43,
    name: 'Vegetable Fried Rice',
    cat: 'Main Course',
    price: 10,
    desc: 'Fluffy rice stir-fried over high heat with colorful vegetables, spring onions, garlic, and a savory soy-based seasoning.',
    img: u('photo-1512058564366-18510be2db19'),
    tag: 'Vegetarian Favorite',
    rating: 4.6,
    reviews: 117,
    prepTime: '12-15 min',
    calories: 390,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'Rice',
      'Carrots',
      'Peas',
      'Bell peppers',
      'Spring onions',
      'Garlic',
      'Soy sauce'
    ],
    allergens: ['Soy'],
    dietary: ['Vegan', 'Vegetarian'],
    nutrition: { protein: 9, carbs: 68, fat: 10 },
    available: true,
    featured: false
  },
  {
    id: 44,
    name: 'Chicken Momos',
    cat: 'Appetizers',
    price: 9,
    desc: 'Delicate steamed dumplings filled with seasoned minced chicken, ginger, garlic, and spring onions, served with spicy tomato chutney.',
    img: u('photo-1496116218417-1a781b1c416c'),
    tag: 'Popular',
    rating: 4.8,
    reviews: 188,
    prepTime: '15-20 min',
    calories: 330,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Chicken',
      'Dumpling wrappers',
      'Ginger',
      'Garlic',
      'Spring onions',
      'Tomatoes',
      'Chili'
    ],
    allergens: ['Gluten'],
    dietary: ['High-Protein'],
    nutrition: { protein: 23, carbs: 38, fat: 9 },
    available: true,
    featured: true
  },
  {
    id: 45,
    name: 'Crispy Fish Burger',
    cat: 'Burgers',
    price: 12,
    desc: 'A crunchy golden fish fillet topped with fresh lettuce, tangy tartar sauce, and pickles inside a soft toasted bun.',
    img: u('photo-1528735602780-2552fd46c7af'),
    tag: 'New Favorite',
    rating: 4.6,
    reviews: 91,
    prepTime: '12-18 min',
    calories: 580,
    servings: 1,
    spicy: 'Mild',
    ingredients: [
      'White fish',
      'Burger bun',
      'Breadcrumbs',
      'Lettuce',
      'Tartar sauce',
      'Pickles'
    ],
    allergens: ['Fish', 'Gluten', 'Eggs'],
    dietary: [],
    nutrition: { protein: 26, carbs: 55, fat: 25 },
    available: true,
    featured: false
  },
  {
    id: 46,
    name: 'Creamy Tomato Soup',
    cat: 'Appetizers',
    price: 8,
    desc: 'Roasted ripe tomatoes blended into a smooth, comforting soup with garlic, basil, and a swirl of fresh cream.',
    img: u('photo-1547592166-23ac45744acd'),
    tag: 'Comfort Food',
    rating: 4.6,
    reviews: 78,
    prepTime: '12-15 min',
    calories: 210,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Tomatoes',
      'Cream',
      'Onion',
      'Garlic',
      'Basil',
      'Vegetable stock'
    ],
    allergens: ['Dairy'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 5, carbs: 22, fat: 12 },
    available: true,
    featured: false
  },
  {
    id: 47,
    name: 'Caramel Cheesecake',
    cat: 'Desserts',
    price: 10,
    desc: 'A rich, creamy cheesecake finished with a glossy salted caramel drizzle and a buttery biscuit base.',
    img: u('photo-1533134242443-d4fd215305ad'),
    tag: 'Premium Dessert',
    rating: 4.9,
    reviews: 149,
    prepTime: '5 min',
    calories: 460,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Cream cheese',
      'Cream',
      'Sugar',
      'Eggs',
      'Biscuit crumbs',
      'Butter',
      'Caramel'
    ],
    allergens: ['Dairy', 'Eggs', 'Gluten'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 7, carbs: 45, fat: 29 },
    available: true,
    featured: true
  },
  {
    id: 48,
    name: 'Watermelon Mint Cooler',
    cat: 'Drinks',
    price: 5,
    desc: 'Fresh watermelon blended into a naturally refreshing cooler with mint leaves, lime juice, and plenty of ice.',
    img: u('photo-1513558161293-cdaf765edfd7'),
    tag: 'Summer Special',
    rating: 4.7,
    reviews: 94,
    prepTime: '4-6 min',
    calories: 85,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: ['Watermelon', 'Mint', 'Lime', 'Ice'],
    allergens: [],
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    nutrition: { protein: 1, carbs: 21, fat: 0 },
    available: true,
    featured: false
  },
  {
    id: 49,
    name: 'BBQ Beef Ribs',
    cat: 'Main Course',
    price: 28,
    desc: 'Slow-cooked beef ribs coated in smoky barbecue glaze, served with creamy coleslaw and golden roasted potatoes.',
    img: u('photo-1544025162-d76694265947'),
    tag: 'Premium',
    rating: 4.9,
    reviews: 176,
    prepTime: '30-40 min',
    calories: 790,
    servings: 1,
    spicy: 'Medium',
    ingredients: [
      'Beef ribs',
      'BBQ sauce',
      'Paprika',
      'Garlic',
      'Potatoes',
      'Cabbage',
      'Mayonnaise'
    ],
    allergens: ['Eggs'],
    dietary: ['High-Protein', 'Gluten-Free'],
    nutrition: { protein: 46, carbs: 38, fat: 48 },
    available: true,
    featured: true
  },
  {
    id: 50,
    name: 'Strawberry Cheesecake Milkshake',
    cat: 'Drinks',
    price: 8,
    desc: 'A thick, indulgent milkshake blending sweet strawberries, creamy vanilla ice cream, and cheesecake-inspired flavor.',
    img: u('photo-1572490122747-3968b75cc699'),
    tag: 'New Arrival',
    rating: 4.8,
    reviews: 132,
    prepTime: '5-7 min',
    calories: 420,
    servings: 1,
    spicy: 'Not Spicy',
    ingredients: [
      'Strawberries',
      'Vanilla ice cream',
      'Milk',
      'Cream cheese',
      'Sugar',
      'Biscuit crumbs'
    ],
    allergens: ['Dairy', 'Gluten'],
    dietary: ['Vegetarian'],
    nutrition: { protein: 9, carbs: 55, fat: 19 },
    available: true,
    featured: true
  }
]
