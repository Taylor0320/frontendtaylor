const streetFoods = [
    {
        name: "Nasi Lemak", 
        state: "kl", 
        image: "images/nasilemak.jpg", 
        description: "Nasi Lemak is Malaysia's national dish, a delicious meal centered on rice cooked in coconut milk. The name means fatty rice because of its rich taste. The Kuala Lumpur version is famous for its special, sweet and spicy chili paste called sambal, which is the heart of the dish. It's often served in a banana leaf with a variety of side dishes.",
        history: "Nasi Lemak started as a simple, filling breakfast for Malaysian farmers and villagers. It's been a popular street food in Kuala Lumpur for a very long time, with a newspaper mentioning it in the city back in 1935. Over the years, it has become a national favorite, with each seller having their own famous version.",
        ingredients: "The key ingredients for Nasi Lemak are rice cooked in coconut milk, a spicy chili paste called sambal, fried anchovies and peanuts, and a slice of cucumber and an egg. You can also add other things like fried chicken or beef rendang.",
        availableStates: ["kl"],
        lat: 3.1390, // Approximate coordinates for Kuala Lumpur
        lng: 101.6869
    },
{
        name: "Hokkien Mee", 
        state: "kl", 
        image: "images/hokkienmee.jpg", 
        description: "Hokkien Mee in Kuala Lumpur is a famous Chinese noodle dish. It uses thick yellow noodles stir-fried in a hot wok with dark soy sauce and pork lard. This gives it a rich, savory taste and a smoky flavor. It's a hearty and popular dish, especially for late-night meals.",
        history: "This dish was created by a street food seller in Kuala Lumpur in the 1920s. He adapted a family recipe to use thick noodles and a dark sauce, making it a filling and tasty meal. It became a local favorite and is now a signature part of the city's food culture.",
        ingredients: "The main ingredients for Hokkien Mee are thick yellow noodles, pork, and Chinese cabbage. The key flavor comes from a special dark soy sauce and a generous amount of pork lard used for frying.",
        availableStates: ["kl"],
        lat: 3.1408, // Approximate coordinates for Kuala Lumpur
        lng: 101.6932
    },
    {
        name: "Rendang Daging", 
        state: "kl", 
        image: "images/rendangdaging.jpg", 
        description: "Rendang Daging is a well-known Malaysian dish of rich and tender beef. It's a dry curry where the meat is slow-cooked in coconut milk and spices until the liquid disappears. This process leaves the beef incredibly tender and coated in a thick, flavorful sauce. The dish is a perfect mix of savory and spicy tastes.",
        history: "Rendang comes from the Minangkabau people of Indonesia. It was originally a way to preserve meat without a refrigerator by cooking it slowly with spices. This cooking style was brought to Malaysia and became a national favorite, often served at important celebrations and festivals.",
        ingredients: "The main ingredients for Rendang Daging are beef, coconut milk, and a special spice paste. The dish also uses kerisik, which is toasted coconut, to make the sauce thick and add a nutty flavor.",
        availableStates: ["kl"],
        lat: 3.1388, // Approximate coordinates for Kuala Lumpur
        lng: 101.7013
    },
    {
        name: "Char Kway Teow", 
        state: "penang", 
        image: "images/charkoayteow.jpg", 
        description: "Penang Char Kuey Teow is a famous stir-fried noodle dish. It uses flat rice noodles fried over very high heat, which gives them a special smoky flavor. The dish is a perfect mix of savory, sweet, and spicy tastes.",
        history: "This dish started as a simple, cheap meal for fishermen and farmers in Penang. They would fry leftover noodles with seafood to make a filling meal. Over time, it became a popular street food and is now a signature dish of the city, with each seller having their own secret recipe.",
        ingredients: "The main ingredients are flat rice noodles, prawns, cockles, and Chinese sausage. The flavor comes from a special soy sauce blend, chili paste, and the use of pork lard when frying. It also includes an egg, bean sprouts, and chives.",
        availableStates: ["penang"],
        lat: 5.4140, // Approximate coordinates for Penang
        lng: 100.3288
    },
    {
        name: "Asam Laksa", 
        state: "penang", 
        image: "images/asamlaksa.jpg", 
        description: "Penang Asam Laksa is a famous noodle soup known for being sour and spicy. Its name comes from tamarind, which gives the broth its tangy taste. The soup is light and made from fish, then served with thick noodles and lots of fresh herbs and vegetables.",
        history: "This dish was created in Penang from a mix of Malay and Chinese cooking. It likely started as a simple soup made by fishermen, who added tamarind to make it last longer. Over time, Chinese immigrants added new herbs and spices, turning it into the unique dish it is today.",
        ingredients: "The main ingredients for Penang Asam Laksa are a sour and spicy fish broth made with tamarind, and thick rice noodles. The soup is topped with fresh things like cucumber, mint, and pineapple, and a spoonful of sweet shrimp paste is added to make the flavor complete.",
        availableStates: ["penang"],
        lat: 5.4204, // Approximate coordinates for Penang
        lng: 100.3346
    },
    {
        name: "Satay", 
        state: "johor", 
        image: "images/satay.jpg", 
        description: "Satay is a popular Malaysian street food consisting of skewered, grilled meat, usually served with a rich, flavorful peanut sauce and accompanied by rice cakes and cucumber slices.",
        history: "Originating from Indonesia, satay was brought to Malaysia by traders and has since become a beloved dish, with various regional variations.",
        ingredients: "Skewered meat (typically chicken, beef, or lamb), Peanut sauce, Rice cakes (ketupat), Cucumber slices",
        availableStates: ["johor"],
        lat: 1.4927, // Approximate coordinates for Johor Bahru
        lng: 103.7414
    },
    {
        name: "Mee Rebus Johor", 
        state: "johor", 
        image: "images/meerebusjohor.jpg", 
        description: "Mee Rebus Johor is a delicious noodle dish from Johor, Malaysia, featuring yellow noodles in a thick, savory gravy made from boiled potatoes, shrimp paste, and spices. It is typically topped with hard-boiled eggs, fried shallots, and lime.",
        history: "This dish is a unique variation of the traditional mee rebus, adapted by the Johor community with local ingredients and flavors.",
        ingredients: "Yellow noodles, Potato-based gravy, Shrimp paste, Hard-boiled eggs, Fried shallots, Lime",
        availableStates: ["johor"],
        lat: 1.4880, // Approximate coordinates for Johor Bahru
        lng: 103.7547
    },
    {
        name: "Kway Teow Kia", 
        state: "johor", 
        image: "images/kwayteowkia.jpg", 
        description: "Kway Teow Kia is a flavorful Johor street food made with flat rice noodles in a savory pork-based broth, served with tender pork slices and garnished with fried garlic and spring onions.",
        history: "Originally from the Chinese Hokkien community in Johor, this dish has become a popular local favorite.",
        ingredients: "Flat rice noodles (kway teow), Pork, Pork-based broth, Pickled green chilies, Fried garlic and spring onions",
        availableStates: ["johor"],
        lat: 1.4862, // Approximate coordinates for Johor Bahru
        lng: 103.7656
    },
    {
        name: "Hinava", 
        state: "sabah", 
        image: "images/hinava.jpg", 
        description: "Hinava is a traditional raw fish salad from Sabah. It's similar to ceviche, where fresh fish is cooked by marinating it in lime juice. The dish is known for its zesty and spicy flavor, with a unique taste from local herbs. It's a popular appetizer.",
        history: "Hinava is a very old dish from the indigenous Kadazan-Dusun people. They created it as a way to eat fresh fish without needing to cook it with fire. The dish has been a part of their culture for centuries and is often served during important festivals.",
        ingredients: "The main ingredients for Hinava are fresh, raw fish, which is cooked with lime juice. The dish also includes sliced shallots, ginger, and chilies for flavor. Sometimes, grated seeds from a local fruit called Bambangan are added for a unique taste.",
        availableStates: ["sabah"],
        lat: 5.9804, // Approximate coordinates for Kota Kinabalu
        lng: 116.0735
    },
    {
        name: "Sang Nyuk Mien", 
        state: "sabah", 
        image: "images/sangnyukmien.jpg", 
        description: "Sang Nyuk Mien is a popular noodle dish from Sabah, known as raw pork noodles. The name comes from how thin slices of pork are quickly cooked in a hot broth right before you eat it. It's a rich, savory soup with a separate bowl of springy noodles.",
        history: "This dish was created by the Hakka Chinese community in Sabah in the 1970s. It was a hearty and affordable meal for workers. The method of cooking the pork at the last minute to keep it tender became the dish's signature style, making it a local favorite.",
        ingredients: "The main ingredients for Sang Nyuk Mien are thin pork slices, pork meatballs, and a rich pork bone broth. The noodles are served separately and mixed with soy sauce and pork lard.",
        availableStates: ["sabah"],
        lat: 5.9813, // Approximate coordinates for Kota Kinabalu
        lng: 116.0733
    },
{
        name: "Ambuyat", 
        state: "sabah", 
        image: "images/ambuyat.jpg", 
        description: "Ambuyat is a traditional dish from Sabah that is a sticky, glue-like substance made from sago. It has a mild taste on its own and is meant to be dipped into flavorful sauces. Instead of chewing it, you use a special stick to twirl it and swallow it whole.",
        history: "This dish has been a staple food for the indigenous people of Borneo for a very long time. It became especially important during World War II, when rice was hard to find. The sago palm was a reliable source of food, and Ambuyat became a symbol of survival during hard times.",
        ingredients: "The main ingredient for Ambuyat itself is simple: sago starch mixed with hot water. The most important part of the meal, however, are the side dishes and dipping sauces, which provide all the flavor.",
        availableStates: ["sabah"],
        lat: 6.0469, // Approximate coordinates for Kudat
        lng: 116.8373
    },
    {
        name: "Sarawak Laksa", 
        state: "sarawak", 
        image: "images/sarawaklaksa.jpg", 
        description: "Sarawak Laksa is a famous noodle soup from the state of Sarawak. Its broth is rich and fragrant, made from a special spice paste and a mix of chicken and prawn stock with a little bit of coconut milk. This makes it a savory and spicy soup that's not too creamy. It's served with thin rice noodles and topped with chicken, prawns, and egg.",
        history: "This dish was created in the city of Kuching around the mid-20th century. A man named Tan Yong Him made a special paste for the laksa, which made it easier for people to cook at home. This helped the dish become very popular and a signature food of Sarawak.",
        ingredients: "The main ingredients are a complex laksa paste, a broth made from chicken and prawns and a little coconut milk. The soup is served with thin rice vermicelli noodles and topped with shredded chicken, cooked prawns, and strips of egg omelette.",
        availableStates: ["sarawak"],
        lat: 1.5573, // Approximate coordinates for Kuching
        lng: 110.3592
    },
    {
        name: "Kolo Mee", 
        state: "sarawak", 
        image: "images/kolomee.jpg", 
        description: "Kolo Mee is a popular noodle dish from Sarawak. It's a dry mixed noodle dish, where springy egg noodles are tossed in a savory sauce instead of being in a soup. The noodles are topped with minced meat and barbecue pork, and it's a simple, delicious meal.",
        history: "Kolo Mee was created by Chinese immigrants in Sarawak in the early 1900s. It was made as a cheap and easy meal for workers. The dish became very popular and is now a famous food for people in Sarawak, eaten at any time of day.",
        ingredients: "The main ingredients for Kolo Mee are springy egg noodles mixed with a savory sauce made from soy sauce and pork lard. The noodles are topped with minced meat and slices of red barbecue pork.",
        availableStates: ["sarawak"],
        lat: 1.5593, // Approximate coordinates for Kuching
        lng: 110.3458
    },
    {
        name: "Masak Lemak Cili Api", 
        state: "negeri-sembilan", 
        image: "images/Ayam-Masak-Lemak-Cili-Padi-recipe-2.jpg", 
        description: "Chicken cooked in creamy coconut gravy with bird's eye chili - a golden, comforting dish", 
        history: "A signature dish of Negeri Sembilan with strong Minangkabau influence. This well-known Malaysian dish creates the perfect balance of creamy coconut milk with fiery bird's eye chillies. The golden hue comes from fresh turmeric, and it's said to taste even better the next day as the spices soak into the meat. Similar to Thai green curry in comfort and flavor profile.", 
        ingredients: "Chicken pieces, fresh turmeric (for golden color), coconut milk/cream, bird's eye chillies (cili padi), red chillies, garlic, ginger, red onion, lemongrass, kaffir lime leaves, galangal, salt. Often served with cucumber and carrot pickle salad.",
        availableStates: ["negeri-sembilan"],
        lat: 2.7238, // Approximate coordinates for Seremban
        lng: 101.9392
    },
    {
        name: "Seremban Siu Bao", 
        state: "negeri-sembilan", 
        image: "images/cropped-SiewBao.jpg", 
        description: "Golden-baked BBQ pork buns with flaky pastry crust - a Seremban specialty", 
        history: "A unique Seremban creation that differs from traditional steamed Chinese bao. These baked BBQ pork buns feature a distinctive golden, flaky pastry exterior that sets them apart from their Hong Kong counterparts. The recipe was adapted by local Chinese bakers to suit Malaysian tastes, creating a hybrid between Western pastry techniques and traditional Chinese filling.", 
        ingredients: "Wheat flour, lard or butter, eggs, BBQ pork (char siu), onions, oyster sauce, dark soy sauce, sugar, cornstarch, sesame oil, salt",
        availableStates: ["negeri-sembilan"],
        lat: 2.7300, // Approximate coordinates for Seremban
        lng: 101.9333
    },
    {
        name: "Apam Johol", 
        state: "negeri-sembilan", 
        image: "images/untitled-design-7-23_40_771464.jpg", 
        description: "Traditional sweetened rice cake wrapped in rambai leaves", 
        history: "Also known as 'Apam Daun Rambai', this traditional Negeri Sembilan delicacy is a sweetened rice cake that has been passed down through generations. The rambai leaves not only preserve the aroma but also make it visually appealing. This beloved breakfast or teatime treat has gained popularity and even reached international recognition.", 
        ingredients: "Rice, sugar, rambai leaves (Baccaurea motleyana), coconut milk. Often served with rendang, sambal tumis, or bean porridge",
        availableStates: ["negeri-sembilan"],
        lat: 2.7350, // Approximate coordinates for Johol, Negeri Sembilan
        lng: 102.3270
    },
    {
        name: "Nasi Kerabu", 
        state: "kelantan", 
        image: "images/nasikerabu.jpg", 
        description: "Nasi Kerabu is a traditional Kelantanese dish consisting of rice colored with butterfly pea flower, served with a variety of herbs, salted egg, fried fish or chicken, and sambal. It's a flavorful and aromatic dish, often enjoyed for lunch or dinner.",
        history: "A signature dish of Kelantan, Nasi Kerabu has roots in the Malay tradition, known for its fresh and vibrant ingredients, reflecting the region’s rich culinary heritage.",
        ingredients: "Rice (colored with butterfly pea flower), Herbs (mint, coriander, cucumber), Salted egg, Fried fish or chicken, Sambal (spicy chili paste)",
        availableStates: ["kelantan"],
        lat: 6.1332, // Approximate coordinates for Kota Bharu
        lng: 102.2384
    },
    {
        name: "Keropok Lekor", 
        state: "kelantan", 
        image: "images/keropoklekor.jpg", 
        description: "Keropok Lekor is a popular Kelantanese snack made from a mixture of fish and flour, shaped into long rolls, deep-fried, and served with a spicy dipping sauce. It's crunchy on the outside and soft on the inside.",
        history: "Originating from the coastal regions of Kelantan, Keropok Lekor is often enjoyed as a snack or appetizer and is a favorite among locals and tourists alike.",
        ingredients: "Fish (usually mackerel), Flour, Spices, Dipping sauce (usually spicy and tangy)",
        availableStates: ["kelantan"],
        lat: 6.1400, // Approximate coordinates for Kota Bharu
        lng: 102.2450
    },
    {
        name: "Laksam", 
        state: "kelantan", 
        image: "images/laksam.jpg", 
        description: "Laksam is a thick noodle dish served with a creamy fish-based gravy, garnished with fresh herbs and vegetables. The dish is savory and slightly tangy, offering a comforting meal.",
        history: "Laksam is a well-loved dish in Kelantan, often served during special occasions and gatherings. It’s a variation of traditional laksa, with a creamier and milder broth.",
        ingredients: "Thick rice noodles, Fish-based gravy (creamy and tangy), Fresh herbs (mint, basil), Vegetables (cucumber, beansprouts)",
        availableStates: ["kelantan"],
        lat: 6.1280, // Approximate coordinates for Kota Bharu
        lng: 102.2500
    },
    {
        name: "Nasi Dagang", 
        state: "terengganu", 
        image: "images/nasidagang.jpg", 
        description: "Nasi Dagang is a popular dish from Malaysia's East Coast. It has two main parts: a rich, fragrant rice and a fish curry. The rice is a mix of normal and sticky rice cooked with coconut milk, giving it a chewy texture. The curry is a sweet and spicy tuna fish curry.",
        history: "The name Nasi Dagang means trader's rice, and it was a meal for traveling merchants and fishermen. The dish gave them the energy they needed for their long journeys. The Terengganu version is famous for its unique tuna fish curry and rich rice.",
        ingredients: "The main ingredients for Nasi Dagang are glutinous rice and regular rice cooked in coconut milk, and a tuna fish curry also made with coconut milk. The curry gets its sour and spicy flavor from a paste of chilies and lemongrass, and the dish is served with a pickled cucumber salad.",
        availableStates: ["terengganu"],
        lat: 5.3308, // Approximate coordinates for Kuala Terengganu
        lng: 103.1407
    },
    {
        name: "Sata", 
        state: "terengganu", 
        image: "images/sata.jpg", 
        description: "Sata is a traditional snack from Terengganu, Malaysia. It's a type of fish cake made from spiced fish and grated coconut. The mixture is wrapped in a banana leaf, put on a stick, and then grilled over a fire, which gives it a smoky and savory flavor.",
        history: "This dish came from the fishing communities on the east coast of Malaysia. It was a way for fishermen to use up extra fish that they couldn't sell. By mixing the fish with coconut and spices and grilling it, they made a delicious snack that could last longer. Today, it's a popular street food.",
        ingredients: "The main ingredients are fresh fish and grated coconut. The flavor comes from a mix of shallots, ginger, and chilies. The mixture is wrapped in a banana leaf and grilled on a stick.",
        availableStates: ["terengganu"],
        lat: 5.3350, // Approximate coordinates for Kuala Terengganu
        lng: 103.1450
    },
    {
        name: "Pulut Panggang", 
        state: "terengganu", 
        image: "images/pulutpanggang.jpg", 
        description: "Pulut Panggang is a traditional snack from Terengganu. It's made from a soft, sticky rice that is filled with a savory, spiced fish paste. The entire snack is wrapped in a banana leaf and then grilled over fire, which gives it a great smoky flavor.",
        history: "This dish was created by the local fishing communities as a way to use fresh fish. By making the fish into a paste and putting it inside sticky rice, they created a filling snack that was easy to carry. It's a very old recipe that is still popular today.",
        ingredients: "The main ingredients are sticky glutinous rice cooked with coconut milk, and a filling made from shredded fish and spices. The entire snack is wrapped in a banana leaf for grilling.",
        availableStates: ["terengganu"],
        lat: 5.3280, // Approximate coordinates for Kuala Terengganu
        lng: 103.1380
    },
    {
        name: "Patin Masak Tempoyak", 
        state: "pahang", 
        image: "images/patinmasaktempoyak.jpg", 
        description: "Patin Masak Tempoyak is a flavorful Pahang dish featuring Patin fish cooked in a thick, spicy, and tangy gravy made from fermented durian (tempoyak). It's a signature dish, offering a unique local culinary experience.",
        history: "A proud culinary heritage of Pahang, this dish highlights the abundant Patin fish from the Pahang River and the traditional use of tempoyak (fermented durian) in Malay cooking. It reflects the rich cultural flavors of the region.",
        ingredients: "Patin fish, Fermented durian (tempoyak), Bird's eye chilies, Turmeric, Lemongrass, Tamarind, Salt, Sugar",
        availableStates: ["pahang"],
        lat: 3.8117, // Approximate coordinates for Kuantan
        lng: 103.3216
    },
    {
        name: "Puding Raja", 
        state: "pahang", 
        image: "images/20190830_113752-1024x768.jpg", 
        description: "Royal layered pudding - an elegant traditional Malay dessert", 
        history: "Puding Raja (Royal Pudding) is a traditional Malay dessert that reflects the sophistication of royal court cuisine. This multi-layered pudding was historically served during special occasions and royal banquets. Each colorful layer represents different flavors and textures, making it both visually stunning and deliciously complex.", 
        ingredients: "Coconut milk, eggs, sugar, pandan leaves (for green layer), sweet corn (for yellow layer), red coloring or rose essence, agar-agar, condensed milk",
        availableStates: ["pahang"],
        lat: 3.8050, // Approximate coordinates for Kuantan
        lng: 103.3300
    },
    {
        name: "Tau Fu Fah", 
        state: "perak", 
        image: "images/R01028_Tofu-Pudding-940x627.jpg", 
        description: "Silky soft tofu pudding with syrup", 
        history: "A popular dessert in Ipoh, known for its incredibly smooth texture thanks to the city's limestone-filtered water. This traditional Chinese dessert has been perfected by Ipoh hawkers who take advantage of the city's naturally soft, limestone-filtered water to create an exceptionally smooth and silky texture that's difficult to replicate elsewhere.", 
        ingredients: "Soybeans, gypsum powder (coagulant), brown sugar syrup, sometimes served with ginger syrup or palm sugar. The secret is in Ipoh's soft water quality",
        availableStates: ["perak"],
        lat: 4.5915, // Approximate coordinates for Ipoh
        lng: 101.0855
    },
    {
        name: "Kai See Hor Fun", 
        state: "perak", 
        image: "images/gai-see-hor-fun-dish.webp", 
        description: "Flat rice noodles with shredded chicken in savory sauce", 
        history: "A classic Ipoh comfort food that showcases the city's Chinese Hakka and Cantonese culinary heritage. 'Kai See' means shredded chicken, and this dish represents the simple yet flavorful cooking style of Ipoh's Chinese community. The dish became popular among tin miners and has remained a beloved local specialty.", 
        ingredients: "Fresh flat rice noodles (hor fun), shredded chicken, mushrooms, dark soy sauce, light soy sauce, oyster sauce, bean sprouts, chives, eggs",
        availableStates: ["perak"],
        lat: 4.5950, // Approximate coordinates for Ipoh
        lng: 101.0900
    },
    {
        name: "Ipoh White Coffee", 
        state: "perak", 
        image: "images/R02989-Ipoh-White-Coffee-940x623.jpg", 
        description: "Famous roasted coffee with condensed milk - Ipoh's signature beverage", 
        history: "Developed by Hainanese immigrants in the 1940s, Ipoh White Coffee gets its distinctive taste from coffee beans roasted in margarine without sugar, creating a lighter color than traditional coffee. The brewing method and Ipoh's soft limestone water contribute to its unique smooth, less bitter taste. This has become one of Malaysia's most famous coffee exports.", 
        ingredients: "Robusta and Arabica coffee beans, roasted with margarine (no sugar or wheat), served with condensed milk and sugar. The limestone-filtered water of Ipoh is crucial to the authentic taste",
        availableStates: ["perak"],
        lat: 4.6000, // Approximate coordinates for Ipoh
        lng: 101.0800
    },
    {
        name: "Laksa Kedah", 
        state: "kedah", 
        image: "images/laksakedah.jpg", 
        description: "Laksa Kedah is a unique noodle dish from Kedah, featuring a rich, tangy tamarind-based broth. Served with noodles and fish, it is garnished with fresh herbs and vegetables, creating a refreshing and flavorful dish.",
        history: "A regional variant of Malaysia's many types of laksa, Laksa Kedah uses local ingredients like tamarind and fish, offering a distinct taste that sets it apart from other versions.",
        ingredients: "Noodles, Tamarind-based broth, Fish, Fresh herbs (mint, basil), Cucumber slices",
        availableStates: ["kedah"],
        lat: 6.1200, // Approximate coordinates for Alor Setar
        lng: 100.3660
    },
    {
        name: "Roti John", 
        state: "kedah", 
        image: "images/rotijohn.jpg", 
        description: "Roti John is a popular street food sandwich from Kedah made by stuffing French bread with a mixture of minced meat, eggs, and vegetables, then toasting it to perfection. It's often served with mayonnaise and chili sauce for extra flavor.",
        history: "Roti John is believed to have originated in Malaysia and was named after \"John\" as a reference to the Western-style bread used, combining local and Western flavors.",
        ingredients: "French bread, Minced meat (beef or chicken), Eggs, Vegetables, Mayonnaise and chili sauce",
        availableStates: ["kedah"],
        lat: 6.1150, // Approximate coordinates for Alor Setar
        lng: 100.3600
    },
    {
         name: "Chicken Rice Balls", 
        state: "melaka", 
        image: "images/chickenriceballs.jpg", 
        description: "Chicken rice balls are a special version of chicken rice where the rice is rolled into small balls. The rice is cooked in chicken broth for extra flavor.The dish comes with tender chicken (either steamed or roasted) and is served with chili sauce, soy sauce, and cucumber slices. It's a fun and traditional way to eat the meal, especially in Malaka, Malaysia.",
        history: "Chicken rice balls began as a practical way to eat. The rice was rolled into balls so workers and travelers could easily carry and eat the meal with one hand. This tradition became a local specialty in Malacca, Malaysia, and is now a famous part of the city's food culture.",
		ingredients: "First, the rice is cooked in chicken broth, along with ginger, garlic, and pandan leaves to give it a rich flavor. Second, the chicken is either poached or roasted, and the broth from this process is used to cook the rice. Finally, the dish is served with key sauces made from chili, dark soy sauce, and ginger, as well as fresh slices of cucumber on the side.",
        availableStates: ["melaka"],
        lat: 2.1960, // Approximate coordinates for Melaka City
        lng: 102.2400
    },
    {
        name: "Cendol", 
        state: "melaka", 
        image: "images/cendol.jpg", 
        description: "Melaka cendol is a famous dessert with a unique, smoky flavor. It's a sweet, icy treat that is highly popular in the hot climate of Malaysia. What makes the Melaka version special is its use of Gula Melaka, a dark palm sugar from the region that gives it a rich, caramel and almost toffee-like taste. The dessert is a delicious mix of creamy, icy, and chewy textures.", 
        history: "Nyonya Laksa was created by the Peranakan people, who are descendants of Chinese immigrants that settled in Malaysia. They mixed Chinese cooking styles with local Malay spices to create a new cuisine. The Nyonya women perfected this dish over time, making it a signature food for their community.", 
        ingredients: "The dish has three main parts. First, the toppings and noodles include rice noodles, prawns, chicken, and bean sprouts. Second, the flavorful spice paste is made from dried chilies, shrimp paste, and fresh ingredients like lemongrass and ginger. Last, the rich broth is made from a stock of chicken and prawn shells, mixed with coconut milk.",
        availableStates: ["melaka"],
        lat: 2.1980, // Approximate coordinates for Melaka City
        lng: 102.2500
    },
 {
        name: "Baba Nyonya Laksa", 
        state: "melaka", 
        image: "images/babanyonyalaksa.jpg", 
        description: "Nyonya Laksa is a rich, creamy noodle soup that blends Chinese and Malay flavors. Its broth is the main feature, made from a spicy paste and a lot of coconut milk. This gives it a deep, savory taste that is both spicy and smooth. The soup is served with noodles and toppings like prawns and chicken", 
        history: "The history of cendol in Melaka is tied to trade and local ingredients. While the dessert's origins are in Indonesia, its modern form with shaved ice became popular in the early 20th century, a time when ice became more accessible. Melaka's cendol became famous because of its key ", 
        ingredients: "The main ingredients for Melaka cendol are the soft, green, worm-like jellies and a lot of finely shaved ice. This is all topped with creamy coconut milk and a special, sweet syrup made from Gula Melaka, a dark palm sugar. Sometimes, extra ingredients like red beans are added for a different taste.",
        availableStates: ["melaka"],
        lat: 2.1990, // Approximate coordinates for Melaka City
        lng: 102.2450
    },
    {
        name: "Bak Kut Teh", 
        state: "selangor", 
        image: "images/bakkuttea.jpg", 
        description: "Bak Kut Teh is a famous herbal pork rib soup from Klang, Selangor. Its name means pork bone tea, and it's a very savory and aromatic dish. The meat is cooked slowly in a broth with many herbs and spices until it is incredibly tender. It's a comforting meal, often eaten with rice.", 
        history: "This dish started in the early 1900s in Klang. It was created as a cheap and nourishing meal for Chinese laborers who worked at the port. The dish helped them get the energy they needed for their long, hard days. Over time, it became a signature food of Klang and is now a famous Malaysian dish.", 
        ingredients: "The main ingredients for Bak Kut Teh are pork ribs and a special mix of herbs and spices like cinnamon and star anise. The soup is also seasoned with soy sauce and served with other pork parts or mushrooms.",
        availableStates: ["selangor"],
        lat: 3.0474, // Approximate coordinates for Klang
        lng: 101.4468
    },
 {
        name: "Nasi Ambeng", 
        state: "selangor", 
        image: "images/nasiambeng.jpg", 
        description: "Nasi Ambeng is a traditional communal meal from Selangor. It's a large platter of white rice surrounded by many different side dishes. The meal is meant for sharing and brings together a mix of spicy, savory, and crunchy flavors.", 
        history: "his dish was brought to Malaysia by Javanese people who moved to Selangor. It was originally a dish for special events and blessings, meant to show unity and community. Over time, it became a popular meal sold in restaurants, but it still holds its meaning of togetherness.", 
        ingredients: "The main ingredients for Nasi Ambeng are steamed white rice served with a variety of side dishes. These include a spicy stir-fry of tofu and tempeh, chicken in a sweet soy sauce, and a crunchy topping of spiced toasted coconut. It also comes with fried noodles and salted fish.",
        availableStates: ["selangor"],
        lat: 3.0650, // Approximate coordinates for Shah Alam, Selangor
        lng: 101.5200
    },
 {
        name: "Lontong", 
        state: "selangor", 
        image: "images/lontong.jpg", 
        description: "Lontong is a popular dish from Selangor that features compressed rice cakes. These rice cakes are served in a rich but mild coconut milk gravy that is full of vegetables like cabbage and carrots. It's a comforting and filling meal, often served with a spicy chili paste on the side.", 
        history: "This dish was brought to Malaysia by Javanese immigrants. Lontong was a common food in their homeland and became very popular among the Javanese-Malay community in Selangor.", 
        ingredients: "The main ingredients are firm rice cakes and a rich coconut milk gravy with vegetables. The gravy's flavor comes from a spice paste made with things like lemongrass and shallots. It is often topped with a hard-boiled egg and spicy sambal.",
        availableStates: ["selangor"],
        lat: 3.0500, // Approximate coordinates for Klang
        lng: 101.4500
    },
    {
        name: "Ikan Bakar Perlis", 
        state: "perlis", 
        image: "images/ikan-bakar-api2-kuala-perlis-1.jpg.webp", 
        description: "Grilled fish with aromatic herbs and spices - Perlis coastal specialty", 
        history: "A signature dish of Perlis's coastal areas, especially popular in Kuala Perlis. This grilled fish represents the state's rich fishing heritage and proximity to Thailand, incorporating unique local spice blends and grilling techniques passed down through generations of fishermen families.", 
        ingredients: "Fresh fish (usually red snapper, pomfret, or mackerel), turmeric, lemongrass, galangal, chili paste, tamarind, coconut milk, kaffir lime leaves, served with sambal belacan and rice",
        availableStates: ["perlis"],
        lat: 6.4000, // Approximate coordinates for Kuala Perlis
        lng: 100.1460
    },
    {
        name: "Pulut Mempelam", 
        state: "perlis", 
        image: "images/pulutmempelam2.jpg", 
        description: "Sweet glutinous rice with ripe mango - a beloved northern dessert", 
        history: "A traditional dessert particularly popular in Perlis and northern Malaysia, Pulut Mempelam showcases the perfect marriage of Thai culinary influence with local ingredients. The dish celebrates the abundance of tropical mangoes and represents the sweet, simple pleasures of traditional Malay desserts.", 
        ingredients: "Glutinous rice, coconut milk, pandan leaves, salt, palm sugar, ripe mango slices. Often garnished with toasted coconut flakes or sesame seeds",
        availableStates: ["perlis"],
        lat: 6.4400, // Approximate coordinates for Kangar, Perlis
        lng: 100.1970
    }
];

