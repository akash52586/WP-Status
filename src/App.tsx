import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Sidebar from './components/Sidebar';
import PermissionModal from './components/PermissionModal';
import TutorialModal from './components/TutorialModal';
import StatusGallery from './components/StatusGallery';

export default function App() {
  const [view, setView] = useState<'PERMISSION' | 'TUTORIAL' | 'MAIN'>('PERMISSION');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleGrantPermission = () => {
    setView('TUTORIAL');
  };

  const handleTutorialComplete = () => {
    setView('MAIN');
  };

  return (
    <div className="relative min-h-screen bg-surface overflow-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <AnimatePresence mode="wait">
        {view === 'PERMISSION' && (
          <PermissionModal 
            key="permission"
            onGrant={handleGrantPermission} 
            onCancel={() => {}} 
          />
        )}

        {view === 'TUTORIAL' && (
          <TutorialModal 
            key="tutorial"
            onComplete={handleTutorialComplete} 
          />
        )}

        {view === 'MAIN' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-screen w-full relative"
          >
            {/* Sidebar Overlay for Mobile */}
            <AnimatePresence>
              {isSidebarOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                  />
                  <motion.div
                    initial={{ x: -320 }}
                    animate={{ x: 0 }}
                    exit={{ x: -320 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-y-0 left-0 z-50 lg:relative lg:z-0"
                  >
                    <Sidebar />
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>

            {/* Main Content */}
            <StatusGallery 
              onOpenMenu={() => setIsSidebarOpen(true)}
              onWatchTutorial={() => setView('TUTORIAL')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
