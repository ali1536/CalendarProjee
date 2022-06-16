import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

class MyComponent extends Component {
    render() {
        return (
            <div className='text-center '>
                <Form>
                    <div className='nam_famil'>
                        <div className='d-inline'> Name :
                            <input type='text' placeholder='Enter name ' required />
                        </div>
                        <div className='d-inline'> Family :
                            <input type='text' placeholder='Enter family' required />
                        </div>
                    </div>
                    <div className='calender'>
                        <div className='image'>
                            <h2> 1 , Wednesday</h2>
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
                            <div className='number'>8</div>
                            <div className='number'>9</div>
                            <div className='number'>10</div>
                            <div className='number'>11</div>
                            <div className='number active'>12</div>
                            <div className='number'>13</div>
                            <div className='number'>14</div>
                            <div className='number'>15</div>
                            <div className='number'>16</div>
                            <div className='number'>17</div>
                            <div className='number'>18</div>
                            <div className='number'>19</div>
                            <div className='number'>20</div>
                            <div className='number'>21</div>
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
                    <div className='hei_wei'>
                        <div className='d-inline'> Height :
                            <input required />
                        </div>
                        <div className='d-inline'> Weight :
                            <input required />
                        </div>
                    </div>
                    <div className='History_Training'>
                        <div> History Training :
                            <input name='test' type='radio' required /> Yes
                            <input name='test' type='radio' required /> No
                        </div>
                    </div>
                    <div> Number Days of Training sessions per week :
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <div className='Injury'> Injury :
                        <input name='test1' type='radio' required /> Yes
                        <input name='test1' type='radio' required /> No
                    </div>
                    <div className='Time_Training'>Time Training :
                        <input placeholder='Hours of training per week' required />
                    </div>
                    <div className='Aerobic'> Aerobic Training :
                        <input name='test2' type='radio' required /> Yes
                        <input name='test2' type='radio' required /> No
                    </div>
                    <div className='Limite'> Limite Move :
                        <input name='test3' type='radio' required /> Yes
                        <input name='test3' type='radio' required /> No
                    </div>
                    <div className='Muscle'>  Muscle division :
                        <input name='test4' type='radio' required /> Yes
                        <input name='test4' type='radio' required /> No
                    </div>
                    <div className='Supplement'> Sports Supplement :
                        <input placeholder='Enter your Sports Supplement name' required />
                    </div>
                    <div> Please Send Your Image For Us <br />
                        <input type="image" alt='There is no photo' />
                    </div>
                    <button type='submit'>Next</button>
                    <button type='reset'>Reset</button>
                </Form>
            </div>
        )
    }
}

export default MyComponent;

