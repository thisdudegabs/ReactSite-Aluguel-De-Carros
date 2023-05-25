import React from "react";
import { Col, Container } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog_item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog_info p-3">
          <Link to={`/blogs/${title}`} className="blog_title">
            {title}
          </Link>
          <p className="section_description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read_more">
            Leia Mais
          </Link>

          <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog_author">
              <i class="ri-user-line"></i> {author}
            </span>

            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1 section_description">
                <i class="ri-calendarf-line"></i> {date}
              </span>

              <div className="d-flex align-items-center gap-3">
                <span className="d-flex align-items-center gap-1 section_description">
                  <i class="ri-time-line"></i> {time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
