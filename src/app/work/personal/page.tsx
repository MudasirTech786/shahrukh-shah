import type { Metadata } from "next";
import { WorkCategoryView } from "@/components/WorkCategoryView/WorkCategoryView";
import { workCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Personal",
  description:
    "Self-funded photographs and small films by Shahrukh Shah — the journal between the jobs, shot without a brief.",
};

export default function PersonalWorkPage() {
  const category = workCategories.find((item) => item.slug === "personal")!;
  return <WorkCategoryView category={category} />;
}
