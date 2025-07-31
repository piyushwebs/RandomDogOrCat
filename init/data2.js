const catBreeds = [
  {
    name: "Persian",
    fact: "Persian cats are known for their luxurious long fur and calm temperament.",
    country: "Iran",
    image:{
      src:"https://cdn.prod.website-files.com/659c0b0024c127bdbe890959/673a2eb3c1d361675009f9b7_31.jpg"
    },
  },
  {
    name: "Siamese",
    fact: "Siamese cats are famous for their striking blue eyes and vocal nature.",
    country: "Thailand",
    image:{
      src:"https://cdn-aahmh.nitrocdn.com/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/images/optimized/rev-31cad3f/www.cozycatfurniture.com/image/siamese-cat-cover.jpg"
    },
  },
  {
    name: "Maine Coon",
    fact: "Maine Coons are one of the largest domesticated cat breeds and are excellent hunters.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1U2twcOvTBUS_Phb7lTzF7tyT69idI_I1w&s"
    },
  },
  {
    name: "Bengal",
    fact: "Bengal cats have a wild leopard-like appearance and love water.",
    country: "United States",
    image:{
      src:"https://images.ctfassets.net/m5ehn3s5t7ec/wp-image-197606/673d0bc11558a640ec3e388c50770636/How-Much-is-a-Bengal-Cat.webp"
    },
  },
  {
    name: "Sphynx",
    fact: "Sphynx cats are hairless and have a warm, suede-like skin.",
    country: "Canada",
    image:{
      src:"https://media.istockphoto.com/id/1356569858/photo/selective-focus-small-gray-domestic-cat-sphynx-close-up-and-copy-space.jpg?s=612x612&w=0&k=20&c=3ys8zfg0cbCYGk1RJWLydfOI62GnaLUz_VP-0-VhWh8="
    },
  },
  {
    name: "British Shorthair",
    fact: "British Shorthairs are known for their round face and dense coat.",
    country: "United Kingdom",
    image:{
      src:"https://cdn.shopify.com/s/files/1/2668/1922/files/british-shorthair-1.jpg"
    },
  },
  {
    name: "Ragdoll",
    fact: "Ragdoll cats go limp when picked up, hence their name.",
    country: "United States",
    image:{
      src:"https://www.simpsonspremium.com/cdn/shop/articles/Untitled_design_14_1024x1024.png?v=1638192880"
    },
  },
  {
    name: "Scottish Fold",
    fact: "Scottish Folds have unique folded ears that give them an owl-like appearance.",
    country: "Scotland",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYocBH1zeDdmBfggsWW8srrI0eyO2xC2_55w&s"
    },
  },
  {
    name: "Russian Blue",
    fact: "Russian Blues are known for their silvery-blue coat and striking green eyes.",
    country: "Russia",
    image:{
      src:"https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/russian-blue.jpg"
    },
  },
  {
    name: "Abyssinian",
    fact: "Abyssinians are one of the oldest cat breeds and are very active and playful.",
    country: "Ethiopia",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMlnUGWEaT9oRUVTyz04vrdBf9ks_N0xyxQ&s"
    },
  },
  {
    name: "Birman",
    fact: "Birmans are known as the 'Sacred Cat of Burma' and have beautiful blue eyes.",
    country: "Myanmar",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPrPs3XmovyINDDKtQTqSNj5nn29XIuvSxw&s"
    },
  },
  {
    name: "Norwegian Forest Cat",
    fact: "This breed has a thick coat that helps it survive in cold climates.",
    country: "Norway",
    image:{
      src:"https://www.thesprucepets.com/thmb/c4xUQ9bmuswDR-umoAKTmwH_r-A=/1500x0/filters:no_upscale():strip_icc()/norwegian-forest-cat-4170085-fe84aa86023446c4b64236ddfbdefd2b.jpg"
    },
  },
  {
    name: "Turkish Van",
    fact: "Turkish Vans love swimming and have a water-resistant coat.",
    country: "Turkey",
    image:{
      src:"https://www.dailypaws.com/thmb/ffnDWAclAUiu1LX1EPMAdxCgjkw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/turkish-van-from-above-386550048-bf294ffdf4bc426e9227266cbe4a5eef.jpg"
    },
  },
  {
    name: "Oriental Shorthair",
    fact: "Oriental Shorthairs come in over 300 different colors and patterns.",
    country: "United Kingdom",
    image:{
      src:"https://www.thesprucepets.com/thmb/Zq1eUigKcsL4fzDyQgL1qry4BQc=/1550x0/filters:no_upscale():strip_icc()/GettyImages-1324924369-5dfbda5801d44cfe927125d789b099a5.jpg"
    },
  },
  {
    name: "Savannah",
    fact: "Savannah cats are a hybrid between a domestic cat and a serval (wild African cat).",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbfOOL-aPe-ALcRyahufXcdTq9roNkI0mqw&s"
    },
  },
  {
    name: "Devon Rex",
    fact: "Devon Rex cats have large ears, short curly fur, and love attention.",
    country: "United Kingdom",
    image:{
      src:"https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/03-09/white+devon+rex+kitten+perched+atop+a+scratching+post+at+home-min.jpg"
    },
  },
  {
    name: "Cornish Rex",
    fact: "Cornish Rex cats have only a fine undercoat, making them incredibly soft.",
    country: "United Kingdom",
    image:{
      src:"https://felinefancy.co.uk/cdn/shop/articles/female-cat-names-20_a3a230ce-2df5-4599-8690-5e01e140fd13-972082.png?v=1734465908&width=1100"
    },
  },
  {
    name: "Egyptian Mau",
    fact: "Egyptian Maus are the only domesticated cats with a naturally spotted coat.",
    country: "Egypt",
    image:{
      src:"https://felinefancy.co.uk/cdn/shop/articles/female-cat-names-25-725327.png?v=1734465924&width=1100"
    },
  },
  {
    name: "Singapura",
    fact: "Singapura is the smallest cat breed and is known for its playful nature.",
    country: "Singapore",
    image:{
      src:"https://preview.redd.it/98so3juh93u71.jpg?width=900&format=pjpg&auto=webp&s=da5527b16ed2f5b676704c7ccfd6da629209b27d"
    },
  },
  {
    name: "American Shorthair",
    fact: "American Shorthairs were originally bred to control rodent populations.",
    country: "United States",
    image:{
      src:"https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg"
    },
  },
  {
    name: "Manx",
    fact: "Manx cats are tailless or have a very short tail due to a genetic mutation.",
    country: "Isle of Man",
    image:{
      src:"https://i.pinimg.com/736x/0e/33/2f/0e332f1f33f045c76dff65a57021c1bc.jpg"
    },
  },
  {
    name: "Himalayan",
    fact: "Himalayans are a cross between a Persian and a Siamese, combining both breeds' features.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOz_5Z8424sIwcOZvvYa4BVqXTMNA07dwcQ&s"
    },
  },
  {
    name: "Balinese",
    fact: "Balinese cats are long-haired Siamese known for their elegant appearance.",
    country: "United States",
    image:{
      src:"https://i.pinimg.com/236x/59/f7/0a/59f70a2a7e21010c006d3f6f25cc2fb5.jpg"
    },
  },
  {
    name: "Japanese Bobtail",
    fact: "Japanese Bobtails are a symbol of good luck in Japan.",
    country: "Japan",
    image:{
      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/JapaneseBobtailBlueEyedMi-ke.JPG/640px-JapaneseBobtailBlueEyedMi-ke.JPG"
    },
  },
  {
    name: "Tonkinese",
    fact: "Tonkinese cats are a mix between Siamese and Burmese breeds.",
    country: "United States",
    image:{
      src:"https://www.dailypaws.com/thmb/4x3UphLXzdVszeg6KzDx15eMCfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tonkinese-kitten-crouching-1287821881-2000-e258e71fe2ce497abf77a9c7f59b3847.jpg"
    },
  },
  {
    name: "Selkirk Rex",
    fact: "Selkirk Rex cats have curly fur and a teddy bear-like appearance.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbc8fdg0RZpjufkghWQ8xULwtGx0o8dX-8PA&s"
    },
  },
  {
    name: "Burmese",
    fact: "Burmese cats are very social and often follow their owners around.",
    country: "Myanmar",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwRw7FqGjYkx5CQxDhuh331T1EPMr4ybv2w&s"
    },
  },
  {
    name: "Ocicat",
    fact: "Despite their wild appearance, Ocicats have no wild DNA and are fully domestic.",
    country: "United States",
    image:{
      src:"https://www.shutterstock.com/image-photo/cute-gray-domestic-ocicat-cat-260nw-2383620923.jpg"
    },
  },
  {
    name: "Lykoi",
    fact: "Lykoi cats are also called 'werewolf cats' due to their unique fur pattern.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcP0UIXfcPiCc8eHwn27mPk5dJWOyu8v5zg&s"
    },
  },
  {
    name: "Turkish Angora",
    fact: "Turkish Angoras are one of the oldest natural cat breeds and are known for their silky white coats.",
    country: "Turkey",
    image:{
      src:"https://i.redd.it/eduyz7z41rtb1.jpg"
    },
  },
  {
    name: "LaPerm",
    fact: "LaPerm cats have curly fur due to a genetic mutation.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZALlwPDYFMt0lrQt0EIX6cCLRHxDH20_Dg&s"
    },
  },
  {
    name: "Korat",
    fact: "Korats are a rare Thai breed known for their heart-shaped face and blue-gray fur.",
    country: "Thailand",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdx8xw0rZTVRuN8fN5S5AssqYGB_tam-QxQ&s"
    },
  },
  {
    name: "Bambino",
    fact: "Bambino cats are a mix between a Sphynx and a Munchkin, making them both hairless and short-legged.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDaTwFkKmdfN0Yh8rw3224xv5Ciju9NC0pw&s"
    },
  },
  {
    name: "Cymric",
    fact: "Cymrics are the long-haired version of the tailless Manx breed.",
    country: "Isle of Man",
    image:{
      src:"https://i.pinimg.com/736x/14/82/6c/14826cfc3023134a39dea86018233b79.jpg"
    },
  },
  {
    name: "Serengeti",
    fact: "Serengeti cats are bred to resemble the wild African serval but contain no wild DNA.",
    country: "United States",
    image:{
      src:"https://www.shutterstock.com/image-photo/animal-cat-pet-concept-serengeti-260nw-1949543743.jpg"
    },
  },
  {
    name: "Peterbald",
    fact: "Peterbald cats can be completely hairless or have a fine coat.",
    country: "Russia",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfykpiGa-aR9XAKsS0YoZOpZzrJZyCTTdPzw&s"
    },
  },
  {
    name: "Munchkin",
    fact: "Munchkins are famous for their short legs due to a genetic mutation.",
    country: "United States",
    image:{
      src:"https://i.pinimg.com/564x/de/fb/fb/defbfb8b739a101db1d3f84e3d04c1a7.jpg"
    },
  },
  {
    name: "American Curl",
    fact: "American Curl cats have uniquely curled ears that fold backward.",
    country: "United States",
    image:{
      src:"https://i.pinimg.com/736x/ce/8d/26/ce8d26e7ac3c40b18e2ca60cbd45cfe9.jpg"
    },
  },
  {
    name: "Snowshoe",
    fact: "Snowshoe cats have distinctive white 'snowshoe' paws and a playful personality.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXRiVmo80VwzI2btVS0cImi-y-30wpEhC_w&s"
    },
  },
  {
    name: "Toyger",
    fact: "Toygers were bred to resemble small tigers but are fully domestic.",
    country: "United States",
    image:{
      src:"https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/09/toyger-kitten-staring-at-camera.jpg"
    },
  },
  {
    name: "Highlander",
    fact: "Highlanders are muscular cats with curled ears and often have short tails.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZKNA79pGaRqHGZDaDXj8nDUGcuM8GRukSA&s"
    },
  },
  {
    name: "German Rex",
    fact: "German Rex cats have soft, curly fur and a friendly personality.",
    country: "Germany",
    image:{
      src:"https://cdn.shopify.com/s/files/1/0568/0450/7691/files/OneWorldCats.com_GermanRex-1_22d0d64f-cb0e-405b-aa46-5fb81202d43a_600x600.jpg?v=1715780498"
    },
  },
  {
    name: "Asian",
    fact: "Asian cats are a group of Burmese-related breeds with a variety of colors and coat patterns.",
    country: "United Kingdom",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMTIbbEsmt802v6TZd9NKvUN6JBxbOi67Kw&s"
    },
  },
  {
    name: "Chantilly-Tiffany",
    fact: "Chantilly-Tiffany cats have a semi-long coat and a gentle temperament.",
    country: "United States",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPV5FK3nwuhJII701ifQ-6sWNnl1LWtkKhg&s"
    },
  },
  {
    name: "Ukrainian Levkoy",
    fact: "Ukrainian Levkoy cats have a distinctive folded-ear and hairless body.",
    country: "Ukraine",
    image:{
      src:"https://amarpet-space.sgp1.digitaloceanspaces.com/production/VTptpKG7dhlHt444Ja2bHthAQeXCOlLNfaUGFa9M.jpg"
    },
  },
  {
    name: "Havana Brown",
    fact: "Havana Browns have a rich chocolate-colored coat and are very social.",
    country: "United Kingdom",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfj9TzlMkMhQf9Kq-5IuTWPxlDyHmjXtiXw&s"
    },
  },
  {
    name: "Arabian Mau",
    fact: "Arabian Maus are desert-adapted cats that originated in the Middle East.",
    country: "United Arab Emirates",
    image:{
      src:"https://cdn-fastly.petguide.com/media/2022/02/16/8260505/arabian-mau.jpg?size=720x845&nocrop=1"
    },
  },
  {
    name: "Japanese Bobtail Longhair",
    fact: "This is the long-haired variety of the Japanese Bobtail, a symbol of luck in Japan.",
    country: "Japan",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkGC0SukkZuJ478ZW9dgof-xOiuUNHFCi6g&s"
    },
  },
  {
    name: "Brazilian Shorthair",
    fact: "Brazilian Shorthairs are the first internationally recognized cat breed from Brazil.",
    country: "Brazil",
    image:{
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqr1h9M5WxGk0-G0YTtIkt0UBsfBw4rTbCA&s"
    },
  }
]; 

module.exports = {catData:catBreeds};