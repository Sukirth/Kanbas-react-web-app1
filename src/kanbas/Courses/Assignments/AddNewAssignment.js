function AddNewAssignment() {

    return(
        <form>
            <div className="mb-3">
                <label for="assignmentName" className="form-label">Assignment Name</label>
                <input type="text" className="form-control" id="assignmentName" placeholder="Assignment Name" value={assignment.title}/>
            </div>
            <div className="mb-3">            
                <textarea className="form-control" id="AssignmentDescription" rows="4">
                    Clicking on the title of any assignment displays the Edit Assignment screen as shown below. For now this screen displays the same content regardless which assignment you click. In later assignments the content will be different depending which assignment you click. The screen provides a form for faculty to edit the assignment including the Assignment Name, Description, Points, and Due Date. Use Bootstrap classes such as form-control, float-end, btn, btn-success, row, and col, to style the Edit Assignment screen as close to the screen shots shown below.
                </textarea>
            </div>

            <div className="mb-3 row form-group">
                <div className="col">
                    <label className="form-label" for="points">Points</label>
                </div>
                <div className="col-7">
                    <input className="form-control" type="number" value="100" id="points"/>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="subattempts">Assign</label>
                </div>                            
                <div className="col-7 border rounded-2">
                    <div className="mb-3 mt-3">
                        <label for="assignTo" className="form-label mb-0"><b>Assign To</b></label>
                        <input type="text" className="form-control" id="assignTo" value="Everyone"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="due" className="form-label mb-0"><b>Due</b></label>
                        <input type="date" className="form-control" id="due" value="2023-09-18"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col mb-3">
                            <label for="availableFrom" className="form-label mb-0"><b>Available from</b></label>
                            <input type="date" className="form-control" id="availableFrom" value="2023-09-06"/>
                        </div>
                        <div className="col mb-3">
                            <label for="until" className="form-label mb-0"><b>Until</b></label>
                            <input type="date" className="form-control" id="until" value="2023-09-06"/>
                        </div>
                    </div>
                    <div className="row mt-0 border border-top rounded-2">
                        <button type="button" className="btn btn-light">+Add</button>
                    </div>                                    
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mt-1">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-outline-secondary btn-light">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-light btn-outline-secondary wd-select-button">
                        Save
                    </button>                    
            </div>
        </form>
    );

}
export default AddNewAssignment;