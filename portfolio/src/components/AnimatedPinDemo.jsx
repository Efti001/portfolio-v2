"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo({
  title = "Project Name",
  description = "Project description goes here.",
  link = "#",
  linkLabel = "View Project",
  stack = []
}) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={link}>
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] relative ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal mb-2">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="absolute right-4 bottom-16 flex flex-row flex-wrap gap-2 z-10">
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block rounded-full bg-slate-700/80 text-xs px-3 py-1 text-white font-semibold shadow"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 bottom-4 flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm"
            title={linkLabel}
          >
            <span>{linkLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0 0h6m-6 0v-6" />
            </svg>
          </a>
        </div>
      </PinContainer>
    </div>
  );
}
