(() => {
  

 
   
    gsap.to("#logo", { y: 20, yoyo: true, repeat: -1, ease: "power1.inOut" });
  
 
    gsap.timeline({ repeat: -1 })
    
    .to("#heroimage", { x: 50, duration: 5 }, "-=0.5")
    .to("#heroimage", { rotation: 0, x: 0, duration: 1 }, "-=0.5");






    


    (function(){
        "use strict";
    
    
    var imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;
        //The HTMLElement.offsetWidth read-only property returns the layout width of an element. 
    
    function onDown() {
      dragging = true;
    }
    
    function onUp() {
      dragging = false;
    }
    
    function onMove(event) {
      if(dragging===true) {
        var x = event.clientX - imageCon.getBoundingClientRect().left;
        //The MouseEvent.clientX read-only property provides the horizontal coordinate within the application's client area at which the event occurred
        //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
        //X-coordinate, relative to the viewport origin, of the left of the rectangle box. Read only
        console.log(event.clientX);
        console.log(imageCon.getBoundingClientRect().left);
      //need logic to keep slider in box
        if(x < min) { //if x less than 0
          x = min;    //set x = 0
        }
       else if(x > max) { //otherwise if x is greater than 900
          x = max-4; //set x to equal the max width minus 2 (width of slider)
        }
        drag.style.left = x + 'px';
        left.style.width = x + 'px';
      }
    }
    
    drag.addEventListener('mousedown', onDown, false); 
    //add listener to actual drag div, if user clicks on it
    drag.addEventListener('touchstart', onDown);
    document.body.addEventListener('mouseup', onUp, false);
    document.body.addEventListener('mo', onUp);
    document.body.addEventListener('mousemove', onMove, false);
  document.body.addEventListener('touchmove', onMove);
    
    })();




//image scrollcode





    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 1080; //how many still frames do we have?
    const images = []; //an array to hold all of our images
    //create an object literal with a property frame to hold the current frame
    const buds = {
        frame: 0
    };

    for (let i=0; i<frameCount; i++) {
        //console.log(i);
        //const img = new Image();
        const img = document.createElement("img");
        //need to recreate a string: images/explode_0001.webp
        img.src = `images/imagesssss_${(i+1).toString().padStart(5, '0')}.jpg`;
        images.push(img);
    }
    //console.table(images)

    //Not actually aniamting a DOM element, but rather an object
    //which contains a frame count
    gsap.to(buds, {
        frame: 1080,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: true
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        // console.log(buds.frame);
        //console.log(images[buds.frame]);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

    
    /*231-187.5 = 43.5.  43.5 is how much of the car is left showing*/
    
    /*
    The MouseEvent.clientX read-only property provides the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientX value of 0, regardless of whether the page is scrolled horizontally.
    */


    (function(){

      let button = document.querySelector("#button");
      let burgerCon = document.querySelector("#burger-con");
    
      function hamburgerMenu() {
        burgerCon.classList.toggle("slide-toggle");
        button.classList.toggle("expanded");
      };
    
      button.addEventListener("click", hamburgerMenu, false);		
    })();
  



    document.addEventListener('DOMContentLoaded', function() {
      // Get the earbud path element
      var earbudPath = document.getElementById('earbud-path');
  
      // Function to handle scroll events
      function handleScroll() {
          // Calculate the height of the earbud path based on the scroll position
          var scrollHeight = Math.min(window.scrollY, window.innerHeight * 0.8);
  
          // Update the control point in the path to modify the shape
          earbudPath.setAttribute('d', `M50 ${(80 + scrollHeight)} C 50 ${(90 + scrollHeight)}, 40 ${(90 + scrollHeight)}, 40 ${(80 + scrollHeight)}`);
  
          // Change the fill color based on the scroll position
          var color = calculateColor(scrollHeight, window.innerHeight * 0.8);
          earbudPath.style.fill = color;
      }
  
      // Attach the handleScroll function to the scroll event
      window.addEventListener('scroll', handleScroll);
  
      // Function to calculate color based on scroll position
      function calculateColor(scrollHeight, maxHeight) {
          // Normalize scrollHeight to be between 0 and 1
          var normalizedScroll = scrollHeight / maxHeight;
  
          // Use a gradient from blue to red based on the normalized scroll position
          var red = Math.round(255 * normalizedScroll);
          var blue = Math.round(255 * (1 - normalizedScroll));
  
          // Convert RGB values to a CSS color string
          return `rgb(${red}, 0, ${blue})`;
      }
  });








    
})();