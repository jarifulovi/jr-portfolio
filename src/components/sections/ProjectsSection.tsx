"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { FeaturedProjectSpotlight } from "./FeaturedProjectSpotlight";
import { SecondaryProjectCard } from "./SecondaryProjectCard";
import { ApexFlowStepTimelineWidget, InboxThreadExtractionWidget } from "./ProjectShowcaseWidgets";

interface Project {
  title: string;
  tagline?: string;
  description: string;
  summary?: string;
  features?: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  impact?: string;
  status?: string;
  period?: string;
  featured?: boolean;
  image?: string;
}

const APEX_FLOW_CODE = `# apexflow_worker.py — Durable Step Checkpointing
from apex_flow_sdk import ApexFlowClient, WorkflowContext

client = ApexFlowClient(project_key="af_live_production")

@client.workflow(name="order_fulfillment")
async def fulfill_order(ctx: WorkflowContext, order_id: str):
    # Step 1: Charge customer (memoized on disk)
    charge = await ctx.step(
        "charge_card",
        lambda: payment_gateway.charge(order_id)
    )

    # Step 2: Provision inventory with transactional safety
    inventory = await ctx.step(
        "reserve_inventory",
        lambda: db.reserve_stock(order_id)
    )

    # Step 3: Trigger logistics dispatch
    return await ctx.step(
        "dispatch_order",
        lambda: logistics.dispatch(order_id, charge.id)
    )`;

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const apexFlow = projects.find((p) => p.title.toLowerCase().includes("apexflow")) || projects[0];
  const inboxOrchestrator = projects.find((p) => p.title.toLowerCase().includes("inboxorchestrator")) || projects[1];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-7xl px-6">
      <Section
        id="projects"
        eyebrow="Featured Engineering Work"
        title="Durable Systems & Workflow Engines"
        description="Deep-dive architectural case studies into distributed workflow orchestration, background worker daemons, and semantic intelligence pipelines."
      >
        <div className="space-y-4">
          {/* Project 01: ApexFlow Spotlight */}
          {apexFlow && (
            <FeaturedProjectSpotlight
              index="01"
              category="DISTRIBUTED WORKFLOW RUNTIME"
              project={apexFlow}
              accent="cyan"
              urlBarText="apexflow.cloud/runs/confidential_payroll_pipeline"
              customWidget={<ApexFlowStepTimelineWidget />}
              codeSnippet={{
                filename: "apexflow_workflow.py",
                code: APEX_FLOW_CODE,
                tabLabel: "Python SDK",
              }}
            />
          )}

          {/* Project 02: InboxOrchestrator AI Spotlight (Full-Stack Platform, No SDK) */}
          {inboxOrchestrator && (
            <FeaturedProjectSpotlight
              index="02"
              category="AUTONOMOUS WORKFLOW & SEMANTIC AI"
              project={inboxOrchestrator}
              accent="emerald"
              urlBarText="inboxorchestrator.ai/thread/soc2_compliance"
              customWidget={<InboxThreadExtractionWidget />}
            />
          )}
        </div>

        {/* Other Notable Work Section */}
        {otherProjects.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-14">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  ADDITIONAL CODEBASES & SYSTEMS
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                  Other Notable Work
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                  Operational backend systems, real-time collaboration engines, Spring Boot layered architectures, and algorithmic game AI.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {otherProjects.map((project) => (
                <SecondaryProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  highlights={project.highlights}
                  stack={project.stack}
                  repoUrl={project.repoUrl}
                  liveUrl={project.liveUrl}
                  status={project.status}
                />
              ))}
            </motion.div>
          </div>
        )}
      </Section>
    </div>
  );
}