import React from "react";

const Service = () => {
  const services= [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
         {
          services.map((Element)=>
          {
            return (
              <div className="item" key={Element.id}>
                <h3>{Element.title}</h3>
                <img src={Element.url} alt={Element.id} />
              </div>
            )
          })
         }
        </div>
      </div>
    </>
  );
};

export default Service;