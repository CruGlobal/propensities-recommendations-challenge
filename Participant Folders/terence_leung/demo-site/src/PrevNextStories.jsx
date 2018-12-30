import React from 'react';

const PrevNextStories = () => {
  return (
    <section class="bt-ns bb-ns bb bt bw2 b--cru-scorpion-light story-nav hidden-print">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-5 col-lg-4 ml-auto br bw1 mv4 pr6-l pr4-m pr3 b--cru-bahama-blue-dark va-outer">
            <a
              href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/my-story-olivia-ward.html"
              class="nl5 va-inner cru-bahama-blue-dark hover-cru-bahama-blue tl left-0 fa fa-chevron-left fa-2x"
            />
            <h5 class="tracked cru-bahama-blue ttu f6 mt0">Previous Story</h5>
            <h3 class="ttc f3-ns f4 normal">
              <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/my-story-olivia-ward.html">
                No More Empty Endings
              </a>
            </h3>
          </div>
          <div class="col-4 col-sm-5 col-lg-4 mr-auto mv4 bl bw1 pl6-l pl4-m pl3 b--cru-bahama-blue-dark va-outer">
            <a
              href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/my-story-katja.html"
              class="nr5 va-inner cru-bahama-blue-dark hover-cru-bahama-blue tr right-0 fa fa-chevron-right fa-2x"
            />
            <h5 class="tracked cru-bahama-blue ttu f6 mt0">Next Story</h5>
            <h3 class="ttc f3-ns f4 normal">
              <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/my-story-katja.html">
                “I forgot about God”
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
