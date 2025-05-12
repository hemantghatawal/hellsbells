import { Loader2 } from 'lucide-react';
import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <h2 className="text-xl font-medium text-black">Loading...</h2>
          <p className="text-muted-foreground">
            Please wait while we process your request
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading