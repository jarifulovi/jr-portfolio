"use client";

import React from "react";
import { Section } from "./Section";
import { FeaturedProjectSpotlight } from "./FeaturedProjectSpotlight";
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
      </Section>
    </div>
  );
}