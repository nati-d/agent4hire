"use client";

import React, { useState, useEffect } from "react";
import fetchAgents from "@/api/agents_api";
import AgentCard from "@/components/AgentCard";
import SearchInterface from "@/components/SearchInterface";
import Pagination from "@/components/Pagination";
import AgentSkeleton from "@/components/AgentSkeleton";
import NoDataIllustration from "@/components/Shared/NoDataIllustration";

const AGENTS_PER_PAGE = 12;

interface Agent {
  id: string;
  role: string;
  description: {
    user_persona: string;
    specific_needs: string[];
  };
  feedbacks: string[];
  kpis: {
    kpi: string;
    expected_value: string;
  }[];
  available_apis: string[];
}

const MarketplacePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadAgents = async () => {
      setLoading(true);
      setError("");
      try {
        const fetchedAgents: Agent[] = await fetchAgents();
        setAgents(fetchedAgents);
      } catch (err) {
        setError("Failed to load agents. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedAgents = agents.slice((currentPage - 1) * AGENTS_PER_PAGE, currentPage * AGENTS_PER_PAGE);

  return (
    <section className="container">
      <SearchInterface />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 justify-center">
        {loading
          ? Array.from({ length: AGENTS_PER_PAGE }).map((_, index) => <AgentSkeleton key={index} />)
          : displayedAgents.map((agent) => (
              <AgentCard
                key={agent.id}
                role={agent.role}
                userPersona={agent.description.user_persona}
                availableApis={agent.available_apis}
                rating={4}
              />
            ))}
      </div>
      {error && (
        <NoDataIllustration
          type="Agent"
          message={error}
        //   onActionClick={() => window.location.reload()}
        //   actionLabel="Retry"
        />
      )}
      {!loading && !error && agents.length === 0 && (
        <NoDataIllustration
          type="Agent"
          message="No agents available at the moment."
        //   actionLabel="Add Agent"
        //   onActionClick={() => console.log("Redirecting to agent creation...")}
        />
      )}
      {!loading && !error && agents.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(agents.length / AGENTS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default MarketplacePage;
