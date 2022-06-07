import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photographerTile.css";

const PhotographerTile = ({
  photographer,
  isSelected,
  onSelect,
  serviceSelected,
}) => {
  const hasService = () =>
    !serviceSelected || photographer.services.includes(serviceSelected);

  return (
    <div class="p-2 col-sm-6 col-md-4 col-lg-3" onClick={onSelect}>
      <div
        class={`card photographer-card ${
          isSelected && hasService()
            ? "border-primary"
            : !hasService()
            ? "border-danger"
            : ""
        }`}
      >
        <div class="card-body">
          <img
            src={photographer.img}
            class={`card-img-top mb-3 ${isSelected &&
              !hasService() &&
              "grayscale"}`}
            alt={`Service ${photographer.name}`}
          />
          <div class="row justify-content-between">
            <h5 class="col card-title">{photographer.name}</h5>
            <div class="col">
              {Array.from(Array(photographer.rating)).map(() => (
                <i class="icon fa fa-star" aria-hidden="true"></i>
              ))}
              {Array.from(Array(5 - photographer.rating)).map(() => (
                <i class="icon fa fa-star-o" aria-hidden="true"></i>
              ))}
            </div>
          </div>
          <div class="align-items-center">
            {photographer.services.map((service) => (
              <span
                class={`badge rounded-pill ${
                  service === serviceSelected
                    ? "bg-primary text-light"
                    : "light text-dark"
                } mx-1`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerTile;