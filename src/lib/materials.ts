export interface Material {
  id: string;
  name: string;
  latin: string;
  origin: string;
  aroma: string;
  description: string;
  history: string;
  traditionalUses: string;
  botanicalInfo: string;
  image: string;
  color: string;
}

export const materials: Material[] = [
  {
    id: "agarwood",
    name: "Agarwood",
    latin: "Aquilaria sinensis / malaccensis",
    origin: "Southeast Asia — Vietnam, Laos, Cambodia, Indonesia",
    aroma: "Complex, woody, sweet, balsamic with subtle fruity and medicinal notes. Deeply grounding.",
    description:
      "Agarwood, also known as oud or aloeswood, is the most precious incense material in the world. It forms when an Aquilaria tree becomes infected with a specific mold (Phialophora parasitica), triggering a dark, aromatic resin as a defense mechanism. This resin-infused heartwood has been treasured for millennia across Eastern cultures for its unparalleled fragrance depth.",
    history:
      "Agarwood has been traded for over 2,000 years, mentioned in the earliest Chinese Materia Medica texts. During the Tang Dynasty, it was imported along the Maritime Silk Road and became essential in Buddhist, Hindu, and Islamic spiritual practices. In Japan, it is the central material of Kōdō — the Way of Fragrance — where pieces are evaluated with the same reverence as fine tea.",
    traditionalUses:
      "Used in incense ceremonies, meditation practices, traditional Chinese medicine (as a digestive and sedative), perfume making, and spiritual purification rituals across East and Southeast Asia.",
    botanicalInfo:
      "Aquilaria trees are evergreen, growing 20-40 meters tall in tropical rainforests. Only 2-10% of wild trees naturally produce the resinous agarwood. The resin formation can take decades, making wild agarwood extraordinarily rare and valuable — often exceeding gold in price.",
    image: "/images/agarwood.jpg",
    color: "#3D2B1F",
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    latin: "Santalum album",
    origin: "Southern India, Sri Lanka, Western Australia",
    aroma: "Creamy, soft, sweet, balsamic with subtle spice. Warm and meditative.",
    description:
      "Sandalwood is one of the oldest and most treasured incense materials, prized for its distinctive sweet, creamy fragrance. Unlike agarwood, sandalwood's aroma comes from the heartwood itself, rich in alpha-santalol oils. Indian sandalwood (Santalum album) is considered the finest variety, with a complexity that unfolds in layers as it burns.",
    history:
      "Sandalwood has been used for over 4,000 years in Indian spiritual traditions. It appears in the Vedas and is integral to Hindu, Buddhist, and Jain rituals. In Chinese incense culture, sandalwood was favored by scholars and monks for its calming properties. The Japanese Kōdō tradition values aged sandalwood for its refined, subtle fragrance.",
    traditionalUses:
      "Meditation and prayer, incense sticks and powders, traditional medicine (antiseptic, anti-inflammatory), temple carvings, perfume industry, and cosmetic applications.",
    botanicalInfo:
      "Santalum album is a small hemiparasitic tree that requires host plants to survive. The heartwood develops its characteristic fragrance only after 15-20 years of growth. The tree's roots attach to neighboring plants, drawing nutrients while contributing its own photosynthesis.",
    image: "/images/sandalwood.jpg",
    color: "#C4A882",
  },
  {
    id: "frankincense",
    name: "Frankincense",
    latin: "Boswellia sacra / carterii",
    origin: "Somalia, Oman, Yemen, Ethiopia",
    aroma: "Citrus, pine, woody with warm, balsamic undertones. Bright yet contemplative.",
    description:
      "Frankincense is an aromatic resin harvested from Boswellia trees. When the bark is cut, a milky sap exudes and hardens into translucent golden tears. The resin has been revered for millennia for its distinctive bright, citrusy, pine-like fragrance and its profound meditative qualities.",
    history:
      "Frankincense was among the most valuable commodities of the ancient world, traded along the Incense Route from Southern Arabia to the Mediterranean. It was used extensively in ancient Egyptian temples, Roman religious ceremonies, and appears in all three Abrahamic traditions. In Traditional Chinese Medicine, it is known as ru xiang (乳香) and used for its warming, blood-moving properties.",
    traditionalUses:
      "Religious and spiritual ceremonies across multiple traditions, meditation aid, traditional medicine (anti-inflammatory, analgesic), perfume making, and skincare preparations.",
    botanicalInfo:
      "Boswellia trees grow in harsh, arid conditions, often emerging from solid rock. The resin is harvested by making incisions in the bark, allowing the sap to drip and harden over 2-4 weeks. The highest quality resin — 'Silver' or 'Hojari' — comes from Oman.",
    image: "/images/frankincense.jpg",
    color: "#D4A76A",
  },
  {
    id: "myrrh",
    name: "Myrrh",
    latin: "Commiphora myrrha",
    origin: "Somalia, Ethiopia, Yemen, Saudi Arabia",
    aroma: "Earthy, bitter, warm, balsamic with resinous sweetness. Deep and complex.",
    description:
      "Myrrh is a resinous gum harvested from Commiphora trees, producing a warm, earthy, slightly bitter fragrance that deepens with age. Its aroma is more complex and less sweet than frankincense, with notes of wood, spice, and a subtle medicinal quality that has captivated cultures for millennia.",
    history:
      "Myrrh has been traded for over 5,000 years, with records dating to ancient Egyptian expeditions to Punt. It was used in Egyptian embalming practices, Greek temples, and Roman funerals. In Traditional Chinese Medicine, myrrh (mo yao) is paired with frankincense for treating trauma and circulatory issues.",
    traditionalUses:
      "Embalming and funerary practices, religious ceremonies, traditional medicine (antiseptic, anti-inflammatory), perfume industry, and incense compounding.",
    botanicalInfo:
      "Commiphora myrrha is a small, thorny tree or shrub native to arid regions. When the bark is cut, the tree exudes a yellowish oleo-resin that hardens into reddish-brown tears. The harvesting process has remained unchanged for millennia.",
    image: "/images/myrrh.jpg",
    color: "#8B4513",
  },
  {
    id: "clove",
    name: "Clove",
    latin: "Syzygium aromaticum",
    origin: "Maluku Islands (Spice Islands), Indonesia",
    aroma: "Warm, sweet, pungent with distinct spice and floral undertones. Stimulating and comforting.",
    description:
      "Clove is the dried flower bud of the Syzygium aromaticum tree, prized in incense for its warm, pungent, slightly sweet fragrance. Its high eugenol content gives it a distinctive aromatic profile that blends beautifully with woods and resins, adding brightness and complexity to incense blends.",
    history:
      "Clove's history is intertwined with the Spice Trade that shaped global commerce for centuries. Native to the Maluku Islands, clove was traded to China as early as the Han Dynasty, where it was used as a breath freshener, medicine, and incense ingredient. During the Song Dynasty, it became an essential component of scholar incense blends.",
    traditionalUses:
      "Incense compounding, traditional medicine (anesthetic, antiseptic, digestive), spice and culinary applications, perfume making, and aromatherapy.",
    botanicalInfo:
      "The clove tree is an evergreen that grows 8-12 meters tall. The flower buds are harvested when they turn from green to pink, then sun-dried until they become dark brown. A single tree can produce up to 34 kg of dried cloves annually.",
    image: "/images/clove.jpg",
    color: "#6B3A2A",
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    latin: "Cinnamomum verum / cassia",
    origin: "Sri Lanka, Southern India, Southern China",
    aroma: "Sweet, warm, woody with distinct spicy notes. Soothing and elevating.",
    description:
      "Cinnamon is the inner bark of Cinnamomum trees, valued in incense for its sweet, warm, uplifting fragrance. True cinnamon (Cinnamomum verum) from Sri Lanka is more delicate and complex than cassia, with subtle floral and citrus notes underlying its characteristic warmth.",
    history:
      "Cinnamon was one of the most prized spices of the ancient world, mentioned in Chinese texts as early as 2700 BCE and in the Hebrew Bible. It was traded along the Silk Road and was a key ingredient in Chinese incense blends during the Tang and Song Dynasties, prized for its warming energy.",
    traditionalUses:
      "Incense and ritual incense blends, traditional medicine (warming, circulatory stimulant), culinary seasoning, and perfume making.",
    botanicalInfo:
      "Cinnamomum verum is a small evergreen tree that grows 10-15 meters tall. The bark is harvested during the rainy season when it peels most easily. The outer bark is scraped away, and the inner bark is carefully removed in long strips that curl into quills as they dry.",
    image: "/images/cinnamon.jpg",
    color: "#A0522D",
  },
  {
    id: "patchouli",
    name: "Patchouli",
    latin: "Pogostemon cablin",
    origin: "Southeast Asia — Philippines, Indonesia, India",
    aroma: "Earthy, woody, musky, sweet with balsamic undertones. Grounding and meditative.",
    description:
      "Patchouli is a bushy herb from the mint family whose leaves are fermented and distilled to produce its distinctive, complex fragrance. The aroma is deeply earthy and woody with a characteristic musky-sweet richness that improves with age, making it one of the most grounding incense materials.",
    history:
      "Patchouli was widely used in traditional Asian medicine and incense for centuries. In 18th and 19th century Europe, patchouli-scented Indian shawls were highly fashionable, and the fragrance became associated with luxury and exoticism. In Traditional Chinese Medicine, it is used to transform dampness and harmonize the digestive system.",
    traditionalUses:
      "Incense blending (often as a base note), traditional medicine (digestive aid, antifungal), perfume making, insect repellent, and aromatherapy for grounding and centering.",
    botanicalInfo:
      "Pogostemon cablin is a perennial herb growing 60-90 cm tall, cultivated primarily in Southeast Asia. The leaves are harvested and partially dried, then bundled to ferment before steam distillation. The oil yield increases with proper fermentation, developing the characteristic rich, sweet-woody notes.",
    image: "/images/patchouli.jpg",
    color: "#4A5D23",
  },
];
