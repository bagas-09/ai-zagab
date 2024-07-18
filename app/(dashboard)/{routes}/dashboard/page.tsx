"use client";

import { MessageSquare } from "lucide-react";

import { Card } from "@/components/ui/card";

const tools = [{
  label: "Conversation",
  icon: MessageSquare,
  color: "text-violet-500",
  bgColor: "bg-violet-500/10",
  href: "/conversation"
}]

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg-px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          key={tool.href}
          className="p-4"
          >

          </Card>
        ))}

      </div>
    </div>
  );
}

export default DashboardPage;