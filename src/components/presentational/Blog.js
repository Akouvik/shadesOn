import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import anxiety from "./images/newDevs/anxiety.jpg";
import jumpingman from "./images/newDevs/jumpingman.jpg";
import spiderman from "./images/newDevs/spideman.jpg";
import cables from "./images/newDevs/cables.jpg";
import red from "./images/pinot/redBurgundy.jpg";
import making from "./images/pinot/making.jpg";
import clusters from "./images/pinot/clusters.jpg";
import pairing from "./images/pinot/pairing.jpg";

class Blog extends Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    console.log("pathname", pathname);
  }
  Tab({ match }) {
    const { id } = match.params;
    switch (id) {
      case "new-devs":
        return (
          <div className="_main" id="blog_page">
            <div id="blog">
              <h1 id="me">New developers and the knowledge gap</h1>
              <img src={anxiety} alt="Logo" id="anxiety_img" />
              <p>
                The insecurity with being a new developer is that you feel
                inferior to those that went to school for CS and those that have
                been doing it for years. You also have the occasional side eye
                whenever you tell someone you are a developer just to see their
                excitement fall when you tell them you are self taught or went
                to a boot camp. For the most part, that is not their fault. CS
                majors went to school for their craft and learned the
                fundamental concepts of computer theory,Operating Systems, data
                representation and at least a basic understanding of different
                programing language concepts. In my experience, individuals with
                these backgrounds are very capable of grasping new concepts
                faster and have fewer knowledge gaps than someone like me who
                picked and chose what to learn and discarded those that were too
                hard or thought to be irrelevant to making things move on the
                page.
              </p>
              <img src={jumpingman} alt="Logo" id="jumpingman_img" />

              <p>
                Much like most newcomers to programming, The first language I
                was drawn to was javascript. It’s convenient in a way that you
                can see what you create instantly by opening the browser and
                even make changes in developer tools to see the changes come to
                live before your eyes. It was and still is exciting and made
                learning programming seem like an easy and a very attainable
                skill. The knowledge gap between someone like me and someone
                with years of experience and or a CS degree is not yet apparent.
              </p>
              <p>
                Javascript is a scripting language that runs in the browser
                interacting with CSS and HTML to makes changes on the screen. It
                has a low barrier of entry, in that, It is very easy to get your
                app up and running creating an instant feedback that can be very
                exciting for new developers. However, This excitement quickly
                dwindles down as you start to build full scale applications that
                are backend heavy and or stand alone applications. What happens
                to my code once its written? JIT compilation, huh? type
                coercion? who dat? What is this mysterious THIS keyword and how
                do I pinpoint its origin? do people that still use IE 8 deserve
                to see my creation?
              </p>
              <p>
                Of course you can google some of these questions and get an
                answer, but sometimes these answers leads to more confusion,
                confusion that someone with the fundamental knowledge might not
                have. So how do we bridge the knowledge gap? Learn more than one
                language early on.
              </p>
              <img src={spiderman} alt="Logo" id="spiderman_img" />
              <p>
                Before I started learning java, I did not know the difference
                between a scripting language and an OOP languages. Learning java
                has resolved some of the confusion I had when writing javascript
                code. I understand that syntax to browser isn’t magic, the code
                is compiled and translated by the JS engine that are a component
                of all browsers. Java in particular is Class (a template) based
                language that is written and compiled all the code into byte
                code and any computer with a the Java virtual machine can then
                run the code. Javascript does not compile all of its code before
                execution. It is executed by a Javascript engine which
                interprets each line of code into byte code just as its about to
                run. Every Java program starts with a class, every class has a
                constructor, an instance of said class is in the form of an
                object which has all the properties and values of the class.The
                THIS keyword references the parent object of the constructor.
                Java is created in a such a way that developers write their code
                once and deploy it to any operating system without making
                changes.Making changes to Java code after deployment can require
                to software to recompile and deploy the code while changes to
                Javascript code can be done in your IDE and changes are seen
                with the refresh of the browser. All Java code is run by the
                Java Virtual Machine. Javascript has different execution
                environments depending on the browser you choose (Chrome,
                Safari, IE), developers sometimes have to make changes or write
                extra code for different Javascript environments.
              </p>
              <img src={cables} alt="Logo" id="cables_img" />

              <p>
                These and other things I learned by way of learning a new
                language. These concepts came easy to me for some reason once
                presented in another language. The barrier to entry for
                understanding these concepts came easier to me once presented as
                a package deal as oppose to something I couldn’t fully grasp but
                had to try my hardest to on my way to making things interactive
                on my page. Learning programming can be a bit overwhelming
                especially after the honeymoon phase of getting things to move
                on the page but taking a break from one language and learning
                another can introduce you to new concepts, terminology and basic
                fundamentals that may come easier to you once learned through
                the lens of another language.
              </p>
            </div>
          </div>
        );
      case "pinot-noir":
        return (
          <div className="_main" id="blog_page">
            <div id="blog">
              <h1 id="me">Pinot Noir</h1>
              <img src={red} alt="Logo" />
              <p>
                Pinot Noir is one of the most popular and glamorized wines in
                the world, it has an eclectic group of connoisseurs ranging from
                artists, to designers, poets, billionaires and bougie alcoholics
                all raving about its greatness. Why so popular you ask? The same
                reason why tulips caused a financial crash in the 16th century
                and women went nuts for nylon stockings during WWII.
              </p>
              <p>
                Pinot Noir originated in the Burgundy region of France, it is a
                black blue berry that grows in tight clusters resembling the
                shape of a pine cone. It gets its name from its appearance,
                “Pinot Noir” stands for black cone in french and some of the
                most expensive bottles of Pinots come from the Burgundy region.
              </p>
              <img src={clusters} alt="Logo" />
              <p>
                Prior to the popularization of Pinot noir by the movie
                “sideways”, Pinot Noir was only grown in select regions of the
                world. This wine has a very stringent growth requirements,
                preferring warm days, cool nights and diligent pest control. its
                thin skin is sensitive to soil types, pruning techniques, frost,
                wind and possibly even breathing too close to it. Due to its
                finicky nature, Pinot Noirs are susceptible to mutations that
                sometimes results in new pinot variations like Pinot Gris, Pinot
                Blanc and Pinot Meunier and often times results in low yielding
                production of wine and a price hike to upwards of 500,000 per
                bottle.
              </p>
              <img src={making} alt="Logo" />

              <p>
                Introduction of Pinot Noir to the Americans and Asian market,
                mostly accredited to the movie “sideways”, has busted its sales
                to compete with Merlot and Cabernets and has also expanded its
                production all across the world from Germany to New Zealand,
                Argentina and the US. Pinot Noir is all encompassing, It is a
                very elegant wine that is light on the palate yet embodies a
                magnificent flavor profile. It is not too dry, nor too sweet
                with low tannins and typically medium acidity making it a
                perfect wine for beginning wine drinkers. The flavor profile of
                Pinot consists of strawberry, raspberry and sweet cherries.
                Vintage Pinots have these flavors in addition to mushroom tones
                and earthy tones to them with a silkier smooth finish.
              </p>
              <img src={pairing} alt="Logo" />
              <p>
                Pinot Noir pairs well with various types of cuisine and dishes
                including Salmon, fillet, pork and poultry. The expansion of its
                production has allowed for many people to be able to afford and
                enjoy this wine without having to do a James bond rendezvous
                through France looking for the Holy bottle.The prices of new
                world Pinots can range anywhere from $10 to 30,00 while old
                world Pinots sell for upwards of $500,000. There are several
                producers of budget Wines, Robert Mondavi Private
                Selection,Etude, Mirrasou, and A to Z wine works all have great
                selections of affordable wines. For more expensive options,
                Domaine Leroy Musigny and Domaine Faiveley of Burgundy, Craggy
                Range of New Zealand or La Follette and Stoller of North
                America.
              </p>
            </div>
          </div>
        );
      default:
        return <h1>new Articles coming soon</h1>;
    }
  }
  render() {
    return (
      <Router>
        <div className="_main" id="blog_page">
          <ul id="blog_titles_links">
            <h2>Posts</h2>
            <li>
              <Link to={`/blogs/new-devs`}>New developers and ...</Link>
            </li>
            <li>
              <Link to={`/blogs/pinot-noir`}>Pinot Noir</Link>
            </li>
            <Route exact path="/blogs/:id" component={this.Tab} />
          </ul>
          <div />
        </div>
      </Router>
    );
  }
}
export default Blog;
