const testimonials = [
  {
    image: 'images/image-tanya.jpg',
    review:
      ' I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
    personName: 'Tanya Sinclair',
    career: 'UX Engineer'
  },
  {
    image: 'images/image-john.jpg',
    review:
      ' If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
    personName: 'John Tarkpor',
    career: 'Junior Front-end Developer'
  }
]

const testimonialImage = document.querySelector('.image')
const testimonialReview = document.querySelector('.review')
const testimonialName = document.querySelector('.name')
const testimonialCareer = document.querySelector('.career')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let cont = 0

next.addEventListener('click', () => {
  cont++
  if (cont === testimonials.length) {
    cont = 0
  }
  changeTestimonial()
})

prev.addEventListener('click', () => {
  cont--
  if (cont < 0) {
    cont = testimonials.length - 1
  }
  changeTestimonial()
})

const changeTestimonial = () => {
  testimonialImage.src = testimonials[cont].image
  testimonialReview.innerHTML = testimonials[cont].review
  testimonialName.innerHTML = testimonials[cont].personName
  testimonialCareer.innerHTML = testimonials[cont].career
}
