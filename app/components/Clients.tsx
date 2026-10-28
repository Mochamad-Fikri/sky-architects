import { clientsData } from "@/data/clients";

export default function Clients() {
  return (
    <section className="container-site section border-t border-border">
      <div className="grid-site items-baseline">
        <div className="col-span-4 md:col-span-4 lg:col-span-4">
          <p className="type-label text-muted">Collaborations</p>
          <h2 className="type-h3 mt-2">
            Selected clients, artisans, and institutions
          </h2>
        </div>

        <div className="col-span-4 mt-8 md:col-span-4 md:col-start-5 md:mt-0 lg:col-span-8 lg:col-start-5">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientsData.map((client) => (
              <div key={client.name} className="flex flex-col border-t border-border pt-4">
                <span className="type-body font-medium">{client.name}</span>
                <span className="type-small text-muted mt-1">{client.type}</span>
                <span className="type-small text-muted">{client.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
