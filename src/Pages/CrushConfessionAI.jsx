import { useState } from "react";
import { BsSendArrowUpFill } from "react-icons/bs";

const CrushConfessionAI = () => {
    const [response, setResponse] = useState("loremdfusd"); // Ho
    const [input, setInput] = useState(""); 
    const [submittedInput, setSubmittedInput] = useState(""); 

    
    const handleConfession = () => {
        
        setSubmittedInput(input);
        setResponse(`AI Response: We think "${input}" is quite adorable!`);
        setInput("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d9d0e8] p-4">
            <h2 className="text-4xl font-bold text-center text-[#3c3c3c] mb-2">Confession AI</h2>
            <p className="text-center text-gray-700 mb-6">
                Enter your confession, and let our AI generate a response!
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">

                {/* User Input Display */}
                {submittedInput && (
                    <div className="p-4 bg-gray-100 border-r-4 border-blue-500 rounded-md">
                        <div className="flex gap-2 items-center flex-row-reverse">
                        <img src="https://xoryogroup.com/wp-content/uploads/2023/03/REX_Give_me_a_profile_pic_of_a_black_AI_Robot_avatar_thats_cut__3e773ce3-b62d-4425-b7ce-1c40b2bc25e7.png" className="avatar w-9 rounded-full" alt="" />

                        <p className="text-gray-800">{submittedInput}</p>
                        </div>
                         
                    </div>
                )}

                {/* AI Response Display */}
                {response && (
                    <div className="mt-2 p-4 bg-gray-100 border-l-4 border-green-500 rounded-md">
                        <div className="flex gap-4 items-center">
                         <img src="https://xoryogroup.com/wp-content/uploads/2023/03/REX_Give_me_a_profile_pic_of_a_black_AI_Robot_avatar_thats_cut__3e773ce3-b62d-4425-b7ce-1c40b2bc25e7.png" className="avatar w-9 rounded-full" alt="" />
                        <p className="text-gray-800">{response}</p>
                        </div>
                    </div>
                )}

                {/* Confession Input Section */}
                <div className="flex items-center"> 
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your confession here..."
                        className="textarea textarea-bordered w-full h-14 py-3 border rounded-md resize-none"
                    />
                    <button
                        onClick={handleConfession}
                        className="bg-gray-800 text-white px-8 py-4 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-200 ml-2" // Added margin left for spacing
                        disabled={!input.trim()}
                    >
                        <BsSendArrowUpFill className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CrushConfessionAI;
