
export const Home = () => {
  return (
    <>



      <div id="page-wrraper">
        {/* Sidebar Menu */}
        <div className="responsive-nav">
          <i className="fa fa-bars" id="menu-toggle" />
          <div id="menu" className="menu">
            <i className="fa fa-times" id="menu-close" />
            <div className="container">
              <div className="image">
                <a href="#">
                  <img src="assets/images/aditya.jpg" alt="" />
                </a>
              </div>
              <div className="author-content">
                <h4>Aditya Verma</h4>
                <span>YouTube automation company</span>
              </div>
              <nav className="main-nav" role="navigation">
                <ul className="main-menu">
                  <li>
                    <a href="/">About Me</a>
                  </li>
                  <li>
                    <a href="#section2">Script Writing</a>
                  </li>
                  <li>
                    <a href="#section3">Video Editing</a>
                  </li>
                  <li>
                    <a href="#section4">Voive Over</a>
                  </li>
                  <li>
                    <a href="">contact me</a>
                  </li>
                </ul>
              </nav>
              <div className="social-network">
                <ul className="soial-icons">
                  <li>
                    <a href="https://fb.com/templatemo">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <p>Copyright 2024 designed by</p><a href="https://jatinsidana.netlify.app/">jatinsidana</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="section about-me" data-section="section1">
        <div className="container">
          <div className="section-heading">
            <h2>About Me</h2>
            <div className="line-dec" />
            <span>
              A YouTube automation company specializes in providing services that streamline and enhance various aspects of content creation and management on the YouTube platform
            </span>
          </div>

          <div className="left-image-post">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <img src="assets/images/left-image.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <h4>Script Writing</h4>
                  <p>
                    Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
                    Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
                    sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae
                    neque pharetra dignissim eget ut libero.
                  </p>
                  <div className="white-button">
                    <a href="#">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-image-post">
            <div className="row">
              <div className="col-md-6">
                <div className="left-text">
                  <h4>Video Editing</h4>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum fermentum eleifend
                    nibh, vitae sodales elit finibus pretium. Suspendisse potenti. Ut
                    sollicitudin risus a sollicitudin semper.
                  </p>
                  <div className="white-button">
                    <a href="#">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="assets/images/right-image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="right-image-post">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                <img src="assets/images/left-image.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-text">
                <h4>Voice over</h4>
                <p>
                  Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
                  Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
                  sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae
                  neque pharetra dignissim eget ut libero.
                </p>
                <div className="white-button">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section className="section my-services" data-section="section2">
        <div className="container">
          <div className="section-heading">
            <h2>Script Writing</h2>
            <div className="line-dec" />

          </div>
          <div className="flex-card">
          <div className="card">
          <img src="assets/images/yscripts.jpeg" alt="" />
         
  <div className="card__content">
    <p className="card__title">YouTube Script</p>
    <p className="card__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
    <div className="white-button">
                  <a href="#">Read More</a>
                </div>
    
  </div>
  
</div>
<div className="card">
<img src="assets/images/yscripts.jpeg" alt="" />
  <div className="card__content">
    <p className="card__title">Prime Scripts</p>
    <p className="card__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
    <div className="white-button">
                  <a href="#">Read More</a>
                </div>
  

  </div>
  </div>
  <div className="card">
  <img src="assets/images/yscripts.jpeg" alt="" />
  <div className="card__content">
    <p className="card__title">Story Writing</p>
    <p className="card__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
    <div className="white-button">
                  <a href="#">Read More</a>
                </div>

  </div>
  </div>

 {/* 
          <div className="row">
            <div className="col-md-6">
              <div className="service-item">
                <div className="first-service-icon service-icon" />
                <h4>HTML5 &amp; CSS3</h4>
                <p>
                  Phasellus non convallis dolor. Integer tempor hendrerit arcu at
                  bibendum. Sed ac ante non metus vehicula congue quis eget eros.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="second-service-icon service-icon" />
                <h4>Creative Ideas</h4>
                <p>
                  Proin lacus massa, eleifend sed fermentum in, dignissim vel metus.
                  Nunc accumsan leo nec felis porttitor, ultricies faucibus purus
                  mollis.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="third-service-icon service-icon" />
                <h4>Easy Customize</h4>
                <p>
                  Integer suscipit condimentum aliquet. Nam quis risus metus. Nullam
                  faucibus quam eget arcu pretium tincidunt. Nam libero dui.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="fourth-service-icon service-icon" />
                <h4>Admin Dashboard</h4>
                <p>
                  Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
                  eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo
                  nec felis porttitor.
                </p>
              </div>
            </div>
          </div>
          */} 
        </div>
        </div>
        
      </section>



    </>

  )

}
