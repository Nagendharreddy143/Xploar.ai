import React from 'react'
import { Home, ArrowLeft, BookOpen, Users, Award } from 'lucide-react'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white relative">
            {/* Main Content */}
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="text-center max-w-4xl mx-auto">
                    {/* 3D 404 built with lines */}
                    <div className="relative mb-8 flex justify-center items-center gap-4 md:gap-8">
                        {/* First 4 */}
                        <div className="relative animate-float">
                            <svg width="120" height="160" viewBox="0 0 120 160" className="w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-40">
                                {/* Front face - Number 4 */}
                                <g className="fill-indigo-600 stroke-indigo-700" strokeWidth="3">
                                    <rect x="15" y="20" width="15" height="85" />
                                    <rect x="70" y="20" width="15" height="120" />
                                    <rect x="15" y="75" width="70" height="15" />
                                </g>
                                {/* 3D depth */}
                                <g className="fill-indigo-500 stroke-indigo-600" strokeWidth="2">
                                    <polygon points="30,20 40,10 40,95 30,105" />
                                    <polygon points="85,20 95,10 95,140 85,140" />
                                    <polygon points="30,75 40,65 95,65 85,75" />
                                </g>
                                {/* Connecting lines */}
                                <g className="stroke-indigo-600" strokeWidth="2" fill="none">
                                    <line x1="15" y1="20" x2="25" y2="10" />
                                    <line x1="30" y1="20" x2="40" y2="10" />
                                    <line x1="15" y1="105" x2="25" y2="95" />
                                    <line x1="30" y1="105" x2="40" y2="95" />
                                    <line x1="15" y1="75" x2="25" y2="65" />
                                    <line x1="85" y1="75" x2="95" y2="65" />
                                    <line x1="15" y1="90" x2="25" y2="80" />
                                    <line x1="85" y1="90" x2="95" y2="80" />
                                    <line x1="70" y1="20" x2="80" y2="10" />
                                    <line x1="85" y1="20" x2="95" y2="10" />
                                    <line x1="70" y1="140" x2="80" y2="130" />
                                    <line x1="85" y1="140" x2="95" y2="130" />
                                </g>
                            </svg>
                        </div>

                        {/* 0 */}
                        <div className="relative animate-float" style={{ animationDelay: '0.1s' }}>
                            <svg width="100" height="160" viewBox="0 0 100 160" className="w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-40">
                                {/* Front face - Number 0 */}
                                <g className="fill-none stroke-indigo-700" strokeWidth="15">
                                    <ellipse cx="40" cy="80" rx="25" ry="55" />
                                </g>
                                {/* 3D depth */}
                                <g className="fill-none stroke-indigo-500" strokeWidth="10">
                                    <ellipse cx="50" cy="70" rx="25" ry="55" />
                                </g>
                                {/* Connecting lines */}
                                <g className="stroke-indigo-600" strokeWidth="2" fill="none">
                                    <line x1="15" y1="80" x2="25" y2="70" />
                                    <line x1="65" y1="80" x2="75" y2="70" />
                                    <line x1="40" y1="25" x2="50" y2="15" />
                                    <line x1="40" y1="135" x2="50" y2="125" />
                                    <line x1="25" y1="45" x2="35" y2="35" />
                                    <line x1="55" y1="45" x2="65" y2="35" />
                                    <line x1="25" y1="115" x2="35" y2="105" />
                                    <line x1="55" y1="115" x2="65" y2="105" />
                                </g>
                            </svg>
                        </div>

                        {/* Second 4 */}
                        <div className="relative animate-float" style={{ animationDelay: '0.2s' }}>
                            <svg width="120" height="160" viewBox="0 0 120 160" className="w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-40">
                                {/* Front face - Number 4 */}
                                <g className="fill-indigo-600 stroke-indigo-700" strokeWidth="3">
                                    <rect x="15" y="20" width="15" height="85" />
                                    <rect x="70" y="20" width="15" height="120" />
                                    <rect x="15" y="75" width="70" height="15" />
                                </g>
                                {/* 3D depth */}
                                <g className="fill-indigo-500 stroke-indigo-600" strokeWidth="2">
                                    <polygon points="30,20 40,10 40,95 30,105" />
                                    <polygon points="85,20 95,10 95,140 85,140" />
                                    <polygon points="30,75 40,65 95,65 85,75" />
                                </g>
                                {/* Connecting lines */}
                                <g className="stroke-indigo-600" strokeWidth="2" fill="none">
                                    <line x1="15" y1="20" x2="25" y2="10" />
                                    <line x1="30" y1="20" x2="40" y2="10" />
                                    <line x1="15" y1="105" x2="25" y2="95" />
                                    <line x1="30" y1="105" x2="40" y2="95" />
                                    <line x1="15" y1="75" x2="25" y2="65" />
                                    <line x1="85" y1="75" x2="95" y2="65" />
                                    <line x1="15" y1="90" x2="25" y2="80" />
                                    <line x1="85" y1="90" x2="95" y2="80" />
                                    <line x1="70" y1="20" x2="80" y2="10" />
                                    <line x1="85" y1="20" x2="95" y2="10" />
                                    <line x1="70" y1="140" x2="80" y2="130" />
                                    <line x1="85" y1="140" x2="95" y2="130" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Error message */}
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Page Not Found
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            The page you're looking for seems to have wandered off.
                            Don't worry, we'll help you find your way back to your UPSC preparation!
                        </p>
                    </div>

                    {/* UPSC feature cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 hover:bg-indigo-100 transition-colors duration-300">
                            <BookOpen className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                            <h3 className="text-indigo-800 font-semibold mb-2">Study Materials</h3>
                            <p className="text-gray-600 text-sm">Comprehensive resources for all UPSC stages</p>
                        </div>
                        <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100 hover:bg-cyan-100 transition-colors duration-300">
                            <Users className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                            <h3 className="text-cyan-800 font-semibold mb-2">Community</h3>
                            <p className="text-gray-600 text-sm">Connect with fellow UPSC aspirants</p>
                        </div>
                        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 hover:bg-indigo-100 transition-colors duration-300">
                            <Award className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                            <h3 className="text-indigo-800 font-semibold mb-2">Success Stories</h3>
                            <p className="text-gray-600 text-sm">Learn from successful candidates</p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => window.location.href = '/'}
                            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold rounded-full hover:from-indigo-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-lg"
                        >
                            <Home className="w-5 h-5" />
                            Return to Home
                        </button>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 font-semibold border-2 border-gray-300 rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 text-lg"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-center">
                        <div className="flex space-x-8">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => window.location.href = '/about'}
                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
                            >
                                About
                            </button>
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Custom CSS for 3D effect and glow */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) rotateX(0deg) rotateY(0deg); 
                    }
                    50% { 
                        transform: translateY(-8px) rotateX(2deg) rotateY(1deg); 
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                    filter: drop-shadow(0 4px 8px rgba(79, 70, 229, 0.3));
                    transition: all 0.3s ease;
                }

                .animate-float:hover {
                    filter: drop-shadow(0 8px 16px rgba(79, 70, 229, 0.5));
                    transform: scale(1.05);
                }

                svg {
                    filter: drop-shadow(2px 4px 6px rgba(79, 70, 229, 0.2));
                }
            `}</style>
        </div>
    )
}

export default NotFound