import { motion, AnimatePresence } from 'motion/react';
import { X, FolderOpen, ArrowLeft, Image as ImageIcon, Film, ArrowUp } from 'lucide-react';

interface PermissionModalProps {
  onGrant: () => void;
  onCancel: () => void;
}

export default function PermissionModal({ onGrant, onCancel }: PermissionModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header Section */}
        <div class="px-8 pt-8 pb-4 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container mb-6">
            <FolderOpen className="text-primary w-8 h-8" />
          </div>
          <h1 class="font-headline font-extrabold text-2xl text-on-surface tracking-tight mb-2">To Get All Status</h1>
          <p class="font-sans text-on-surface-variant text-sm leading-relaxed px-2">
            Follow the steps below to allow access to the '.Statuses' folder
          </p>
        </div>

        {/* Instructional Mockup Area */}
        <div class="px-8 py-4">
          <div class="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden flex flex-col items-center">
            {/* Abstract "File Picker" Mockup */}
            <div class="w-full bg-white rounded-xl shadow-sm border border-outline-variant/10 p-4 flex flex-col gap-3">
              <div class="flex items-center gap-2 border-b border-outline-variant/10 pb-2">
                <ArrowLeft className="w-3 h-3 text-outline" />
                <div class="text-[10px] font-medium text-on-surface-variant">Android &gt; media &gt; .Statuses</div>
              </div>
              <div class="h-12 bg-surface-container flex items-center px-3 rounded-lg">
                <ImageIcon class="text-primary/40 w-5 h-5 mr-2" />
                <div class="h-2 w-24 bg-outline-variant/30 rounded-full"></div>
              </div>
              <div class="h-12 bg-surface-container flex items-center px-3 rounded-lg">
                <Film class="text-primary/40 w-5 h-5 mr-2" />
                <div class="h-2 w-32 bg-outline-variant/30 rounded-full"></div>
              </div>
              {/* The Focused Button */}
              <div class="mt-2 flex justify-center relative">
                <div class="bg-[#0078D4] text-white font-headline text-[11px] font-bold px-4 py-2 rounded shadow-lg flex items-center gap-2">
                  USE THIS FOLDER
                </div>
                {/* Animated Pointer Arrow */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  class="absolute -bottom-8 right-4 flex flex-col items-center"
                >
                  <ArrowUp class="text-primary w-10 h-10 rotate-180 drop-shadow-md fill-current" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div class="px-10 py-6">
          <ul class="space-y-4">
            <li class="flex items-start gap-4 group">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
              <p class="text-sm font-medium text-on-surface-variant pt-0.5">Click on 'Grant Permission' Button</p>
            </li>
            <li class="flex items-start gap-4 group">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
              <p class="text-sm font-medium text-on-surface-variant pt-0.5">Click on 'Use This Folder' Button</p>
            </li>
            <li class="flex items-start gap-4 group">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</div>
              <p class="text-sm font-medium text-on-surface-variant pt-0.5">Click on 'Allow' Button</p>
            </li>
          </ul>
        </div>

        {/* Action Footer */}
        <div class="px-8 pb-8 pt-4 flex flex-col sm:flex-row-reverse gap-3">
          <button 
            onClick={onGrant}
            class="w-full sm:flex-1 py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold text-sm rounded-full shadow-[0_8px_16px_rgba(0,101,78,0.2)] active:scale-95 transition-all duration-300"
          >
            GRANT PERMISSION
          </button>
          <button 
            onClick={onCancel}
            class="w-full sm:w-auto py-4 px-8 text-primary font-headline font-bold text-sm rounded-full hover:bg-surface-container transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
