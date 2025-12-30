import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Certificates } from './components/Certificates';
import { LearningGuides } from './components/LearningGuides';
import { ProfessionalTips } from './components/ProfessionalTips';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'certificates':
        return <Certificates />;
      case 'learning':
        return <LearningGuides />;
      case 'tips':
        return <ProfessionalTips />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-16">
        {renderContent()}
      </main>
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Sanorbit - Digital Transformation Hub</h3>
              <p className="text-slate-400">
                Empowering professionals in the digital transformation era through knowledge, 
                certification guidance, and practical insights from 29 years of industry experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white">Home</button></li>
                <li><button onClick={() => setActiveTab('certificates')} className="hover:text-white">Certificates</button></li>
                <li><button onClick={() => setActiveTab('learning')} className="hover:text-white">Learning Guides</button></li>
                <li><button onClick={() => setActiveTab('tips')} className="hover:text-white">Professional Tips</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <p className="text-slate-400 mb-3">
                Sanjeev Kumar Sharma<br />
                📍 Delhi NCR, India<br />
                📱 +91 8800987666<br />
                ✉️ goforgrowth@gmail.com
              </p>
              <p className="text-slate-400 text-sm">
                Join the community of digital transformation professionals.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 Sanorbit.com - Digital Transformation Hub by Sanjeev Kumar Sharma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}