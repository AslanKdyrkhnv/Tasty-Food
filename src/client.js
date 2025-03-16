import { createClient } from "@sanity/client";

export default createClient({
  projectId: "x3oy8job",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
