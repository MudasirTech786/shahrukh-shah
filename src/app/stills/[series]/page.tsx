import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/Gallery/Gallery";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { getStillSeries, stillSeries, stillsBySeries } from "@/data/stills";

interface StillSeriesPageProps {
  params: Promise<{ series: string }>;
}

export function generateStaticParams() {
  return stillSeries.map((series) => ({ series: series.slug }));
}

export async function generateMetadata({ params }: StillSeriesPageProps): Promise<Metadata> {
  const { series } = await params;
  const seriesData = getStillSeries(series);

  if (!seriesData) {
    return {};
  }

  return {
    title: seriesData.title,
    description: seriesData.description,
  };
}

export default async function StillSeriesPage({ params }: StillSeriesPageProps) {
  const { series } = await params;
  const seriesData = getStillSeries(series);

  if (!seriesData) {
    notFound();
  }

  return (
    <div className="pt-[35px]">
      <PageHeader
        title={seriesData.title}
        intro={seriesData.description}
        backHref="/stills"
        backLabel="All Stills"
        className="mb-8 px-2.5 sm:mb-10 sm:px-5 xl:px-6"
      />
      <Gallery
        photos={stillsBySeries(seriesData.slug)}
        eagerCount={4}
        className="pb-4"
      />
    </div>
  );
}
