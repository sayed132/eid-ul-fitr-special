import { useState } from "react";
import eidLaw from "../../../Data/EidLaw.json";

const EidLaw = () => {
  // add your array of object data

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/ygDDt98/18442.jpg)",
      }}
    >
      <div className="flex justify-center hero-overlay bg-opacity-50 rounded-md">
        <div className=" max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
          <h1 className="text-3xl font-semibold text-white">বিশ্বব্যাপী ঈদ উদযাপনের বিভিন্ন রীতি</h1>
          <p className="text-white leading-relaxed text-lg font-medium">
            ঈদ মানেই আনন্দ, ঈদ বলতেই চোখের সামনে ভেসে আসে আনন্দময় একটা দিনের
            ছবি। সকালের সেমাই বা দুপুরে মায়ের হাতে তৈরি পোলাও-কোর্মা। এ আমাদের
            চিরচেনা ছবি। কিন্তু সারা বিশ্বেই কি একইভাবে পালিত হয় ঈদ? আসলে না।
            যদিও খুশির আমেজ, জামায়াতের সঙ্গে নামাজ আদায়ের বিষয়টি প্রচলিত আছে সব
            দেশেই। তবে অন্যান্য আয়োজনে বিশ্বের বিভিন্ন দেশের রীতি-নীতি একদমই
            আলাদা। তাহলে চলুন একঝলক দেখে আসা যাক বিশ্বব্যাপী ঈদ পালনের নানা
            চিত্র।
          </p>
          {/* maping each accordion  */}
          {eidLaw.map((arr, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                <span>{arr.id}</span>
              </div>
              <div className="w-10 h-[2px] bg-[#355E72] relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                <span className="bg-[#355E72] w-10 h-1"></span>
              </div>
              {/* main accordion div  */}
              <div>
                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                  <h1 className="text-[#355E72] text-xl text-center">
                    {arr.title}
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                    isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                      {arr.details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EidLaw;
