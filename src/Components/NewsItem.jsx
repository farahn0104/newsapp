import React from "react";

const NewsItem = ({ title, description, url, pic, date, source }) => {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-2 grid-wrap ">
      <div className="card" style={{ width: "240px" }}>
        <img
          width={200}
          height={200}
          src={pic ?? "/public/images/noimage.webp"}
          className="card-img-top object-fit-cover"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between source">
            <p>{source}</p>
            <p>{new Date(date).toLocaleDateString()}</p>
          </div>
          <p className="card-text overflow-auto">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
