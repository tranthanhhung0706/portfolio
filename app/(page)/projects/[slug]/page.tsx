import { notFound } from "next/navigation";

import { PROJECTS, getProjectBySlug } from "@/modules/project/constants/data";
import { ProjectDetailView } from "@/modules/project/ui/views/project-detail-view";

export function generateStaticParams() {
   return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;
   const project = getProjectBySlug(slug);

   return {
      title: project ? `${project.title} — Hung Tran` : "Project not found",
   };
}

export default async function ProjectDetailPage({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;
   const project = getProjectBySlug(slug);

   if (!project) {
      notFound();
   }

   return <ProjectDetailView project={project} />;
}
