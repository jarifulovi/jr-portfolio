"use client";

import React, { useState, useRef, useEffect } from "react";

/**
 * 100% Faithful Native Showcase Widget for ApexFlow
 * Replicates the exact real data and UI from `apex-flow-steps-page.png`:
 * - Workflow: confidential_payroll_pipeline
 * - Priority: P0 | Duration: 41.3s | 3 Steps | Completed
 * - Step 1: ingest_employee_pii (4.7s)
 * - Step 2: calculate_disbursement (4.8s)
 * - Step 3: archive_bulk_audit_vault (10.3s) with R2 offload
 */
export const ApexFlowStepTimelineWidget: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);
  const [isReplaying, setIsReplaying] = useState<boolean>(false);
  const [completedStepIds, setCompletedStepIds] = useState<number[]>([1, 2, 3]);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timerRefs.current.forEach(clearTimeout);
    };
  }, []);

  const steps = [
    {
      id: 1,
      name: "ingest_employee_pii",
      duration: "4.7s",
      attempts: "1/3",
      status: "Success",
      payloadOffloaded: false,
      detail: "Client-side AES-256-GCM encrypted payload decrypted via Web Crypto API.",
    },
    {
      id: 2,
      name: "calculate_disbursement",
      duration: "4.8s",
      attempts: "1/3",
      status: "Success",
      payloadOffloaded: false,
      detail: "Step memoized to PostgreSQL; safe against worker restart without recalculation.",
    },
    {
      id: 3,
      name: "archive_bulk_audit_vault",
      duration: "10.3s",
      attempts: "1/3",
      status: "Success",
      payloadOffloaded: true,
      detail: "Payload >250KB automatically offloaded via lightweight pointer reference.",
    },
  ];

  const handleReplay = () => {
    if (isReplaying) return;
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
    setIsReplaying(true);
    setCompletedStepIds([]);
    setActiveStep(1);

    const t1 = setTimeout(() => {
      setCompletedStepIds([1]);
      setActiveStep(2);
    }, 400);

    const t2 = setTimeout(() => {
      setCompletedStepIds([1, 2]);
      setActiveStep(3);
    }, 800);

    const t3 = setTimeout(() => {
      setCompletedStepIds([1, 2, 3]);
      setIsReplaying(false);
    }, 1200);

    timerRefs.current = [t1, t2, t3];
  };

  return (
    <div className="flex h-full flex-col justify-between bg-transparent p-4 sm:p-5 font-mono text-xs sm:text-sm min-w-0 max-w-full overflow-hidden">
      <div className="space-y-4">
        {/* Top Summary Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 min-w-0">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-bold text-white text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">
                confidential_payroll_pipeline
              </span>
              <span className="shrink-0 rounded bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 text-xs font-semibold text-cyan-300">
                P0
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-400 truncate">
              Run ID: <span className="text-zinc-300">266d8839-a24a...eb8af7</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 ${
                isReplaying
                  ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-200"
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isReplaying ? "bg-cyan-400 animate-ping" : "bg-emerald-400"
                }`}
              />
              {isReplaying ? "Executing..." : "Completed"}
            </span>
            <div className="text-right text-xs text-zinc-300 hidden sm:block">
              <span>⏱ 41.3s</span> • <span className="text-zinc-400">3 Steps</span>
            </div>
          </div>
        </div>

        {/* Timeline Header with Interactive Replay Action */}
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="flex items-center gap-2 font-semibold text-zinc-200">
            <svg className="h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9" />
            </svg>
            Execution Step Timeline
          </span>

          <button
            type="button"
            onClick={handleReplay}
            disabled={isReplaying}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200 transition-all hover:border-white/20 hover:bg-white/10 active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
          >
            <svg
              className={`h-3 w-3 ${isReplaying ? "animate-spin text-cyan-400" : "text-zinc-400"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            <span>{isReplaying ? "Replaying..." : "Replay Steps"}</span>
          </button>
        </div>

        {/* Step Items with Connected Visual Rail */}
        <div className="relative space-y-3.5 pl-6 before:absolute before:bottom-5 before:left-2 before:top-5 before:w-[1px] before:bg-white/10 min-w-0">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            const isDone = completedStepIds.includes(step.id);
            const isCurrentlyReplaying = isReplaying && activeStep === step.id;
            return (
              <div key={step.id} className="relative min-w-0">
                {/* Step Node on the Rail */}
                <div
                  className={`absolute -left-6 top-4 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full transition-all duration-300 ${
                    isCurrentlyReplaying
                      ? "bg-cyan-400 ring-2 ring-cyan-500/40"
                      : isDone
                      ? "bg-cyan-400 ring-1 ring-cyan-500/30"
                      : "bg-zinc-800 ring-1 ring-zinc-700/50"
                  }`}
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      isDone || isCurrentlyReplaying ? "bg-zinc-950" : "bg-zinc-500"
                    }`}
                  />
                </div>

                <div
                  onClick={() => setActiveStep(step.id)}
                  className={`cursor-pointer rounded-xl border p-3 sm:p-3.5 transition-all duration-200 min-w-0 ${
                    isSelected
                      ? "border-cyan-500/35 bg-white/[0.03] shadow-sm"
                      : "border-white/5 bg-transparent hover:border-white/15 hover:bg-white/[0.015]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span
                        className={`shrink-0 rounded px-2 py-0.5 text-xs font-semibold transition-colors duration-200 ${
                          isDone
                            ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                            : "bg-white/5 border border-white/10 text-zinc-500"
                        }`}
                      >
                        Step #{step.id}
                      </span>
                      <span className="font-semibold text-white text-xs sm:text-sm truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
                        {step.name}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="text-xs text-zinc-400">⏱ {step.duration}</span>
                      <span
                        className={`rounded border px-2 py-0.5 text-[11px] font-bold transition-all duration-200 ${
                          isDone
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                            : "border-white/10 bg-white/5 text-zinc-500"
                        }`}
                      >
                        {isDone ? "✓ Success" : "Pending..."}
                      </span>
                      {step.payloadOffloaded && (
                        <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-300">
                          📦 Offloaded
                        </span>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 min-w-0">
                      <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-sm break-words flex-1 min-w-[200px]">
                        {step.detail}
                      </p>
                      <div className="flex items-center gap-2 shrink-0 font-mono text-[11px]">
                        <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">
                          Input JSON
                        </span>
                        <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">
                          Output JSON
                        </span>
                        <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">
                          Fork
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Ribbon */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[11px] sm:text-xs text-zinc-400 min-w-0">
        <span className="text-zinc-400 truncate">ApexFlow Control Plane · v0.1.0</span>
        <span className="text-cyan-300 font-semibold shrink-0">Step Memoization Active</span>
      </div>
    </div>
  );
};

/**
 * 100% Faithful Native Showcase Widget for InboxOrchestrator AI
 * Replicates the exact real data and UI from `inbox-thread-page.png`:
 * - Thread: Action Required: Confirm Security Compliance Assessment
 * - Sender: Jariful Ovi <jarifulovi@gmail.com>
 * - Status: Needs Action | Priority: HIGH | Neutral
 * - NLP Extraction: Task (Follow up with compliance manager) & Question
 * - Pending Tasks: 2 items with due dates (10/8/2026 & 10/9/2026)
 */
export const InboxThreadExtractionWidget: React.FC = () => {
  const [taskChecked, setTaskChecked] = useState<{ [key: number]: boolean }>({ 1: false, 2: false });

  return (
    <div className="flex h-full flex-col justify-between bg-transparent p-3.5 sm:p-5 text-xs sm:text-sm min-w-0 max-w-full overflow-hidden">
      <div className="space-y-3.5 sm:space-y-4 min-w-0 w-full">
        {/* Thread Header (Clean Sans-Serif + Monospace Badges) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 min-w-0">
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-white text-xs sm:text-base truncate font-sans">
              Action Required: Confirm Security Compliance Assessment
            </h4>
            <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-zinc-400 font-sans truncate">
              From: <span className="text-zinc-200">Jariful Ovi</span> &lt;jarifulovi@gmail.com&gt;
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 font-mono shrink-0">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase text-amber-300">
              Needs Action
            </span>
            <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase text-rose-300">
              HIGH
            </span>
          </div>
        </div>

        {/* Inbound Email Excerpt with Left Accent Bar */}
        <div className="border-l-2 border-emerald-500/50 pl-3 sm:pl-3.5 py-1 font-sans text-xs sm:text-sm leading-relaxed text-zinc-300 min-w-0">
          <p className="text-zinc-400 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider mb-0.5">
            Inbound Thread Excerpt
          </p>
          <p className="italic text-zinc-200 line-clamp-3 sm:line-clamp-none break-words">
            &ldquo;This is a reminder that your annual SOC2 vendor compliance survey is overdue as of yesterday. Please follow up with your compliance manager to submit the completed audit form...&rdquo;
          </p>
        </div>

        {/* Real NLP Extraction Block (Open, Clean Rows with flex-wrap) */}
        <div className="space-y-2 pt-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs text-zinc-400 font-mono min-w-0">
            <span className="font-semibold text-emerald-300 flex flex-wrap items-center gap-1.5 min-w-0">
              <span>⚡ Extracted Action Facts</span>
              <span className="text-[10px] text-zinc-400 font-normal">(spaCy + PyTorch)</span>
            </span>
            <span className="text-zinc-400 shrink-0">MD5 Deduplication</span>
          </div>

          <div className="space-y-2 font-sans min-w-0">
            <div className="flex items-start gap-2 sm:gap-2.5 text-xs text-zinc-200 min-w-0">
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300 shrink-0 border border-emerald-500/30">
                TASK
              </span>
              <span className="leading-snug break-words min-w-0 flex-1">
                Please follow up with your compliance manager to submit completed audit form.
              </span>
            </div>
            <div className="flex items-start gap-2 sm:gap-2.5 text-xs text-zinc-200 min-w-0">
              <span className="rounded bg-teal-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-teal-300 shrink-0 border border-teal-500/30">
                QUESTION
              </span>
              <span className="leading-snug break-words min-w-0 flex-1">
                What is the estimated completion date for your security audit report?
              </span>
            </div>
          </div>
        </div>

        {/* Structured Workspace Tasks */}
        <div className="space-y-2 border-t border-white/10 pt-3 sm:pt-3.5 min-w-0">
          <div className="flex items-center justify-between text-xs font-mono min-w-0">
            <span className="font-bold text-zinc-200 truncate">Structured Workspace Tasks</span>
            <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-xs font-bold text-emerald-300 shrink-0">
              2 Pending
            </span>
          </div>

          <div className="space-y-1 font-sans min-w-0">
            <label className="flex items-center justify-between gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-white/[0.04] cursor-pointer transition-colors min-w-0">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                <input
                  type="checkbox"
                  checked={taskChecked[1]}
                  onChange={() => setTaskChecked((prev) => ({ ...prev, 1: !prev[1] }))}
                  className="rounded border-zinc-600 bg-zinc-900 text-emerald-500 focus:ring-0 cursor-pointer h-4 w-4 shrink-0"
                />
                <span className={`text-xs truncate ${taskChecked[1] ? "line-through text-zinc-500" : "text-zinc-200 font-medium"}`}>
                  Follow up with compliance manager
                </span>
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-zinc-400 shrink-0">10/8/2026</span>
            </label>

            <label className="flex items-center justify-between gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-white/[0.04] cursor-pointer transition-colors min-w-0">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                <input
                  type="checkbox"
                  checked={taskChecked[2]}
                  onChange={() => setTaskChecked((prev) => ({ ...prev, 2: !prev[2] }))}
                  className="rounded border-zinc-600 bg-zinc-900 text-emerald-500 focus:ring-0 cursor-pointer h-4 w-4 shrink-0"
                />
                <span className={`text-xs truncate ${taskChecked[2] ? "line-through text-zinc-500" : "text-zinc-200 font-medium"}`}>
                  Provide estimated completion date
                </span>
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-zinc-400 shrink-0">10/9/2026</span>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Status Ribbon (flex-wrap and min-w-0 to avoid overflow) */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[11px] sm:text-xs text-zinc-400 font-mono min-w-0">
        <span className="truncate">Supabase pgvector: <strong className="text-zinc-200">384-d Cosine Match</strong></span>
        <span className="text-emerald-300 font-semibold shrink-0">Google Calendar Synced</span>
      </div>
    </div>
  );
};
