export interface ClientPartner {
  name: string;
  type: string;
  city: string;
}

export const clientsData: ClientPartner[] = [
  { name: "Nordic Heritage Fund", type: "Public Institution", city: "Oslo" },
  { name: "Luminor Lighting", type: "Craft Collaborator", city: "Milan" },
  { name: "Studio Verde Landscape", type: "Environmental Design", city: "Lisbon" },
  { name: "Mediterranean Habitat Trust", type: "Cultural Foundation", city: "Marseille" },
  { name: "Atelier Tessuto", type: "Material Specialist", city: "Copenhagen" },
  { name: "Civic Space Agency", type: "Urban Governance", city: "Barcelona" },
];
