import { motion } from 'motion/react';

interface TutorialModalProps {
  onComplete: () => void;
}

export default function TutorialModal({ onComplete }: TutorialModalProps) {
  const steps = [
    {
      id: 1,
      title: "Open Whatsap Status",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uhIhkwPibwA8TsVkEILrMZkfonPrOuoVTiqRqj2DZUJrG_aWME6av2-awZ7eOCu2Z7drKf8jgq9GeLQudjQ2D_-bbh3GB_1HqyXgYhsocNm3RYfk64Agnp8MtQrQE5o5gGyK72apkAM6f3SJQlMElfaRtsM7hKpFVKV3Xq3lR-FcPC0c739w-9j6QoMG4g_EKjgSiH1jfIpzvZwlVZ6oSb_EVroakZrQRHa9_yq2VP4wtb-T2yM4FZPdnXwP_S6S_-jgGLYa7vqtdk"
    },
    {
      id: 2,
      title: "View status from Whatsap",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uhmrNoIKRVoTkxMJKtzPeBAsue2-Inf97ecbzhP271SBSQrhabM667KSUSI1H5kQlIyWfHN0v3SXGtz2GqKA4-9Hj1mYFRNnA1uEL4DjR1SENxiJaKrfl0lwVTN7qqSjE9u1ik56RMhEYq4_aYPEFnBem2DkmFn_AVEgOrtWgWy7ndtfSK4MuhWPIKzzYFutdRQA24h4cDTguU90peK2-UgbtxJxm5LDfJd9S6hP6_6IoqosCKaBGJJcp2-O9PFvjLA7LHgoYpYMJw"
    },
    {
      id: 3,
      title: "Open this App to Download",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ugtH4-2W0U1cXEG56kiqgRAImzlwWIq4ym5pHA7_tVG10ZHr5i2ZLxir3xBfY82AaMGUIPCEJPUOlJUNLHhN57eUGk5335K-0quSNWMykBsxyJvk4byZo2jzIN0k6Dlx9NsE-CZ9X6AIloxmunsHoz4ulNdYsEVQTJwxdNGSPz4UeSoHlDjso3Ua9qYIlTWgXQdb7pzoLB9NpjWxwqiVBQ-cz6QFT1zGYAc4Th1hGEew1z5sFEnvzgudC6jWa-cicR4QezvfJSMOQ"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-headline font-bold text-primary mb-12">How To Use?</h2>
        
        <div className="space-y-12 w-full">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <div className="absolute -left-6 top-0 bg-primary text-white font-bold px-4 py-2 rounded-r-2xl shadow-md">
                {step.id}
              </div>
              <div className="w-full aspect-[16/9] bg-surface-container rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 mb-4">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm font-bold text-on-surface-variant">{step.title}</p>
            </div>
          ))}
        </div>

        <div className="w-full mt-16 pb-8">
          <button 
            onClick={onComplete}
            className="w-full bg-primary text-white font-headline font-bold py-5 rounded-2xl shadow-lg active:scale-95 transition-all"
          >
            Got it
          </button>
        </div>
      </div>
    </motion.div>
  );
}
