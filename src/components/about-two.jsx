import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



// import about1 from '../assets/images/about/1.jpg'
// import about2 from '../assets/images/about/2.jpg'

export default function AboutTwo() {
  return (
    <>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <Tabs
                        defaultActiveKey="mission-statement"
                        id="justify-tab-example"
                        className="mb-3 custom-tabs"
                        variant='underline'
                        transition
                        fill
                        justify
                    >
                        <Tab eventKey="mission-statement" title="MISSION STATEMENT">
                            Women and girls are more likely to die, relative to men and boys, in many low- and middle-
                            income countries than their counterparts in rich countries. Women earn less and are less
                            economically productive than men almost everywhere across the world. And women have
                            less opportunity to shape their lives and make decisions than do men. Mentally, emotionally,
                            physically and most importantly spiritually.
                        </Tab>
                        <Tab eventKey="vision" title="VISION">
                            We envision a world without poverty in which women are empowered, in all aspects mostly
                            importantly mentally. And for women to live in safe, sustainable environments in the
                            furtherance of the next generation.
                        </Tab>
                        <Tab eventKey="mission" title="MISSION">
                            <div className="justify">
                                <p>
                                    Women's empowerment has five components: women's sense of self-worth; their right to
                                    have and to determine choices; their right to have access to opportunities and resources;
                                    their right to have power to control their own lives, both within and outside the home; and
                                    their ability to influence the direction of social and economic order, nationally and
                                    internationally.
                                </p>
                                <p>
                                    In this context, education, training, awareness raising, building self-confidence, expansion
                                    of choices, increased access to and control over resources, and actions to transform the
                                    structures and institutions that reinforce and perpetuate gender discrimination and
                                    inequality are important tools for empowering women and girls to claim their rights.
                                </p>
                            </div>
                        </Tab>
                        <Tab eventKey="audience" title="TARGET AUDIENCE">
                            <div>
                                <p>
                                    Tu Es Belle will work on Social Justice: Women's empowerment is also essential for
                                    achieving social justice. Women and girls are often subject to discrimination, violence, and
                                    other forms of oppression simply because of their gender. Empowering women helps to
                                    create a more just and equitable society for everyone.
                                </p>
                                <ul>
                                    <li>
                                        <h5>For rape victims</h5>
                                    </li>
                                    <li>
                                        <h5>Violence victims</h5>
                                    </li>
                                    <li>
                                        <h5>School drops</h5>
                                    </li>
                                    <li>
                                        <h5>Oppressed women</h5>
                                    </li>
                                    <li>
                                        <h5>Single mums/Teen mums</h5>
                                    </li>
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </>
  )
}
