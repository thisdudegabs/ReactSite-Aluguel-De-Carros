import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg1 from "../assets/all-images/ava-1.jpg";
import commentImg2 from "../assets/all-images/ava-2.jpg";
import commentImg3 from "../assets/all-images/ava-3.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog_author ">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>

                  <span className="d-flex align-items-center gap-1 section_description">
                    <i class="ri-calendarf-line"></i> {blog.date}
                  </span>

                  <span className="d-flex align-items-center gap-1 section_description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section_description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section_description">{blog.description2}</p>
              </div>

              <div className="comment_list mt-5">
                <h4 className="mb-5">{blog.numberComents}</h4>

                <div className="single_comment d-flex gap-3">
                  <img src={commentImg1} alt="" />

                  <div className="comment_content">
                    <h6 className="fw-bold">Fernando Rocha</h6>
                    <p className="section_description mb-0">25/05/2023</p>
                    <p className="section_description">{blog.coment1}</p>

                    <span className="reply d-flex align-items-center gap-1">
                      <i class="ri-reply-fill"></i> Responder
                    </span>
                  </div>
                </div>

                <div className="single_comment d-flex gap-3">
                  <img src={commentImg2} alt="" />

                  <div className="comment_content">
                    <h6 className="fw-bold">Cintia Rocha</h6>
                    <p className="section_description mb-0">23/05/2023</p>
                    <p className="section_description">{blog.coment2}</p>

                    <span className="reply d-flex align-items-center gap-1">
                      <i class="ri-reply-fill"></i> Responder
                    </span>
                  </div>
                </div>

                <div className="single_comment d-flex gap-3">
                  <img src={commentImg3} alt="" />

                  <div className="comment_content">
                    <h6 className="fw-bold">Michael Dias</h6>
                    <p className="section_description mb-0">24/05/2023</p>
                    <p className="section_description">{blog.coment3}</p>

                    <span className="reply d-flex align-items-center gap-1">
                      <i class="ri-reply-fill"></i> Responder
                    </span>
                  </div>
                </div>

                {/* ============== Formulario de Comentarios  ================ */}

                <div className="leave_comment-form mt-5">
                  <h4>Deixe Um Comentário!</h4>
                  <p className="section_description">Logue para comentar!</p>

                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" placeholder="Nome Completo" />
                      <Input type="email" placeholder="Endereço de Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comentário..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment_btn  mt-3"> Postar</button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent_post mb-4">
                <h5 className="fw-bold">Posts Recentes.</h5>
              </div>

              {blogData.map((item) => (
                <div className="recent_blog-post mb-4" key={item.id}>
                  <div className="recent_blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
