"use client";

import ChartSection from "@/components/dashboard/ChartSection";
import DynamicTable from "@/components/dashboard/DashboardTable";
import SummaryCards from "@/components/dashboard/SummaryCards";
import { AGENTS } from "@/utils/constants";


export default function DashboardPage({ params }) {
  const { id } = params;
  const agent = AGENTS.find((agent) => agent.id === id);

  if (!agent) {
    return <p>Agent not found</p>;
  }

  const charts = agent.visualizations.filter((visualization) => visualization.type !== "table");
  const tables = agent.visualizations.filter((visualization) => visualization.type === "table");

  return (
    <section className='p-4 max-w-[1200px] mx-auto'>
      <SummaryCards />
      <ChartSection charts={charts} />
      <div className='grid gap-4 my-4'>
        {tables.map((table) => (
          <div key={table.id} className='w-full p-2'>
            <DynamicTable data={table.data} />
          </div>
        ))}
      </div>
    </section>
  );
}

