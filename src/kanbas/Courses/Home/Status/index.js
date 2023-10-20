import "./index.css";
import "../../../../vendors/font-awesome/css/font-awesome.css"
import {BsFillCheckCircleFill, BsCheckCircle, BsCalendar} from "react-icons/bs";

function Status () {
    return (
        <div className="col-3 ps-5 d-none d-lg-block">
            <div>Course Status</div>
                <div className="row m-0 p-0 mb-3">
                      <div className="col" style={{margin: "0px", padding: "0px"}}>
                          <button className="w-100 btn btn-light btn-outline-secondary btn-sm m-0" type="submit" >
                              <i className="fa fa-ban me-1" aria-hidden="true"></i>Unpublish
                          </button>
                      </div>
                      <div className="col" style={{margin: "0px", padding: "0px", fontSize: ".6em"}}>
                          <button className="w-100 btn btn-light btn-outline-secondary btn-sm m-0 wd-publish-btn" type="submit" disabled>
                              <i className="fa fa-check-circle-o me-1" aria-hidden="true"></i>Published
                          </button>
                      </div>                        
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-sign-in" aria-hidden="true"></i> Import Existing Content</small>
                    </button>
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-creative-commons" aria-hidden="true"></i> Import From Commons</small>
                    </button>
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-home" aria-hidden="true"></i> Choose Home Page</small>
                    </button>
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-bar-chart" aria-hidden="true"></i> View Course Status</small>
                    </button>
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-bullhorn" aria-hidden="true"></i> New Announcements</small>
                    </button>
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-bar-chart" aria-hidden="true"></i> New Analytics</small>
                    </button>
                </div>
                <div>
                    <button className="w-100 btn btn-light btn-outline-secondary mb-1 wd-btn-text-align" type="submit">
                        <small><i className="fa fa-bell-o" aria-hidden="true"></i> View Course Notifications</small>
                    </button>
                </div>

                <div className="d-flex justify-content-between mt-3 mb-1">
                        <small><b><span>Coming UP</span></b></small>
                        <small><BsCalendar/><span className="wd-fg-kanbasred">View Calendar</span></small>
                </div>
                <hr/>
                <div className="mb-3">
                    <BsCalendar/><span className="ms-3 wd-fg-kanbasred">Lecture</span>
                    <small style={{fontSize: ".8em", color: "grey"}}>
                    <p className="mb-0">CS4550.12671.202410</p>
                    <p>Sep 7 at 11:45am</p>
                    </small>                       
                </div>
                <div className="mb-3">
                    <BsCalendar/><span className="ms-3 wd-fg-kanbasred">Lecture</span>
                    <small style={{fontSize: ".8em", color: "grey"}}>
                    <p className="mb-0">CS4550.12671.202410</p>
                    <p>Sep 7 at 11:45am</p>
                    </small>
                </div>
                <div className="mb-3">
                    <BsCalendar/><span className="ms-3 wd-fg-kanbasred">CS5610 06 SP23 </span>
                    <small style={{fontSize: ".8em", color: "grey"}}>
                    <p className="mb-0">CS4550.12671.202410</p>
                    <p>Sep 7 at 11:45am</p>
                    </small>
                </div>

                <div className="mt-4">
                    <small><span className="wd-fg-kanbasred">2 more in the next week...</span></small>
                </div>
        </div> 

    );

}
export default Status;