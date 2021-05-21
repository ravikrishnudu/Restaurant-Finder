import React from "react";
import { StarRating } from "./StarRating";

export const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-4 mb-2">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxwidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
      {/* <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxwidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>jhon</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <div className="card-text">this was best</div>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxwidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>jon</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <div className="card-text">this was best</div>
        </div>
      </div>{" "}
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxwidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>jon</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <div className="card-text">this was best</div>
        </div>
      </div>{" "}
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxwidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>jon</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <div className="card-text">this was best</div>
        </div>
      </div> */}
    </div>
  );
};
