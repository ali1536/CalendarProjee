import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import './style.css'

class MyComponent extends Component {
    render() {
        return (
            <div className='text-center '>
                <Form> <br /><br /><br />
                    <div className="input-group mt-5">
                        <span className="input-group-text bg-gray fw-bold" >First Name</span>
                        <input type="text" className="form-control mw-25" />
                        <span className="input-group-text bg-gray fw-bold" >Last Name</span>
                        <input type="text" className="form-control mw-25" />
                    </div>
                    <div className='calender'>
                        <div className='image'>
                            <h2> 21 , Tuesday</h2>
                            <h3> June &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2022</h3>
                        </div>
                        <div className='date'>
                            <div className='day'>Su</div>
                            <div className='day'>Mo</div>
                            <div className='day'>Tu</div>
                            <div className='day'>We</div>
                            <div className='day'>Th</div>
                            <div className='day'>Fr</div>
                            <div className='day'>Sa</div>
                            <div className='number'></div>
                            <div className='number'></div>
                            <div className='number'></div>
                            <div className='number'>1</div>
                            <div className='number'>2</div>
                            <div className='number'>3</div>
                            <div className='number'>4</div>
                            <div className='number'>5</div>
                            <div className='number'>6</div>
                            <div className='number'>7</div>
                            <div className='number'>8</div>
                            <div className='number'>9</div>
                            <div className='number'>10</div>
                            <div className='number'>11</div>
                            <div className='number'>12</div>
                            <div className='number'>13</div>
                            <div className='number'>14</div>
                            <div className='number'>15</div>
                            <div className='number'>16</div>
                            <div className='number'>17</div>
                            <div className='number'>18</div>
                            <div className='number'>19</div>
                            <div className='number'>20</div>
                            <div className='number active'>21</div>
                            <div className='number'>22</div>
                            <div className='number'>23</div>
                            <div className='number'>24</div>
                            <div className='number'>25</div>
                            <div className='number'>26</div>
                            <div className='number'>27</div>
                            <div className='number'>28</div>
                            <div className='number'>29</div>
                            <div className='number'>30</div>
                            <div className='number'>31</div>
                        </div>
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text bg-gray fw-bold" >Height</span>
                        <input type="text" className="form-control mw-25" />
                        <span className="input-group-text bg-gray fw-bold" >Weight</span>
                        <input type="text" className="form-control mw-25" />
                    </div>
                    <div className='px-5 fw-bold'> History Training : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios" />Yes
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios" />No
                        </div>
                    </div>
                    <div >
                        <select className="form-select" aria-label="Default select example">
                            <option className='bg-dark fw-bold' >Number Days of Training sessions per week</option>
                            <option className='bg-dark' >1</option>
                            <option className='bg-dark' >2</option>
                            <option className='bg-dark' >3</option>
                            <option className='bg-dark' >4</option>
                            <option className='bg-dark' >5</option>
                            <option className='bg-dark' >6</option>
                            <option className='bg-dark' >7</option>
                        </select>
                    </div>
                    <div className='px-5 fw-bold'> Injury : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios1" />Yes
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios1" />No
                        </div>
                    </div>
                    <div className="input-group my-3 fw-bold">
                        <span className="input-group-text bg-gray fw-bold" >Time Training</span>
                        <input type="text" className="form-control mw-25" />
                    </div>
                    <div className='px-5 fw-bold'> Aerobic Training : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios2" />Yes
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios2" />No
                        </div>
                    </div>
                    <div className='px-5 fw-bold'> Limite Move  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios3" />Yes
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios3" />No
                        </div>
                    </div>
                    <div className='px-5 fw-bold'> Muscle Division : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios4" />Yes
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadios4" />No
                        </div>
                    </div>
                    <div className="input-group my-3 fw-bold">
                        <span className="input-group-text bg-gray fw-bold" >Sports Supplement</span>
                        <input type="text" className="form-control mw-25" />
                    </div>
                    <div className='fw-bold'> Please Send Your Image For Us <br />
                        <input type="image" alt='There is no photo' />
                    </div>
                    <button type="button" class="mx-5 btn btn-secondary btn-lg fw-bold w-25">Next</button>
                    <button type="button" class="mx-5 btn btn-secondary btn-lg fw-bold w-25">Reset</button>
                </Form>
            </div>
        )
    }
}

export default MyComponent;