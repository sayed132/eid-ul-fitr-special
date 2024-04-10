const Hero = () => {
  return (
   

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/ygDDt98/18442.jpg"
          className=" w-[90%] lg:max-w-sm rounded-lg shadow-2xl"
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
