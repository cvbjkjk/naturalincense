export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  region: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "~2000 BCE",
    title: "Ancient China",
    subtitle: "The Origins of Incense",
    description:
      "The earliest recorded use of aromatic materials in China, where herbs and woods were burned in religious ceremonies and ancestral rites. Shennong Ben Cao Jing, the earliest pharmacopoeia, documents over 365 medicinal plants including aromatic substances used for both healing and spiritual purification.",
    region: "China",
  },
  {
    year: "618–907 CE",
    title: "Tang Dynasty",
    subtitle: "The Golden Age of Aromatics",
    description:
      "Incense flourished as a high art form during the Tang Dynasty. Trade along the Silk Road brought agarwood, sandalwood, and other exotic aromatics into China. Incense became integral to court life, poetry, and Buddhist practices. Elaborate incense burners and tools were crafted from gold, silver, and jade, reflecting the profound cultural value placed on fragrance.",
    region: "China",
  },
  {
    year: "960–1279 CE",
    title: "Song Dynasty",
    subtitle: "Incense as Intellectual Pursuit",
    description:
      "The Song Dynasty marked the pinnacle of Chinese incense culture. Scholars elevated incense appreciation to an intellectual discipline alongside tea ceremony, flower arranging, and calligraphy — the Four Arts. He Xiang (合香), the art of blending incense, was codified. Detailed treatises on incense materials and their properties were written by scholar-officials.",
    region: "China",
  },
  {
    year: "~600 CE",
    title: "Japanese Kōdō",
    subtitle: "The Way of Fragrance",
    description:
      "Buddhist monks introduced incense to Japan from China. Over centuries, it evolved into Kōdō (香道), the Way of Fragrance — one of Japan's three classical arts alongside Kadō (flower arranging) and Sadō (tea ceremony). Kōdō developed its own sophisticated vocabulary, etiquette, and games, elevating incense appreciation to a profound aesthetic and spiritual discipline.",
    region: "Japan",
  },
  {
    year: "~200 BCE–1500 CE",
    title: "Silk Road Trade",
    subtitle: "Aromatic Exchange Across Continents",
    description:
      "The Incense Route and Silk Road connected East and West through the trade of aromatic materials. Frankincense and myrrh traveled from Arabia and Africa to China, while agarwood and camphor moved westward. This exchange of fragrant materials paralleled the exchange of ideas, technologies, and spiritual practices between civilizations.",
    region: "Eurasia",
  },
  {
    year: "2000–Present",
    title: "Modern Research",
    subtitle: "Science Meets Tradition",
    description:
      "Contemporary scientific research is validating what traditional practices have known for millennia — that natural aromatic compounds possess genuine therapeutic properties. Studies on agarwood essential oils, sandalwood's effects on cognitive function, and frankincense's anti-inflammatory compounds are opening new frontiers in aromachology, bridging ancient wisdom with modern science.",
    region: "Global",
  },
];
