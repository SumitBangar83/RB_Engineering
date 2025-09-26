import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const productCategories = [
  {
    name: "Chocolate Making Machines",
    slug: "chocolate-making-machines",
    products: [
      {
        id: 1,
        name: "100 KPH Chocolate Moulding Machine",
        price: "₹5,00,000/Piece",
        capacity: "100 kg/hr",
        material: "Stainless Steel",
        image: "https://cdn.pixabay.com/photo/2016/11/29/03/17/chocolate-1867022_640.jpg"
      },
      {
        id: 2,
        name: "Chocolate Enrobing Machine",
        price: "₹3,50,000/Piece",
        capacity: "100 kg/hr",
        material: "SS 304",
        image: "https://images.pexels.com/photos/4109944/pexels-photo-4109944.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 9,
        name: "50L Chocolate Tempering Machine",
        price: "₹2,80,000/Piece",
        capacity: "50 Litres",
        material: "Stainless Steel",
        image: "https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 10,
        name: "12-Meter Chocolate Cooling Tunnel",
        price: "₹4,20,000/Piece",
        capacity: "120 kg/hr",
        material: "SS 304",
        image: "https://images.pexels.com/photos/4110006/pexels-photo-4110006.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 17,
        name: "500L Chocolate Conching Machine",
        price: "₹8,50,000/Piece",
        capacity: "500 Litres/batch",
        material: "Stainless Steel",
        image: "https://images.pexels.com/photos/7957648/pexels-photo-7957648.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 21,
        name: "Chocolate Ball Mill Refiner",
        price: "₹7,80,000/Piece",
        capacity: "150 kg/hr",
        material: "SS 316",
        image: "https://images.pexels.com/photos/8472935/pexels-photo-8472935.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 22,
        name: "Chocolate Storage & Melting Tank",
        price: "₹3,10,000/Piece",
        capacity: "1000 Litres",
        material: "Stainless Steel",
        image: "https://images.pexels.com/photos/2293433/pexels-photo-2293433.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 23,
        name: "One-Shot Chocolate Depositor",
        price: "₹6,25,000/Piece",
        capacity: "80 kg/hr",
        material: "SS 304",
        image: "https://images.pexels.com/photos/4109999/pexels-photo-4109999.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 24,
        name: "Chocolate Chip Making Machine",
        price: "₹4,90,000/Piece",
        capacity: "60 kg/hr",
        material: "Stainless Steel",
        image: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 25,
        name: "Automatic Chocolate Wrapping Machine",
        price: "₹5,50,000/Piece",
        capacity: "150 pieces/min",
        material: "Mild Steel Frame",
        image: "https://cdn.pixabay.com/photo/2018/01/23/04/18/conveyor-belt-3100212_640.jpg"
      }
    ]
  },
  {
    name: "Candy Making Machines",
    slug: "candy-making-machines",
    products: [
      {
        id: 3,
        name: "Automatic Toffee Making Machine",
        price: "₹4,75,000/Piece",
        capacity: "100 kg/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/7187383/pexels-photo-7187383.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 4,
        name: "Hard Candy Production Line",
        price: "₹12,00,000/Set",
        capacity: "200 kg/hr",
        automation: "Semi-Automatic",
        image: "https://images.pexels.com/photos/45239/production-line-machine-conveyor-belt-45239.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 11,
        name: "Lollipop Making & Wrapping Line",
        price: "₹8,50,000/Piece",
        capacity: "150 kg/hr",
        automation: "Fully Automatic",
        image: "https://cdn.pixabay.com/photo/2023/07/20/12/28/lolly-8139316_640.jpg"
      },
      {
        id: 12,
        name: "Pillow-Pack Candy Wrapping Machine",
        price: "₹3,80,000/Piece",
        capacity: "400 pieces/min",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/7957645/pexels-photo-7957645.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 18,
        name: "Candy Rope Sizer & Cutting Machine",
        price: "₹2,20,000/Piece",
        capacity: "300 kg/hr",
        automation: "Fully Automatic",
        image: "https://cdn.pixabay.com/photo/2016/10/26/22/27/lollipops-1773240_640.jpg"
      },
      {
        id: 26,
        name: "Automatic Candy Pulling Machine",
        price: "₹3,90,000/Piece",
        capacity: "50 kg/batch",
        automation: "Automatic",
        image: "https://images.pexels.com/photos/15289906/pexels-photo-15289906/free-photo-of-a-candy-maker-making-candy.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 27,
        name: "Microfilm Sugar Cooking System",
        price: "₹9,20,000/Set",
        capacity: "300 kg/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/7957656/pexels-photo-7957656.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 28,
        name: "Center-Filled Candy Machine",
        price: "₹6,50,000/Piece",
        capacity: "120 kg/hr",
        automation: "Semi-Automatic",
        image: "https://cdn.pixabay.com/photo/2017/02/16/19/33/sweets-2072445_640.jpg"
      },
      {
        id: 29,
        name: "Water-Jacketed Cooling Table",
        price: "₹1,50,000/Piece",
        capacity: "100 kg/batch",
        material: "SS 304 Top",
        image: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 30,
        name: "Chewing Gum Production Line",
        price: "₹22,00,000/Set",
        capacity: "150 kg/hr",
        automation: "Fully Automatic",
        image: "https://cdn.pixabay.com/photo/2016/08/23/12/37/bubble-gum-1614231_640.jpg"
      }
    ]
  },
  {
    name: "Roti Making Machines",
    slug: "roti-making-machines",
    products: [
      {
        id: 5,
        name: "Automatic Roti Making Machine",
        price: "₹2,50,000/Piece",
        capacity: "800 roti/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/8891963/pexels-photo-8891963.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 6,
        name: "Commercial Chapati Machine",
        price: "₹1,80,000/Piece",
        capacity: "600 chapati/hr",
        automation: "Semi-Automatic",
        image: "https://images.pexels.com/photos/15183570/pexels-photo-15183570/free-photo-of-man-preparing-chapatti-bread.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 13,
        name: "Automatic Puri Making Machine",
        price: "₹3,20,000/Piece",
        capacity: "1500 puri/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/10790312/pexels-photo-10790312.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 14,
        name: "50kg Dough Kneading Machine",
        price: "₹95,000/Piece",
        capacity: "50 kg/batch",
        automation: "Semi-Automatic",
        image: "https://images.pexels.com/photos/7957644/pexels-photo-7957644.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 19,
        name: "Automatic Paratha Making Machine",
        price: "₹4,50,000/Piece",
        capacity: "300 paratha/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/5695679/pexels-photo-5695679.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 31,
        name: "Dough Ball Cutting Machine",
        price: "₹1,20,000/Piece",
        capacity: "1200 balls/hr",
        automation: "Automatic",
        image: "https://images.pexels.com/photos/17751412/pexels-photo-17751412/free-photo-of-flour-on-a-wooden-table-with-dough-and-a-rolling-pin.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 32,
        name: "Dough Sheeter Machine",
        price: "₹2,10,000/Piece",
        capacity: "200 kg/hr",
        automation: "Semi-Automatic",
        image: "https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 33,
        name: "Khakhra Making Machine",
        price: "₹3,80,000/Piece",
        capacity: "20 kg/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/998725/pexels-photo-998725.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 34,
        name: "Conveyor Baking Oven",
        price: "₹5,50,000/Piece",
        capacity: "1000 roti/hr",
        automation: "Fully Automatic",
        image: "https://images.pexels.com/photos/8963473/pexels-photo-8963473.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 35,
        name: "Semi-Automatic Roti Press",
        price: "₹70,000/Piece",
        capacity: "400 roti/hr",
        automation: "Manual Press",
        image: "https://images.pexels.com/photos/15183578/pexels-photo-15183578/free-photo-of-indian-bread.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    name: "Fruit Jelly & Gummy Machines",
    slug: "fruit-jelly-machines",
    products: [
      {
        id: 7,
        name: "Fruit Jelly Cooking System",
        price: "₹10,00,000/Piece",
        capacity: "100 kg/hr",
        type: "Automatic",
        image: "https://images.pexels.com/photos/7957652/pexels-photo-7957652.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 8,
        name: "Gummy Candy Production Line",
        price: "₹15,00,000/Set",
        capacity: "150 kg/hr",
        type: "Fully Automatic",
        image: "https://cdn.pixabay.com/photo/2017/02/12/14/01/gummy-bears-2060100_640.jpg"
      },
      {
        id: 15,
        name: "Servo-Driven Jelly Depositing Machine",
        price: "₹8,50,000/Piece",
        capacity: "120 kg/hr",
        type: "Fully Automatic",
        image: "https://images.pexels.com/photos/4110002/pexels-photo-4110002.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 16,
        name: "Jelly Starch Mogul System",
        price: "₹35,00,000/Set",
        capacity: "300 kg/hr",
        type: "Fully Automatic",
        image: "https://images.pexels.com/photos/539447/pexels-photo-539447.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 20,
        name: "Lab Scale Jelly Cooking System",
        price: "₹4,00,000/Piece",
        capacity: "20 kg/batch",
        type: "Semi-Automatic",
        image: "https://cdn.pixabay.com/photo/2014/11/29/18/43/ecommerce-550703_640.jpg"
      },
      {
        id: 36,
        name: "Jelly Mould Washing Machine",
        price: "₹3,50,000/Piece",
        capacity: "200 moulds/hr",
        type: "Automatic",
        image: "https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 37,
        name: "Sugar Sanding & Oiling Drum",
        price: "₹2,80,000/Piece",
        capacity: "250 kg/hr",
        type: "Automatic",
        image: "https://cdn.pixabay.com/photo/2020/05/19/13/11/jelly-5190989_640.jpg"
      },
      {
        id: 38,
        name: "Starch Conditioning System",
        price: "₹7,00,000/Set",
        capacity: "500 kg/hr",
        type: "Automatic",
        image: "https://images.pexels.com/photos/159875/pexels-photo-159875.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 39,
        name: "Vitamin Gummy Dosing System",
        price: "₹9,50,000/Piece",
        capacity: "100 kg/hr",
        type: "Precision Dosing",
        image: "https://cdn.pixabay.com/photo/2016/09/10/14/06/gummy-bear-1659178_640.jpg"
      },
      {
        id: 40,
        name: "Jelly & Gummy Packaging Machine",
        price: "₹6,00,000/Piece",
        capacity: "60 packs/min",
        type: "Multi-head Weigher",
        image: "https://images.pexels.com/photos/7957647/pexels-photo-7957647.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  }
];

const ProductCategories = () => {
  return (
    <div className="bg-gray-50 py-12">
      {productCategories.map((category) => (
        <section key={category.slug} className="mb-16">
          {/* Category Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {category.name}
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Products
              </button>
            </div>
          </div>

          {/* Products Slider */}
          <div className="relative   m-auto " style={{maxWidth: '1600px'}}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: `.next-${category.slug}`,
                prevEl: `.prev-${category.slug}`,
              }}
              pagination={{
                clickable: true,
                el: `.pagination-${category.slug}`,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24
                }
              }}
              autoplay={{delay: 3000}}
              className="px-4 sm:px-6 lg:px-8"
            >
              {category.products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-xl">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          New
                        </span>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>
                      
                      <p className="text-2xl font-extrabold text-red-600 mb-4">
                        {product.price}
                      </p>

                      {/* Specifications */}
                      <div className="space-y-3 mb-6 flex-1">
                        {product.capacity && (
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">Capacity:</span>
                            <span className="text-sm font-semibold text-gray-900">{product.capacity}</span>
                          </div>
                        )}
                        {product.material && (
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">Material:</span>
                            <span className="text-sm font-semibold text-gray-900">{product.material}</span>
                          </div>
                        )}
                        {product.automation && (
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">Automation:</span>
                            <span className="text-sm font-semibold text-gray-900">{product.automation}</span>
                          </div>
                        )}
                        {product.type && (
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">Type:</span>
                            <span className="text-sm font-semibold text-gray-900">{product.type}</span>
                          </div>
                        )}
                      </div>

                      {/* Inquiry Button - Always visible */}
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        Send Inquiry
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className={`flex justify-center items-center mt-8 space-x-4 pagination-${category.slug}`}></div>
            
            <button className={`prev-${category.slug} absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className={`next-${category.slug} absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductCategories;