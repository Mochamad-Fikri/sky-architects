import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default async function CurrentYear() {
  const year = await getCurrentYear();
  return <>{year}</>;
}