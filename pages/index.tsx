import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import BottomNavigation from '../components/common/BottomNavigation'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          안녕하세요 <strong>피플님!</strong>
          <br />
          오늘도 건강하고 행복하세요!
        </div>

        <article>
          <div className={styles.swiper_title}>오늘의 영웅들</div>
          <Swiper
            autoHeight={true}
            autoplay={true}
            loop={true}
            aria-details="today-heroes"
            className="swiper_container"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>

          <div className={styles.swiper_title}>감사 메세지</div>
          <Swiper
            autoHeight={true}
            autoplay={true}
            loop={true}
            className="swiper_container"
            aria-details="thank-message"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>

          <div className={styles.swiper_title}>피플의 사연</div>
          <Swiper
            autoHeight={true}
            autoplay={true}
            loop={true}
            className="swiper_container"
            aria-details="pple-story"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>

          <div className={styles.swiper_title}>공지사항</div>
          <Swiper
            autoHeight={true}
            autoplay={true}
            loop={true}
            className="swiper_container"
            aria-details="events"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </article>
      </main>

      <BottomNavigation />
    </div>
  )
}

export default Home
