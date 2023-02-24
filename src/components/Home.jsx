import React from 'react';


const  Home = () => {

    return (  
        <div className="main-container">
            <section className="home-container" id='Home'>
            <div className="hello">
                <div className='intro'>Hello, my name is</div>
                <div className='name'>Nelson Luna.</div>
            </div>
            <div className="software">
                <div>Software Engineer</div>
            </div>
            <br />
            <div className="synop">
                I'm currently working as a freelance software engineer who specializes in building unique and responsive web applications. Currently I'm working a new e-commerce platform for all high fashion, with my organization Greedy Pig Innovations, as its lead designer and engineer. While youre here check out my work and leave a follow on my socials! While freelancing is fulfilling on it's own right, I am willing to work for the right employer. <a href='mailto:n911luna@gmail.com' >Contact me</a> if youre interested in my work!
            </div>
        </section>
        <section className='About' id="About">
            <div className='header'> <h2>About</h2></div>
            <div className="spacer"></div>
            <div className='about-text'>
                <p>I'm a full stack developer based in Chicago. I spend alot of time solving problems with my code, occasionally that results in more problems though (bugs). I began my web development journey back in 2016 making small JavaScript games. From there to now I've particiated in multiple hackathons and realized that there is much more for me to learn in the world of code.</p> 
                <p> Today I'm the co-founder of Greedy Pig Innovations, an organization for others like myself who are self-taught and strive to build applications with purpose. Currently I'm working as a freelancer taking the opportunity to continue to develop my skills and take on new challenges, but am open to work for the right company.</p>
                <p>Ive worked with many technologies from my start back in 2016, here are the most recent ones:</p>
                <div className="tech">
                    <ul>
                        <li id='js'>
                            <img className='icon' id='js' src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="javaScript" />
                        </li>
                        <li>
                            <img className='icon' id='react' src="https://cdn.simpleicons.org/react/61DAFB" alt="ReactJs" />
                        </li>
                        <li>
                            <img  className='icon' id='node' src="https://cdn.simpleicons.org/node.js/339933" alt="Node.Js" />
                        </li>
                        </ul> 
                       <ul>
                        <li>
                            <img  className='icon' id='pg' src="https://cdn.simpleicons.org/postgresql/4169E1" alt="Postgresql" />
                        </li>
                        <li>
                            <img  className='icon' id='git' src="https://cdn.simpleicons.org/git/F05032" alt="Git" />
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/express/fff" alt="Expressjs" id='ex' className="icon" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="spacer"></div>
        </section>
        <section id="Projects">
            <div className="header">
                <h2>Projects</h2>
            </div>
            <div className="spacer"></div>
            <div className="project-list">
                <ul>
                    <li><h3>Monster Hunter World: Visualizer</h3>
                            <h5>Lead API Designer - Web Developer</h5>
                            <p>Designed the API for this full stack app, that takes a different approach from the traditional wiki akin to a stats guide. Collaborated closely with the front-end developer to provide unique and effective UX/UI design.
                                The design prioritized the speed of requests as well as being flexible enough to request anything through simple queries with nesting support.
                            </p>
                            <div className='pj-list'>
                                <ul>
                                    <li><h5>Express</h5></li>
                                    <li><h5>Postgresql</h5></li>
                                    <li><h5>Node</h5></li>
                                    <li><h5>React</h5></li>
                                    <li><h5>Cors</h5></li>

                                </ul>
                            </div>
                            
                    </li>
                    <li> <h3>Create-react-xk</h3>
                            <h5>Developer</h5>
                            <p>Simple boilerplate code for react based projects published on npm. Compiles on webpack and is minimal on dependencies to customize without the bloat of creat-react-app. Simply run 'npx create-react-xk' to get started.    </p>
                            <div className='pj-list'>
                                <ul>
                                    <li><h5>React</h5></li>
                                    <li><h5>React-dom</h5></li>
                                    <li><h5>React-scripts</h5></li>
                                    <li><h5>Webpack</h5></li>
                                </ul>
                            </div>
                    </li>
                    <li> 
                        <h3>Forever 1%</h3>
                        <h5>Back-end Developer - UX/UI Design</h5>
                        <p>Capstone project for FullStack Academy. Designed the user section of the back-end as well as the creative design on the front.
                            Users are able to register securely with JWT authentication and encrypted passwords. Collaborated with other developers to refactor code and decrease bloat in files.
                        </p>
                        <div className='pj-list'>
                            <ul>
                                <li><h5>Express</h5></li>
                                <li><h5>jsonwebtoken</h5></li>
                                <li><h5>bcrypt</h5></li>
                                <li><h5>.env</h5></li>
                                <li><h5>React</h5></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section id='Contact' >
            <div className="spacer"></div>
            <div className="cnt-hd">
                <h2>Contact Me</h2>
            </div>
            <div className="spacer"></div>
            <div className="contact-text">
                <p>Currently open to new work opportunities as both a professional and freelancing. Feel free to reach out with questions or just to say hey. Or maybe you have a project in mind? </p>
            </div>
            <div className="spacer"></div>
            <div className="cnt-btn">
                <div className="spacer"></div>
                <a href='mailto:n911luna@gmail.com' className='button'> Send a message</a>
            </div>
            <div className="spacer"></div>
        </section>
        <div className="spacer"></div>
        <div className="copyright"></div>
            <section className="footer">
                Built by Nelson Luna
            </section>
        </div>
    );
}
 
export default Home;