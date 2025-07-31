const dogBreeds = [
    {
      name: "Labrador Retriever",
      fact: "Labradors are known for their friendly and outgoing nature.",
      country: "Canada",
      image:{
         src:"https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg"
      }
    },
    {
      name: "German Shepherd",
      fact: "German Shepherds are highly versatile and often serve in police and military roles.",
      country: "Germany",
      image:{
        src:"https://images.ctfassets.net/ub3bwfd53mwy/4kimSEieLHUw4sMRjYg4Cz/4e1d234ae89279527ef5cf26ba856877/Two_German_Shepherds_in_grass_field.png"
     }
    },
    {
      name: "Golden Retriever",
      fact: "Golden Retrievers are excellent swimmers and were originally bred for retrieving game.",
      country: "Scotland",
      image:{
        src:"https://image.petmd.com/files/inline-images/golden-retriever-2.jpg?VersionId=9HAclc1bWh8XvyNoGi2.UxpdEp1gygb_"
     }
    },
    {
      name: "Bulldog",
      fact: "Bulldogs have a distinctive wrinkled face and pushed-in nose.",
      country: "United Kingdom",
      image:{
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/1200px-Bulldog_inglese.jpg"
     }
    },
    {
      name: "Beagle",
      fact: "Beagles have an exceptional sense of smell and were traditionally used for hunting hare.",
      country: "United Kingdom",
      image:{
        src:"https://supertails.com/cdn/shop/articles/istockphoto-157603003-612x612.jpg?v=1740120926"
     }
    },
    {
      name: "Poodle",
      fact: "Poodles are highly intelligent and come in three sizes: standard, miniature, and toy.",
      country: "Germany",
      image:{
        src:"https://t3.ftcdn.net/jpg/01/63/55/64/360_F_163556483_Robxwa3ucXIH3q5KLADAjCzrit4V6mPO.jpg"
     }
    },
    {
      name: "Rottweiler",
      fact: "Rottweilers were originally used to herd livestock and pull carts.",
      country: "Germany",
      image:{
        src:"https://cdn.royalcanin-weshare-online.io/RVaO8noBBKJuub5qUrpq/v3/bp-lot-2-rottweiler-couleur-portrait"
     }
    },
    {
      name: "Yorkshire Terrier",
      fact: "Yorkshire Terriers, or 'Yorkies', were initially bred to catch rats in textile mills.",
      country: "United Kingdom",
      image:{
        src:"https://puppiezo.com/wp-content/uploads/2023/06/C60E56EE-C0E8-475F-BA25-1C952B58D1C3.jpeg"
     }
    },
    {
      name: "Boxer",
      fact: "Boxers are known for their playful and energetic demeanor.",
      country: "Germany",
      image:{
        src:"https://cdn.britannica.com/46/233846-050-8D30A43B/Boxer-dog.jpg"
     }
    },
    {
      name: "Dachshund",
      fact: "Dachshunds were bred to hunt badgers, with their name literally meaning 'badger dog' in German.",
      country: "Germany",
      image:{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdz-YjTn9h3n213UYEIc4sV3IljB0KmR7w8Q&s"
     }
    },
    {
      name: "Siberian Husky",
      fact: "Siberian Huskies have a thick double coat that protects them in extremely cold temperatures.",
      country: "Russia",
      image:{
        src:"https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg"
     }
    },
    {
      name: "Shih Tzu",
      fact: "Shih Tzus were favored by Chinese royalty and often lived in palaces.",
      country: "China",
      image:{
        src:"https://cdn.britannica.com/06/234206-050-6F8BBD5C/Shih-tzu-dog-with-long-coat.jpg"
     }
    },
    {
      name: "Doberman Pinscher",
      fact: "Dobermans are known for their loyalty and protective nature.",
      country: "Germany",
      image:{
        src:"https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181054/202104doberman-pinscher-dog-breed.jpg"
     }
    },
    {
      name: "Great Dane",
      fact: "Great Danes are one of the tallest dog breeds, often referred to as 'gentle giants'.",
      country: "Germany",
      image:{
        src:"https://www.dogpackapp.com/blog/wp-content/uploads/2024/11/fawn-great-dane-standing-park.webp"
     }
    },
    {
      name: "Chihuahua",
      fact: "Chihuahuas are the smallest dog breed in the world.",
      country: "Mexico",
      image:{
        src:"https://media.istockphoto.com/id/1313232209/photo/brown-chihuahua-sitting-on-floor-small-dog-in-asian-house-feeling-happy-and-relax-dog.jpg?s=612x612&w=0&k=20&c=lcSklrJbafwStJzKqU68imMG77hlEoCOkCCUeb_TEFk="
     }
    },
    {
      name: "Pomeranian",
      fact: "Pomeranians are known for their fluffy coats and lively personalities.",
      country: "Poland",
      image:{
        src:"https://www.hepper.com/wp-content/uploads/2023/02/a-white-pomeranian-dog-happily-standing-outside_Tam-and-Trace-Photography_Shutterstock.jpg"
     }
    },
    {
      name: "Maltese",
      fact: "Maltese dogs have a long history and were favored by royalty and aristocrats.",
      country: "Malta",
      image:{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaC4AbXT_y2_ebzJgLft_p9RXSYDsR0E6QA&s"
     }
    },
    {
      name: "Cocker Spaniel",
      fact: "Cocker Spaniels were originally bred as hunting dogs, specializing in retrieving game birds.",
      country: "United Kingdom",
      image:{
        src:"https://image.petmd.com/files/styles/863x625/public/2024-08/cocker-spaniel.jpg"
     }
    },
    {
      name: "Pug",
      fact: "Pugs have a distinctive wrinkled face and curled tail.",
      country: "China",
      image:{
        src:"https://media.istockphoto.com/id/454238885/photo/pug-puppy-dog.jpg?s=612x612&w=0&k=20&c=Da9JqQ3ViGeNvM6IPGBprXBt8PLSQ8_rPgvYWhEtpHU="
     }
    },
    {
      name: "Border Collie",
      fact: "Border Collies are renowned for their intelligence and herding abilities.",
      country: "United Kingdom",
      image:{
        src:"https://media-be.chewy.com/wp-content/uploads/2021/04/11150033/Border-Collie-1306159446-921x615.jpg"
     }
    },
    {
      name: "Australian Shepherd",
      fact: "Despite its name, the Australian Shepherd was developed in the United States.",
      country: "United States",
      image:{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvcfaoyp-EjG5lhVp19gP5qfmbCpY_z3HMw&s"
     }
    },
    {
      name: "French Bulldog",
      fact: "French Bulldogs are known for their bat-like ears and affectionate nature.",
      country: "France",
      image:{
        src:"https://www.dogster.com/wp-content/uploads/2024/03/blue-french-bulldog-puppy_Angyalosi-Beata_Shutterstock.jpg"
     }
    },
    {
      name: "Boston Terrier",
      fact: "Boston Terriers are nicknamed 'American Gentlemen' due to their tuxedo-like markings.",
      country: "United States",
      image:{
        src:"https://a-z-animals.com/media/animals/images/original/boston_terrier.jpg"
     }
    },
    {
      name: "Bichon Frise",
      fact: "Bichon Frises are cheerful dogs known for their curly white coats.",
      country: "France",
      image:{
        src:"https://thebarkingbabies.b-cdn.net/wp-content/uploads/2022/09/Bichon-Frise-.jpg"
     }
    },
    {
      name: "Akita",
      fact: "Akitas are known for their loyalty and were originally used for guarding royalty in Japan.",
      country: "Japan",
      image:{
        src:"https://cdn.pixabay.com/photo/2020/11/21/08/34/akita-5763408_640.jpg"
     }
    },
    {
      name: "Basenji",
      fact: "Basenjis are known as the 'barkless dog' because they produce unique yodel-like sounds.",
      country: "Congo",
      image:{
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Basenji_Profile_%28loosercrop%29.jpg/640px-Basenji_Profile_%28loosercrop%29.jpg"
     }
    },
    {
      name: "Bernese Mountain Dog",
      fact: "Bernese Mountain Dogs were originally used as farm dogs in the Swiss Alps.",
      country: "Switzerland",
      image:{
        src:"https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg"
      }
    },
    {
      name: "Bloodhound",
      fact: "Bloodhounds have an exceptional sense of smell and are often used in tracking.",
      country: "Belgium",
      image:{
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bloodhound_Erland22.jpg/640px-Bloodhound_Erland22.jpg"
     }
    },
    {
      name: "Bull Terrier",
      fact: "Bull Terriers are known for their distinctive egg-shaped heads.",
      country: "United Kingdom",
      image:{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbeJ0zq4yCdkbQZoTwwJDAKYwipH2aUBsow&s",
     }
    },
    {
      name: "Cavalier King Charles Spaniel",
      fact: "This breed was named after King Charles II of England, who was fond of toy spaniels.",
      country: "United Kingdom",
      image:{
        src:"https://t4.ftcdn.net/jpg/04/63/67/55/360_F_463675569_SjikLZHHgBTRvupFpyaKkJCqJU1Qrecr.jpg"
     }
    },
    {
      name: "Chow Chow",
      fact: "Chow Chows have a distinctive blue-black tongue and lion-like mane.",
      country: "China",
      image:{
        src:"https://i.pinimg.com/736x/7d/f9/73/7df973f1d0f4d0a449c4aab20f45627f.jpg"
     }
    },
    {
      name: "Dalmatian",
      fact: "Dalmatians are known for their unique black-spotted coat.",
      country: "Croatia",
      image:{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl88cQ0YY6lKD99_xZJBBStcsvQESguHjfkg&s"
     }
    },
    {
      name: "English Setter",
      fact: "English Setters are known for their speckled coats and were originally bred for setting game.",
      country: "United Kingdom",
      image:{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRModA2hyzn2dpujm4Jnzz9XTkrQj5ojU7inw&s"
     }
    },
    {
      name: "Greyhound",
      fact: "Greyhounds are the fastest dog breed, capable of reaching speeds up to 45 mph.",
      country: "Egypt",
      image:{
        src:"https://play-lh.googleusercontent.com/Of4aHo8OtW7kBvRKFD1SBpicfLIg4FwPBTf4rxGU-uQbtgXA-H7_cYHgeT49s5NSNPo=w240-h480-rw"
     }
    },
    {
      name: "Irish Wolfhound",
      fact: "Irish Wolfhounds are one of the tallest dog breeds and were historically used to hunt wolves.",
      country: "Ireland",
      image:{
        src:"https://cdn.britannica.com/22/8122-050-4C4AF0D1/Irish-wolfhound.jpg"
     }
    },
    {
      name: "Jack Russell Terrier",
      fact: "Jack Russells are energetic dogs originally bred for fox hunting.",
      country: "United Kingdom",
      image:{
        src:"https://i0.wp.com/warsawdog.com/wp-content/uploads/2020/07/jack-russel-terrier-scaled.jpg?resize=670%2C352&ssl=1"
     }
    },
  ];


  module.exports = {data:dogBreeds};