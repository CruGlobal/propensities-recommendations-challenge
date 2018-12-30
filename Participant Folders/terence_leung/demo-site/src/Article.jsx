import React, { Component } from 'react';
import RecommendedArticles from './RecommendedArticles';
import RecommendedArticlesImproved from './RecommendedArticlesImproved';

class Article extends Component {
  render() {
    return (
      <div>
        <section id="cru-header-nav" class="hidden-print">
          <div class="language-picker closed">
            <div class="container">
              <i class="fal fa-lg fa-times fr white pointer pt1 dn" />
              <ul class="picker-countries">
                <a href="" data-continent="0">
                  Africa
                </a>
                <a href="" data-continent="1">
                  Asia
                </a>
                <a href="" data-continent="2">
                  Europe
                </a>
                <a href="" data-continent="3">
                  Latin America / Caribbean
                </a>
                <a href="" data-continent="4">
                  North America
                </a>
                <a href="" data-continent="5">
                  Oceania
                </a>
                <li id="pickerContinent0">
                  <ul>
                    <li>
                      <h5>Ethiopia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/africa/ethiopia/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Ghana</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/africa/ghana/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Kenya</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/africa/kenya/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Nigeria</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/africa/nigeria/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>South Africa</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/africa/south-africa/en.html">
                          English
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li id="pickerContinent1">
                  <ul>
                    <li>
                      <h5>India</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/india/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Japan</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/japan/ja.html">
                          日本語
                        </a>
                        ,
                      </span>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/japan/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Macau</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/macau/zh.html">
                          香港繁體
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Philippines</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/philippines/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Singapore</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/singapore/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>South Korea</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/south-korea/ko.html">
                          한국어
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Taiwan</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/taiwan/zh.html">
                          香港繁體
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Thailand</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/asia/thailand/th.html">
                          ไทย
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li id="pickerContinent2">
                  <ul>
                    <li>
                      <h5>Albania</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/albania/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Austria</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/austria/de.html">
                          Deutsch
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Bulgaria</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/bulgaria/bg.html">
                          български език
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Cyprus</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/cyprus/de.html">
                          Deutsch
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Denmark</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/denmark/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Estonia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/estonia/et.html">
                          eesti
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Finland</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/finland/fi.html">
                          suomi
                        </a>
                        ,
                      </span>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/finland/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>France</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/france/fr.html">
                          français
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Germany</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/germany/de.html">
                          Deutsch
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Greece</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/greece/el.html">
                          ελληνικά
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Hungary</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/hungary/hu.html">
                          magyar
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Ireland</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/ireland/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Italy</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/italy/it.html">
                          Italiano
                        </a>
                        ,
                      </span>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/italy/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Kosovo</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/kosovo/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Latvia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/latvia/lv.html">
                          Latviešu Valoda
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Lithuania</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/lithuania/lt.html">
                          lietuvių kalba
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Macedonia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/macedonia/mk.html">
                          македонски јазик
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Netherlands</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/netherlands/nl.html">
                          Nederlands
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Poland</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/poland/pl.html">
                          Język Polski
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Portugal</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/portugal/pt.html">
                          Português
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Romania</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/romania/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Russia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/russia/ru.html">
                          Русский
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Slovakia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/slovakia/sk.html">
                          Slovenčina
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Slovenia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/slovenia/sl.html">
                          Slovenski Jezik
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Spain</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/spain/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Sweden</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/sweden/sv.html">
                          Svenska
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Switzerland</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/switzerland/de.html">
                          Deutsch
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>UK</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/uk/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Ukraine</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/ukraine/ru.html">
                          Русский
                        </a>
                        ,
                      </span>
                      <span>
                        <a href="https://www.cru.org/us/en/global/europe/ukraine/en.html">
                          English
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li id="pickerContinent3">
                  <ul>
                    <li>
                      <h5>Argentina</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/argentina/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Barbados</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/barbadoa/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Brazil</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/brazil/pt.html">
                          Português
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Chile</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/chile/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Colombia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/colombia/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Curacao</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/curacao/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Haiti</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/haiti/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Mexico</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/mexico/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Panama</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/panama/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Paraguay</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/paraguay/es.html">
                          Español
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Suriname</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/suriname/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>Trinidad &amp; Tobago</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/lac/trinidad-tobago/en.html">
                          English
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li id="pickerContinent4">
                  <ul>
                    <li>
                      <h5>Canada</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/north-america/canada/en.html">
                          English
                        </a>
                        ,
                      </span>
                      <span>
                        <a href="https://www.cru.org/us/en/global/north-america/canada/fr.html">
                          Français
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>United States</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/north-america/united-states/en.html">
                          English
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li id="pickerContinent5">
                  <ul>
                    <li>
                      <h5>Australia</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/oceania/australia/en.html">
                          English
                        </a>
                      </span>
                    </li>
                    <li>
                      <h5>New Zealand</h5>
                      <span>
                        <a href="https://www.cru.org/us/en/global/oceania/new-zealand/en.html">
                          English
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <header id="cru-header">
            <div class="cru-container">
              <div class="cru-row">
                <div class="cru-col-3">
                  <a class="logo" href="https://www.cru.org/">
                    <img src="https://cdn2-www.cru.org/images/cru_logo.png.pagespeed.ce.wqT8QlyTsR.png" />
                  </a>
                </div>
                <div class="cru-col-9 cru-text-right">
                  <div class="signin">
                    <span class="signin-name">Sign In</span>{' '}
                    <i class="far fa-chevron-down" />
                    <ul id="user-menu">
                      <li>
                        <a>
                          <span class="signin-name" />{' '}
                          <i class="far fa-chevron-down" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://signon.cru.org/cas/service/selfservice?target=displayAccountDetails&amp;service=https://www.cru.org"
                          target="_blank"
                        >
                          Account Settings
                        </a>
                      </li>
                      <li>
                        <a href="" class="signout">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="" class="language-link visible-sm-up">
                    <i class="fal fa-globe" />
                  </a>
                  <a
                    href="https://give.cru.org/cart.html"
                    class="nav-cart-icon nav-cart-icon-desktop hidden"
                  >
                    <span class="fal fa-shopping-cart">
                      <span class="cart-item-count" />
                    </span>
                  </a>
                  <a href="#" class="icon-menu hidden-sm-up" id="menu-toggle">
                    <i class="far fa-bars" />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div id="cru-nav" class="visible-sm-up">
            <div class="cru-container">
              <ul>
                <li id="top-menu-0" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/how-to-know-god.html">
                    How to Know God
                  </a>
                </li>
                <li id="top-menu-1" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/train-and-grow.html">
                    Train &amp; Grow
                  </a>
                </li>
                <li id="top-menu-2" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/communities.html">
                    Communities
                  </a>
                </li>
                <li id="top-menu-3" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/opportunities.html">
                    Opportunities
                  </a>
                </li>
                <li id="top-menu-4" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/about.html">About</a>
                </li>
                <li id="top-menu-5" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/blog.html">Blog</a>
                </li>
                <li id="top-menu-6" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/store.html">Store</a>
                </li>
                <li id="top-menu-7" class="top-menu-item">
                  <a href="https://www.cru.org/us/en/wc.html" />
                </li>
                <li id="top-menu-8" class="top-menu-item">
                  <a href="https://give.cru.org/">Give</a>
                </li>
              </ul>
              <a href="#" class="icon icon-search search search-toggle" />
            </div>
          </div>
          <div id="cru-submenu" class="visible-sm-up">
            <div
              id="top-menu-0-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/how-to-know-god/would-you-like-to-know-god-personally.html">
                          Would You Like to Know God Personally?
                        </a>
                      </h3>
                      <p>Understand how you can know God personally.</p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/how-to-know-god/what-is-christianity.html">
                          What is Christianity?
                        </a>
                      </h3>
                      <p>Learn the basics of what Christians believe.</p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/how-to-know-god/what-do-christians-believe.html">
                          FAQs About Christianity
                        </a>
                      </h3>
                      <p>
                        Get the answers to frequently asked questions on
                        Christian beliefs and practices.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/how-to-know-god/lifes-questions.html">
                          Dealing with Life's Questions
                        </a>
                      </h3>
                      <p>Explore answers to life's biggest questions.</p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed.html">
                          My Story: How My Life Changed
                        </a>
                      </h3>
                      <p>
                        We all have a story. Read about individuals who have
                        been transformed by faith.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="top-menu-1-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/spiritual-growth.html">
                          Spiritual Growth
                        </a>
                      </h3>
                      <p>
                        Take the next step in your faith journey with
                        devotionals, resources and core truths.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/life-and-relationships.html">
                          Life &amp; Relationships
                        </a>
                      </h3>
                      <p>
                        Explore life's questions from trials and hardships to
                        dating and marriage.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/bible-studies.html">
                          Bible Studies
                        </a>
                      </h3>
                      <p>Find resources for personal or group Bible study.</p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/share-the-gospel.html">
                          Share the Gospel
                        </a>
                      </h3>
                      <p>
                        Understand evangelism and strategies to help share your
                        faith story.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/help-others-grow.html">
                          Help Others Grow
                        </a>
                      </h3>
                      <p>
                        Help others in their faith journey through discipleship
                        and mentoring.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/leadership-training.html">
                          Leadership Training
                        </a>
                      </h3>
                      <p>
                        Develop your leadership skills and learn how to launch a
                        ministry wherever you are.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/train-and-grow/language-resources.html">
                          Language Resources
                        </a>
                      </h3>
                      <p>
                        View our top Cru resources in more than 20 languages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="top-menu-2-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/campus.html">
                          Campus
                        </a>
                      </h3>
                      <p>
                        Helping students know Jesus, grow in their faith and go
                        to the world to tell others.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/city.html">
                          City
                        </a>
                      </h3>
                      <p>
                        Connecting in community for the well-being of the city.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/innercity.html">
                          Inner City
                        </a>
                      </h3>
                      <p>
                        Partnering with urban churches to meet physical and
                        spiritual needs.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/athletes.html">
                          Athletes
                        </a>
                      </h3>
                      <p>
                        Engaging around sports to help athletes think and live
                        biblically.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/families.html">
                          Families
                        </a>
                      </h3>
                      <p>
                        Equipping families with practical approaches to
                        parenting and marriage.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/highschool.html">
                          High School
                        </a>
                      </h3>
                      <p>
                        Reaching students and faculty in middle and high school.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/military.html">
                          Military
                        </a>
                      </h3>
                      <p>
                        Bringing hope and resources to military families
                        worldwide.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/locations.html">
                          Locate Cru Near You
                        </a>
                      </h3>
                      <p />
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/communities/ministries.html">
                          More
                        </a>
                      </h3>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="top-menu-3-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/mission-trips.html">
                          Mission Trips
                        </a>
                      </h3>
                      <p>Partner with Cru on a short-term missions trip.</p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/internships.html">
                          1-year Internships
                        </a>
                      </h3>
                      <p>Internship opportunities with Cru's ministries.</p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/careers.html">
                          Careers
                        </a>
                      </h3>
                      <p>Latest job openings at Cru.</p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/international.html">
                          Go International
                        </a>
                      </h3>
                      <p>
                        Live in another country building relationships and
                        ministries with eternal impact.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/volunteer.html">
                          Volunteer Opportunities
                        </a>
                      </h3>
                      <p>
                        Would you like to give your time to work with Cru? We
                        need you.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/events.html">
                          Events
                        </a>
                      </h3>
                      <p>Find a Cru event near you.</p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/opportunities/explore-your-interests.html">
                          Explore Your Interests
                        </a>
                      </h3>
                      <p>
                        Use your hobbies and interests to find the best place
                        for you to serve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="top-menu-4-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/donor-relations.html">
                          Donor Relations
                        </a>
                      </h3>
                      <p>
                        Answers to questions on donations, financial policies,
                        Cru’s annual report and more.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/what-we-do.html">
                          What We Do
                        </a>
                      </h3>
                      <p>
                        How we seek to journey together with everyone towards a
                        relationship with Jesus.
                      </p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/statement-of-faith.html">
                          Statement of Faith
                        </a>
                      </h3>
                      <p>
                        What we believe about the gospel and our call to serve
                        every nation.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/our-leadership.html">
                          Our Leadership
                        </a>
                      </h3>
                      <p>Learn about Cru's global leadership team.</p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/partners.html">
                          Cru Partnerships
                        </a>
                      </h3>
                      <p>
                        When the global church comes together then powerful
                        things can happen.
                      </p>
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/press.html">
                          Press
                        </a>
                      </h3>
                      <p>Hear what others are saying about Cru.</p>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/contact-us.html">
                          Contact Us
                        </a>
                      </h3>
                      <p />
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/about/values.html">
                          Values
                        </a>
                      </h3>
                      <p>
                        Leading from values so others will walk passionately
                        with God to grow and bear fruit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="top-menu-5-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/blog/spiritual-growth.html">
                          Spiritual Growth
                        </a>
                      </h3>
                      <p />
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/blog/life-and-relationships.html">
                          Life &amp; Relationships
                        </a>
                      </h3>
                      <p />
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/blog/share-the-gospel.html">
                          Sharing the Gospel
                        </a>
                      </h3>
                      <p />
                    </div>
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/blog/help-others-grow.html">
                          Helping Others Grow
                        </a>
                      </h3>
                      <p />
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="category-layout">
                      <h3>
                        <a href="https://www.cru.org/us/en/blog/leadership.html">
                          Leadership
                        </a>
                      </h3>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="top-menu-8-sub"
              class="mega-menu menu-layout-3"
              style={{ display: 'none;' }}
            >
              <div class="cru-container">
                <div class="cru-row">
                  <div class="cru-col">
                    <div class="list-layout">
                      <h2>Start A New Gift</h2>
                      <ul>
                        <li>
                          <a href="https://give.cru.org/search-results.html?type=people">
                            Missionaries
                          </a>
                        </li>
                        <li>
                          <a href="https://give.cru.org/search-results.html?type=ministries">
                            Ministries
                          </a>
                        </li>
                        <li>
                          <a href="https://give.cru.org/search-results.html?type=featured">
                            Featured Opportunities
                          </a>
                        </li>
                        <li>
                          <a href="https://give.cru.org/more-ways-to-give.html">
                            More Ways to Give
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="cru-col">
                    <div class="list-layout">
                      <h2>Your Account</h2>
                      <ul>
                        <li>
                          <a href="https://give.cru.org/your-giving.html">
                            Your Giving
                          </a>
                        </li>
                        <li>
                          <a href="https://give.cru.org/profile.html">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href="https://give.cru.org/payment-methods.html">
                            Payment Methods
                          </a>
                        </li>
                        <li>
                          <a href="https://give.cru.org/receipts.html">
                            Receipts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="cru-col-3">
                    <div class="card-layout">
                      <a href="https://give.cru.org/201812-frontline-ye.html?CampaignCode=08CMEG&amp;icid=web-cru-usdev-us-08cmeg">
                        <img src="https://cdn2-www.cru.org/content/dam/give/home/featured-opportunity-images/USDEVDec2018FrontlineStaffMEGfos.jpg.transform/GiveNavigationFeaturedOpportunityImage/img.jpg.pagespeed.ce.fywA-TDw5M.jpg" />
                      </a>
                      <h3>
                        <a href="https://give.cru.org/201812-frontline-ye.html?CampaignCode=08CMEG&amp;icid=web-cru-usdev-us-08cmeg">
                          Final Push of 2018: Support Frontline Staff
                        </a>
                      </h3>
                      <p>
                        $450,000 is needed by Dec. 31 to support staff on the
                        frontlines! Please give today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="cru-context-nav" class="">
            <div class="cru-container">
              <ul class="breadcrumb">
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god.html">
                    How to Know God
                  </a>
                </li>
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed.html">
                    My Story: How My Life Changed
                  </a>
                </li>
              </ul>
              <ul class="first-level-inline">
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/finding-purpose-and-meaning.html">
                    What is the Meaning of Life?
                  </a>
                </li>
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/finding-peace.html">
                    Can I Find Peace?
                  </a>
                </li>
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/love-and-acceptance.html">
                    Will I Ever Be Good Enough?
                  </a>
                </li>
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/coming-out-of-the-darkness.html">
                    Will I Ever Be Free?
                  </a>
                </li>
                <li>
                  <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed/forgiveness-and-redemption.html">
                    Can I Be Forgiven?
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="cru-mobile-menu">
            <ul class="first-level">
              <li class="search">
                <a href="">
                  <span class="mobile-menu-label">Search</span>
                  <span class="icon" />
                </a>
              </li>
              <li class="has-children">
                <a href="https://www.cru.org/us/en/how-to-know-god.html">
                  <span class="mobile-menu-label">How to Know God</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://www.cru.org/us/en/how-to-know-god/would-you-like-to-know-god-personally.html">
                      <span class="mobile-menu-label">
                        Would You Like to Know God Personally?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/how-to-know-god/what-is-christianity.html">
                      <span class="mobile-menu-label">
                        What is Christianity?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/how-to-know-god/what-do-christians-believe.html">
                      <span class="mobile-menu-label">
                        FAQs About Christianity
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/how-to-know-god/lifes-questions.html">
                      <span class="mobile-menu-label">
                        Dealing with Life's Questions
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/how-to-know-god/my-story-a-life-changed.html">
                      <span class="mobile-menu-label">
                        My Story: How My Life Changed
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="https://www.cru.org/us/en/train-and-grow.html">
                  <span class="mobile-menu-label">Train &amp; Grow</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/spiritual-growth.html">
                      <span class="mobile-menu-label">Spiritual Growth</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/life-and-relationships.html">
                      <span class="mobile-menu-label">
                        Life &amp; Relationships
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/bible-studies.html">
                      <span class="mobile-menu-label">Bible Studies</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/share-the-gospel.html">
                      <span class="mobile-menu-label">Share the Gospel</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/help-others-grow.html">
                      <span class="mobile-menu-label">Help Others Grow</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/leadership-training.html">
                      <span class="mobile-menu-label">Leadership Training</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/train-and-grow/language-resources.html">
                      <span class="mobile-menu-label">Language Resources</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="https://www.cru.org/us/en/communities.html">
                  <span class="mobile-menu-label">Communities</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://www.cru.org/us/en/communities/campus.html">
                      <span class="mobile-menu-label">Campus</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/city.html">
                      <span class="mobile-menu-label">City</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/innercity.html">
                      <span class="mobile-menu-label">Inner City</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/athletes.html">
                      <span class="mobile-menu-label">Athletes</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/families.html">
                      <span class="mobile-menu-label">Families</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/highschool.html">
                      <span class="mobile-menu-label">High School</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/military.html">
                      <span class="mobile-menu-label">Military</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/locations.html">
                      <span class="mobile-menu-label">Locate Cru Near You</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/communities/ministries.html">
                      <span class="mobile-menu-label">More</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="https://www.cru.org/us/en/opportunities.html">
                  <span class="mobile-menu-label">Opportunities</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/mission-trips.html">
                      <span class="mobile-menu-label">Mission Trips</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/internships.html">
                      <span class="mobile-menu-label">1-year Internships</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/careers.html">
                      <span class="mobile-menu-label">Careers</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/international.html">
                      <span class="mobile-menu-label">Go International</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/volunteer.html">
                      <span class="mobile-menu-label">
                        Volunteer Opportunities
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/events.html">
                      <span class="mobile-menu-label">Events</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/opportunities/explore-your-interests.html">
                      <span class="mobile-menu-label">
                        Explore Your Interests
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="https://www.cru.org/us/en/about.html">
                  <span class="mobile-menu-label">About</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://www.cru.org/us/en/about/donor-relations.html">
                      <span class="mobile-menu-label">Donor Relations</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/what-we-do.html">
                      <span class="mobile-menu-label">What We Do</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/statement-of-faith.html">
                      <span class="mobile-menu-label">Statement of Faith</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/our-leadership.html">
                      <span class="mobile-menu-label">Our Leadership</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/partners.html">
                      <span class="mobile-menu-label">Cru Partnerships</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/press.html">
                      <span class="mobile-menu-label">Press</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/contact-us.html">
                      <span class="mobile-menu-label">Contact Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/about/values.html">
                      <span class="mobile-menu-label">Values</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="https://www.cru.org/us/en/blog.html">
                  <span class="mobile-menu-label">Blog</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://www.cru.org/us/en/blog/spiritual-growth.html">
                      <span class="mobile-menu-label">Spiritual Growth</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/blog/life-and-relationships.html">
                      <span class="mobile-menu-label">
                        Life &amp; Relationships
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/blog/share-the-gospel.html">
                      <span class="mobile-menu-label">Sharing the Gospel</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/blog/help-others-grow.html">
                      <span class="mobile-menu-label">Helping Others Grow</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cru.org/us/en/blog/leadership.html">
                      <span class="mobile-menu-label">Leadership</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.cru.org/us/en/store.html">
                  <span class="mobile-menu-label">Store</span>
                  <span class="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.cru.org/us/en/wc.html">
                  <span class="mobile-menu-label" />
                  <span class="icon" />
                </a>
              </li>
              <li class="has-children">
                <a href="https://give.cru.org/">
                  <span class="mobile-menu-label">Give</span>
                  <span class="icon" />
                </a>
                <ul class="submenu second-level">
                  <li>
                    <a href="https://give.cru.org/start-a-new-gift.html">
                      <span class="mobile-menu-label">Start A New Gift</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://give.cru.org/your-giving.html">
                      <span class="mobile-menu-label">Your Giving</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://give.cru.org/payment-methods.html">
                      <span class="mobile-menu-label">Payment Methods</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://give.cru.org/profile.html">
                      <span class="mobile-menu-label">Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://give.cru.org/receipts.html">
                      <span class="mobile-menu-label">Receipts</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://give.cru.org/more-ways-to-give.html">
                      <span class="mobile-menu-label">More Ways to Give</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <div class="blog-page">
          <section>
            <div class="container">
              <div class="row mt5-ns mt4">
                <div class="col-lg-8 mb5-ns mb4-m ph0 ph3-ns mr-auto ml-auto">
                  <div class="ph3 ph0-ns">
                    <h5 class="ttu tracked cru-tango mt4 mb3 mb1-ns pt3-ns">
                      My Story: How My Life Changed
                    </h5>
                    <h1 class="mt0 f2 f1-ns mb3 fw3">
                      The Day I Planned to Die
                    </h1>
                    <div class="f5">
                      <span class="pr3">Jeff Cox with Rich Atkinson</span>
                      <span class="read-time bl pl3 dn di-m di-l">
                        3 Minute Read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt3 pt0-ns">
                <div class="col-lg-2 mb4 pb3 tc tl-l mt3 mt0-ns">
                  <div
                    class="article-share hidden-print"
                    style={{ top: '30px;' }}
                  >
                    <div class="addthis_inline_share_toolbox" />
                  </div>
                </div>
                <div class="col-lg-8 article">
                  <div class="experiencefragment">
                    <div class="xf-content-height">
                      <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div class="image aem-GridColumn aem-GridColumn--default--12">
                          <div
                            data-cmp-is="image"
                            data-cmp-src="https://cdn2-www.cru.org/content/experience-fragments/shared-library/language-masters/en  /how-to-know-god/changed-life-stories/a-voice-that-stopped-a-suicidal-teen/a-voice-that-stopped-a-suicidal-teen/_jcr_content/root/image.coreimg{.width}.png/1537285861562.png"
                            data-asset="https://cdn2-www.cru.org/content/dam/cru/how-to-know-god/my-story/my-story-jeff-cox-main.png"
                            class="cmp-image"
                            itemscope=""
                            itemtype="http://schema.org/ImageObject"
                          >
                            <img
                              src="https://cdn2-www.cru.org/content/experience-fragments/shared-library/language-masters/en/how-to-know-god/changed-life-stories/a-voice-that-stopped-a-suicidal-teen/a-voice-that-stopped-a-suicidal-teen/_jcr_content/root/image.coreimg.png/1537285861562.png"
                              class="cmp-image__image"
                              itemprop="contentUrl"
                              data-cmp-hook-image="image"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="w-100 aem-GridColumn aem-GridColumn--default--12">
                          <p>
                            I decided I would kill myself by driving my car into
                            a big power pole in front of my high school.
                          </p>
                          <p>
                            I felt alone — like no one really cared about me and
                            no one would ever accept me for who I was. I was
                            struggling with extreme depression, and suicide
                            seemed like my best option.
                          </p>
                          <p>
                            As I drove to the place where I would end it all, I
                            heard a voice in my head. It told me not to end my
                            life, and it was powerful. I decided not to commit
                            suicide.
                          </p>
                          <p>
                            I didn’t know who or what the voice was, but a
                            couple days later I found out.
                          </p>
                          <p>
                            Someone invited me to an event about love, dating
                            and relationships. What started as a fun evening
                            turned into something that would change my life.
                          </p>
                          <p>
                            We heard from a speaker who talked about
                            unconditional love, and I wondered how I could
                            experience it. He said that God was offering His
                            unconditional love and wanted a personal
                            relationship with each of us.
                          </p>
                          <p>
                            People are separated from God because of what we do
                            wrong. But there’s good news: Jesus paid the price
                            for our wrongdoings. Because of what Jesus did, we
                            can have a relationship with God and{' '}
                            <a href="https://www.cru.org/us/en/how-to-know-god/would-you-like-to-know-god-personally.html">
                              experience His unconditional love
                            </a>
                            .
                          </p>
                          <p>
                            Unconditional love — a love you can’t earn and that
                            loves no matter what — is what I had been looking
                            for.
                          </p>
                          <p>
                            That night, I prayed a simple prayer: “God be in my
                            life, forgive me of my sins and help me to have this
                            life that you promised.”
                          </p>
                          <p>
                            It was God who saved my life the day I had planned
                            to end it. He spoke to me and told me not to go
                            through with it. Now, instead of a desire to die, I
                            have a reason to live. I went from despair to hope,
                            and you can too.
                          </p>
                          <p>
                            If you are struggling with suicidal thoughts call
                            the confidential, 24/7{' '}
                            <a
                              href="https://suicidepreventionlifeline.org/"
                              target="_blank"
                            >
                              National Suicide Prevention Lifeline
                            </a>
                            &nbsp;(1-800-273-TALK).
                          </p>
                          <p>
                            Do you want to experience unconditional love and{' '}
                            <a href="https://www.cru.org/us/en/how-to-know-god/would-you-like-to-know-god-personally.html">
                              begin a personal relationship with Jesus
                            </a>
                            ?
                          </p>
                          <p>
                            Read about{' '}
                            <a
                              href="http://www.everystudent.com/features/blues.html"
                              target="_blank"
                            >
                              finding hope in depression.
                            </a>
                          </p>
                          <p>
                            <a href="https://www.cru.org/us/en/train-and-grow/life-and-relationships/hardships/suicide-prevention-resources.html">
                              Read more stories of hope and find resources on
                              our suicide prevention resources page.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2" />
              </div>
              <div class="row">
                <div class="col-12 col-lg-8 mr-auto ml-auto mt3-ns mb4 pb2 cru-b">
                  <h3 class="heading-underline-gray mv4" />
                </div>
              </div>
            </div>
          </section>
          <div class="container" />
          {this.props.progression ? (
            <RecommendedArticlesImproved />
          ) : (
            <RecommendedArticles />
          )}
        </div>
      </div>
    );
  }
}
export default Article;
