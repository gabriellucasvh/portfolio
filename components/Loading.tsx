import React from "react";
import '@/components/styles/loading.css'

export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50 fade-out">
        <div className="flex space-x-2">
          <h1 className="text-2xl font-medium">Gabriel Gonçalves 
            <span className="font-thin fade-in">Portfolio</span>
            </h1>
        </div>
      </div>
    );
  }
  