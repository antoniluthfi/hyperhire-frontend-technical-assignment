import { headers } from "next/headers";
import { HomeTemplate } from "@/components/templates";

export default async function HomePage() {
  const h = headers();
  const host = h.get("host") || "localhost:3000";
  const proto = h.get("x-forwarded-proto") || "http";
  const baseUrl = `${proto}://${host}`;

  const get = (path: string) => {
    return fetch(`${baseUrl}${path}`, { cache: "no-store" }).then((r) =>
      r.json(),
    );
  };

  const [candidates, categories, services, contact] = await Promise.all([
    get("/api/candidates"),
    get("/api/categories"),
    get("/api/services"),
    get("/api/contact"),
  ]);

  return (
    <HomeTemplate
      candidates={candidates}
      categories={categories}
      services={services}
      contact={contact}
    />
  );
}
