import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center z-50 p-4 sm:p-0">
      <div className="text-center relative w-full max-w-md">
        {/* Floating particles - optimized for mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        
        {/* Logo with glow - responsive size */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg sm:blur-xl opacity-30 animate-pulse"></div>
          <img src="/criclelogo.png" alt="Logo" className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white mx-auto relative z-10 animate-float" />
        </div>
        
        {/* Name with typewriter effect - responsive text */}
        <h1 className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2 animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-blue-400 mx-auto" style={{width: '100%', maxWidth: '16ch'}}>VARUNTEJ REDDY</h1>
        <p className="text-blue-400 text-sm sm:text-xl mb-6 sm:mb-8 animate-fade-in-delay font-light">CS Graduate | Seeking Internship Opportunities</p>
        
        {/* Enhanced Code Animation - optimized for mobile */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-8 text-left font-mono text-xs sm:text-sm max-w-lg mx-auto mb-6 sm:mb-8 border border-slate-700 shadow-2xl overflow-y-auto max-h-96 sm:max-h-full">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-400 ml-2 sm:ml-4 text-[10px] sm:text-xs">portfolio.js</span>
          </div>
          <div className="text-purple-400 mb-1 sm:mb-2 animate-type-1 line-clamp-1">const fresher = {'{'}</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-2 line-clamp-1">name: <span className="text-green-300">"Varuntej Reddy"</span>,</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-3 line-clamp-1">education: <span className="text-green-300">"Computer Science Graduate"</span>,</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-4 line-clamp-1">skills: [<span className="text-orange-300">"React", "JavaScript", "Python"</span>],</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-5 line-clamp-1">interest: [<span className="text-orange-300">"Web Dev", "AI/ML", "Cloud"</span>],</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-6 line-clamp-1">projects: <span className="text-yellow-300">"3+ Academic & Personal"</span>,</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-7 line-clamp-1">seeking: <span className="text-green-300">"Internship Opportunity"</span>,</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-8 line-clamp-1">location: <span className="text-green-300">"Open to Remote & On-site"</span>,</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-9 line-clamp-1">duration: <span className="text-yellow-300">"6 Months"</span>,</div>
          <div className="text-blue-300 ml-4 sm:ml-6 animate-type-10 line-clamp-1">enthusiasm: <span className="text-green-300">true</span></div>
          <div className="text-purple-400 animate-type-11">{'}'}</div>
          <div className="text-slate-500 animate-type-12 mt-1 sm:mt-2 line-clamp-1">// Ready to learn and grow...</div>
        </div>
        
        {/* Enhanced Loading Bar - responsive width */}
        <div className="relative px-4 sm:px-0">
          <div className="w-full sm:w-80 h-2 bg-slate-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-loading-bar-enhanced shadow-lg"></div>
          </div>
          <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mt-2 w-full mx-auto gap-1 sm:gap-0">
            <span className="animate-pulse">Loading portfolio...</span>
            <span className="animate-pulse delay-500 truncate hidden xs:inline">Initializing...</span>
            <span className="animate-pulse delay-1000 truncate hidden sm:inline">Almost ready!</span>
          </div>
        </div>

        {/* Additional Loading Stats - Mobile optimized */}
        <div className="mt-6 sm:mt-8 space-y-2 text-[11px] sm:text-xs">
          <div className="flex justify-between items-center text-slate-400">
            <span>Resume Loading</span>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-slate-400">
            <span>Projects Initializing</span>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-slate-400">
            <span>Skills Preparing</span>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;