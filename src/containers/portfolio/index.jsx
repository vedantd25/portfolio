import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageZero from "../../images/image0.jpg";
import ImageOne from "../../images/download.png";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { Link } from "react-router-dom";





const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [clicked, setClicked] = useState(false);
  const portfolioData = [
    {
      id: 2,
      name: "Chat-App",
      image: ImageZero,
      link: "https://chat-f029c.web.app/",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "",
      image: ImageOne,
    },
    {
      id: 2,
      name: "NOSWO",
      image: ImageThree,
      link: "https://github.com/vedantd25/noswo",
    },
  ];
  
  const filterData = [
    {
      filterId: 1,
      label: "All",
    },
    {
      filterId: 2,
      label: "Developement",
    },
    {
      filterId: 3,
      label: "Design",
    },
  ];

  const handleButtonClick = () => {
    // Open the link when the button is clicked
    window.open(portfolioData.link);
    // Set the clicked state to true (optional, if you want to track that the button was clicked)
    setClicked(true);
  };

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay" >
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <Link to={item.link}>
                    <button>
                      Visit
                    </button>
                      </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
