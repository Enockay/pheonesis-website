import React from 'react';
import Africa from "../../assets/africa-kenya-logo.png";
import phoenix from "../../assets/Phoenix-safaris-logowhite.png";

const testimonials = [
  {
    company: 'Phoenix Safaris',
    review:
      'Happy to write a review on our experience working with Phronesis Tour Logistics especially during the high season. They have proved to be a reliable partner providing qualified and highly experienced guides even on short notice bookings. Our clients were happy. It\'s been a pleasure working with you.',
    logo: Africa,
    rating: 5,
    time: 'a month ago',
  },
  {
    company: 'Africa Kenya Safaris Ltd',
    review:
      'Great safari Land Cruiser Jeeps company to hire from. Well maintained and equipped Safari Jeeps with excellent driver guides. We have had a good experience with Phronesis company during the tourism peak season.',
    logo: phoenix,
    rating: 5,
    time: 'a month ago',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4 ">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} Logo`}
                  className="h-12 w-12 rounded-full bg-gray-900"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.company}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.time}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {testimonial.review}
              </p>

              {/* Rating Section */}
              <div className="flex space-x-1">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.128 2.277a1 1 0 00-.364 1.118l1.188 3.674c.3.921-.755 1.688-1.539 1.118L10 13.011l-3.128 2.277c-.783.57-1.838-.197-1.539-1.118l1.188-3.674a1 1 0 00-.364-1.118L3.029 8.401c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.188-3.674z" />
                    </svg>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
