import React from 'react';

const benefits = [
  {
    title: 'Improved Cardiovascular Health',
    description: 'Our cardio equipment helps improve heart health and endurance.',
    image: 'https://i.ibb.co/LZPgtC5/download-12.jpg'
  },
  {
    title: 'Enhanced Strength',
    description: 'Build muscle and strength with our high-quality weights and machines.',
    image: 'https://i.ibb.co/6sQ7bqp/download-13.jpg'
  },
  {
    title: 'Better Flexibility',
    description: 'Achieve greater flexibility and relaxation with our yoga and Pilates gear.',
    image: 'https://i.ibb.co/kx82Kfy/download-14.jpg'
  },
  {
    title: 'Convenient Workouts',
    description: 'Our accessories make your workouts more effective and convenient.',
    image: 'https://i.ibb.co/SBNXPNt/download-15.jpg'
  }
];

const BenefitsSection = () => {
  return (
    




    <section className="bg-white ">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-white">
        <div className="mb-16 text-center">
          <h4 className="text-base text-[#1E2128] font-semibold tracking-wide uppercase">
          Benefits
          </h4>
          <p className="mt-2 text-5xl lg:text-5xl font-semibold tracking-tight text-[#1E2128]">
          Benefits of Our Products
          </p>
        </div>



 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
             <img
               className="h-32 w-32 mx-auto mb-4"
                 src={benefit.image}
             alt={benefit.title}
             />
               <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              <p className="mt-4 text-gray-600">{benefit.description}</p>
           </div>
         ))}
         </div>









      
      </div>
    </div>
  </section>





  );
};

export default BenefitsSection;
