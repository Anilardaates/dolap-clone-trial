const markalar = [
    "Adidas", "Alberto Guardiani", "Alfabeta", "Avva", "Aysira", "Aldo", "Alexander Mcqueen",
    "Atalar", "Apple Bottoms", "Arow", "Alexander Wang", "Anıl", "Avengers", "Anthropologie",
    "Agatha", "Anine Bing", "Alo Yoga", "Atelier Rebul", "Awox", "Atlas Halı", "Anatolia",
    "Antica Sartoria", "Accract", "Assos", "Alf", "Action Baby Carries", "American Apparel",
    "Addison", "Autograph", "Agora Kitaplığı", "Alin Fashion", "Ahsapca", "Adata", "A46",
    "Aeg", "Akınalbella", "Agent Provocateur", "Akhome", "Adalinhome", "Adze", "ADAMO",
    "Alimer", "Arma House", "ACK", "Aksden", "Active Essentials", "Astra", "Activar", "Arden",
    "Acquaverde", "Allen Edmonds", "Alyans Collection", "Alivia Simone", "Ajmal", "American Crew",
    "Alessandro Zavetti", "Awe Cemre", "Alessandro Aym", "ALAVAN", "Alix", "Ana Hickmann",
    "Anna Perenna", "Air Ambiance", "Aynasun", "Albedo Jewelry", "Aqualung", "Aromatica", "Alona",
    "Argan", "Alessandra Rich", "Alldermo", "Actoderm", "Altın Toroslar", "Ahşap Şehri", "Ancors",
    "Alberlo", "Andrew Christian", "Alberto Fasciani", "Arsenal", "Ann Demeulemeester", "Alessandro Dell'acqua",
    "Art T-Shirt", "Aquas", "Andrew GN", "Aspesi", "All Home", "Apaisac Biorga", "Aricare", "Aibor",
    "Alcenlife", "Avesin", "Aperlai", "Atrix", "Atelieroflove", "Arfango", "Avalon Organics", "Altermed",
    "Auerhahn", "Aksu Vital-Softem", "Arrogance", "Attar Dünyası", "Andalou", "Alopecia", "Ar Plastik Promosyon",
    "American Vintage", "Adil Işık", "Acar Home Accessories", "Armani Jeans", "Apple Watch", "Alfa Yayıncılık",
    "Aeropostale", "Alize", "Akçay Çeyiz", "Altınbaşak", "Anchor Hocking", "Akay Gelinlik", "Angelsin",
    "And Other Stories", "Amiparis", "Altanight", "Antebies", "Argento", "Ash", "Art Puzzle", "Altus",
    "Akyüz Bebe", "Acura", "Albimini", "Active Silver", "Art Shoes", "Absolute", "Akkuzu", "Aquazzura",
    "Amboss", "Azor", "Abiye", "Aisha Home", "ASlife", "Ay-Yıldız", "Aquella", "Altis", "ABK", "Arzen", "Afrodit Paris",
    "Aspendos Yayıncılık", "Arunas Yayıncılık", "Acm", "Alice Decor", "Agatha Ruiz De La Prada", "Argisa", "Acqua Di Parma",
    "Anya Hindmarch", "Alpino", "Agiva", "Alexandre de Paris", "Adrienne Vittadini", "Agarta", "Aniij Baby", "Aerin", "Aksu Vital",
    "Alphadog", "Allure Bridals", "Afye", "Aigner", "Alaïa", "Aslı Alev", "Al Haramain", "Alain Mikli", "Aslanlı", "Airlife",
    "Atik", "Anne Fontaine", "Amiclubwear", "Axis", "Aveeno", "Audra", "Antioch'S", "Verdaa", "Adler", "Airoh", "Attrattivo",
    "Anteprima", "Als", "Akım Terlik", "A Heysem", "Akzer", "Airwalk", "Andoer", "Alessio Nesca", "Artnet", "Aqua Sun", "AQUASTAR",
    "Alexa Chung for AG JEANS", "As Emprime", "Artelon", "Ala Lavandula", "Antonio Marras", "Alexis Bittar", "Atlant Gel", "Apptoyz",
    "Ann Marino", "Alfavac", "Annayake", "Alorée", "Attirance", "Anatolia Soap", "ARUMAY", "Aydurmaz", "Addax", "Ambar", "Accessorize",
    "Atmosphere", "Asics", "Alexander McQueen", "Arnica", "Academia", "Amway", "Arena", "Aryıldız", "Avene", "Ayrıntı Yayın Evleri",
    "Aqua", "Anker", "ABC", "Accord", "Andy Wawa", "Anne Klein", "Angora Halı", "Anastasia Beverly Hills", "Arifoğlu", "Ataköy", "AL-MARWAH",
    "Activision", "Angel Butik", "AYYILDIZ", "Airties", "A+", "Angel Polo", "Amazfit", "Axe", "Avenna", "Agapi Yayınları", "Anais and Margaux",
    "ARKET", "Acne Studios", "Alice & Olivia", "Asrın Deri", "Adolfo Dominguez", "Ashley Joy", "Apex Halı", "Acorn", "Antarctica", "Anna Bella",
    "Acerbis", "Antonio Banderas", "Aztec Diamond", "Arnetta", "Apex", "Angelina", "Accendis", "Anatolian Weavers", "Adaliko", "Ahsen Halı",
    "Aqua Regia", "Arap", "Angel Cat", "Atölye No6", "Aslı Bu", "Angie Hot", "Audioquest", "Artdeco", "Artego", "Apolena",  "Temperley", "Akan Cosmetic", "Apotcare", "Argan Care", "Artisul", "Apıfarm",
    "b boohooMAN", "butikmoor", "boomist", "belza", "basicpark", "becseason", 
    "bilcee", "beğenal home collection", "boper", "belle cose", "bonnynice", 
    "bleu petite", "baby lady", "belif", "badelina", "buradanaldım", "B Bershka", 
    "Batik", "B&G Store", "Balenciaga", "Bioderma", "BabyJem", "Bargello", 
    "BARRELS AND OIL", "Bottega Veneta", "Babybjörn", "Bobbi Brown", "Bücürük", 
    "Bella Bombili", "Bikkembergs", "Baby&Kids", "Bruder", "Baby Care", "Bebessi", 
    "Bessini", "Betty Barclay", "Blue Berr-in", "Barrels And Oil", "BabyMax", 
    "Bumbo", "Batiste", "Bik Bok", "Brunello Cucinelli", "Brooks", "Beurer", 
    "Breitling", "Bag Black Swat", "Babyes", "BUSHU", "Blumarine", "Blistex", 
    "Boy London", "Beyonce", "Blitzwolf", "Belenay", "Belstaff", "Botech", 
    "BabyJoy", "Baby Einstein", "Big Free", "Britney Spears", "Bella Mondini", 
    "Brielle By Yeşim Özçelik", "Bang&Olufsen", "Brioni", "By Meriç", 
    "Björn Borg", "BABUSH", "Begüm Salihoğlu", "Bausch Lomb", "Bienwood", 
    "Brand Who", "Bebiccio", "Bebeform", "Bio Keratin", "Bienline", "Braez", 
    "Brave Bourgogne2021", "Branco", "Berre", "Bewild", "Barcelino", "Bundera", 
    "Bu Farklı", "Bebe au Lait", "Balat Halı", "Banbao", "Bristle Blocks", 
    "Bellotte", "Beautiful Show", "Baby Concitta", "Bote", "Babywest", "Blueway", 
    "Bulteks", "Binici Deri", "Botanicals", "BO Basics", "Beauty Face", "Biolage", 
    "Bahar Oya", "Biocure", "Boyy", "Bk Baron", "Bdellium Tools", "Beka", 
    "Borthe", "Bio Asia", "Bordallo Pinherio", "Black Rivet", "Benev", "Botanic", 
    "BLK DNM", "Baghashtag", "Beados", "Bands Atelier", "BlackFit", "Ballarini", 
    "Bergdorf Goodman", "Biocodex", "Botolips", "Brian Lichtenberg", "Byphasse", 
    "Be In A Good Mood", "Bras Gein", "Biyocha", "Bi'Sare", "Beçin", "Bıotak", 
    "Binacil", "Bak Kimya", "Bionem", "B-Selfie", "Beymen", "Burberry", "Braun", 
    "Butigo", "Boyner Fresh", "Baby Hope", "Barbour", "Banana Republic", "Ben10", 
    "Biev", "Bee Beauty", "Beymen Blender", "Blackspade", "Bad Bear", "Bauhaus", 
    "Bibaby", "Beats", "Black Pepper", "Butik 81", "Brandy Melville", "Bebecix", 
    "Baby Corner", "Buckhead", "Babyzen", "Buldan Concept", "Babycom", "Bio-Oil", 
    "Brother", "Bood", "BAQA", "BGN", "Brango", "Bebepan", "Bench", "Baby Mol", 
    "BabyLife", "Bebbemini", "Baymak", "Baby Fehn", "Bio Keratin Gold", 
    "Bolenn Hug", "Bezendam", "Be Style", "Biotherm", "Bimba Y Lola", "Brita", 
    "Beleduc", "Bioder", "Bare Minerals", "Bueno", "Berghoff", "Belis", "Beaba", 
    "Brion", "Baby Looney Tunes", "Badgley Mischka", "Blinde", "Berkemann", 
    "Brion Vega", "Babyjoy", "Bb Naked", "Baby Boutchou", "Baby Moov", 
    "Beach time", "BIOAQUA", "Bizzbee", "Benton", "Bionnex", "Bond", "Barrus", 
    "Blauer.", "Burcu Kids", "Birgül", "Braccialini", "Bio Vitals", "BioNike", 
    "Baylis and Harding", "Bemsa", "Boaonda", "Black Magic", "B2", "Bora Aksu", 
    "Bettina Barty", "B&W", "Bonviva", "Baraka Concept", "Barracuda", "Bcf", 
    "Boomerang", "Benro", "Bionatura", "Botania", "Biescarfs", "Biologique Recherche", 
    "Barlowa", "Brightwell", "Beetox", "Bridgedale", "Bilge Watch", "Beebag", 
    "Banu Bora", "Bioness", "Biobaby", "Beelink", "Bomb Size", "Baftec", 
    "Bellomix", "Biossance", "Biosarda", "BOR'Z", "Bod Man", "Bixbee", 
    "Bilpa Collection", "Beter", "Biogena", "Biomet", "Botkier", "Biolyn", 
    "Botaniksan", "Bioderminy", "Bioherbal", "Binsekiz", "Benetton", "Brillant", 
    "BG Baby", "Beta", "Broadway", "Biocera", "BAKIŞ BUTİK", "Bobux", "Buzz Bee", "Bio True", "Bexy", "Bogs", "Bomb Cosmetics",
    "Blugirl", "Beni Vie", "Baby Phat", "Bezuvo", "Billie Eilish Fragrances", "Browny", "Balerina", "Buckley",
    "Barielle", "Box Up", "Binnur Uyar", "Biricik", "Bioflex", "Beautees", "Bion", "Bayamoda", "Baldessarini",
    "BIÇAKÇIKÖY", "Biotama", "Baghera", "Brigad", "Beisya", "Bekatech", "Bennu Design Jewelry", "Burn Free",
    "Batya Kebudi", "Bestoclass", "Bite Beauty", "B-Rich", "Bizu", "Beauty Tapes", "Baypack", "Bimbi Dreams",
    "Bio Store", "Beward", "Bioscha", "Biosilk", "Baskistan", "Bronte & Tallulah", "Bebesounds", "Biopoint",
    "Beyjet", "Biourban", "Biocreme", "c canbebe", "clariss", "cherry capretto", "cilenti", "cumlaude lab",
    "C Camper", "Colin's", "Chanel", "Chima", "Chakra", "Clinique", "Cream&Rouge", "Cazador", "Cybex",
    "Catch", "Cengiz Abazoglu", "Cengiz Pakel", "Cengiz Aktürk", "Chiara Ferragni", "Cecile", "Clementoni",
    "Cosrx", "Claire's", "Cerruti", "Carmin Baby", "Ceylan", "Coccinelle", "Cabani", "Carvela", "Cemil İpekçi",
    "Criss Cross", "Cottonhill", "Cemile", "Ciccim", "Cellular Line", "Catimini Paris", "Crea Home", "Carmina",
    "Chrome Hearts", "Catherines", "Canali", "Color'S", "Christian Breton", "Clover Canyon", "Carven",
    "Cave Club", "Calico", "Cmt", "Colin Stuart", "Calzature Paoul", "Calivita", "Crivit", "Capicade", "C&City",
    "Cynthia Rowley", "Caso Design", "Cashmere in Love", "Conti", "Ceyyiz", "COCO BELLA", "Cable&Gauge",
    "Crokid", "Carlos Miele", "Capelli of New York", "Clubman", "Coloplast", "Clean Rose", "Castorland",
    "Clarisonic", "Cuddly Paws", "Codello", "Catto&Catto", "Cenex", "Chrissie Morris", "Cygne Noir", "Charriol",
    "Casole", "Chap Stick", "Chase&Chloe", "Charlotte Hornets", "Crescent Co Nail'S", "Comedo Suction",
    "Clinera", "Callion", "Corto Moltedo", "Charming Nails", "Clrdetıl", "Converse", "Chicco", "Colin’S",
    "Champion", "Coach", "C.C.C. Büyük Beden", "Clarks", "Citizen", "Christian Louboutin", "Cichlid",
    "Cambridge University Press", "COSMED", "Cassiope", "Castore", "ChatonDor", "Contigo", "Creed", "Caroll",
    "Chekich", "Chopard", "Celal Gültekin", "Chilai Home", "Costes", "Casy’s By Gossyp", "COLORSHERE", "Carmex",
    "Cort Guitars", "Cashmere Collection", "B Cactus Jack", "Chip Pepper", "Chloe Love", "Comedones",
    "Charlotte Olympia", "Cortobert", "Cult Gaia", "Current/Elliott", "Cosori", "Crozwise", "Capps", "Cn-g",
    "Contact's", "Cicimod", "Cat Power", "Cuba", "Cihan Nacar", "Cottonland", "Castaner", "Crs", "Crazy Monkey",
    "Coppertone", "Ceradolin", "Courreges", "Church's", "Colour Specialist", "Clatronic", "Christopher Kane",
    "Carita paris", "CockCon", "Caractere", "Cultural Heritage", "Caricia Home", "Chiruca", "Cake Beauty",
    "Che che", "Changshan", "Cedric Charlier", "Chillax", "Capri Watch", "Chassmir", "Charlotte Simone",
    "Cauli Flower", "Chapice", "Clordetil", "Corey Lynn Calter", "Codesec", "C Hivey Beauty", "C'est ta vie",
    "Chondurax", "Cleanclear", "Charmvit", "Cosmovia", "CSHOME DESIGN", "Crocs", "C&A", "Christian Dior",
    "Cat", "Ceyo", "Celine", "Ccs", "Sarar", "Cool & Sexy", "Chloé", "Creative", "Cicciobello", "Cotton Box",
    "Concord", "Chilia", "Cath Kidston", "Case Logic", "Cem City", "Carrera", "Coolermaster", "Camp David",
    "Collagen", "CAMPIONE", "Calliope", "Clear", "Cole Haan", "Ceylinn", "Curious & Genius", "Corneliani",
    "Crazy8", "Caruza Kuyumculuk", "Cool Club", "China", "Cotton Candy LA.", "Coleman", "Casette", "Claris",
    "CARPE OMNIA", "Carma Concept", "Coolway", "Colleen", "Castrol", "Caesar David", "Carlo Pazolini", "Chi",
    "Carina Duek", "Cabotine", "City Life", "Coresatin", "Cherry Baby", "Cossy By Aqua", "Chooze", "Cougar",
    "Charles David", "Callisto", "Commfyy", "Cremo", "Cemilefendi", "Cordless", "Cmk", "Cin Bebe", "Clu", "D'Acquasparta", "Doğaci", "Dreser 35", "Dc Cars", "Develop", "Dermo Soft", "Depilissima", "Dobermans Aggressive",
    "Dr. Tan", "Deo Cure", "D'Sign", "DV by Dolce Vita", "Dr. Carob", "Dc Pink Minnie", "Dp Saç Bakımı", "Dermness",
    "Dermadoctor", "Decathlon", "Diesel", "Doğan Kitap", "Derishow", "Delta", "Die-Cast", "Delonghi", "Dynamic",
    "Dr. Brown's", "Diadermine", "Domyos", "Dr. Clinic", "DIAMOND", "Duracell", "Derique", "Dreamon Gelinlik",
    "Darkwood", "Dark Seer", "Dergah Yayınları", "Doqu Home", "Dahlia Bianca", "Dermacol", "Ducray", "David Walker",
    "Drunk Elephant", "Defne", "Daf", "Duo", "Dündar Çorap", "Dermaroller", "Dükkan Moda", "Donella", "Daniele Alessandrini",
    "Drago Baby", "Donna Ricco", "Dr. Marten's", "Diverso", "Dry Divage", "Dermaplus Md", "Dex", "Dobe", "Deniz Sport",
    "Doguş", "Cabakcor", "Doğal Sepet", "Desisan", "DEFECTED", "Deriza", "Dino", "Disar", "Duvetica", "Dr. Brandt",
    "Dukaddo", "D-Paris", "Didriksons1913", "David’s Bridal", "Dermo White", "Deva", "DIRK BIKKEMBERGS", "Derican",
    "Doax", "Dijitsu", "Destina", "David Yurman", "Dannijo", "Detan", "Dr. Irena Eris", "Dermacover", "Der Schöne",
    "Drome", "Dhd", "Dr. Plante", "Dexpantonne", "Dr. Solberg", "Dc Alice", "Dermosingold", "Dermo Deva", "Dr.Igienico",
    "D'Orsay", "Derimod", "Divarese", "DKNY", "Damat", "Dsquared2", "Davet Çok Elbisem Yok", "David Jones", "Diadora",
    "Dexter", "Domingo Yayınevi", "Dji", "Doreanse", "Doremi", "Doona", "Di̇sney", "Diane Von Furstenberg", "Dalin",
    "Diamond", "Dolce", "Doğu Batı Yayınları", "Diana Monroe", "Daily Paper", "Day Night", "Dolce Vita Halı", "Diva Home",
    "Delux", "Dedalus Yayınevi", "Du Pareil au Même", "Doğuş Halı", "DeeZee", "Dermadolin", "Dogiye", "Defunc", "Dr. Murad",
    "Derek Lam", "Deriderim", "David Beckham", "DeepSea", "Dr Gusto", "Dr Teknolog", "Deriva", "Dermatix", "Destek",
    "Delice", "Dressing With Love", "Delerium", "Dosimira", "Doglife", "Dermoday", "Dermapolin", "Daisee", "Dc Mickey Clubhouse",
    "Dermafirm", "Dc Frozen", "DÄV", "Dehre Lokman", "Dara Sabun", "Doğana", "Davbir", "Dr. Wipe", "Diştem", "Durucopy",
    "Druide", "Dermalogica", "Donna Karan", "Dilek Hanif", "Dice Kayek", "Dore", "Divanni", "Densmood", "David Rossi",
    "Doc McStuffins", "Deniz Berdan", "Dyn", "Duaderm", "D&S CRAFT STUDIO", "Due brand", "DAIMON", "Dropland", "Diva Camille",
    "Dahua", "Dekoreko", "Dorya", "Deus Ex Machina", "Deri Effect", "Diplomat", "Duyu Market", "Delia", "Dr. Ea", "Desitin",
    "Derby", "Dream Bag", "Down Under", "Doğal Ambar", "Dünyadan Hediyeler", "Dyrberg Kern", "Diva Cat", "Dead Sea", "Daikin",
    "Dio Armati", "Dr.Bio", "D&A", "İzland Shoes", "Decubal", "Doğalteks", "Dionesse", "Dc Princess", "Dalia MacPhee",
    "Dequell", "Dr. Scheller", "Doodle Pants", "Dio Plus", "Dr. Förster", "Dynacom", "Demert", "Dr N Gold", "Dr. Rena",
    "Dr.Crazy", "Daliflor", "Doctor Herbal", "Dermo Bella", "Duruink", "Derrick", "Dr.Page", "Dr. Hiyo", "Dc Fairies",
    "Dr. Sugarm", "DİSNEY", "Dockers", "D'S Damat", "Destek Yayınları", "Denim&Co", "Dell", "Dickies", "Dex Kitap",
    "DSN", "Deripabuç", "DCEY", "Deerma", "Dolce&Gabanna", "Diane Von Furstenberg", "Dalin", "Diamond", "Dolce",
    "Doğu Batı Yayınları", "Diana Monroe", "Daily Paper", "Day Night", "Dolce Vita Halı", "Diva Home", "Delux",
    "Ded"
]