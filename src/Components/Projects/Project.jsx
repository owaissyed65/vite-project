import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectComponent from "./ProjectComponent";
import { Pagination } from "swiper";
import { DivContainer } from "./ProjectStyle";
import thumbnail from "../../images/thumbnail.jpeg";
import newsapp from '../../images/newsapp.jpg';
const Project = () => {
  return (
    <DivContainer>
      <h1 id="projects" style={{ letterSpacing: '1px' }}>My <span style={{ color: '#FF6F61', letterSpacing: '1px' }}></span></h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectComponent
            image={thumbnail}
            title="Ecommerce Website"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio? Mollitia autem sapiente dolore ratione, delectus laboriosam natus asperiores nobis quod labore facilis illo distinctio? Perspiciatis est consequuntur "
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectComponent
            image={thumbnail}
            title="Notes App"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio? Mollitia autem sapiente dolore ratione, delectus laboriosam natus asperiores nobis quod labore facilis illo distinctio? Perspiciatis est consequuntur "
          />
        </SwiperSlide>
        <SwiperSlide><ProjectComponent
          image={newsapp}
          title="News App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio? Mollitia autem sapiente dolore ratione, delectus laboriosam natus asperiores nobis quod labore facilis illo distinctio? Perspiciatis est consequuntur "
        /></SwiperSlide>
      </Swiper>
    </DivContainer>
  );
};

export default Project;
