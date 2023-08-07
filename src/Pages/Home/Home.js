import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Cards";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
          title="Online Experiences"
          description="Unique activity to do from home with boardway cast and crews."
        />
        <Card
          src="https://media.istockphoto.com/id/477001108/photo/northern-lights-over-glass-igloos-in-finland.webp?b=1&s=170667a&w=0&k=20&c=CDLiIEJfTL8ahWffje5mlPd4KXlld3nBAbtuO76BqEw="
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Entire homes"
          description="Comfortable private places, with room for friends or families."
        />
        <Card
          src="https://images.unsplash.com/photo-1614054145339-4a25fd7673a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluJTIwaG90ZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="Adventure"
          description="Unearth Extraordinary Stays Beyond Imagination."
        />
      </div>
      <div className="home_section-2">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-824274983452380073/original/ded7d0e5-9acd-4e36-9b5d-dacc397e3c82.jpeg?im_w=720"
          title="Kochi, India"
          description="New seasonal lake {monsoon) "
          price="Rs: 5,563/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-52329661/original/800aa635-16b7-4ceb-adbc-3d2445edd9dd.jpeg?im_w=720"
          title="Tamilnadu, India"
          description="Near KallarDam"
          price="Rs: 6,624/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-859016886623053902/original/b65a17ec-75f3-4cfb-8e75-535002118df3.jpeg?im_w=720"
          title="Tamilnadu, India"
          description="11 km walk to Naini falls"
          price="Rs: 7,458/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a6279784-c4ac-49f4-9e1a-8e64731aa1db.jpg?im_w=720"
          title="Kerala, India"
          description="New Season Inaguration"
          price="Rs: 12,458/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-619362576274259615/original/0a0f9fad-af8e-4588-9285-4f245f188a15.jpeg?im_w=720"
          title="Ooty, India"
          description="New Season Inaguration"
          price="Rs: 9,458/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-762676942071886216/original/f6f26265-31cc-4e87-bba6-33d8bf744574.jpeg?im_w=720"
          title="Mysure, India"
          description="New Season Inaguration"
          price="Rs: 4,458/ night"
        />
      </div>
    </div>
  );
};

export default Home;
