import React, { useRef } from "react";
import { Mic } from "lucide-react";
const AudioRecorder = () => {
  const fileInputRef = useRef(null);

  const startRecording = () => {
    if (window !== undefined) {
      recognitionRef.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
    }
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log("it stopped");
      onStopRecording(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Error during speech recognition:", event.error);
    };

    recognitionRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    const handleButtonClick = () => {
      // Trigger file input click
      fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        console.log(file);
        formData.append("file", file);

        fetch("http://0.0.0.0:8000/chat/voice-chat", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              return response.json().then((errorData) => {
                throw new Error(`Error: ${errorData.message}`);
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    };

    return (
      <>
        <button size="icon" variant="secondary" onClick={handleButtonClick}>
          <div className="p-2">
            <Mic className="h-5 w-5" />
          </div>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </>
    );
  };
};

export default AudioRecorder;
