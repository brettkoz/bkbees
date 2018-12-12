import React from "react";
import classnames from 'classnames';

export default function OrderTable(props) {
  console.log('props from ordertable: ' + JSON.stringify(props));
  let activeOrderId;
  if (props.activeOrder == null){
    activeOrderId = '';
  } else {
activeOrderId = props.activeOrder._id;
  } 

  const tableRows = props.orders.map(singleOrder => (
    <tr className={classnames( {
      activeOrder: activeOrderId === singleOrder._id
    })} key={singleOrder._id} onClick={()=>props.setActive(singleOrder)}>
            <th scope="row">{singleOrder.date}</th>
            <td>{singleOrder.name}</td>
            <td>{singleOrder.phone}</td>
            <td>{singleOrder.email}</td>
            <td>{singleOrder.quantity}</td>
            <td>{singleOrder.notes}</td>
          </tr>
  ));
  return (
    <div className="table-responsive">
      <table className="table orderTable">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Order Date</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Quantity</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}
