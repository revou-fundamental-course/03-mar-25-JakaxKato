document.addEventListener('DOMContentLoaded', function() {
  // Image Slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;

  // Initialize slider
  showSlide(currentSlide);

  // Previous button
  prevBtn.addEventListener('click', function() {
      currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
      showSlide(currentSlide);
  });

  // Next button
  nextBtn.addEventListener('click', function() {
      currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
      showSlide(currentSlide);
  });

  // Dot navigation
  dots.forEach(dot => {
      dot.addEventListener('click', function() {
          currentSlide = parseInt(this.getAttribute('data-index'));
          showSlide(currentSlide);
      });
  });

  // Auto slide (every 5 seconds)
  setInterval(function() {
      currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
      showSlide(currentSlide);
  }, 5000);

  function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Deactivate all dots
      dots.forEach(dot => {
          dot.classList.remove('active');
      });
      
      // Show current slide and activate current dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
  }

  // Message Form
  const messageForm = document.getElementById('messageForm');
  const previewName = document.getElementById('preview-name');
  const previewBirthdate = document.getElementById('preview-birthdate');
  const previewGender = document.getElementById('preview-gender');
  const previewMessage = document.getElementById('preview-message');
  const currentTimeElement = document.getElementById('current-time');

  // Show current time
  function updateCurrentTime() {
      const now = new Date();
      const options = { 
          weekday: 'short', 
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric',
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit',
          timeZoneName: 'short'
      };
      currentTimeElement.textContent = now.toLocaleString('id-ID', options);
  }

  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);

  // Live preview of form inputs
  document.getElementById('name').addEventListener('input', function() {
      previewName.textContent = this.value;
  });

  document.getElementById('birthdate').addEventListener('change', function() {
      const date = new Date(this.value);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      previewBirthdate.textContent = `${day}/${month}/${year}`;
  });

  const genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach(radio => {
      radio.addEventListener('change', function() {
          previewGender.textContent = this.value;
      });
  });

  document.getElementById('message').addEventListener('input', function() {
      previewMessage.textContent = this.value;
  });

  // Form submission
  messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Pesan berhasil dikirim!');
  });
}); 