import React from 'react';

const SingleCourse = () => {
    return (
        <div>
            <div className="col-md-10" key={1}>
                <div className="row p-2 bg-white border rounded">
                    <div className="col-md-3 mt-1"><img className="img-fluid  rounded product-image h-100" src="https://i.imgur.com/QpjAiHq.jpg" alt="None" /></div>
                    <div className="col-md-6 mt-1">
                        <h5>Course Name</h5>
                        <div className="d-flex flex-row">
                            <div className="ratings mr-2"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div><span>310</span>
                        </div>
                        <div className="mt-1 mb-1 spec-1"><p>Category</p></div>
                        <p className="textJustify mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
                    </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div className="d-flex flex-row align-items-center">
                            <h4 className="mr-1">$13.99</h4>
                        </div>
                        <h6 className="text-success">Paid</h6>
                        <h4 className="mr-1">Owned By</h4>
                        <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-danger btn-sm mt-2" type="button">Cancel Access</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;