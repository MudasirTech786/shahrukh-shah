import type { Metadata } from "next";
import { WorkCategoryView } from "@/components/WorkCategoryView/WorkCategoryView";
import { workCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Commercial",
  description:
    "Cinematic campaigns photographed by Shahrukh Shah for BMW, Nike, PlayStation, Porsche, Ubisoft and more.",
};

export default function CommercialWorkPage() {
  const category = workCategories.find((item) => item.slug === "commercial")!;
  return <WorkCategoryView category={category} />;
}
