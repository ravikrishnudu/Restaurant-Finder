import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { AddReview } from "../components/AddReview";
import { Reviews } from "../components/Reviews";
import { StarRating } from "../components/StarRating";
// import { StarRating } from "../components/StarRating";
import { RestaurantsContext } from "../context/RestaurantContex";

const RestaurantdetailPage = (props) => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);

        // console.log(response);
        setSelectedRestaurant(response.data.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-center">
            {selectedRestaurant.restaurants.name}
          </h1>
          <div className="text-center">
            <StarRating
              rating={selectedRestaurant.restaurants.average_rating}
            />
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurants.count
                ? `(${selectedRestaurant.restaurants.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>

          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantdetailPage;
