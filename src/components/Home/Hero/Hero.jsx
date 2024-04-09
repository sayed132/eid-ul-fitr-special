const Hero = () => {
  return (
    // <div>
    //   <div
    //     className="hero min-h-screen "
    //     style={{
    //       backgroundImage:
    //         "url(https://i.ibb.co/ygDDt98/18442.jpg)",
    //     }}
    //   >
    //     <div className="hero-overlay bg-opacity-60"></div>
    //     <div className="hero-content text-center text-neutral-content">
    //       <div className="max-w-md">
    //         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //         <p className="mb-5">
    //           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //           excepturi exercitationem quasi. In deleniti eaque aut repudiandae
    //           et a id nisi.
    //         </p>
    //         <button className="btn btn-primary">Get Started</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/ygDDt98/18442.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">What is the purpose of this site?</h1>
          <p className="py-6 leading-loose">
            এই ওয়েবসাইটটি ঈদের উদযাপন সম্পর্কে তথ্য সরবরাহ করার জন্য তৈরি করা
            হয়েছে। এখানে ঈদের ইতিহাস, ঐতিহ্য, রীতিনীতি, এবং বিশ্বের বিভিন্ন
            দেশে ঈদ কীভাবে উদযাপন করা হয় সে সম্পর্কে তথ্য পাওয়া যাবে। এছাড়াও,
            ওয়েবসাইটে ঈদের শুভেচ্ছা বার্তা, ঈদের খাবার, পোশাক, এবং ঈদের উপহার
            সম্পর্কে তথ্যও রয়েছে। আমাদের লক্ষ্য হল ঈদের উদযাপন সম্পর্কে সকল
            প্রয়োজনীয় তথ্য এক জায়গায় সরবরাহ করা।
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
