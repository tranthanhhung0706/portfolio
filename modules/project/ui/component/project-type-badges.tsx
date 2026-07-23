import { Briefcase, PlayCircle, ShoppingBag, Sparkles } from "lucide-react";

import { PROJECT_TYPE_LABELS, type ProjectType } from "@/modules/project/constants/data";

const TAG_STYLES: Record<ProjectType, string> = {
   company: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
   personal: "border-purple-400/30 bg-purple-400/10 text-purple-300",
   demo: "border-amber-400/30 bg-amber-400/10 text-amber-300",
   shopify: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

const TAG_ICONS: Record<ProjectType, typeof Briefcase> = {
   company: Briefcase,
   personal: Sparkles,
   demo: PlayCircle,
   shopify: ShoppingBag,
};

type Props = {
   type: ProjectType[];
};

export const ProjectTypeBadges = ({ type }: Props) => {
   return (
      <div className="flex flex-wrap items-center gap-1.5">
         {type.map((tag) => {
            const Icon = TAG_ICONS[tag];
            return (
               <span
                  key={tag}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${TAG_STYLES[tag]}`}
               >
                  <Icon className="h-3 w-3" />
                  {PROJECT_TYPE_LABELS[tag]}
               </span>
            );
         })}
      </div>
   );
};
