import React , {Component} from 'react';
import './BikeTable.css';

class BikeTable extends Component{
    render(){
        return(
            <div>
                <div className="rTable">
                    <div className="rTableRow">
                        <div className="rTableHead">Name</div>
                        <div className="rTableHead">Telephone</div>
                        <div className="rTableHead">Telephone</div>
                        <div className="rTableHead">&nbsp;</div>
                    </div>
                    <div className="rTableRow">
                        <div className="rTableCell">John</div>
                        <div className="rTableHead">Telephone</div>
                        <div className="rTableCell"><a href="tel:0123456785">0123 456 785</a></div>
                        <div className="rTableCell"><img src="images/check.gif" alt="checked" /></div>
                    </div>
                    <div className="rTableRow">
                        <div className="rTableCell">Cassie</div>
                         <div className="rTableHead">Telephone</div>
                       <div className="rTableCell"><a href="tel:9876532432">9876 532 432</a></div>
                        <div className="rTableCell"><img src="images/check.gif" alt="checked" /></div>
                    </div>
                </div>
                <br/>
<hr/>
                <div className="table">
                    <div className="row">
                        <span className="cell">Id</span>
                        <span className="cell">Name</span>
                        <span className="cell">Description</span>
                        <span className="cell">some info</span>
                    </div>

                    <div className="row">
                        <span className="cell">1111</span>
                        <span className="cell"><a href="/1">some</a></span>
                        <span className="cell"> some Description</span>
                        <span className="cell">some info</span>
                    </div>
                    <div className="row">
                        <span className="cell">1111</span>
                        <span className="cell"><a href="/2">some</a></span>
                        <span className="cell"> some Description</span>
                        <span className="cell">some info</span>
                    </div>
                    <div className="row">
                        <span className="cell">1111</span>
                        <span className="cell"><a href="/3">some</a></span>
                        <span className="cell"> some Description</span>
                        <span className="cell">some info</span>
                    </div>

                </div>

            </div>
        );
    }
}

export default BikeTable;