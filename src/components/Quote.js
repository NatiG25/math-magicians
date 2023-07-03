import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { EffectCoverflow, Pagination } from 'swiper';

// Import images
import cube from '../images/rubics.png';
// import next from '../images/next.png';
// import prev from '../images/prev.png';
import albert from '../images/mathematicians/AlbertEinstein.jpeg';

export default function Quote() {
  const quotes = [
    {
      id: 1,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc', // TODO fix the img src link
      description: `MATHEMATICS IS NOT ABOUT NUMBERS, EQUATIONS, COMPUTATIONS, OR
      ALGORITHMS: IT IS ABOUT UNDERSTANDING.`,
      mathematician: 'WILLIAM PAUL THURSTON',
    },
    {
      id: 2,
      img: albert,
      description:
        'PURE MATHEMATICS IS, IN ITS WAY, THE POETRY OF LOGICAL IDEAS.',
      mathematician: 'ALBERT EINSTEIN',
    },
    {
      id: 3,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'THERE ARE TWO WAYS TO DO GREAT MATHEMATICS. THE FIRST IS TO BE SMARTER THAN EVERYBODY ELSE. THE SECOND WAY IS TO BE STUPIDER THAN EVERYBODY ELSE BUT PERSISTENT.',
      mathematician: 'RAOUL BOTT',
    },
    {
      id: 4,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'MATHEMATICS IS NOT A CAREFUL MARCH DOWN A WELL-CLEARED HIGHWAY, BUT A JOURNEY INTO A STRANGE WILDERNESS, WHERE THE EXPLORERS OFTEN GET LOST.',
      mathematician: 'RONALD GRAHAM',
    },
    {
      id: 5,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'THE STUDY OF MATHEMATICS, LIKE THE NILE, BEGINS IN MINUTENESS BUT ENDS IN MAGNIFICENCE.',
      mathematician: 'CHARLES CALEB COLTON',
    },
    {
      id: 6,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'MATHEMATICS IS THE QUEEN OF SCIENCES AND ARITHMETIC IS THE QUEEN OF MATHEMATICS.',
      mathematician: 'CARL FRIEDRICH GAUSS',
    },
  ];
  return (
    <>
      <Swiper
        effect="coverflow"
        // cssMode={true}
        grabCursor
        centeredSlides
        // loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        pagination
        // navigation={{
        //   nextEl: '.swiper-btn-next',
        //   prevEl: '.swiper-btn-prev',
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <ul className="quote-container">
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id} className="swiper-slide">
              <li className="quote-item">
                <img
                  src={quote.img}
                  className="quote-img"
                  alt="Mathematician"
                />
                <h3 className="quote-title">{quote.mathematician}</h3>
                <p className="quote-description">{quote.description}</p>
                <img src={cube} alt="cube" className="quote-img" />
              </li>
            </SwiperSlide>
          ))}
        </ul>
        {/* <div className="slider-controller">
          <div className="swiper-btn-prev slider-arrow">
            <img src={prev} alt="prev btn" />
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-btn-next slider-arrow">
            <img src={next} alt="next btn" />
          </div>
        </div> */}
      </Swiper>
    </>
  );
}
