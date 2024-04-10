const EidHistory = () => {
  return (
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row">
    //     <img
    //       src="https://i.ibb.co/ygDDt98/18442.jpg"
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div>
    //       <h1 className="text-5xl font-bold">ঈদের ইতিহাস</h1>
    //       <p className="py-6">
    //         {` ঈদুল ফিতর, যার অর্থ "উপবাস ভাঙার উৎসব", ইসলাম ধর্মের অন্যতম
    //         গুরুত্বপূর্ণ ধর্মীয় উৎসব। এটি রমজান মাসের দীর্ঘ এক মাস রোজা রাখার
    //         পর পালিত হয়। ঈদের ইতিহাস ও তাৎপর্য সম্পর্কে জানতে হলে আমাদের
    //         ইসলামের ইতিহাসে ফিরে যেতে হবে।`}
    //       </p>

    //       <h3 className="py-6">{` প্রাক-ইসলামী যুগ:`}</h3>
    //       <p className="py-6">{`ইসলামের পূর্বে আরবদের মধ্যে "নওরোজ" ও "মেহেরজান" নামে দুটি উৎসব পালিত হত। নওরোজ ছিল নববর্ষ উদযাপন এবং মেহেরজান ছিল বসন্ত উৎসব। এই উৎসবগুলোতে মদ্যপান, গান বাজনা, নাচ, এবং অশ্লীল কাজকর্মের মিশ্রণ ছিল।`}</p>

    //       <h3 className="py-6">{`ইসলামের আবির্ভাব:`}</h3>
    //       <p className="py-6">{`ইসলামের আবির্ভাবের পর নবী মুহাম্মদ (সাঃ) এই দুটি উৎসব বন্ধ করে দেন এবং এর পরিবর্তে ঈদুল ফিতর ও ঈদুল আযহা প্রবর্তন করেন।`}</p>

    //       <h3 className="py-6">{`ঈদুল ফিতরের প্রথম দিন:`}</h3>
    //       <p className="py-6">{`ইতিহাসে ঈদুল ফিতরের প্রথম দিন নির্ধারণের ঘটনা বেশ আকর্ষণীয়। হিজরি 2 সালে রমজান মাস শেষ হওয়ার পর নবী মুহাম্মদ (সাঃ) সাহাবীদের সাথে চাঁদ দেখার জন্য অপেক্ষা করছিলেন। সে সময় একজন সাহাবী এসে জানান যে তিনি গ্রামাঞ্চলে চাঁদ দেখেছেন। নবী (সাঃ) ঐ দিনকে ঈদের দিন হিসেবে ঘোষণা করেন এবং সকালে ঈদের নামাজ পড়ার নির্দেশ দেন।`}</p>

    //       <h3 className="py-6">{`ঈদের তাৎপর্য:`}</h3>
    //       <p className="py-6">{`ঈদুল ফিতর কেবল একটি আনন্দের উৎসব নয়, বরং এর ধর্মীয় তাৎপর্যও রয়েছে। ঈদের দিন আল্লাহ্ তায়ালা তাঁর বান্দাদের ক্ষমা করে দেন এবং তাদের পাপ ধুয়ে ফেলেন। ঈদ মানুষকে ধৈর্য, সহনশীলতা, দানশীলতা, এবং ভ্রাতৃত্ববোধের শিক্ষা দেয়।`}</p>

    //       <h3 className="py-6">{`উপসংহার:`}</h3>
    //       <p className="py-6">{`ঈদুল ফিতর ইসলাম ধর্মের একটি গুরুত্বপূর্ণ ধর্মীয় উৎসব যা আনন্দ, ধর্মীয়তা, এবং সামাজিক মেলবন্ধনের এক অপূর্ব মিশ্রণ। ঈদের এই মহান আনন্দে সকলের অংশগ্রহণই ঈদের প্রকৃত তাৎপর্য বহন করে।`}</p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/ygDDt98/18442.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 rounded-md"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md py-10">
          <h1 className="text-5xl font-bold">ঈদের ইতিহাস</h1>
          <p className="py-6">
            {` ঈদুল ফিতর, যার অর্থ "উপবাস ভাঙার উৎসব", ইসলাম ধর্মের অন্যতম
            গুরুত্বপূর্ণ ধর্মীয় উৎসব। এটি রমজান মাসের দীর্ঘ এক মাস রোজা রাখার
            পর পালিত হয়। ঈদের ইতিহাস ও তাৎপর্য সম্পর্কে জানতে হলে আমাদের
            ইসলামের ইতিহাসে ফিরে যেতে হবে।`}
          </p>

          <h3 className="pt-2 text-3xl font-bold">{` প্রাক-ইসলামী যুগ:`}</h3>
          <p className="py-6">{`ইসলামের পূর্বে আরবদের মধ্যে "নওরোজ" ও "মেহেরজান" নামে দুটি উৎসব পালিত হত। নওরোজ ছিল নববর্ষ উদযাপন এবং মেহেরজান ছিল বসন্ত উৎসব। এই উৎসবগুলোতে মদ্যপান, গান বাজনা, নাচ, এবং অশ্লীল কাজকর্মের মিশ্রণ ছিল।`}</p>

          <h3 className="pt-2 text-3xl font-bold">{`ইসলামের আবির্ভাব:`}</h3>
          <p className="py-6">{`ইসলামের আবির্ভাবের পর নবী মুহাম্মদ (সাঃ) এই দুটি উৎসব বন্ধ করে দেন এবং এর পরিবর্তে ঈদুল ফিতর ও ঈদুল আযহা প্রবর্তন করেন।`}</p>

          <h3 className="pt-2 text-3xl font-bold">{`ঈদুল ফিতরের প্রথম দিন:`}</h3>
          <p className="py-6">{`ইতিহাসে ঈদুল ফিতরের প্রথম দিন নির্ধারণের ঘটনা বেশ আকর্ষণীয়। হিজরি 2 সালে রমজান মাস শেষ হওয়ার পর নবী মুহাম্মদ (সাঃ) সাহাবীদের সাথে চাঁদ দেখার জন্য অপেক্ষা করছিলেন। সে সময় একজন সাহাবী এসে জানান যে তিনি গ্রামাঞ্চলে চাঁদ দেখেছেন। নবী (সাঃ) ঐ দিনকে ঈদের দিন হিসেবে ঘোষণা করেন এবং সকালে ঈদের নামাজ পড়ার নির্দেশ দেন।`}</p>

          <h3 className="pt-2 text-3xl font-bold">{`ঈদের তাৎপর্য:`}</h3>
          <p className="py-6">{`ঈদুল ফিতর কেবল একটি আনন্দের উৎসব নয়, বরং এর ধর্মীয় তাৎপর্যও রয়েছে। ঈদের দিন আল্লাহ্ তায়ালা তাঁর বান্দাদের ক্ষমা করে দেন এবং তাদের পাপ ধুয়ে ফেলেন। ঈদ মানুষকে ধৈর্য, সহনশীলতা, দানশীলতা, এবং ভ্রাতৃত্ববোধের শিক্ষা দেয়।`}</p>

          <h3 className="pt-2 text-3xl font-bold">{`উপসংহার:`}</h3>
          <p className="py-6">{`ঈদুল ফিতর ইসলাম ধর্মের একটি গুরুত্বপূর্ণ ধর্মীয় উৎসব যা আনন্দ, ধর্মীয়তা, এবং সামাজিক মেলবন্ধনের এক অপূর্ব মিশ্রণ। ঈদের এই মহান আনন্দে সকলের অংশগ্রহণই ঈদের প্রকৃত তাৎপর্য বহন করে।`}</p>
          <button className="bg-sky-600 rounded-md mt-10 text-white font-bold text-lg overflow-hidden group">
              <span className="inline-block bg-sky-400 px-[10px] py-4 after:content-['ঈদ'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500 after:bg-sky-900">
                ঈদ
              </span>
              <span className="inline-block bg-sky-500 px-[10px] py-4 after:content-['সালামি'] after:bg-sky-800 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500 ">
                সালামি
              </span>
              <span className="inline-block bg-sky-600 px-[10px] py-4 after:content-['দিতে'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500 after:bg-sky-700">
                না
              </span>
              <span className="inline-block bg-sky-700 px-[10px] py-4 after:content-['বাটনে'] after:bg-sky-600 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">
                দিলে
              </span>
              <span className="inline-block bg-sky-800 px-[10px] py-4 after:content-['ক্লিক'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500 after:bg-sky-500">
                ভুতে
              </span>
              <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['করো'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500 after:bg-sky-400">
                ধরবে
              </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default EidHistory;
