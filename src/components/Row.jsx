import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4"> {title} </h2>
      <div className="relative flex items-center group">
        {/* <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        /> */}
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        {/* <Slider {...settings}> */}
        {/* <MdChevronRight
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          /> */}
        {/* </Slider> */}
      </div>
    </>
  );
};

export default Row;