let users = JSON.parse(localStorage.getItem('users') || '[]');
let currentUser = sessionStorage.getItem('currentUser');

function getCookieConsent() {
    return localStorage.getItem('cookieConsent');
}

function setCookieConsent(status) {
    localStorage.setItem('cookieConsent', status);
}

function setCookie(name, value, days) {
    if (getCookieConsent() === 'accepted') {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
    }
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function loadFoodGallery(filterState = 'all') {
    const gallery = document.getElementById('foodGallery');
    if (!gallery) return;
    const filteredFoods = filterState === 'all' ? streetFoods : streetFoods.filter(food => food.state === filterState);
    console.log('Loading food gallery with', filteredFoods.length, 'foods for state:', filterState);
    
    gallery.innerHTML = filteredFoods.map((food, index) => {
        const foodIndex = streetFoods.indexOf(food);
        console.log(`Creating card for ${food.name} with index ${foodIndex}`);
        return `
            <div class="col-md-6 mb-4">
                <div class="card food-card" onclick="window.location.href='foodDetail.html?index=${foodIndex}'">
                    <img src="${food.image}" alt="${food.name}" class="food-image">
                    <div class="card-body">
                        <h5 class="card-title">${food.name}</h5>
                        <p class="card-text">${food.description}</p>
                        <small class="text-muted">${getStateName(food.state)}</small>
                        <div class="mt-2">
                            <span class="click-indicator">
                                <i class="fas fa-mouse-pointer me-1"></i>Click to view details
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getStateName(stateCode) {
    const stateNames = {
        'kl': 'Kuala Lumpur',
        'johor': 'Johor',
        'kedah': 'Kedah',
        'kelantan': 'Kelantan',
        'melaka': 'Melaka',
        'negeri-sembilan': 'Negeri Sembilan',
        'pahang': 'Pahang',
        'perak': 'Perak',
        'perlis': 'Perlis',
        'penang': 'Pulau Pinang',
        'sabah': 'Sabah',
        'sarawak': 'Sarawak',
        'selangor': 'Selangor',
        'terengganu': 'Terengganu'
    };
    return stateNames[stateCode] || stateCode.toUpperCase();
}

function showFoodDetail(foodIndex) {
    // Validate food index
    if (foodIndex < 0 || foodIndex >= streetFoods.length) {
        console.error('Invalid food index:', foodIndex);
        foodIndex = 0; // Default to first food if index is invalid
    }
    
    const food = streetFoods[foodIndex];
    
    // Update all the food detail elements
    const foodDetailImage = document.getElementById('foodDetailImage');
    const foodDetailName = document.getElementById('foodDetailName');
    const foodDetailDescription = document.getElementById('foodDetailDescription');
    const foodHistory = document.getElementById('foodHistory');
    const foodIngredients = document.getElementById('foodIngredients');
    const availableStatesDiv = document.getElementById('availableStates');
    
    if (foodDetailImage) foodDetailImage.src = food.image;
    if (foodDetailName) foodDetailName.textContent = food.name;
    if (foodDetailDescription) foodDetailDescription.textContent = food.description;
    if (foodHistory) foodHistory.textContent = food.history;
    if (foodIngredients) foodIngredients.textContent = food.ingredients;
    
    if (availableStatesDiv) {
        availableStatesDiv.innerHTML = food.availableStates.map(state => 
            `<span class="state-tag">${getStateName(state)}</span>`
        ).join('');
    }
    
    // Update page title
    document.title = `${food.name} - Malaysian Street Food Explorer`;
}

function filterByState(state) {
    document.querySelectorAll('.state-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadFoodGallery(state);
    setCookie('selectedState', state, 7);
}

function initMap() {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return;

    // Initialize the map if Leaflet is available
    if (typeof L !== 'undefined') {
        const map = L.map('map').setView([4.2105, 109.2132], 6); // Centered on Malaysia

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Dynamically add markers for all street food locations
        streetFoods.forEach(food => {
            if (food.lat && food.lng) {
                L.marker([food.lat, food.lng]).addTo(map)
                    .bindPopup(food.name);
            }
        });

        // Set a minimum height for the map container if not already set by CSS
        mapDiv.style.minHeight = '500px';
    } else {
        // Fallback for when Leaflet is not loaded (e.g., in development before deployment)
        mapDiv.innerHTML = `
            <div class="d-flex align-items-center justify-content-center h-100 bg-light rounded" style="min-height: 500px;">
                <div class="text-center">
                    <i class="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                    <h5>Interactive Map</h5>
                    <p class="text-muted">Map functionality loading...</p>
                </div>
            </div>
        `;
    }
}

function loadSocialFeed() {
    console.log('Loading social media feed...');
    setTimeout(() => {
        console.log('Social media feed loaded');
    }, 1000);
}

function fetchFoodData() {
    fetch('/api/foods')
        .then(response => response.json())
        .then(data => {
            console.log('Food data loaded:', data);
        })
        .catch(error => {
            console.log('Using local data due to API unavailability');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    if (path.includes('food.html')) {
        let savedState = 'all';
        if (getCookieConsent() === 'accepted') {
            savedState = getCookie('selectedState') || 'all';
        }
        document.querySelectorAll('.state-btn').forEach(btn => {
            if (btn.getAttribute('onclick').includes(`'${savedState}'`)) {
                btn.classList.add('active');
            }
        });
        loadFoodGallery(savedState);
    } else if (path.includes('foodDetail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const index = parseInt(urlParams.get('index')) || 0;
        console.log('Loading food detail for index:', index);
        showFoodDetail(index);
    } else if (path.includes('map.html')) {
        initMap();
    } else if (path.includes('login.html')) {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = this.querySelector('input[type="text"]').value;
                const password = this.querySelector('input[type="password"]').value;
                
                const user = users.find(u => u.name === name && u.password === password);
                if (user) {
                    sessionStorage.setItem('currentUser', name);
                    if (getCookieConsent() === 'accepted') {
                        setCookie('loggedIn', 'true', 1);
                    }
                    alert('Login successful!');
                    window.location.href = 'index.html'; // Redirect to index.html
                } else {
                    alert('Invalid credentials!');
                }
            });
        }
    } else if (path.includes('signup.html')) {
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = this.querySelector('input[type="text"]').value;
                const password = this.querySelectorAll('input[type="password"]')[0].value;
                const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
                
                if (password !== confirmPassword) {
                    alert('Passwords do not match!');
                    return;
                }
                
                if (users.find(u => u.name === name)) {
                    alert('User already exists!');
                    return;
                }
                
                users.push({name, password});
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful!');
                window.location.href = 'index.html'; // Redirect to index.html
            });
        }
    }

    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const feedback = {};
            for (let [key, value] of formData.entries()) {
                feedback[key] = value;
            }
            let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
            feedbacks.push(feedback);
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            alert('Thank you for your feedback!');
            this.reset(); // Clear the form
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const contactMessage = {};
            for (let [key, value] of formData.entries()) {
                contactMessage[key] = value;
            }
            let contactMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            contactMessages.push(contactMessage);
            localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
            alert('Your message has been sent. We will get back to you soon!');
            this.reset(); // Clear the form
        });
    }
    loadSocialFeed();
    fetchFoodData();

    // Cookie Consent Logic
    const cookieConsentBanner = document.getElementById('cookieConsentBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const declineCookiesBtn = document.getElementById('declineCookies');

    function showCookieConsentBanner() {
        if (cookieConsentBanner) {
            cookieConsentBanner.classList.add('show');
        }
    }

    function hideCookieConsentBanner() {
        if (cookieConsentBanner) {
            cookieConsentBanner.classList.remove('show');
        }
    }

    // Check if a cookie consent choice has been made
    if (!getCookieConsent()) {
        showCookieConsentBanner();
    }

    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', () => {
            setCookieConsent('accepted');
            hideCookieConsentBanner();
            // You might want to reload functions that depend on cookies here
            // e.g., if you had deferred loading of external scripts
        });
    }

    if (declineCookiesBtn) {
        declineCookiesBtn.addEventListener('click', () => {
            setCookieConsent('declined');
            hideCookieConsentBanner();
            // Optionally, clear any non-essential cookies here if consent is declined
            clearNonEssentialCookies();
        });
    }
});

// Function to clear non-essential cookies (example, you'd define which cookies are non-essential)
function clearNonEssentialCookies() {
    // For this example, let's assume 'selectedState' is non-essential and should be cleared on decline.
    // In a real application, you'd list all non-essential cookies here.
    document.cookie = 'selectedState=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    console.log('Non-essential cookies cleared.');
}