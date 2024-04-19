import { defineConfig  } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas/index";
import { visionTool } from "@sanity/vision";

export const config = defineConfig({
  projectId: "vylvquax",
  dataset: "production",
  title: "KSSS history website",
  apiVersion: "2024-04-15",
  basePath: "/admin",
  plugins: [(structureTool()), visionTool()],
  schema: { types: schemas }
})
