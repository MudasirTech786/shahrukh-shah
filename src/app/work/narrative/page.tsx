import type { Metadata } from "next";
import { WorkCategoryView } from "@/components/WorkCategoryView/WorkCategoryView";
import { workCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Narrative",
  description:
    "Feature films and shorts photographed by Shahrukh Shah — quiet, lived-in frames built on available light and patient takes.",
};

export default function NarrativeWorkPage() {
  const category = workCategories.find((item) => item.slug === "narrative")!;
  return <WorkCategoryView category={category} />;
}
