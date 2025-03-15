import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff, Loader2, RefreshCw } from 'lucide-react';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'fr-FR';

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript((prev) => prev + ' ' + transcript);
      };

      recognition.onerror = (event) => {
        let message = '';
        switch (event.error) {
          case 'network':
            message = 'Une erreur réseau est survenue. Veuillez vérifier votre connexion.';
            break;
          case 'not-allowed':
            message = 'L\'accès au microphone a été refusé. Veuillez l\'autoriser dans les paramètres de votre navigateur.';
            break;
          case 'no-speech':
            message = 'Aucune parole n\'a été détectée. Veuillez réessayer.';
            break;
          default:
            message = 'Une erreur est survenue lors de la reconnaissance vocale.';
        }
        setError(message);
        setIsListening(false);
      };

      setRecognition(recognition);
    } else {
      setError('La reconnaissance vocale n\'est pas supportée par votre navigateur.');
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      setTranscript('');
      recognition.start();
    }
    setIsListening(!isListening);
  }, [isListening, recognition]);

  const clearTranscript = () => {
    setTranscript('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Assistant Vocal
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Parlez, je vous écoute
          </p>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={toggleListening}
              disabled={!recognition}
              className={`
                p-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl
                ${isListening 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-blue-500 hover:bg-blue-600'
                }
                ${!recognition && 'opacity-50 cursor-not-allowed'}
                transform hover:scale-105
              `}
              title={isListening ? 'Arrêter l\'enregistrement' : 'Commencer l\'enregistrement'}
            >
              {isListening ? (
                <MicOff className="w-8 h-8 text-white" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </button>

            {transcript && (
              <button
                onClick={clearTranscript}
                className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                title="Effacer le texte"
              >
                <RefreshCw className="w-8 h-8 text-gray-700" />
              </button>
            )}
          </div>

          <div className="relative">
            {isListening && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
              </div>
            )}
            <div className="min-h-[200px] bg-gray-50 rounded-lg p-6 text-gray-700 shadow-inner">
              {transcript || 'Appuyez sur le bouton du microphone et commencez à parler...'}
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            {isListening ? 
              'Écoute en cours... Parlez clairement' : 
              'Cliquez sur le microphone pour commencer l\'enregistrement'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;