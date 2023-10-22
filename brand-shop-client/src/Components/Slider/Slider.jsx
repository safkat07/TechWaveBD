

const Slider = () => {
    
    
    return (
       <div className="max-w-7xl  mx-auto">
        <div className="carousel md:ml-44 md:w-[70%]">
  <div id="item1" className="carousel-item h-[50%] w-full">
    <img src="https://i.ibb.co/YTwB8NQ/Apple-i-Phone-15-Pro-lineup-hero-230912-Full-Bleed-Image-jpg-large.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item h-[50%] w-full">
    <img src="https://i.ibb.co/Zdc6ZWX/Pixel-8-Pro.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item h-[50%] w-full">
    <img src="https://i.ibb.co/pfqxDTw/Samsung-Galaxy-S23-Image-1.png" className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 

</div>
       </div>
    );
};

export default Slider;