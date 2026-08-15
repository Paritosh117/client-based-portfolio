'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface InterviewContextType {
  isInterviewMode: boolean;
  toggleInterviewMode: () => void;
  selectedProjectForCaseStudy: string | null;
  openCaseStudy: (projectId: string) => void;
  closeCaseStudy: () => void;
}

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

export const InterviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInterviewMode, setIsInterviewMode] = useState<boolean>(false);
  const [selectedProjectForCaseStudy, setSelectedProjectForCaseStudy] = useState<string | null>(null);

  useEffect(() => {
    // Check local storage for persistent setting if available
    const saved = localStorage.getItem('interview_mode');
    if (saved === 'true') {
      setIsInterviewMode(true);
    }
  }, []);

  const toggleInterviewMode = () => {
    setIsInterviewMode((prev) => {
      const next = !prev;
      localStorage.setItem('interview_mode', String(next));
      return next;
    });
  };

  const openCaseStudy = (projectId: string) => {
    setSelectedProjectForCaseStudy(projectId);
  };

  const closeCaseStudy = () => {
    setSelectedProjectForCaseStudy(null);
  };

  return (
    <InterviewContext.Provider
      value={{
        isInterviewMode,
        toggleInterviewMode,
        selectedProjectForCaseStudy,
        openCaseStudy,
        closeCaseStudy,
      }}
    >
      <div className={isInterviewMode ? 'interview-mode-active' : ''}>{children}</div>
    </InterviewContext.Provider>
  );
};

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    return {
      isInterviewMode: false,
      toggleInterviewMode: () => {},
      selectedProjectForCaseStudy: null,
      openCaseStudy: () => {},
      closeCaseStudy: () => {}
    };
  }
  return context;
};
