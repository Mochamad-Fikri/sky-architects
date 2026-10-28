export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  focus: string[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    number: "01",
    title: "Contextual Design",
    description:
      "Architecture begins on site, not at the desk. We study sunlight, topography, wind, and local heritage to create structures that integrate naturally with their environment.",
    focus: ["Site Morphology", "Climate Responsive", "Cultural Integration"],
  },
  {
    number: "02",
    title: "Clarity & Simplicity",
    description:
      "We strip away ornamental excess in favor of clear volumetric forms, disciplined proportions, and purposeful daylighting that allows the architecture to endure over time.",
    focus: ["Volumetric Clarity", "Daylight Studies", "Spatial Sequences"],
  },
  {
    number: "03",
    title: "Material Honesty",
    description:
      "We select materials that age with dignity: raw concrete, honed stone, unlacquered metals, and regional timbers that celebrate craft and tactile substance.",
    focus: ["Tactile Substance", "Regional Sourcing", "Aging Gracefully"],
  },
  {
    number: "04",
    title: "Human-Centered Design",
    description:
      "Beyond visual impact, true architecture is felt in daily rituals: the quiet acoustic transition of a corridor, the texture of a threshold, and the calm of a living volume.",
    focus: ["Acoustic Balance", "Circulation Ergonomics", "Sensory Comfort"],
  },
];
