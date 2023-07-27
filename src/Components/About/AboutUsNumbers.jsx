import { useEffect } from 'react';

function AboutUsNumbers() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Umbral de intersección del 50%
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let valueDisplay = entry.target;
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute('data-value'));
          let interval = 900;
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(() => {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);

          observer.unobserve(valueDisplay);
        }
      });
    }, observerOptions);

    let valueDisplays = document.querySelectorAll('.p-changes');
    valueDisplays.forEach((valueDisplay) => {
      observer.observe(valueDisplay);
    });
  }, []);

return (
  <div className="aboutUsNumbers">
    <h5>Numbers Speak For Themselves!</h5>
    <div>
      <p className="p-changes" data-value="820">
      0
    </p>
    <p>Curated Products</p>
    </div>
    <div>
      <p className="p-changes" data-value="480">
      0
    </p>
    <p>Curated Products</p>
    </div>
    <div>
      <p className="p-changes" data-value="40">
      0
    </p>
    <p>Curated Categories</p>
    </div>
    
  </div>
);
}

export default AboutUsNumbers;