import { useState } from 'react';
import { Menu, ChevronDown, Smartphone, SearchX, PlayCircle, Grid, Download, Plus, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface StatusGalleryProps {
  onOpenMenu: () => void;
  onWatchTutorial: () => void;
}

export default function StatusGallery({ onOpenMenu, onWatchTutorial }: StatusGalleryProps) {
  const [activeTab, setActiveTab] = useState('IMAGES');
  const [waType, setWaType] = useState('WA BUSINESS');
  const [isEmpty, setIsEmpty] = useState(true);

  const tabs = ['IMAGES', 'VIDEOS', 'SAVED'];

  const mockData = [
    {
      id: 1,
      type: 'featured',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgcgTniEc8efdZfqwdWQzGTNBEx2Ws22pBkstL7a-T37KfHFx79spo6s9xd2wDeJuxz1ASPSOK1a8SzdcaNhmH75N8-hEN3NXKel8mJSkeA34o22eGVpnNCHZUUVB52YHs1l5KLLt44pWx3yMFy9ZKN1DBTLITPtMpKkvPiuvGMdkBLNJZfM62rzUBNOKOEh4epinEeU90b0eAQSMiGq3m3PyGYroafsqJ3Ft64cNtf9Z-EHKuaG6FLWVaElesxRqpqdkU81ZUp7m',
      title: 'High Fidelity Capture',
      time: 'Saved 2 hours ago'
    },
    {
      id: 2,
      type: 'image',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrK0TOmVVZtDtDC56hXOPgjQutrKQIWY0zCY1DZ0WKHdsxXaGob4BvLx61wkui2I9VxHdSzc73arVIpTfklD9erDMgXdoxpeVGeADrC5DEc24YCWdFg5OVZQudl96VdRuy_Q-PoPqa5EM75hJANYOMil9w6dZ-2a4Ca6eb04Q-93XoJOkD5vZjYqbZ9F29ONPZa5s3IHO6OlH-LZmlFRuO7QYnftqi9srNAAiibBOovx-evhYizql0s7tjLgcAqZKEO_hwwvrmS7tL'
    },
    {
      id: 3,
      type: 'image',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdMP5jGJwHXRZQYpX36FlsiBO7gzsmRlFe2VtyUQTRB1Bf-zGWScaQXQyhunVIW6RxCH3oWM4ko8bkxB54NNffzFuKo13awHmAbBdl5COTt6jK5P0peq6q_4lH_9GysBeilMHmHc7UOaH0qfvmG4AkxWWUPBGK-HHdmZf-63K5zw9HbGG4TQJmZzM5iZ6mWDlXkBAn8hKt8z4UfRw5C0wrSMjj3GMwiBZ8wvlnyxjaPzth_zCKL_-xDE-dbotNT9Or-v2VQojl2Jh1'
    },
    {
      id: 4,
      type: 'image',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCreWMT9wQ4zIuQyFBdCo5FnQPGzdOYRNFj8vby5pINl7sIZ7uH816d6yUjqhTCFlRCQNV-KJ2ObYccaqgdSmq6Gerd34MRYIjctyJs5dswIPlrKvc75UhiliNnCGxz7wBptKGrh8r32O_GcVtPJt6QWMLYHxE8e79Yt9Q3qsjVZdl99I4TS92VWKjL8upiDggkMLHLMkkmshr69ts1548NZAkNSuVSbJD2M-LmYkGUXKLSYDkQVQx4OtcqXbAEZRzo05xnZrETy6NQ'
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#071411] text-white">
      {/* Header */}
      <header className="bg-primary/90 backdrop-blur-xl sticky top-0 z-30 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-4">
            <button onClick={onOpenMenu} className="p-2 hover:bg-black/10 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="font-headline font-extrabold text-xl tracking-tight">Status Saver</h1>
          </div>
          <button className="bg-primary hover:bg-primary/80 border border-white/20 rounded-xl px-4 py-2 flex items-center gap-2 transition-all shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest">{waType}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <nav className="flex w-full px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsEmpty(tab === 'SAVED'); // Just for demo
              }}
              className={`flex-1 py-4 text-center transition-all relative font-headline font-bold text-xs tracking-[0.15em] ${
                activeTab === tab ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-full" 
                />
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center text-center pb-20">
            <div className="relative mb-12 group">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-64 h-64 glass-panel rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center gap-6 shadow-2xl">
                <div className="relative">
                  <Smartphone className="w-24 h-24 text-white/10 stroke-[1]" />
                  <SearchX className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-primary" />
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-2 rounded-full bg-white/10"></div>
                  <div className="w-8 h-2 rounded-full bg-white/5"></div>
                </div>
                
                {/* Floating Avatar Mockup */}
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#0d1f1b] rounded-3xl border border-white/10 p-2 shadow-2xl rotate-6">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf05QqQVkOPH8jsPQnPsMrZe1ZG0ayCDgr36uI72ct2e5GUYhxaJPVGy2bIdTBk5MJT4rYgx0kEkOSDa3csPEvjfjOsDspeKG-i2k_AIZIwZeF359eCTHu3XXOyWS_RTNE9L1lbV19NxALrMckPZG_Yh8BFMMU0tpRguoB6bL5aqnh-kid48AILbKUV6URd3km7kCywIm4ilouxtaYZ668Ytlmckn9fE1SHQ7QIQb7oJtfYQme00D_3RNQT_L0BT9Mq9n5hWVneAnW" 
                    alt="User" 
                    className="w-full h-full object-cover rounded-2xl opacity-40 grayscale"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-xs mx-auto space-y-4">
              <h2 className="font-headline font-bold text-2xl leading-tight">
                No Viewed Status for WhatsApp found!
              </h2>
              <p className="font-sans text-primary text-sm font-semibold">
                View a Status in WhatsApp first and then pull down from top to refresh
              </p>
            </div>

            <button 
              onClick={onWatchTutorial}
              className="mt-12 bg-transparent border border-primary hover:bg-primary/10 text-primary px-10 py-4 rounded-full font-headline font-bold tracking-wider flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-black/20"
            >
              <PlayCircle className="w-6 h-6 fill-primary/20" />
              WATCH TUTORIAL
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${item.type === 'featured' ? 'col-span-2 aspect-video' : 'aspect-square'} rounded-3xl overflow-hidden relative group shadow-lg`}
              >
                <img 
                  src={item.image} 
                  alt={item.title || 'Status'} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  {item.title && (
                    <>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase w-fit mb-2">RECENT</span>
                      <h3 className="font-headline font-bold text-xl">{item.title}</h3>
                      <p className="text-white/60 text-xs mt-1">{item.time}</p>
                    </>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/40 transition-all">
                  <Download className="w-5 h-5 text-white" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* FAB */}
      <button 
        onClick={() => setIsEmpty(!isEmpty)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-[0_12px_30px_rgba(0,101,78,0.4)] flex items-center justify-center group active:scale-90 transition-all z-20"
      >
        <Plus className="w-8 h-8 transition-transform group-hover:rotate-90" />
      </button>
    </div>
  );
}
