import React from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import SearchpageContent from "../../Components/SearchpageContent/SearchpageContent";

const Search = () => {
  return (
    <div classname="searchPage">
      <div className="searchPage_info">
        <p>20 stays · 26 August to 30 August · 4 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation felxibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filter</Button>
      </div>
      <SearchpageContent
        src="https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6d245491-547a-428a-b0eb-b0a39401859a.jpeg?im_w=720"
        location="Private Rooms in Tamilnadu"
        title="Stay at this spacious Golorian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.73}
        price="₹9,452 / night"
        total="₹28,458 total"
        path="/appartment"
      />
      <SearchpageContent
        src="https://a0.muscache.com/im/pictures/65fe1c21-0694-4571-bb64-fb9352cdcfcb.jpg?im_w=720"
        location="Private Rooms in Bangalore"
        title="Rent this Spacious Apartment"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={3.93}
        price="₹8,482 / night"
        total="₹25,125 total"
        path="/villa"
      />
      <SearchpageContent
        src="https://a0.muscache.com/im/pictures/miso/Hosting-738938787052681216/original/2ab5be30-f8a2-4bb3-9b5a-a3de045a11f8.jpeg?im_w=720"
        location="Private Rooms in Mysore"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="₹6,154 / night"
        total="₹18,250 total"
        path="/house"
      />
      <SearchpageContent
        src="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/8906b4db-21fd-4bf3-8619-0492981c4ea6.png?im_w=720"
        location="Rooms in Himalayas"
        title="Stay at this Mount Top Room"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.42}
        price="₹5,999 / night"
        total="₹15,989 total"
        path="/palace"
      />
      <SearchpageContent
        src="https://a0.muscache.com/im/pictures/miso/Hosting-715131262214705111/original/ea0aed6b-a899-4ae7-b709-558b2d479707.jpeg?im_w=720"
        location="Private Rooms in Hyderabad"
        title="Grounded Farm house with swimming pool"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.33}
        price="₹8,452 / night"
        total="₹14,450 total"
        path="/privatestay"
      />

      <SearchpageContent
        src="https://a0.muscache.com/im/pictures/miso/Hosting-761521121343082881/original/eee203ad-661f-4bab-a540-d33b510eb5cd.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="₹6,452 / night"
        total="₹13,500 total"
        path="/guesthouse"
      />
    </div>
  );
};

export default Search;
