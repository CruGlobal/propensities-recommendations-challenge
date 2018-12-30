import React from 'react';

const RecommendedArticles = () => {
  return (
    <div class="featured-stories">
      <section class="hidden-print bg-cru-scooter-light pb5 d-none d-md-block">
        <div class="container">
          <div class="pt3">
            <h3 class="heading-underline pv4">Recommended Articles</h3>
          </div>
          <div class="row">
            <div class="col-4 ph3">
              <div class="bg-white pa4 h-100 img-article1">
                <h5 class="tracked ttu f6">My Story: How My Life Changed</h5>
                <h3>
                  <a
                    class="lh-copy"
                    href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/forgiveness-and-redemption.html"
                  >
                    Can I be forgiven?
                  </a>
                </h3>
                <p class="mt3">
                  In Luke Chapter 7, Jesus explains that the more one is
                  forgiven of, the more grateful they are.
                </p>
              </div>
            </div>
            <div class="col-4 ph3">
              <div class="bg-white pa4 h-100 img-article2">
                <h5 class="tracked ttu f6">My Story: How My Life Changed</h5>
                <h3>
                  <a
                    class="lh-copy"
                    href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/leah-obrien-amico.html"
                  >
                    Leah O'Brien-Amico
                  </a>
                </h3>
                <p class="mt3">Olympic Athlete: How I Became a Christian</p>
              </div>
            </div>
            <div class="col-4 ph3">
              <div class="bg-white pa4 h-100 img-article3">
                <h5 class="tracked ttu f6">My Story: How My Life Changed</h5>
                <h3>
                  <a
                    class="lh-copy"
                    href="https://www.cru.org/us/en/communities/city/omaha.html"
                  >
                    Omaha
                  </a>
                </h3>
                <p class="mt3"> </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendedArticles;
